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
    mdiCalendar,
    mdiCommentQuestion,
    mdiAbTesting
  } from "@mdi/js";
  
  export default [
    {
      to: "/pdfView",
      icon: mdiMonitor,
      label: "Home",
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
  ];
  