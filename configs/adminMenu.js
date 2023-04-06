import { mdiLogout, mdiThemeLightDark, mdiHelpCircleOutline } from "@mdi/js";

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
  },
  {
    icon: mdiHelpCircleOutline,
    label: "About",
    href: "",
    isDesktopNoLabel: true,
  },
  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
