import {
  mdiAccountCircle,
  mdiHelpCircle,
  mdiLock,
  mdiSquareEditOutline,
  mdiMenuOpen,
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
  mdiPencil,
  mdiEraser,
  mdiMarker,
  mdiFormatColorFill,
  mdiCursorDefaultOutline
} from "@mdi/js";

export default [
  {
    to: "",
    label: "Move",
    icon: mdiCursorDefaultOutline,
    id: 1
  },
  {
    to: "",
    label: "Pencil",
    icon: mdiPencil,
    id: 2
  },
  {
    to: "",
    label: "Highlighter",
    icon: mdiMarker,
    id: 3
  },
  {
    to: "",
    label: "Import PDF",
    icon: mdiFilePdfBox,
    id: 4
  },
  {
    to: "",
    label: "Eraser",
    icon: mdiEraser,
    id: 5
  },
  {
    to: "",
    label: "Text on paths",
    icon: mdiPalette,
    id: 6
  },
  {
    to: "",
    label: "Minimap",
    icon: mdiBarcode,
    id: 7
  },
  {
    label: "Custom Controls",
    icon: mdiFormDropdown,
    menu: [
      {
        label: "Render and Actions",
      },
      {
        label: "Polygon",
      },
    ],
  },
  {
    to: "",
    label: "Stroke Uniform Property",
    icon: mdiAccountCircle,
  },
  {
    to: "",
    label: "Superscript/Subscript",
    icon: mdiLock,
  },
  {
    to: "",
    label: "Event Inspector",
    icon: mdiSquareEditOutline,
  },
  {
    to: "",
    label: "Realtime lanczos",
    icon: mdiSquareEditOutline,
  },
  {
    to: "",
    label: "Loading custom fonts",
    icon: mdiSquareEditOutline,
  },
  {
    to: "",
    label: "Copy and Paste",
    icon: mdiSquareEditOutline,
  },
  {
    to: "",
    label: "Manage selection",
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
        to: "",
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
        to: "",
        label: "Whiteboard",
        icon: mdiOpenInNew,
      },
    ],
  },
  {
    to: "",
    label: "Touch Events",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "HTML5<video>",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Matrix Transformation",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "SVG Caching",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Animated Sprite",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Control Customization",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Free Drawing",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Intersection",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Clipping",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Dynamic Patterns",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Solar System",
    icon: mdiFastForwardOutline,
    id:14
  },
  {
    to: "",
    label: "Shadows",
    icon: mdiBook,
  },
  {
    to: "",
    label: "Patterns",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Animating Polygon Points",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Objects Bounding Rectangles",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "1000 particles",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "per-pixel drag & drop",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Rendering Many Objects",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Animation Easing",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Interaction with objects outside canvas",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Quadratic Curve",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Static Canvas",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Image Filters",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Standalone Controls",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "SVG Rendering",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Stickman",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Polaroid",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Opacity Mouse Move",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Sliding Ladybugs",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Kitchensink",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Hovering",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Customization",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Animating Crosses",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "Copy",
    icon: mdiAccountCircle,
    id: 8
  },
  {
    to: "",
    label: "Paste",
    icon: mdiLock,
    id: 9
  },
  {
    to: "",
    label: "Discard Selection",
    icon: mdiSquareEditOutline,
    id: 10
  },
  {
    to: "",
    label: "Group",
    icon: mdiSquareEditOutline,
    id: 11
  },
  {
    to: "",
    label: "Ungroup",
    icon: mdiSquareEditOutline,
    id: 12
  },
  {
    to: "",
    label: "Edit polygon",
    icon: mdiSquareEditOutline,
    id: 13
  },
];
