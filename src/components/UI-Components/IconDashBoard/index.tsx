import React, { FC } from "react";
import "./style.css";
import { AiOutlineMail, AiTwotoneHome, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";


const IconDashBoard: React.FC = () => {
  return (
    <div className="w-1/5 h-full bg-darkblue-900 flex flex-col items-center justify-start">
      <Link to="/main/home" className="iconHome text-white flex w-full h-14 items-center justify-center font-light text-md">
        <AiTwotoneHome />
      </Link>
      <Link to ="/main/email" className="iconMail text-white flex w-full h-14 items-center justify-center font-light text-md font-bold">
        <AiOutlineMail />
      </Link>
      <Link to="/main/content"className="iconUser text-white flex w-full h-14 items-center justify-center font-light text-md">
        <AiOutlineUser />
      </Link>
    </div>
  );
};
export default IconDashBoard;
