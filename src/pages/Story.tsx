import useBackground from "../hooks/useBackground";
import StorySwitch from "../components/StorySwitch";
import Reality from "../components/Reality";
// import StartOverlay from "../components/StartOverlay";

const Story = () => {
  useBackground("#000000");

  return (
    <>
      <StorySwitch />
      {/* <StartOverlay /> */}

      <div className="text-white">
        <Reality />
      </div>
    </>
  );
};

export default Story;
