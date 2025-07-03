import { useRef, useEffect, useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import PetsShow from "../../StoredJsons/PetsShow2.json";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import type { petType } from "utils/types";
export default function Adopt() {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [searchedText, setSearchedText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const petRef = useRef<HTMLDivElement>(null);
  const petsInView = useInView(petRef, { once: true });
  const petsShowAnimation = useAnimation();
  const handleFilter = (category: string) => {
    setFilter((prevFilter: string[]) =>
      prevFilter.includes(category)
        ? prevFilter.filter((ctg: string) => ctg != category)
        : [...prevFilter, category]
    );
  };
  useEffect(() => {
    if (petsInView) {
      petsShowAnimation.start("visible");
    }
  }, [petsInView]);
  const handleChange = () => {
    setSearchedText(inputRef.current?.value as string);
  };
  const filteredPets = PetsShow.filter(
    (pet) =>
      (pet.name.includes(searchedText) ||
        String(pet.age).includes(searchedText) ||
        pet.breed.includes(searchedText)) &&
      (filter.length == 0 || filter.includes(pet.type as string))
  );
  return (
    <main className="mb-[30px]">
      <h1 className="font-extrabold text-[58px] text-center max-[500px]:text-[50px]">Why Adopt?</h1>
      <div className="w-19/20 top-[500px] flex relative left-1/2 translate-[-50%] items-center justify-between max-[525px]:top-[350px] max-[478px]:top-[400px]">
        <div className="flex items-start gap-[15px]">
          <img src="/Adopt/list.svg" alt="A heart with a paw print icon" className="max-[640px]:hidden" />
          <div className="max-[420px]:top-[40px] relative max-[366px]:top-[70px]">
            <h2 className="text-[47px] font-semibold max-[525px]:text-center max-[525px]:text-[40px] max-[500px]:px-[15px]">Save a Life</h2>
            <p className="text-[27px] font-light w-[370px] max-[1200px]:w-14/20 max-[640px]:w-full max-[525px]:text-center max-[525px]:text-[21px] max-[525px]:px-[20px]">
              "You're not just getting a pet - you're giving them a second
              chance."
            </p>
            <br />
            <br />
            <br className="hidden max-[1200px]:block max-[525px]:hidden" />
            <br className="hidden max-[1200px]:block max-[782px]:hidden" />
            <h2 className="text-[47px] font-semibold max-[525px]:text-center max-[525px]:text-[40px] max-[500px]:px-[15px]">Support Our Mission</h2>
            <p className="text-[27px] font-light w-[370px] max-[1200px]:w-14/20 max-[640px]:w-full max-[525px]:text-center max-[525px]:text-[21px] max-[525px]:px-[20px]">
              Adoption fees directly fund our mission to rescue more animals in need.
            </p>
            <br />
            <h2 className="text-[47px] font-semibold max-[525px]:text-center max-[525px]:text-[40px] max-[500px]:px-[15px]">Adoption Perks</h2>
            <ol className="list-decimal list-inside">
              <li className="text-[27px] font-light w-[370px] max-[1200px]:w-full max-[525px]:text-center max-[525px]:text-[21px] max-[525px]:px-[20px]">
                All pets are vaccinated, microchipped, and spayed/neutered.
              </li>
              <li className="text-[27px] font-light w-[370px] max-[1200px]:w-full max-[525px]:text-center max-[525px]:text-[21px] max-[525px]:px-[20px]">
                30-day post-adoption support from our expert vet team.
              </li>
            </ol>
            <br />
            <br />
            <br className="hidden max-[1200px]:block" />
            <br className="hidden max-[1200px]:block" />
            <br className="hidden max-[1200px]:block" />
            <br className="hidden max-[1200px]:block" />
          </div>
        </div>
        <img src="/Adopt/adoptbg.png" className="max-[1200px]:hidden" alt="A happy dog looking up lovingly at its new owner" />
      </div>
      <h2 className="font-extrabold text-[58px] text-center relative top-[40px] mb-[80px] max-[525px]:top-[10px] max-[520px]:text-[50px] max-[440px]:px-[15px]">
        Meet Your New Best Friend
      </h2>
      <div className="mb-[40px]">
        <div className="w-18/20 flex justify-center items-center gap-[10px] relative left-1/2 translate-x-[-50%] mb-[30px]">
          <input
            type="text"
            className="w-full  h-[82px] bg-white border-1 border-[#311a04] pl-[20px] rounded-[15px] duration-300 focus:bg-[#f0f0f0]"
            placeholder="Search by name, age, or breed"
            ref={inputRef}
            onChange={handleChange}
          />
          <button
            className={`border-1 border-[#311a04] rounded-[15px] w-[62px] h-[62px] flex justify-center items-center cursor-pointer duration-[350ms] ${
              toggleFilter ? "bg-[#311a04]" : "bg-transparent"
            }`}
            onClick={() => setToggleFilter((prevToggle) => !prevToggle)}
          >
            <MdFilterListAlt
              className={`${
                toggleFilter ? "text-white" : "text-[#311A04]"
              } duration-[350ms]`}
              size={32}
            />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {toggleFilter && (
            <motion.div
              key="cratiria"
              variants={{
                show: { opacity: 1, filter: "blur(0)", y: 0 },
                hide: { opacity: 0, filter: "blur(8px)", y: -40 },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="flex items-center jusitfy-center relative left-1/2 translate-x-[-50%] w-18/20 gap-[15px] mb-[50px]"
            >
              <button
                className={`w-1/4 h-[68px] ${
                  filter.includes("dogs")
                    ? "bg-[#311a04] text-white"
                    : "bg-[#00000015]"
                } rounded-[11px] cursor-pointer hover:scale-105 duration-300 flex justify-center items-center border-[.3px] border-[#311a04] text-xl font-semibold`}
                onClick={() => handleFilter("dogs")}
              >
                Dogs
              </button>
              <button
                className={`w-1/4 h-[68px] ${
                  filter.includes("cats")
                    ? "bg-[#311a04] text-white"
                    : "bg-[#00000015]"
                } rounded-[11px] cursor-pointer hover:scale-105 duration-300 flex justify-center items-center border-[.3px] border-[#311a04] text-xl font-semibold`}
                onClick={() => handleFilter("cats")}
              >
                Cats
              </button>
              <button
                className={`w-1/4 h-[68px] ${
                  filter.includes("rabbits")
                    ? "bg-[#311a04] text-white"
                    : "bg-[#00000015]"
                } rounded-[11px] cursor-pointer hover:scale-105 duration-300 flex justify-center items-center border-[.3px] border-[#311a04] text-xl font-semibold`}
                onClick={() => handleFilter("rabbits")}
              >
                Rabbits
              </button>
              <button
                className={`w-1/4 h-[68px] ${
                  filter.includes("other")
                    ? "bg-[#311a04] text-white"
                    : "bg-[#00000015]"
                } rounded-[11px] cursor-pointer hover:scale-105 duration-300 flex justify-center items-center border-[.3px] border-[#311a04] text-xl font-semibold`}
                onClick={() => handleFilter("other")}
              >
                Other Animals
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          ref={petRef}
          variants={{
            visible: { opacity: 1, filter: "blur(0)", y: 0 },
            hidden: { opacity: 0, filter: "blur(8px)", y: 30 },
          }}
          initial="hidden"
          animate={petsShowAnimation}
          exit="hidden"
          className="w-18/20 relative left-1/2 translate-x-[-50%] grid grid-cols-3 gap-x-[40px] gap-y-[50px] duration-300 max-[970px]:grid-cols-2 max-[635px]:grid-cols-1"
        >
          {filteredPets.length == 0 ? (
            <p className="text-center opacity-70">
              No pets found, please change your filters
            </p>
          ) : (
            filteredPets.map((pet, idx) => {
              return (
                <motion.div
                  variants={{
                    visible: { opacity: 1, filter: "blur(0)", y: 0 },
                    hidden: { opacity: 0, filter: "blur(8px)", y: 30 },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: idx * 0.1 }}
                  key={Math.random() * idx}
                  className="w-full flex items-center justify-center gap-[15px] flex-col"
                >
                  <div className="w-full border-[.4px] border-[#311A04] h-[473px] overflow-hidden rounded-[20px] shadow-[0_4px_10.3px_0_#00000020]">
                    <img
                      src={pet.petImgUrl}
                      alt={`A photo of ${pet.name}, a ${pet.breed} available for adoption.`}
                      className="h-auto w-full max-[1160px]:h-full max-[1160px]:w-auto min-w-[302px] max-[970px]:w-full max-[970px]:h-auto max-[770px]:min-h-full"
                    />
                  </div>
                  <div className="w-full rounded-[20px] h-[266px] bg-white flex items-center justify-center flex-col gap-[16px] border-[.4px] border-[#311a04a2] shadow-[0_4px_10.3px_0_#00000020]">
                    <h1 className="text-[48px] font-semibold">{pet.name}</h1>
                    <p className="text-[19px] font-normal text-center opacity-80">
                      {pet.habit}
                    </p>
                    <div className="flex items-center justify-between gap-[17px]">
                      <h4>age: {pet.age} years</h4>
                      <h4>breed: {pet.breed}</h4>
                    </div>
                    <a href="#" className="w-19/20">
                      <button className="w-full h-[57px] rounded-[20px] bg-[#311a04] text-white hover:bg-stone-950 cursor-pointer duration-300">
                        Meet {pet.name}
                      </button>
                    </a>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
        <a href="#">
          <button className="p-[25px] top-[34px] rounded-[9px] hover:bg-[#2A1458] text-[#2a1458] relative left-1/2 translate-x-[-50%]  border-1 border-[#2a1458] hover:text-white px-[30px] cursor-pointer hover:scale-105 duration-300">
            View all adoptable Pets
          </button>
        </a>
      </div>
      <div className="w-18/20 relative left-1/2 translate-x-[-50%]">
      <h2 className="text-[48px] font-bold">FAQs</h2>
      <ul className="list-disc flex flex-col pl-[45px] relative gap-[10px] top-[10px]">
        <li className="font-light text-[27px]">"How long does it take to get the pet?" → Typically 1-3 days.</li>
        <li className="font-light text-[27px]">"Can I return a pet if it doesn't work out?" → Yes, anytime (no shame policy).</li>
      </ul>
      </div>
    </main>
  );
}
