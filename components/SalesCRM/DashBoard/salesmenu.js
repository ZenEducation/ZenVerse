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
      to: "/SalesCRm/sales/deals",
      icon: mdiPoll ,
      label: "Pipeline",
    },

        {
      to: "/SalesCRm/sales/contacts",
      icon: mdiContactsOutline ,
      label: "Contacts",
    },
        {
      to: "/SalesCRm/sales/companies",
      icon: mdiDomain,
      label: "Companies",
    },
        {
      to: "/SalesCRm/sales/products",
      icon: mdiCartOutline ,
      label: "Products",
    },
        {
      to: "/SalesCRm/sales/activities",
      icon: mdiCalendarRange,
      label: "Activities",
    },
        {
      to: "/SalesCRM/sales/sales-dashboard",
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
  