import JobItem from "../jobItem/jobItem";
import "./JobLists.scss";
import { useContext } from "react";
import { SkillsContext } from "../../context/SkillsContext";

const JobLists = () => {
  const { allJobs } = useContext(SkillsContext);

  return (
    <div className="joblist-container">
      {allJobs.map((item, index) => (
        <JobItem key={index} data={item} />
      ))}
    </div>
  );
};

export default JobLists;
