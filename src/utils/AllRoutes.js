import { Routes, Route } from "react-router-dom";
import LoginPage from "../Components/Login/LoginPage";
import SalesClientPage from "../Components/Sales/SalesClient/SalesClientPage";
import SalesProductsPage from "../Components/Sales/SalesProducts/SalesProductsPage";
import SalesBillingPage from "../Components/Sales/SalesBilling/SalesBillingPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sales/clients" element={<SalesClientPage />} />
      <Route path="/sales/products" element={<SalesProductsPage />} />
      <Route path="/sales/billing" element={<SalesBillingPage />} />
    </Routes>
  );
};

export default AllRoutes;
