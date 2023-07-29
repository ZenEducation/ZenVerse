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
      label: "All Pages",
      icon: mdiMonitorDashboard,
      menu: [
        { label: "All Content", to: "/CMS/allContent" },
        { label: "Approver Dashboard", to: "/CMS/approverDashboard" },
        { label: "Creator Dashboard", to: "/CMS/creatordashboard" },
        { label: "Editor Dashboard", to: "/CMS/editorDashboard" },
      ],
    },
    {
      label: "User Management",
      icon: mdiAccountGroupOutline,
      menu: [

        {
          label: "Admin",
          to:"/cms/usermgmt/AdminMgmt"

        },
        {
          label: "Approver",
          to:"/cms/usermgmt/ApproverMgmt"
        },
        {
          label: "Editor",
          to:"/cms/usermgmt/EditorMgmt"
        },
        {
          label: "Creator",
          to:"/cms/usermgmt/CreatorMgmt"
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
      icon: mdiCogOutline,
      label: "Settings",
    },
  
  ];
  