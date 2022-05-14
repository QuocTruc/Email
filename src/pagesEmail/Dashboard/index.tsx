import React from "react";
import "./dashboard.css";
import Header from "../../components/UI-Components/Mail/Mail-Header";
import LogoWhite from "../../components/UI-Components/Logo";
import IconDashBoard from "../../components/UI-Components/IconDashBoard";
import HomeSlibar from "../../components/UI-Components/Sidebar/Floder";
import MailSumary from "../../components/UI-Components/Mail/Mail-Sumary";
import MailDetail from "../../components/UI-Components/Mail/Mail-Detail";
// import Paper from "../../components/UI-Components/paper";
// import PaperEmail from "../../components/UI-Components/paperEmail";

const Email = () => {
  return (
    <div className="w-full min-h-screen flex items-center relative">
      <Header />

      <div className="h-screen w-1/6 flex flex-col items-center fixed z-50 top-0 left-0 ">
        <LogoWhite />

        <div className="h-full flex items-center w-full">
          <IconDashBoard />
          <HomeSlibar />
        </div>
      </div>
      <div className="w-1/6"></div>
      <div className="w-5/6 h-screen   flex flex-col justify-start items-center relative  overflow-hidden">
        <div className="flex items-center  h-full w-full">
          <div className="w-1/4 h-full bg-white border-r border-gray-300 top-14 relative overflow-hidden">
            <div
              className="overflow-scroll relative"
              style={{ height: "calc(100% - 3.5rem" }}
            >
              <MailSumary />
            </div>
          </div>
          <div className="w-3/4 h-full top-14 relative">
            <div className="w-full bg-white h-full flex ">
              <MailDetail />
            </div>
          </div>
          {/* <MailSumary /> */}
          {/* <PaperEmail />  */}
        </div>
      </div>
    </div>
  );
};
export default Email;
