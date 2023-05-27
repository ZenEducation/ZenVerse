import {
    mdiAccountCircle,
    mdiMonitor,
    mdiHelpCircle,
    mdiLock,
    mdiSquareEditOutline,
    mdiTable,
    mdiMenuOpen,
    mdiTelevisionGuide,
    mdiBarcode,
    mdiPalette,
    mdiCardAccountDetailsOutline,
    mdiOpenInNew,
    mdiFormDropdown,
    mdiBallot,
    mdiViewQuilt,
    mdiMessage,
    mdiFastForwardOutline,
    mdiBook,
    mdiFilePdfBox,
    mdiImport,
    mdiDownloadBoxOutline,
    mdiMonitorDashboard,
    mdiAccountGroupOutline,
    mdiFileMultipleOutline,
    mdiChartLine,
    mdiDotsTriangle,
  } from "@mdi/js";
  
  export default [
    {
      to: "/",
      icon: mdiMonitor,
      label: "Home",
    },
    {
      label: "Products",
      icon: mdiMonitorDashboard,
      menu: [
        {
          label: "Courses",
        },
        {
          label: "Bundles",
        },
        {
          label: "Mock Tests",
        },
        {
          label: "Test Series",
        },
        {
          label: "Categories",
        },
      ],
    },
    {
      label: "User Management",
      icon: mdiAccountGroupOutline,
      menu: [
        {
          label: "Learner",
        },
        {
          label: "Admin",
        },
        {
          label: "Instructor",
        },
        {
          label: "Affiliates",
        },
      ],
    },
    {
      to: "/",
      icon: mdiDotsTriangle,
      label: "Asset Library",
    },
    {
      to: "/",
      icon: mdiChartLine,
      label: "Reports",
    },
    {
      to: "/",
      icon: mdiFileMultipleOutline,
      label: "Manage",
    },
    {
      to: "/",
      icon: mdiMonitor,
      label: "Settings",
    },
  
  ];
  