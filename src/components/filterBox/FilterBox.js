// import { useState } from "react";
import "./FilterBox.scss";
import SkillButtonX from "../skillButtonX/SkillButtonX";

const FilterBox = () => {
  //   const [filteredItem, setFilteredItem] = useState([]);

  const filteredItem = [
    "frontend",
    "CSS",
    "Sass",
    "Junior",
    "Javascript",
    "Fullstack",
    "Midweight",
    "Ruby",
    "Sass",
    "RoR",
    "HTML",
    "Vue",
    "Python",
    "Django",
    "React",
  ];

  return (
    <div className="filter-box">
      <div className="skills-box">
        {filteredItem.map((item) => (
          <SkillButtonX children={item} />
        ))}
      </div>
      <div className="clear-box">
        <div className="clear-option">clear</div>
      </div>
    </div>
  );
};

export default FilterBox;
