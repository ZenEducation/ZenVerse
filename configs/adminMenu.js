import { mdiMenu, mdiThemeLightDark } from "@mdi/js";
export default [
  {
    label: "Curriculum",
  },
  {
    label: "Bulk importer",
  },
  {
    label: "Settings",
  },
  {
    label: "Drip",
  },
  {
    label: "Pricing",
  },
  {
    label: "After purchase",
  },
  {
    label: "Publish",
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true,
    isAdditional: true,
  },

  {
    icon: mdiMenu,
    label: "Preview",
    isAdditional: true,
    menu: [
      {
        label: "ALL COURSES ONLINE",
      },
      {
        label: "COURSES AS AN ENROLLED STUDENTS",
      },
    ],
  },
];
