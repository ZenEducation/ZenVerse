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
  mdiImport ,
  mdiDownloadBoxOutline
} from "@mdi/js";

export default [
  {
    to: "/",
    icon: mdiMonitor,
    label: "Home",
  },
  {
    to: "/dashboard",
    label: "UI Base",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/pps/tablesListsView",
    label: "Tables & Lists",
    icon: mdiTable,
    updateMark: "warning",
  },

  {
    to: "/pps/FormsView",
    label: "Forms Advanced",
    icon: mdiBallot,
  },

  {
    to: "/pps/uiView",
    label: "UI Advanced",
    icon: mdiViewQuilt,
  },
  {
    to: "/pps/styleView",
    label: "Stylize",
    icon: mdiPalette,
  },
  {
    to: "/pps/pricingView",
    label: "Pricing layout",
    icon: mdiBarcode,
  },
  {
    to: "/LMS/uploadfiles",
    label: "Add New Lesson",
    icon: mdiFilePdfBox,
  },
  {
    to: "/LMS/audiofile",
    label: "Add Audio",
    icon: mdiFilePdfBox,
  },
  {
    to: "/LMS/pdffiles",
    label: "Add Pdf",
    icon: mdiFilePdfBox,
  },
  {
    to: "/LMS/LMSStudent/lmsLearnerDisplay",
    label: "Pdf View",
    icon: mdiFilePdfBox,
  },
  {
    to: "/LMS/import",
    label: "Add Bulk Importer",
    icon: mdiImport,
  },
  {
    to: "/LMS/download",
    label: "Add Download",
    icon: mdiDownloadBoxOutline,
  },
  {
    label: "Dropdown",
    icon: mdiFormDropdown,
    menu: [
      {
        label: "Dropdown item Uno",
      },
      {
        label: "Dropdown item Dos",
      },
    ],
  },
  {
    to: "/pps/profileView",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/auth/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/auth/register",
    label: "Register",
    icon: mdiSquareEditOutline,
  },
  {
    // Key should be unique for each submenus object
    // It is required for open/close logic
    key: "submenus-1",
    label: "Sub",
    icon: mdiMenuOpen,
    menuSecondary: [
      {
        to: "/profile/profileView",
        label: "Sample RouterLink",
        icon: mdiCardAccountDetailsOutline,
      },
      {
        label: "External link",
        href: "",
        icon: mdiOpenInNew,
        target: "_blank",
      },
      {
        label: "Dropdown",
        icon: mdiFormDropdown,
        menu: [
          {
            label: "Dropdown item One",
          },
          {
            label: "Dropdown item Two",
          },
        ],
      },
      {
        to: "/whiteboard",
        label: "Whiteboard",
        icon: mdiOpenInNew,
      },
      {
        to: "/whiteboard/fabric",
        label: "Whiteboard Fabric",
        icon: mdiOpenInNew,
      },
    ],
  },
  {
    to: "/profile/messages",
    label: "Messages",
    icon: mdiMessage,
  },
  {
    to: "/auth/auth",
    label: "Authenticator",
    icon: mdiHelpCircle,
  },
  {
    to: "/admin/tasks",
    label: "AdminTasks",
    icon: mdiFastForwardOutline,
  },
  {
    to: "/pe/syllabus",
    label: "Syllabus",
    icon: mdiBook,
  },
  {
    to: "/pe/tasks",
    label: "PE Tasks",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },

  {
    to: "/LMS/LearnerMgmt",
    label: "Learner Management",
    icon: mdiAccountCircle,
  },

];
