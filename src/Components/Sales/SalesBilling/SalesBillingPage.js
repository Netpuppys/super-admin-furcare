import React, { useEffect, useState } from "react";
import informationIcon from "../../../Assets/icons/informationIcon.png";
import invoiceIcon from "../../../Assets/icons/clients/invoices.png";
import closeIcon from "../../../Assets/icons/alert/close.png";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../utils/AppContext";
import BlueButton from "../../../ui/BlueButton";
import download from "../../../Assets/icons/clients/download.png";
const SalesBillingPage = () => {
  const navigate = useNavigate();
  const handleSalesClick = () => {
    navigate("/sales/clients");
  };
  const allClients = [
    {
      transaction: "Payment from Oases Vet Hospital",
      date: "April 23, 2025",
      amount: 2300,
      country: "India",
      status: "Completed",
    },
    {
      transaction: "Payment from Animal Hospital",
      date: "April 22, 2025",
      amount: 1900,
      country: "India",
      status: "Failed",
    },
    {
      transaction: "Payment from Oases Vet Hospital",
      date: "April 23, 2025",
      amount: 2300,
      country: "India",
      status: "In Progress",
    },
  ];
  const { sidebarExpanded } = useAppContext();
  const [invoices, viewInvoices] = useState(false);
  const handleInvoiceView = () => {
    viewInvoices(true);
  };
  const Allinvoices = Array(8).fill({
    date: "February 25, 2025",
    invoiceNumber: "#22355BE-0007",
    amount: "INR 1200.00",
    status: "Paid",
  });
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const disableShareButton = selectedInvoices.length < 1;
  useEffect(() => console.log(disableShareButton));
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedInvoices(Allinvoices.map((_, index) => index));
    } else {
      setSelectedInvoices([]);
    }
  };

  const handleSelectInvoice = (index) => {
    setSelectedInvoices((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div className="w-full min-h-full px-[36px] py-4 overflow-y-auto">
      <div className="flex items-start justify-between">
        <div className="text-[#0263E0] text-xs">
          <button onClick={handleSalesClick} className="underline inline">
            Sales
          </button>
          <span> / </span>
          <p className="underline inline cursor-default">Products</p>
        </div>
        <div
          onClick={handleInvoiceView}
          className="w-fit flex flex-col justify-center cursor-pointer items-center"
        >
          <img src={invoiceIcon} alt="" className="" />
          <p className="text-black text-[17px] leading-[22px] -tracking-[0.43px]">
            Invoices
          </p>
        </div>
      </div>
      <p className="text-[#000] text-base leading-normal tracking-normal mb-[16px]">
        Transactions
      </p>
      <div className="overflow-x-auto w-full mt-3">
        <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-md">
          <thead className="bg-[#F9F9FA]">
            <tr>
              <th className="px-4 py-3 text-[#606B85] font-medium">
                <div className="flex items-center justify-start gap-2">
                  <span className="">Transaction</span>
                  <img src={informationIcon} className="h-4" alt="" />
                </div>
              </th>
              <th className="px-4 py-3 text-[#606B85] font-medium">
                <div className="flex items-center justify-start gap-2">
                  <span className="">Date</span>
                  <img src={informationIcon} className="h-4" alt="" />
                </div>
              </th>
              <th className="px-4 py-3 text-[#606B85] font-medium">
                <div className="flex items-center justify-start gap-2">
                  <span className="">Amount</span>
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
                  {item.transaction}
                </td>
                <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                  {item.date}
                </td>
                <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                  {item.amount}
                </td>
                <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                  {item.country}
                </td>
                <td className="px-4 py-4 h-[3.35rem] border-b border-gray-200 text-sm capitalize text-gray-900">
                  <div className={`text-[#121C2D] flex items-center gap-2`}>
                    <span
                      className={`h-3 w-3 ${
                        item.status === "Completed"
                          ? "bg-[#0B602D] rounded-full"
                          : ""
                      } ${
                        item.status === "Failed"
                          ? "bg-[#C72323] rotate-45 rounded-sm"
                          : ""
                      } ${
                        item.status === "In Progress"
                          ? "border-2 border-dashed rounded-full border-[#121C2D]"
                          : ""
                      }`}
                    ></span>
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {invoices && (
        <div
          className={`fixed
        ${sidebarExpanded ? "w-[calc(100%-15rem)]" : "w-[calc(100%-5rem)]"}
        top-0 h-screen right-0 flex z-50`}
        >
          <div
            onClick={() => viewInvoices(false)}
            className="w-[calc(100%-45rem)] h-full"
          ></div>

          <div
            className={`fixed top-0 h-screen bg-white shadow-[0px_4px_16px_0px_rgba(18,28,45,0.20)] w-[45rem] ${
              invoices ? "right-0 block" : "right-full hidden z-50"
            } `}
          >
            <div className="flex items-center justify-between  bg-white z-20 relative h-[4.75rem] px-8">
              <p className="text-xl text-[#121C2D] font-semibold tracking-[0.05rem]">
                Invoices
              </p>
              <button onClick={() => viewInvoices(false)} className="">
                <img src={closeIcon} className="w-7 " alt="" />
              </button>
            </div>

            <div className="w-full h-[calc(100%-4.75rem)] overflow-y-auto">
              {invoices && (
                <div className="p-6 flex h-full flex-col justify-start items-end mx-auto bg-white rounded-lg space-y-6">
                  <div className="px-4 w-full">
                    {/* Select All */}
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedInvoices.length === Allinvoices.length}
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-[#02172C] text-sm leading-[20px] font-medium">
                        Select All
                      </span>
                    </div>

                    {/* Invoice List */}
                    {Allinvoices.map((invoice, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3"
                      >
                        {/* Checkbox */}
                        <input
                          type="checkbox"
                          checked={selectedInvoices.includes(index)}
                          onChange={() => handleSelectInvoice(index)}
                          className="mr-2 w-4 h-4"
                        />

                        {/* Invoice Details */}
                        <div className="flex-1">
                          <a
                            href="#"
                            className="text-[#007AFF] text-sm leading-[20px] font-medium hover:underline"
                          >
                            {invoice.date}
                          </a>
                          <p className="text-sm text-[#606B85] leading-[20px] font-normal">{`Monthly Invoice ${invoice.invoiceNumber}`}</p>
                        </div>

                        {/* Status */}
                        <span className="bg-[#EDFDF3] border border-[#D1FAE0] text-[#0B602D] px-3 py-1 text-sm rounded">
                          Total: {invoice.amount} {invoice.status}
                        </span>

                        {/* Download Icon */}
                        <img
                          src={download}
                          alt=""
                          className="w-[20px] ml-[30px] h-fit"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="h-full w-full items-end flex justify-end ">
                    <BlueButton disabled={disableShareButton} text={"Share"} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesBillingPage;
