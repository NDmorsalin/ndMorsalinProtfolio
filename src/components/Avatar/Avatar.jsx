import TiltContainer from "../TiltContainer/TiltContainer";

const Avatar = () => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <TiltContainer>
          <div className="w-48 h-48 rounded-full mx-auto ">
            <img
              src="https://avatars.githubusercontent.com/u/57571559?v=4"
              alt="Nd Morsalin"
              className="w-full h-full rounded-full"
            />
          </div>
        </TiltContainer>
      </div>
    </>
  );
};

export default Avatar;
