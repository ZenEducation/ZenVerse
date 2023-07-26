import {
  mdiMonitorDashboard,
  mdiComment,
  mdiPlus,
  mdiFileDocument,
  mdiAccountSettings,
  mdiAccountCash,
  mdiTagText,
  mdiBank,
  mdiGmail,
  mdiChartBar,
  mdiFormDropdown,
  mdiStorefront 
  
} from "@mdi/js";

export default [
  {
    to: "/SalesCRM/dashBoard/dashboardUI",
    icon: mdiMonitorDashboard,
    label: "CRM Dashboard",
  },
  {
    to: "/",
    icon: mdiComment,
    label: "0 Unread Comments",
  },
  {
    to: "/",
    icon: mdiPlus,
    label: "Add Lead ",
  },
  {
    to: "/SalesCRM/sales/sales-dashboard",
    icon: mdiStorefront,
    label: "Sales CRM",
  },
  {
    label: "Sales CRM",
    icon: mdiFormDropdown,
    menu: [
      {
        label: "All Deals",
        to: "/SalesCRm/sales/deals",
      },
     
    ],
  },
  {
    to: "/",
    icon: mdiFileDocument,
    label: "Invoices",
  },
  {
    to: "/",
    icon: mdiAccountSettings,
    label: "Settings",
    
  },
  {
    to: "/",
    icon: mdiAccountCash,
    label: "Payouts",
  },
  {
    to: "/",
    icon: mdiTagText,
    label: "Tags",
  },
  {
    to: "/",
    icon: mdiBank,
    label: "College Search",
  },
  {
    to: "/",
    icon: mdiGmail,
    label: "Gmail Sync",
  },
  {
    to: "/",
    icon: mdiChartBar,
    label: "MIS Graph",
  },
  
];
