import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 mobile:mt-2 mobile:relative">
      <h2 className="text-6xl font-black">What we do</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className=" w-14 h-14 text-black font-extrabold"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
      <div className="flex justify-btween mx-10 mt-4 mobile:ml-0 mobile:flex-col">
        <div className=" mx-4 w-1/3  mobile:w-full">
          <h3 className="text-4xl mobile:text-3xl my-4 font-bold">Ideation</h3>
          <p className="mt-1 text-2xl mobile:text-xl">
            All ideas are generated internally by{" "}
            <span className="font-secondary text-3xl">Skill Wave</span> under a
            dynamic environment. Each day is a new one with new project ideas
            coming from the among the talent pool.
          </p>
        </div>
        <div className=" mx-4 w-1/3 mobile:w-full">
          <h3 className="text-4xl mobile:text-3xl my-4 font-bold">Creation</h3>
          <p className="mt-1 text-2xl mobile:text-xl">
            After a thorough cost-benefit analysis, ideas are put to test. In
            order to build faster, better and bigger,{" "}
            <span className="font-secondary text-3xl">Skill Wave</span> experts
            collectively work to develop products that are scalable and
            sustainable.
          </p>
        </div>
        <div className=" mx-4 w-1/3 mobile:w-full">
          <h3 className="text-4xl mobile:text-3xl my-4 font-bold">
            Enterpernurship
          </h3>
          <p className="mt-1 text-2xl mobile:text-xl">
            <span className="font-secondary text-3xl">Skill Wave</span> are a
            pool of talented and innovated resources who have expertise in all
            necessary departments needed to run a successful businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
