<template>
  <div ref="pdfContent">
    <!-- Content to be included in the PDF -->
    <h1>PDF Content</h1>
    <p>This is an example PDF generated from a Vue component.</p>
    <button @click="generatePdf">Generate PDF</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

const pdfContent = ref(null);

const generatePdf = () => {
  const element = pdfContent.value;
  const opt = {
    margin: 0.5,
    filename: 'example.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(element).save();
};
</script>
