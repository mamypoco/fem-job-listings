import { useState, createContext } from "react";
import data from "../asset/data.json";

export const SkillsContext = createContext();

export const SkillsContextProvider = ({ children }) => {
  //Set default job list
  const JOBS = data.map((job) => ({
    ...job,
    tags: [job.role, job.level, ...job.languages, ...job.tools], //the last 2 are in array. if only have languages + tools are in array, you can use array.flat, which ignores if item is not in array.
  }));
  console.log(JOBS);
  const [allJobs, setAllJobs] = useState(JOBS); //joblist state
  const [skillsList, setSkillsList] = useState([]); //filterbox state

  //important: update when adding + removing/clearing
  const updateJobs = (updatedSkills) => {
    const filteredJobs = JOBS.filter((job) =>
      updatedSkills.every((skill) => job.tags.includes(skill))
    );
    setAllJobs(filteredJobs);
  };

  //add skill to filterbox when item is clicked from right pane
  const addFilter = (newSkill) => {
    if (!skillsList.includes(newSkill)) {
      updateJobs([...skillsList, newSkill]); //joblist's updatedSkills
      setSkillsList([...skillsList, newSkill]); //filterbox
    }
  };

  //remove skill when click X in filterbox
  const removeFilter = (skillToRemove) => {
    const updatedSkills = skillsList.filter((skill) => skill !== skillToRemove);
    setSkillsList(updatedSkills);
    updateJobs(updatedSkills);
  };

  //clear when click clear
  const clearFilter = () => {
    setSkillsList([]);
    updateJobs([]);
  };

  return (
    <SkillsContext.Provider
      value={{
        skillsList,
        allJobs,
        addFilter,
        removeFilter,
        clearFilter,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
