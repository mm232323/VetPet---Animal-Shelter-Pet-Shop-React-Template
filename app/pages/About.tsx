import React from "react";
import Missions from "../../StoredJsons/Missions.json";
export default function About() {
  return (
    <main>
      <h1 className="text-[58px] font-[700] text-center max-[1000px]:text-[50px] max-[1000px]:px-[20px] max-[650px]:text-[44px]">
        Our Story:{" "}
        <span className="text-[55px] font-normal max-[1000px]:text-[47px] max-[650px]:text-[40px]">
          <i>A Journey of Compassion</i>
        </span>
      </h1>
      <h3 className="text-center mt-[40px] font-bold text-[36px] max-[1000px]:text-[30px] max-[1000px]:px-[20px] max-[650px]:leading-[65px]">
        Founded in 2010 |{" "}
        <span className="w-fit h-fit p-[8px] rounded-[5px] bg-[#ffae0059]">
          1,200+
        </span>{" "}
        Pets Rescued |{" "}
        <span className="w-fit h-fit p-[8px] rounded-[5px] bg-[#ffae0059]">
          100%
        </span>{" "}
        Volunteer-Powered
      </h3>
      <div className="relative top-[70px] w-full h-[620px] overflow-hidden mb-[70px]">
        {/* <div className="w-full h-full backdrop-blur-lg bg-black/25 absolute -z-[39]" /> */}
        <img src="/About/bg.jpg" className="absolute w-full h-full object-cover z-[-40]" />
        <h1 className="text-white font-[600] mb-[30px] pl-[60px] relative top-[80px] text-[32px] max-[360px]:text-[30px] max-[360px]:text-center max-[360px]:pl-0">
          How It All Began
        </h1>
        <p className="text-white text-justify font-[300] relative top-[80px] text-[23px] w-[800px] tracking-wider opacity-85 pl-[60px] max-[885px]:w-full max-[885px]:pl-[60px] max-[490px]:text-[20px] max-[490px]:text-center max-[490px]:px-[15px] pr-[15px]">
          Paws & Tails Rescue started with one woman's determination to make a
          difference. After witnessing abandoned animals struggling on the
          streets of California, our founder Mohammed Qurany converted her
          garage into a temporary shelter. What began as a foster home for 3
          dogs soon grew into a community movement.
        </p>
      </div>
      <center>
        <div className="w-18/20 h-[2px] rounded-[2px] bg-black/60 relative top-[20px]" />
      </center>
      <div className="relative top-[40px] w-full h-[620px] overflow-hidden mb-[70px]" dir='rtl'>
        {/* <div className="w-full h-full backdrop-blur-lg bg-white/25 absolute -z-[39] hidden " /> */}
        <img src="/About/bg2.jpg" alt="A collage of happy, adopted pets and their families" className="absolute w-full h-full object-cover z-[-40]" />
        <h1 className="text-[#1f1f1f] font-[600] mb-[30px] relative top-[80px] text-[32px] w-[810px] max-[885px]:w-full max-[885px]:left-[60px] max-[490px]:text-center max-[490px]:left-0" dir='ltr'>
          Why we are different?
        </h1>
        <div className="text-[#1f1f1f] text-justify font-[300] relative top-[80px] text-[23px] w-[800px] tracking-wider opacity-85 pr-[70px]  max-[885px]:w-full max-[885px]:left-[60px] max-[885px]:pr-[100px] max-[490px]:text-[20px] max-[490px]:text-center] max-[490px]:left-0 max-[490px]:px-[10px]">
          <p className="max-[490px]:text-center relative left-1/2 -translate-x-[50%]"><strong className="font-[600]">No-Kill Philosophy:</strong> "We never euthanize for space - every pet stays with us until they find their perfect match."</p>
          <p className="max-[490px]:text-center relative left-1/2 -translate-x-[50%]"><strong className="font-[600]">Healing First:</strong> "From medical care to behavioral rehab, we prepare pets for lifelong success in their new homes."</p>
          <p className="max-[490px]:text-center relative left-1/2 -translate-x-[50%]"><strong className="font-[600]">Community Roots:</strong> "90% of our funding comes from local donors and small businesses who share our vision."</p>
        </div>
      </div>
      <h1 className="text-[58px] font-[800] text-center mb-[20px]">
        Our Mission
      </h1>
        <div className="w-full p-[20px] h-fit grid grid-cols-2 gap-x-[20px] gap-y-[20px] relative left-1/2 translate-x-[-50%] max-[950px]:grid-cols-1">
          {Missions.map((mission, idx) => (
            <div
              key={Math.random() * idx}
              className="w-full h-[426px] rounded-[34px] bg-white border-1 border-[#311A04] shadow-[0_15px_21.5px_0_#0000001a] flex justify-center items-center flex-col gap-[30px] z-[-21] relative overflow-hidden"
            >
              <img src="/About/petstexture.svg" alt="A subtle texture of pet paws and bones" width={700} height={500} className="w-full h-full absolute z-[-20] opacity-15 object-cover" />
              <img
                src={mission.iconUrl}
                alt={`${mission.text} icon`}
                width={126}
                height={126}
                className=""
              />
              <h2 className="text-[33px] font-semibold text-center w-[400px] max-[480px]:text-[25px] max-[480px]:w-18/20" style={{color:mission.color}}>{mission.text}</h2>
            </div>
          ))}
        </div>
    </main>
  );
}
