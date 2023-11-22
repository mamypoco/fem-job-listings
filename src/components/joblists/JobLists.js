// import SearchBox from "../searchBox/SearchBox";
import JobItem from "../jobItem/jobItem";
import data from "../../asset/data.json";
import "./JobLists.scss";

const JobLists = () => {
  return (
    <div className="joblist-container">
      {data.map((item, index) => (
        <JobItem key={index} data={item} />
      ))}
    </div>
  );
};

export default JobLists;
