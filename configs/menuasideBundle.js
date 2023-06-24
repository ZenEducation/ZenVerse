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
          label: "Mock Tests",
          to:"/examportal/exam/ExamDashboard"
        },
        {
          label: "Test Series",
          to:"/examportal/tests/testDashboard"
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
          to: "/examportal/usermgmt/LearnerMgmt",
        },
        {
          label: "Admin",
          to: "/examportal/usermgmt/AdminMgmt",
        },
        {
          label: "Instructor",
          to: "/examportal/usermgmt/InstructorMgmt",
        },
        {
          label: "Affiliates",
          to: "/examportal/usermgmt/AffiliateMgmt",
        },
      ],
    },
    {
      icon: mdiChartLine,
      label: "Reports",
      menu: [
        {
          label: "Course Report",
          to: "/examportal/reports/coursereport",
        },
        {
          label: "Product Enrollment",
          to: "/examportal/reports/productenrollment",
        },
      ],
    },
    {
      to: "/",
      icon: mdiFileMultipleOutline,
      label: "Manage",
    },
    {
      to: "/examportal/settings",
      icon: mdiCogOutline,
      label: "Settings",
    },
  ];
  