import data from "../../asset/data.json";
import "./jobitem.scss";

const JobItem = () => {
  //   const Job = {
  //     id: data.id,
  //     company: data.company,
  //     logo: data.logo,
  //     new: data.new,
  //     featured: data.featured,
  //     position: data.position,
  //     role: data.role,
  //     level: data.level,
  //     postedAt: data.postedAt,
  //     contract: data.contract,
  //     location: data.location,
  //     languages: data.language,
  //     tools: data.tools,
  //   };

  //   const jobid = data.id - 1;

  return (
    <div className="wrapper">
      <div className="left-content">
        <img className="logo" src="../../images/photosnap.svg" alt="" />
        <div className="company">{data[0].company}</div>
        <div className="new">New!</div>
        <div className="featured">Featured</div>
        <div className="position">Senior Frontend Developer</div>
        <div className="when">1d ago</div>
        <div lang="contract">Full Time</div>
        <div className="location">USA only</div>
      </div>
      <div className="right-content">
        <div className="role">Frontend</div>
        <div className="level">Senior</div>
        <div className="languages">HTML CSS JavaScript</div>
        <div className="tools">React</div>
      </div>
    </div>
  );
};

export default JobItem;
