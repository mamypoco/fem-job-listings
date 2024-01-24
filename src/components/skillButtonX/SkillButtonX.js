import "./SkillButtonX.scss";

const SkillButtonX = ({ children, onClick }) => {
  return (
    <div className="skill-x-wrapper">
      <div className="skill-item">{children}</div>
      <div className="cross-mark" onClick={onClick}>
        x
      </div>
    </div>
  );
};

export default SkillButtonX;
