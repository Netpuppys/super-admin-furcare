import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../../../Assets/icons/clients/products.png";
import { FaCheck } from "react-icons/fa";
const SalesProductsPage = () => {
  const navigate = useNavigate();
  const handleSalesClick = () => {
    navigate("/sales/clients");
  };
  const pricingPlans = [
    {
      image: products,
      title: "Standard Plan",
      features: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    },
    {
      image: products,
      title: "Premium Plan",
      features: [
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
      ],
    },
    {
      image: products,
      title: "Collaboration User Plan",
      features: [
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
      ],
    },
  ];
  return (
    <div className="w-full min-h-full px-[36px] pt-4 pb-10 overflow-y-auto">
      <div className="flex items-start justify-between">
        <div className="text-[#0263E0] text-xs">
          <button onClick={handleSalesClick} className="underline inline">
            Sales
          </button>
          <span> / </span>
          <p className="underline inline cursor-default">Products</p>
        </div>
        <div className="w-fit flex gap-[14px] justify-center items-center">
          <label class="switchs">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="text-black text-[17px] leading-[22px] -tracking-[0.43px]">
            Price Annually
          </p>
        </div>
      </div>
      <p className="text-[#000] text-base leading-normal tracking-normal mt-[11px] mb-[16px]">
        Products (3)
      </p>
      <div className="flex justify-start gap-[50px]">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[calc(33.33%-50px)] max-w-[400px] pt-[80px] pb-[47px] border-2 rounded-[10px] border-[#DDD] p-6 flex flex-col items-center justify-between"
          >
            <div>
              {/* Plan Image */}
              <img src={plan.image} alt="" className="w-[145px] mx-auto h-fit" />

              {/* Plan Title */}
              <h3 className="text-[#0B132A] font-medium leading-[30px] text-lg font-[Rubik] mt-[30px]">
                {plan.title}
              </h3>

              {/* Features List */}
              <ul className="mt-[30px] space-y-[10px] text-[14px] text-[#4F5665] font-[Rubik] leading-[30px]">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-[20px]">
                    <span className="text-green-500 text-[20px]">
                      <FaCheck />
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[50px] w-fit flex flex-col justify-center items-center gap-[39px]">
              {/* Price */}
              <p className="text-[25px] font-medium text-[#0B132A] font-[Rubik] leading-[30px]">
                Rs. x <span className="text-[#4F5665] leading-[30px] font-normal">/ mo</span> 
              </p>

              {/* Edit Button */}
              <button className="px-3 py-2 border-4 border-[#C72323] bg-[#C72323] text-white rounded-[4px] text-sm leading-[20px] font-medium">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesProductsPage;
