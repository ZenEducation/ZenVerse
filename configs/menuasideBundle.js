import {
    mdiMonitor,
    mdiMonitorDashboard,
    mdiAccountGroupOutline,
    mdiFileMultipleOutline,
    mdiChartLine,
    mdiDotsTriangle,
    mdiCogOutline,
  } from "@mdi/js";
  
  export default [
    {
      to: "/",
      icon: mdiMonitor,
      label: "Home",
    },
    {
      label: "Accounts",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Cash A/c",
          to:"/accounts/accounts/cash"
        },
        {
          label: "Sales A/c",
          to:"/accounts/accounts/sales"
        },
        {
          label: "Purchase A/c",
          to:"/accounts/accounts/Purchase"
        },
        {
          label: "General Reserves A/c",
          to:"/accounts/accounts/GeneralReserves"
        },
        {
          label: "Reverse Charge A/c",
          to:"/accounts/accounts/ReverseCharge"
        },
      ],
    },
    {
      label: "Customer",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Aging Report",
          to:"/"
        },
        {
          label: "Credit Node",
          to:"/"
        },
        {
          label: "Customer",
          to:"/accounts/customer/customer"
        },
        {
          label: "Invoice",
          to:"/"
        },
        {
          label: "Receipt",
          to:"/"
        },
        {
          label: "Sales Order",
          to:"/"
        },
        {
          label: "Sales Register",
          to:"/"
        },
        {
          label: "Template",
          to:"/"
        },
      ],
    },
    {
      label: "Vendor",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Debit Note",
          to:"/"
        },
        {
          label: "Purchase Management",
          to:"/"
        },
        {
          label: "Purchase Register",
          to:"/"
        },
        {
          label: "Vendor",
          to:"/"
        },

      ],
    },
    {
      label: "Tax",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "E-way bill",
          to:"/"
        },
        {
          label: "GSTR1",
          to:"/"
        },
        {
          label: "GSTR2",
          to:"/"
        },
        {
          label: "GST3RB",
          to:"/"
        },
        {
          label: "Reverse Charge",
          to:"/"
        },
        {
          label: "Setting",
          to:"/"
        },
        {
          label: "Unit Mapping",
          to:"/"
        },
      ],
    },
    {
      label: "Reports",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Balance Sheet",
          to:"/"
        },
        {
          label: "Daybook",
          to:"/"
        },
        {
          label: "Profit and Loss",
          to:"/"
        },
        {
          label: "Sales Bifurcation",
          to:"/"
        },
        {
          label: "Trail Balance",
          to:"/"
        },
      ],
    },
    {
      label: "Inventory",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Branch Transfer",
          to:"/"
        },
        {
          label: "Inventory",
          to:"/"
        },
        {
          label: "Manufacturing",
          to:"/"
        },
        {
          label: "Warehouse",
          to:"/"
        },

      ],
    },
    {
      label: "Other",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Audit Trail",
          to:"/"
        },
        {
          label: "Cash Flow",
          to:"/"
        },
        {
          label: "Dashboard",
          to:"/"
        },
        {
          label: "Onboarding",
          to:"/"
        },
        {
          label: "Petty CAsh",
          to:"/"
        },
      ],
    },
    {
      label: "Downloads",
      icon: mdiMonitor,

      to:"/"
    },
    {
      label: "Custom Fields",
      icon: mdiMonitor,

      to:"/"
    },
    {      
      icon: mdiMonitor,
      label: "Import",
      to:"/"
    },


  ];
  