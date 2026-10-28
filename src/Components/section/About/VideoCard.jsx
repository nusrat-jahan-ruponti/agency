import { FaPlay } from "react-icons/fa";
import video from "../../../assets/Video (1).png";
import Conainer from "../../ui/Container";

export default function VideoCard() {
  return (
    <Conainer>
      <div className="relative w-full overflow-hidden rounded-xl mt-[112px] mb-[96px]">
         <img src={video} alt=""/>
        <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1b2447]">
          <FaPlay className="ml-1 text-lg" />
        </div>
      </div>
    </Conainer>
  );
}
