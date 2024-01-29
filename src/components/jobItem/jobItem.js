import "./jobitem.scss";
import GreenButton from "../greenButton/GreenButton";
import BlackButton from "../blackButton/BlackButton";
import SkillButton from "../skillButton/SkillButton";
import { useContext } from "react";
import { SkillsContext } from "../../context/SkillsContext";

const JobItem = ({ data }) => {
  const {
    logo,
    company,
    isnew,
    featured,
    position,
    postedAt,
    contract,
    location,
    tags,
  } = data;
  //new is a reserved keyword in JavaScript. You cannot use reserved keywords as property names directly.
  const logoImage = `/images/${logo}`;

  const { addFilter } = useContext(SkillsContext);

  return (
    <div className="card-wrapper">
      <div className="left-column">
        <div className="company-logo">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + logoImage}
            alt={company}
          />
        </div>
        <div className="left-column-text">
          <div className="row-one">
            <div className="company">{company}</div>
            <div className="new">{isnew ? <GreenButton /> : ""}</div>
            <div className="featured">{featured ? <BlackButton /> : ""}</div>
          </div>
          <div className="row-two">
            <div className="position">{position}</div>
          </div>
          <div className="row-three">
            {postedAt}&nbsp; • &nbsp;{contract}&nbsp; • &nbsp; {location}
          </div>
        </div>
      </div>
      <div className="right-column">
        {tags.map((tag, index) => (
          <SkillButton
            key={index}
            children={tag}
            onClick={() => addFilter(tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobItem;
