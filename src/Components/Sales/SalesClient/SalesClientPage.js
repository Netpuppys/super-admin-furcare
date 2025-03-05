import React from "react";
import OtherInfo from "./OtherInfo";
import clients from "../../../Assets/icons/clients/clients.png";
import users from "../../../Assets/icons/clients/users.png";
import leads from "../../../Assets/icons/clients/leads.png";
import { FaArrowUp } from "react-icons/fa";

const SalesClientPage = () => {
  const reports = [
    {
      title: "Clients",
      icon: clients,
      number: 15,
      performanceStatus: "more",
      performance: 16,
    },
    {
      title: "Users",
      icon: users,
      number: 40,
      performanceStatus: "down",
      performance: 1,
    },
    {
      title: "Leads",
      icon: leads,
      number: 20,
    },
  ];
  return (
    <div className="w-full min-h-full px-[36px] py-4 overflow-y-auto">
      <div className="flex items-start justify-between">
        <div className="text-[#0263E0] text-xs">
          <button className="underline inline">Sales</button>
          <span> / </span>
          <p className="underline inline cursor-default">Clients</p>
        </div>
      </div>
      <div className="flex items-start flex-wrap justify-start gap-x-[56px] px-[50px] py-[32px] mt-[30px]">
        {reports.map((report, index) => (
          <div
            key={index}
            className={`w-fit max-w-[calc(33%-56px)] flex items-start gap-[20px] pr-[56px]  ${
              reports.length - 1 === index ? "" : "border-r border-[#F0F0F0]"
            }`}
          >
            <div className="bg-[linear-gradient(201deg,#D3FFE7_3.14%,#EFFFF6_86.04%)] aspect-square rounded-full p-[22px]">
              <img src={report.icon} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="">
              <p className="text-[#ACACAC] font-[Poppins] text-sm font-normal leading-normal -tracking-[0.14px]">
                {report.title}
              </p>
              <p className="text-[#333] font-[Poppins] text-[32px] font-semibold leading-[100%] -tracking-[0.32px] mt-1">
                {report.number}
              </p>
              {report.performanceStatus && (
                <div className="mt-[6px] flex gap-[3px] items-end">
                  <span
                    className={` text-[18px] ${
                      report.performanceStatus === "more"
                        ? "text-[#00AC4F]"
                        : "text-[#D0004B] rotate-180"
                    }`}
                  >
                    <FaArrowUp />
                  </span>
                  <p className="text-xs font-[Poppins] leading-normal -tracking-[0.12px]">
                    <span
                      className={`font-bold ${
                        report.performanceStatus === "more"
                          ? "text-[#00AC4F]"
                          : "text-[#D0004B]"
                      }`}
                    >
                      {report.performance}%
                    </span>
                    {" "}<span className="text-[#292D32]">this month</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 min-h-[32rem]">
        <OtherInfo />
      </div>
    </div>
  );
};

export default SalesClientPage;
