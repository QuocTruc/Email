import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
const Slibar: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="fixed top-0 right-0 w-5/6 h-14 bg-white border-b z-20">
      <div className="w-full h-full flex items-center justify-between pl-4 pr-6 gap-3">
        <div>
          Pathname:
          {pathName
            .split("/")
            .filter((x) => x !== "")
            .map((path, index) => {
              return (
                <span key={index} className="font-bold ml-2 capitalize">
                  {path}/
                  {index !==
                    pathName.split("/email").filter((x) => x !== "").length - 1 && (
                    <i className="fa-solid fa-caret-right ml-2"></i>
                  )}
                </span>
              );
            })}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-end items-end">
            <h6 className="font-bold text-sm">Jonathan Kyle</h6>
            <p className=" text-sm text-gray-500 mb-0">test1@test.com</p>
          </div>
          <div className=" icon-logo relative h-10 w-10 rounded-full"></div>
          <button
            className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-red-500 text-white hover:bg-red-400 false "
          >
            <Link to="/login">
              <AiOutlinePoweroff />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slibar;
