import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiHelpCircleOutline,
  mdiOpenInNew,
} from "@mdi/js";

export default [
  {
    label: "Paathshala education",

  },
  {
    label: "All Courses",
    to: "/examportal/learner/AllCourses",



  },
  {
    label: "My Dashboard",
    to: "/examportal/learner/Dashboard",

  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Account",
        to: "/examportal/learner/profile",
      },
      {
        icon: mdiOpenInNew,
        label: "Support",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true,
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
];
