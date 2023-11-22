import "./SkillButtonX.scss";

const SkillButtonX = ({ children }) => {
  return (
    <div className="skill-x-wrapper">
      <div className="skill-item">{children}</div>
      <div className="cross-mark">x</div>
    </div>
  );
};

export default SkillButtonX;
