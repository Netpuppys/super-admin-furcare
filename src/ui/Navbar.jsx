import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import supportIcon from "../Assets/icons/navbar/support.svg";
import avatarIcon from "../Assets/icons/navbar/avatar.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [openChangeBranchModal, setOpenChangeBranchModal] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleProfileModalOpen = () => {
    setOpenChangeBranchModal(false);
    setShowProfileOptions((prev) => !prev);
  };

  return (
    <div className="w-full px-10 h-[4.75rem] bg-[#F9F9FA] border-b-2 border-[#E1E3EA] flex items-center justify-between">
      {(showProfileOptions || openChangeBranchModal) && (
        <div
          onClick={() => {
            setOpenChangeBranchModal(false);
            setShowProfileOptions(false);
          }}
          className="w-screen bg-transparent h-screen z-10 fixed top-0 left-0"
        ></div>
      )}

      <div className="flex gap-20 items-center">
        <p className="font-semibold text-[#121C2D] text-xl">Super Admin</p>
        <div className="flex rounded-md border overflow-hidden border-[#E1E3EA] h-[2.25rem]">
          <button className="h-full aspect-square border-r-[#E1E3EA] bg-[#F9F9FA] flex items-center justify-center">
            <GoSearch />
          </button>
          <input
            type="text"
            className="w-[17rem] focus:outline-none h-full px-3 placeholder:italic placeholder:text-[#606B85] text-sm"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-5 aspect-square">
          <img src={supportIcon} className="w-full h-full" alt="" />
        </button>

        <div className="w-fit h-fit relative">
          <button
            onClick={handleProfileModalOpen}
            className={`flex gap-2 items-center relative ${
              showProfileOptions ? "z-50" : ""
            }`}
          >
            <div className="w-8 aspect-square rounded-full border border-[#E7DCFA] flex items-center justify-center">
              <img src={avatarIcon} className="" alt="" />
            </div>

            <p className="text-xs text-[#606B85]">
              {!showProfileOptions ? <FaChevronDown /> : <FaChevronUp />}
            </p>
          </button>
          <div
            className={`${
              showProfileOptions ? "block" : "hidden"
            } w-48 z-40 absolute flex flex-col items-start justify-start right-0 top-[calc(100%+1.5rem)] border border-[#E1E3EA] bg-white shadow-2xl rounded-xl px-6 py-4 text-left`}
          >
            <p className="py-2 text-[#606B85] text-xs font-medium capitalize">
              Super Admin
            </p>
            <button className="text-sm py-1 text-[#121C2D]">My Profile</button>
            <button
              onClick={handleLogOut}
              className="text-sm py-1 text-[#121C2D]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
