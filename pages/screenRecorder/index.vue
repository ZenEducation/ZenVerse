<template>
  <div class="title">
    <p>Screen Recorder View</p>
    <button @click="getStream" v-if="!isRecording">Start Recording</button>
    <button @click="stopStream" v-else>Stop Recording</button>
    <button @click="downloadRecording" v-if="fileReady">
      Download Recording
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRecording: false,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: "video/webm",
      },
      displayOptions: {
        video: { cursor: "always" },
        audio: {
          echoCancellation: true,
          nosieSuppression: true,
          sampleRate: 44100,
        },
      },
      mediaRecorder: {},
      stream: {},
      recordedChunks: [],
      file: null,
      fileReady: false,
    };
  },
  methods: {
    setFile() {
      this.file = new Blob(this.recordedChunks, {
        type: "video/webm",
      });
      this.fileReady = true;
    },
    handleAvailableData(e) {
      if (e.data.size > 0) {
        this.recordedChunks.push(e.data);
        this.isRecording = false;
        this.setFile();
      }
    },
    downloadRecording() {
      const url = URL.createObjectURL(this.file);
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.style = "display: none";
      link.href = url;
      link.download = new Date().toUTCString() + ".webm";
      link.click();
      window.URL.revokeObjectURL(url);

      this.recordedChunks = [];
      this.fileReady = false;
    },
    async getStream() {
      try {
        this.stream = await navigator.mediaDevices.getDisplayMedia(
          this.displayOptions
        );
        this.mediaRecorder = new MediaRecorder(this.stream, this.options);
        this.mediaRecorder.ondataavailable = this.handleAvailableData;
        this.mediaRecorder.start();
        this.isRecording = true;
      } catch (e) {
        this.isRecording = false;
        this.stopStream();
        alert(e);
      }
    },
    stopStream() {
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
      this.stream.getTracks().forEach((t) => t.stop());
    },
  },
};
</script>

<style>
.title {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  font-size: x-large;
}
button {
  display: inline;
  background: #0faf87;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 22px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 20px;
}
</style>
