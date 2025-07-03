import { useState, useRef, useEffect } from "react";
import heroData from "../../StoredJsons/Starters.json";
import HelpsData from "../../StoredJsons/Helps.json";
import PetsShow from "../../StoredJsons/PetsShow1.json";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
export default function Welcome() {
  const [selectedStart, setSelectedStart] = useState(0);
  const helpersSectionRef = useRef(null);
  const expSectionRef = useRef(null);
  const helpInView = useInView(helpersSectionRef, { once: true });
  const showInView = useInView(expSectionRef, { once: true });
  const helpAnimation = useAnimation();
  const showAnimation = useAnimation();
  useEffect(() => {
    if (helpInView) {
      helpAnimation.start("show");
    }
    if (showInView) {
      showAnimation.start("show");
    }
  }, [helpInView, showInView]);
  return (
    <main className="mb-[160px]">
      {heroData.map((choosedStart, idx) => {
        return (
          <AnimatePresence mode="wait">
            {idx == selectedStart && (
              <div className="w-full h-screen mb-[150px]">
                <motion.div
                  key={idx * Math.random()}
                  className="w-full h-screen absolute left-0 overflow-hidden top-0"
                  variants={{
                    visible: { opacity: 1, filter: "blur(0)" },
                    hidden: { opacity: 0, filter: "blur(8px)" },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <img
                    src={choosedStart.imgUrl}
                    alt={choosedStart.name}
                    width={2000}
                    height={2000}
                    className="w-full h-auto min-h-full absolute z-[-1] min-w-[1440px]"
                  />
                  <div className="relative top-[200px] w-[641px] pl-[50px] max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:pl-0 max-[640px]:top-[170px] max-[700px]:w-full">
                    <h1 className="text-[56px] font-bold text-[#2A1458] mb-[10px] max-[1135px]:text-[48px] max-[640px]:text-center max-[590px]:text-[40px] max-[450px]:px-[25px] max-[450px]:text-[36px]">
                      {choosedStart.name}
                    </h1>
                    <p className="text-[32px] font-light text-[#2A1458] opacity-80 max-[1135px]:text-[27px] max-[1100px]:w-[500px] max-[640px]:text-center max-[700px]:w-full max-[590px]:text-[23px] max-[590px]:px-[25px]">
                      {choosedStart.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px] relative pl-[50px] top-[220px] max-[640px]:justify-center max-[640px]:w-full max-[640px]:top-[190px] max-[640px]:pl-0">
                    <div
                      className={`w-[16px] h-[16px] rounded-full border-1 border-white ${
                        selectedStart == 0
                          ? "bg-[#d428af]"
                          : "hover:bg-[#d428af38]"
                      } cursor-pointer hover:scale-105 duration-300`}
                      onClick={() => setSelectedStart(0)}
                    />
                    <div
                      className={`w-[16px] h-[16px] rounded-full border-1 border-white ${
                        selectedStart == 1
                          ? "bg-[#d428af]"
                          : "hover:bg-[#d428af38]"
                      } cursor-pointer hover:scale-105 duration-300`}
                      onClick={() => setSelectedStart(1)}
                    />
                    <div
                      className={`w-[16px] h-[16px] rounded-full border-1 border-white ${
                        selectedStart == 2
                          ? "bg-[#d428af]"
                          : "hover:bg-[#d428af38]"
                      } cursor-pointer hover:scale-105 duration-300`}
                      onClick={() => setSelectedStart(2)}
                    />
                  </div>
                  <img
                    src="/Startup/startBut.svg"
                    alt="A button to start the journey with a pet"
                    width={517}
                    height={517}
                    className="absolute bottom-[-350px] right-[-10px] cursor-pointer hover:scale-110 duration-[400ms] ease-[cubic-bezier(0.86,_0,_0.14,_1)] max-[980px]:w-[300px] max-[980px]:h-[300px] max-[980px]:bottom-[-130px] max-[980px]:right-[-15px]"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        );
      })}
      <h1 className="relative mb-[-40px] text-center text-[65px] font-extrabold top-[-70px]">
        HOW WE HELP
      </h1>
      <motion.div
        ref={helpersSectionRef}
        variants={{
          show: { opacity: 1, y: 0 },
          hide: { opacity: 0, y: 40 },
        }}
        initial="hide"
        animate={helpAnimation}
        transition={{ delay: 0.4 }}
        className="w-full flex justify-center items-center gap-[22px] mb-[30px] max-[940px]:flex-col"
      >
        {HelpsData.map((helpSection, idx) => (
          <div
            className={`w-5/18 h-[554px] relative z-[-30] rounded-[15px] border-1 border-[#78461B] flex flex-col items-center justify-center gap-[70px] max-[940px]:w-18/20 max-[410px]:w-full max-[410px]:rounded-none`}
            style={{ backgroundColor: helpSection.bgColor }}
            key={idx * Math.random()}
          >
            <div className="w-full h-[551px] bottom-0  backdrop-blur-xl absolute z-[-19] rounded-[15px]" />
            <div className="absolute z-[-20] overflow-hidden w-full h-[200px] rounded-[15px] bottom-0 max-[410px]:rounded-none">
              <img
                src={helpSection.bgImg}
                alt={`${helpSection.title} section background`}
                width={445.7}
                height={582}
                className="opacity-60 max-[940px]:w-full max-[940px]:h-auto max-[940px]:top-[-80px] max-[940px]:opacity-40 relative"
              />
            </div>
            <img
              src={helpSection.iconImg}
              alt={`${helpSection.title} section icon`}
              width={111}
              height={111}
            />
            <div>
              <h1 className="text-center text-[50px] font-bold mb-[20px]">
                {helpSection.title}
              </h1>
              <p className="text-center text-[30px] font-normal opacity-85 max-[1190px]:text-[24px] max-[1190px]:px-[20px] max-[1250px]:text-black/70">
                {helpSection.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex items-center justify-center relative top-[15px]">
        <motion.div
          className="flex items-center justify-center gap-[27px] max-[1160px]:grid max-[1160px]:grid-cols-2 max-[1160px]:w-18/20 max-[620px]:grid-cols-1"
          variants={{
            hide: { opacity: 0, filter: "blur(8px)", y: 40 },
            show: { opacity: 1, filter: "blur(0)", y: 0 },
          }}
          initial="hide"
          animate={showAnimation}
          ref={expSectionRef}
        >
          {PetsShow.map((pet, idx) => (
            <motion.div
              key={Math.random()}
              transition={{ delay: idx * 0.1 }}
              className="w-7/32 h-[470px] relative rounded-[11px] border-4 border-[#2a1458cc] box-border flex flex-col items-center justify-between shadow-[5px_20px_28px_0_#00000047] overflow-hidden max-[1160px]:w-full"
            >
              <div className="w-full h-full bg-gradient-to-b from-transparent to-black/80 absolute z-[-19]" />
              <img
                src={pet.bgImg}
                alt={`A lovely ${pet.nickname} named ${pet.name}`}
                width={322}
                height={470}
                className="w-auto h-full absolute z-[-20] rounded-[7px] max-[1160px]:w-full max-[1160px]:h-auto max-[772px]:h-full max-[772px]:w-auto max-[772px]:min-w-[320px] max-[620px]:w-full max-[620px]:h-auto"
              />
              <i>
                <p className="text-orange-600 font-light relative top-[20px] text-[19px]">
                  {pet.nickname}
                </p>
              </i>
              <div className="flex flex-col gap-[15px] items-center justify-center pb-[20px]">
                <h1 className="font-bold text-white text-[55px]">{pet.name}</h1>
                <p className="text-white opacity-70 text-[20px] px-[30px] text-center font-light">
                  {pet.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-18/20 h-[600px] rounded-[30px] border-2 border-[#2A1458] relative top-[80px] left-1/2 translate-x-[-50%] flex items-center justify-between max-[1100px]:flex-col max-[1100px]:justify-around overflow-hidden max-[480px]:w-full max-[480px]:rounded-none max-[480px]:border-transparent max-[480px]:border-x-black/80">
        <img
          src="/Startup/endImg.png"
          alt="A happy dog with its owner"
          width={1224}
          height={600}
          className="absolute z-[-20] w-full h-full rounded-[27px] min-w-[1000px] max-[480px]:rounded-none"
        />
        <div className="w-full h-full bg-gradient-to-l from-transparent to-black rounded-l-[27px] absolute z-[-19] max-[480px]:rounded-none" />
        <div className="w-full h-full bg-gradient-to-r from-transparent to-black/60 rounded-r-[27px] absolute z-[-19] max-[480px]:rounded-none" />
        <i>
          <p className="font-light text-white opacity-90 text-[40px] pl-[55px] w-[530px] max-[1100px]:text-center max-[1100px]:text-[36px] max-[1100px]:pl-0 max-[690px]:text-[30px] max-[690px]:px-[20px] max-[690px]:w-full">
            We adopted Luna last year - she's filled our home with joy!" - The
            Miller Family
          </p>
        </i>
        <div className="flex flex-col items-center gap-[20px] pr-[60px] max-[1100px]:pr-0">
          <h1 className="text-[62px] font-black mr-[40px] font-lobster text-white">
            PetVet
          </h1>
          <p className="text-[26px] text-center font-light text-white w-[330px]">
            Start you Journey with your pet
          </p>
          <button className="w-[379px] h-[79px] bg-white rounded-[9px] text-[#2A1458] shadow-[0_0_23px_0_#ffffff50] cursor-pointer font-normal text-[25px] hover:text-white hover:bg-transparent hover:border-white duration-300 hover:border-[1px]">
            Adopt a pet
          </button>
        </div>
      </div>
    </main>
  );
}
