<template>
  <div>
    <button @click="handleAuthClick" v-if="showAuthorizeButton" class="uploadBtn">or Upload from drive </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showAuthorizeButton = ref(false);
const showSignoutButton = ref(false);
const content = ref("");
const accessToken = ref(null);
const pickerInited = ref(false);
const gisInited = ref(false);
const Id = ref(null);
let tokenClient;

onMounted(() => {
  loadGapi();
  loadGis();
});

const loadGapi = () => {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/api.js";
  script.onload = gapiLoaded;
  document.head.appendChild(script);
};

const loadGis = () => {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.onload = gisLoaded;
  document.head.appendChild(script);
};

const gapiLoaded = () => {
  gapi.load("client:picker", initializePicker);
};

const initializePicker = async () => {
  await gapi.client.load(
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
  );
  pickerInited.value = true;
  maybeEnableButtons();
};

const gisLoaded = async () => {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id:
      "938500709126-l02obgosiitrkub48iob0bt0p8qmflfg.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/drive.file",
    callback: handleTokenResponse,
  });
  gisInited.value = true;
  maybeEnableButtons();
};

const maybeEnableButtons = () => {
  if (pickerInited.value && gisInited.value) {
    showAuthorizeButton.value = true;
  }
};

const handleTokenResponse = async (response) => {
  if (response.error !== undefined) {
    throw response;
  }
  accessToken.value = response.access_token;
  showSignoutButton.value = true;
  await createPicker();
};

const handleAuthClick = () => {
  if (accessToken.value === null) {
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    tokenClient.requestAccessToken({ prompt: "" });
  }
};

const createPicker = async () => {
  const view = new google.picker.View(google.picker.ViewId.DOCS);
  view.setMimeTypes("image/png,image/jpeg,image/jpg");
  const picker = new google.picker.PickerBuilder()
    .enableFeature(google.picker.Feature.NAV_HIDDEN)
    .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
    // .setDeveloperKey("AIzaSyAn46pdW9VX9zK_F-yEHOqAMzSJ-WpHbBo")
    .setAppId("938500709126")
    .setOAuthToken(accessToken.value)
    .addView(view)
    .addView(new google.picker.DocsUploadView())
    .setCallback(pickerCallback)
    .build();
  picker.setVisible(true);
};

const pickerCallback = (data) => {
  if (data.action === google.picker.Action.PICKED) {
    const document = data[google.picker.Response.DOCUMENTS][0];
    const url = document[google.picker.Document.URL];
    const id = document.id;
    content.value = url;
    Id.value = id;
    console.log(Id.value);
    // extractFile();
  }
};

// const extractFile = async () => {
//   try {
//     const fileId = Id.value;
//     const response = await gapi.client.drive.files.get({
//       fileId,
//       alt: "media", 
//     });

//     const blob = new Blob([response.body], {
//       type: response.headers["content-type"],
//     });
//     console.log(blob);
//     var fileContent = response.body;
//     console.log("File Content:", fileContent);
//   } catch (error) {
//     console.error("Error extracting file:", error);
//   }
// };
</script>

<style>
.uploadBtn{
  /* border: 1px solid black; */
  padding-inline: 16px;
  border-radius: 5px;
  color: rgb(72, 185, 226);
}
</style>
