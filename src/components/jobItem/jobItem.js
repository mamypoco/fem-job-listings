import "./jobitem.scss";
import GreenButton from "../greenButton/GreenButton";
import BlackButton from "../blackButton/BlackButton";
import SkillButton from "../skillButton/SkillButton";
import { useState } from "react";

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
    role,
    level,
    languages,
    tools,
  } = data;

  //new is a reserved keyword in JavaScript. You cannot use reserved keywords as property names directly.
  const logoImage = `/images/${logo}`;
  //   const isNew = isnew;
  //   const isFeatured = featured;

  const [filteredItems, setFilteredItems] = useState([]);

  const AddFilteredItems = (skill) => {
    setFilteredItems([...filteredItems, skill]);

    console.log(filteredItems);
  };

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
        <div className="role">
          <SkillButton children={role} />
        </div>
        <div className="level">
          <SkillButton children={level} />
        </div>
        <div className="array-split">
          {languages.map((item) => {
            return <SkillButton children={item} onClick={AddFilteredItems} />;
          })}
        </div>
        <div className="array-split">
          {tools.map((item) => {
            return <SkillButton children={item} onClick={AddFilteredItems} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
