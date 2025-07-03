import React from "react";
import supports from "../../StoredJsons/Supports.json";
export default function Support() {
  return (
    <main className="relative top-[20px] mb-[50px]">
      <h1 className="font-extrabold text-[53px] pl-[60px] mb-[20px]">Ways to Support Our Mission</h1>
      {supports.map((support, idx) => (
        <div
          key={Math.random() * idx}
          className="w-18/20 relative left-1/2 translate-x-[-50%]"
        >
          <h2 className="w-full text-[#2A1458] border-[2px] border-[#2A1458] flex items-center justify-center h-[114px] rounded-[8px] font-semibold text-[50px] mb-[28px]">
            {support.name}
          </h2>
          <div
            className={`w-full flex items-center ${
              idx % 2 == 0 ? "" : "flex-row-reverse"
            } mb-[26px]`}
          >
            <div className="w-7/12 h-[334px] rounded-[8px] bg-[#2A1458] text-white pl-[30px] py-[15px]">
              <i>
                <h3 className="font-thin text-[30px] opacity-80 mb-[20px]">
                  {support.details.title}
                </h3>
              </i>
              <h2 className="text-[33px] font-semibold mb-[20px]">
                {support.details.type}
              </h2>
              <ul className="list-decimal px-[30px] flex justify-between items-center flex-wrap gap-[50px] gap-y-[-90px] h-[70px]">
                {support.details.options.map((option, idx) => (
                  <li key={idx} className="font-[300] text-[26px] opacity-90 ">
                    <i>{option}</i>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={support.imgUrl}
              alt={support.details.title}
              className={`h-[334px] w-auto min-w-auto relative ${
                idx % 2 == 0 ? "left-[-20px]" : "left-[20px]"
              }`}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
