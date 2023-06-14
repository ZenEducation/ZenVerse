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
          to:"/lms/LearnerMgmt"
        },
        {
          label: "Admin",
          to:"/lms/AdminMgmt"

        },
        {
          label: "Instructor",
          to:"/lms/InstructorMgmt"
        },
        {
          label: "Affiliates",
          to:"/lms/AffiliateMgmt"
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
      icon: mdiCogOutline,
      label: "Settings",
    },
  
  ];
  