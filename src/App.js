import { BrowserRouter, useLocation } from "react-router-dom";
import AllRoutes from "./utils/AllRoutes";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import { AlertProvider } from "./utils/AlertContext";
import Alert from "./ui/Alert";
import { ToastContainer } from "react-toastify";
import { AppProvider, useAppContext } from "./utils/AppContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  function Layout() {
    const location = useLocation();
    // const navigate = useNavigate();
    const currentPath = location.pathname;

    const { sidebarExpanded } = useAppContext();

    // useEffect(() => {
    //   const access = localStorage.getItem("access");
    //   const userName = localStorage.getItem("name");

    //   if (!access || !userName) {
    //     navigate("/"); // Redirect to root if conditions aren't met
    //   }
    // }, [navigate]);

    return (
      <div className="">
        {currentPath !== "/" && <Sidebar currentPath={currentPath} />}
        <div
          className={`w-full ${
            currentPath !== "/"
              ? `${
                  sidebarExpanded
                    ? "pl-60 animate-sidebarExpandPadding"
                    : "pl-20 animate-sidebarClosePadding"
                }`
              : ""
          }`}
        >
          {currentPath !== "/" && <Navbar />}
          <AllRoutes />
        </div>
      </div>
    );
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      ></link>
      <div className="">
        <ToastContainer closeOnClick={true} closeButton />
        <AppProvider>
          <AlertProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
            <Alert />
          </AlertProvider>
        </AppProvider>
      </div>
    </>
  );
}

export default App;
