import { useState, createContext } from "react";
import data from "../asset/data.json";

export const SkillsContext = createContext();

export const SkillsContextProvider = ({ children }) => {
  //Set default job list
  const JOBS = data.map((job) => ({
    ...job,
    tags: [job.role, job.level, ...job.languages, ...job.tools], //if only have languages + tools are in array, you can use array.flat, which ignores if item is not in array.
  }));
  const [allJobs, setAllJobs] = useState(JOBS); //joblist state
  const [skillsList, setSkillsList] = useState([]); //filterbox state

  //add skill to filterbox when item is clicked from right pane
  const AddFilter = (newSkill) => {
    if (!skillsList.includes(newSkill)) {
      updateJobs([...skillsList, newSkill]); //joblist
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

  //update after adding + removing/clearing
  const updateJobs = (updatedSkills) => {
    const filteredJobs = JOBS.filter((job) =>
      updatedSkills.every((skill) => job.tags.includes(skill))
    );
    setAllJobs(filteredJobs);
  };

  return (
    <SkillsContext.Provider
      value={{
        skillsList,
        allJobs,
        AddFilter,
        removeFilter,
        clearFilter,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
