import React, { useState } from "react";
import informationIcon from "../../../Assets/icons/informationIcon.png";
import BlueButton from "../../../ui/BlueButton";

const buttons = ["All Clients", "Leads"];
const allClients = [
  {
    name: "Oases Vet Hospital",
    numberOfBranches: 2,
    totalUsers: 12,
    product: "Premium",
    country: "India",
    active: true,
  },
];
const leads = [
  {
    name: "Animal Hospital",
    PointOfContact: "Jane Doe",
    email: "test@test.com",
    country: "India",
    notes: "Alisha referred the client",
    status: "Contacted",
  },
  {
    name: "Animal Hospital",
    PointOfContact: "John Doe",
    email: "test@testcom",
    country: "India",
    notes: "Alisha referred the client",
    status: "Contacted",
  },
  {
    name: "Animal Hospital",
    PointOfContact: "Raj Doe",
    email: "test@test.com",
    country: "India",
    notes: "Alisha referred the client",
    status: "Contacted",
  },
  {
    name: "Animal Hospital",
    PointOfContact: "Deepa Joe",
    email: "test@test.com",
    country: "India",
    notes: "Alisha referred the client",
    status: "Contacted",
  },
];
const AllClients = () => {
  return (
    <div className="overflow-x-auto w-full mt-3">
      <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-md">
        <thead className="bg-[#F9F9FA]">
          <tr>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Name</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Number of Branches</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Total Users</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Product</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Country</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Status</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {allClients.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 h-[3.28rem]">
              <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm text-[#0263E0]">
                {item.name}
              </td>
              <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                {item.numberOfBranches}
              </td>
              <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                {item.totalUsers}
              </td>
              <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                {item.product}
              </td>
              <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                {item.country}
              </td>
              <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                <div className={`text-[#121C2D] flex items-center gap-2`}>
                  <span
                    className={`h-3 w-3 ${
                      !item?.active
                        ? "bg-[#C72323] rotate-45 rounded-sm"
                        : "bg-[#0B602D] rounded-full"
                    }`}
                  ></span>
                  {item.active ? "Active" : "Inactive"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Lead = () => {
  return (
    <div className="overflow-x-auto w-full mt-3">
      <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-md">
        <thead className="bg-[#F9F9FA]">
          <tr>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Name</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Point of Contact</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Email</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Country</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Notes</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
            <th className="px-4 py-3 text-[#606B85] font-medium">
              <div className="flex items-center justify-start gap-2">
                <span className="">Status</span>
                <img src={informationIcon} className="h-4" alt="" />
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="text-gray-900">
          {leads.map((lead, index) => (
            <tr key={index} className="border-t h-[69px]">
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.PointOfContact}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.country}</td>
              <td className="p-3">{lead.notes}</td>
              <td className="p-3">
                <select className="border classic border-[#8891AA] rounded-md w-[150px] h-[36px] px-2 focus:outline-none relative">
                  <option
                    value="Contacted"
                    selected={lead.status === "Contacted"}
                  >
                    Contacted
                  </option>
                  <option
                    value="Connected"
                    selected={lead.status === "Connected"}
                  >
                    Connected
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const OtherInfo = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="w-full h-full">
      <div className="w-full border-b flex justify-between border-[#CACDD8]">
        <div className="w-fit">
          {buttons.map((item, index) => (
            <button
              onClick={() => setActiveButton(index)}
              key={index}
              className={`rounded-t-lg relative ${
                index === activeButton ? "border-t -bottom-[2px] bg-white " : ""
              } border-[#0263E0] h-10 bg-white overflow-hidden `}
            >
              <p
                className={`w-full h-full rounded-t-lg flex items-center  justify-center ${
                  index === activeButton
                    ? "border-x border-t text-[#0263E0] font-medium"
                    : "text-[#606B85]"
                } border-[#CACDD8] px-5`}
              >
                {item}
              </p>
            </button>
          ))}
        </div>
        {activeButton === 1 && (
          <div className="w-fit">
            <BlueButton text={"Create"} onClickHandler={""} disabled={""} />
          </div>
        )}
      </div>
      <div className="w-full">
        {activeButton === 0 && <AllClients />}
        {activeButton === 1 && <Lead />}
      </div>
    </div>
  );
};

export default OtherInfo;
