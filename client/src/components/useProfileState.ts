import { useState } from "react";

const useProfileState = () => {
  const [profileName, setprofileName] = useState("nothingness");
  return { profileName, setprofileName };
};
export { useProfileState };


//custom hook