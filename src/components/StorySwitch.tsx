import { useCallback, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const StorySwitch = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentMode = useMemo(() => searchParams.get("mode") as "reality" | "fantasy" | null, [searchParams]);

  const [isSwitchingMode, setIsSwitchingMode] = useState<boolean>(false);

  const switchMode = useCallback(() => {
    setIsSwitchingMode(true);
    navigate(`/story?mode=${currentMode === "fantasy" ? "reality" : "fantasy"}`);
    setTimeout(() => {
      setIsSwitchingMode(false);
    }, 3000);
  }, [currentMode]);

  return (
    <button
      className={`fixed text-white right-6 top-4 almendra text-xl ${
        currentMode === "fantasy" ? "hover:text-[#D81616]" : "hover:text-[#5DD5EC]"
      } transition-colors duration-300 disabled:text-gray-400`}
      onClick={switchMode}
      disabled={isSwitchingMode}
    >
      {isSwitchingMode
        ? `Sending you to ${currentMode === "reality" ? "Reality" : "Fantasy"}...`
        : `To ${currentMode === "fantasy" ? "Reality" : "Fantasy"}`}
    </button>
  );
};

export default StorySwitch;
