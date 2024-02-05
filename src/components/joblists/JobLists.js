import JobItem from "../jobItem/jobItem";
import "./JobLists.scss";
import { useContext } from "react";
import { SkillsContext } from "../../context/SkillsContext";

const JobLists = () => {
  const { allJobs } = useContext(SkillsContext);

  return (
    <ul className="joblist-container">
      {allJobs.map((item, index) => (
        <li>
          <JobItem key={index} data={item} />
        </li>
      ))}
    </ul>
  );
};

export default JobLists;
