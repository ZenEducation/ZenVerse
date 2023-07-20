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
    mdiStorefront ,
    mdiFinance ,
    mdiPoll,
    mdiContactsOutline ,
    mdiDomain  ,
    mdiCartOutline ,
    mdiCalendarRange
    
  } from "@mdi/js";
  
  export default [
    {
      to: "/SalesCRm/deals",
      icon: mdiPoll ,
      label: "Pipeline",
    },

        {
      to: "/SalesCRM/dashBoard/dashboardUI",
      icon: mdiContactsOutline ,
      label: "Contacts",
    },
        {
      to: "/SalesCRM/dashBoard/dashboardUI",
      icon: mdiDomain ,
      label: "Companies",
    },
        {
      to: "/SalesCRM/dashBoard/dashboardUI",
      icon: mdiCartOutline ,
      label: "Products",
    },
        {
      to: "/SalesCRM/dashBoard/dashboardUI",
      icon: mdiCalendarRange,
      label: "Activities",
    },
        {
      to: "/SalesCRm/seales/Sales-CRM-Kanban-View",
      icon: mdiFinance ,
      label: "Dashboards",
    },
    // {
    //   label: "Sales CRM",
    //   icon: mdiFormDropdown,
    //   menu: [
    //     {
    //       label: "All Deals",
    //       to: "/SalesCRm/deals",
    //     },
       
    //   ],
    // },
  

    
  ];
  