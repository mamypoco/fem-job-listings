// import { useState } from "react";
import "./FilterBox.scss";
import SkillButtonX from "../skillButtonX/SkillButtonX";
import { useContext } from "react";
import { SkillsContext } from "../../context/SkillsContext";

const FilterBox = () => {
  const { skillsList, removeFilter, clearFilter } = useContext(SkillsContext);

  return (
    //  hidden or show depends on the opacity. This way, the filterbox is always there so joblist will stays.
    <div
      className="filter-box"
      style={
        skillsList && skillsList.length > 0 ? { opacity: 1 } : { opacity: 0 }
      }
    >
      <div className="skills-box">
        {skillsList.map((item, index) => (
          <SkillButtonX
            key={index}
            children={item}
            onClick={() => removeFilter(item)}
          />
        ))}
      </div>

      <div className="clear-box">
        <div className="clear-option" onClick={clearFilter}>
          clear
        </div>
      </div>
    </div>
    //  )
  );
};

export default FilterBox;
