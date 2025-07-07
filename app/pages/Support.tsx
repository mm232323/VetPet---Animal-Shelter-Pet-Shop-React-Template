import React from "react";
import supports from "../../StoredJsons/Supports.json";
export default function Support() {
  return (
    <main className="relative mt-5 mb-12 px-2 sm:px-4">
      <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[53px] pl-2 sm:pl-6 md:pl-12 mb-4 sm:mb-6">Ways to Support Our Mission</h1>
      {supports.map((support, idx) => (
        <div
          key={Math.random() * idx}
          className="w-full max-w-5xl mx-auto mb-8"
        >
          <h2 className="w-full text-[#2A1458] border-2 border-[#2A1458] flex items-center justify-center h-16 sm:h-24 md:h-[114px] rounded-lg font-semibold text-lg xs:text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mb-4 sm:mb-7">
            {support.name}
          </h2>
          <div
            className={`w-full flex flex-col md:flex-row items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-4 md:gap-8 mb-6`}
          >
            <div className="w-full md:w-7/12 h-auto md:h-[334px] rounded-lg bg-[#2A1458] text-white px-4 sm:px-6 md:pl-8 py-4 flex flex-col justify-center">
              <i>
                <h3 className="font-thin text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[30px] opacity-80 mb-2 sm:mb-4">
                  {support.details.title}
                </h3>
              </i>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[33px] font-semibold mb-2 sm:mb-4">
                {support.details.type}
              </h2>
              <ul className="list-decimal px-4 sm:px-8 flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-10 sm:gap-y-4">
                {support.details.options.map((option, idx) => (
                  <li key={idx} className="font-light text-sm xs:text-base sm:text-lg md:text-xl lg:text-[26px] opacity-90 break-words">
                    <i>{option}</i>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={support.imgUrl}
              alt={support.details.title}
              className={`h-40 xs:h-52 sm:h-64 md:h-[334px] w-auto max-w-full object-contain relative ${idx % 2 === 0 ? 'md:left-[-20px]' : 'md:left-[20px]'} mx-auto`}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
