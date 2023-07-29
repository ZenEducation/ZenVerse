import { mdiFileImport, mdiExport } from "@mdi/js";

export const adminPanelButtonMenu = [
  [
    {
      id: 1,
      icon: mdiFileImport,
      label: "Import Learner data",
      description: "Add learner by uploading spreadsheet file",
    },
    {
      id: 2,
      icon: mdiExport,
      label: "Export",
      description: "Download data as spreadsheet file",
    },
  ],
];
