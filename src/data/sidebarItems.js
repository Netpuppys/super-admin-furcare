import security from "../Assets/icons/sidebar/security.png";
import securityDark from "../Assets/icons/sidebar/securityDark.png";
import customerSupport from "../Assets/icons/sidebar/customerSupport.png";
import customerSupportDark from "../Assets/icons/sidebar/customerSupportDark.png";
import sales from "../Assets/icons/sidebar/sales.png";
import salesDark from "../Assets/icons/sidebar/salesDark.png";
import appHealthTrack from "../Assets/icons/sidebar/appHealthTrack.png";
import appHealthTrackDark from "../Assets/icons/sidebar/appHealthTrackDark.png";

const sidebarItems = [
  {
    name: "Sales",
    linkTo: "/sales/clients",
    icon: sales,
    darkIcon: salesDark,
    subItems: [
      { name: "Clients", linkTo: "/sales/clients" },
      { name: "Products", linkTo: "/sales/products" },
      { name: "Billing", linkTo: "/sales/billing" },
    ],
  },
  {
    name: "KPIs",
    linkTo: "/kpis",
    icon: sales,
    darkIcon: salesDark,
  },
  {
    name: "App Health Track",
    linkTo: "/app-health-track",
    icon: appHealthTrack,
    darkIcon: appHealthTrackDark,
  },
  {
    name: "Security",
    linkTo: "/security",
    icon: security,
    darkIcon: securityDark,
  },
  {
    name: "Customer Support",
    linkTo: "/customer-support",
    icon: customerSupport,
    darkIcon: customerSupportDark,
  },
];

export default sidebarItems;
