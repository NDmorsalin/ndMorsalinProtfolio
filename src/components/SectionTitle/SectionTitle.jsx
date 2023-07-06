const SectionTitle = ({ title, subtitle, Icon }) => {
  return (
    <div className="text-center">
      <div className=" text-3xl font-bold text-white flex items-center justify-center gap-4">
        <Icon /> {title}
      </div>
      <p className="text-lg bg-gradient-to-r block from-sky-300 to-cyan-500 bg-clip-text   text-transparent font-medium">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
