const SkillCard = ({ props }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img
        className="w-20 mx-auto"
        src={props.logo}
        alt={props.name + " logo"}
      />
      <p className="my-4">{props.name}</p>
    </div>
  );
};

export default SkillCard;
