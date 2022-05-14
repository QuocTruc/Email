import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataMessages from "../../../../DataService/messages";

const MailSumary: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <div
            className="flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer 
			  false"
          >
            <div className="w-1/6">
              <div className="relative w-full pt-full rounded-full">
                <img src="https://i.pravatar.cc/320?img=65" alt="" />
              </div>
            </div>
            <div className="w-5/6 flex flex-col items-start justify-between">
              <div className="flex items-center line-clamp-1 justify-between w-full text-sm text-gray-500 font-medium">
                <p>Eren Jaeger</p>
                <p>22/6/2020</p>
              </div>
              <div className="text-md   font-bold w-full line-clamp-1">
                {" "}
                incentivize frictionless synergies
              </div>
              <div className="w-full line-clamp-3">
                <p className="text-left line-clamp-3 text-gray-500 text-[1.2rem] ">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided. But in certain circumstances and owing
                  to the claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
            
        </li>
      </ul>
    </>
  );
};

export default MailSumary;
