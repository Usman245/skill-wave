import React from "react";
import linkdin from "../images/linkdin-log.png";

const Footer = () => {
  return (
    <div className=" bg-slate-200 mt-16 m-0 p-0 mobile:mt-5">
      <div className=" grid grid-cols-3 justify-between mx-10 mobile:mx-2 mobile:grid-cols-1 ">
        <div className="col1 flex flex-col mx-2 ">
          <ul className="text-xl my-5 font-semibold">
            @2023 All Right Reserved.
            <span className="font-secondary"> SKILL WAVE</span>
          </ul>
        </div>
        <div className="col2 flex flex-col mx-2">
          <ul className="text-xl my-5 font-semibold">Location</ul>
          <a
            href="https://maps.app.goo.gl/t8igdQVAh3NXXkgL7"
            className=" text-base my-2"
          >
            Layyah,Punjab,PAKISTAN
          </a>
        </div>
        <div className="col3 flex flex-col mx-2">
          <ul className="text-xl my-5 font-semibold">Linkdin</ul>
          <a
            href="https://www.linkedin.com/in/muhammad-usman-b32723228"
            className=" text-base cursor-pointer"
          >
            <img src={linkdin} alt="linkdin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
