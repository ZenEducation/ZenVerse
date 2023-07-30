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
          to:"/lms/adminUI/Courses/courseDashboard"

        },
        {
          label: "Bundles",
          to:"/lms/adminUI/Bundles/BundleDashboard"

        },
        {
          label: "Mock Tests",
          to:"/lms/adminUI/MockTest/MockTestDashboard"

        },
        {
          label: "Test Series",
          to:"/lms/adminUI/TestSeries/testDashboard"

        },
        {
          label: "Categories",
          to:"/lms/adminUI/Category/CategoryDashboard"

        },
      ],
    },
    {
      label: "User Management",
      icon: mdiAccountGroupOutline,
      menu: [
        {
          label: "Learner",
          to:"/lms/adminUI/usermgmt/LearnerMgmt"
        },
        {
          label: "Admin",
          to:"/lms/adminUI/usermgmt/AdminMgmt"

        },
        {
          label: "Instructor",
          to:"/lms/adminUI/usermgmt/InstructorMgmt"
        },
        {
          label: "Affiliates",
          to:"/lms/adminUI/usermgmt/AffiliateMgmt"
        },
      ],
    },
    {
      to:"/lms/adminUI/Manage/AssetMgmt",
      icon: mdiDotsTriangle,
      label: "Asset Library",
    },
    {
      to:"/lms/adminUI/Report/CourseReport",
      icon: mdiChartLine,
      label: "Reports",
    },
    {
      to:"/lms/adminUI/Manage/AccountSetting",
      icon: mdiFileMultipleOutline,
      label: "Manage",
    },
    {
      to:"/lms/adminUI/Manage/AccountSetting",
      icon: mdiCogOutline,
      label: "Settings",
    },
  
  ];
  