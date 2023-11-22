import "./SkillButton.scss";

const SkillButton = ({ children, onClick }) => {
  return (
    <div className="skill-wrapper" onClick={onClick}>
      {children}
    </div>
  );
};

export default SkillButton;
