<script setup>


import SectionMain from "@/components/LMS/SectionMain.vue";
import { onMounted } from 'vue';
import pdfMake from "pdfmake/build/pdfmake";

const generatePDF = () => {
  const docDefinition = {
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: [ '*', 'auto', 100, '*' ],
          body: [
            [ 'First', 'Second', 'Third', 'The last one' ],
            [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
            [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
          ]
        }
      }
    ]
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);

  pdfDocGenerator.getBlob((blob) => {
    const fileURL = URL.createObjectURL(blob);
    const iframe = document.getElementById('pdf-iframe');
    iframe.src = fileURL;
  });
};




onMounted(() => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js';
      script.async = true;
      script.onload = () => {
        const pdfFontsScript = document.createElement('script');
        pdfFontsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js';
        pdfFontsScript.async = true;
        pdfFontsScript.onload = () => {
          generatePDF();
        };
        document.head.appendChild(pdfFontsScript);
      };
      document.head.appendChild(script);
    });


</script>

<template>
  <div>
    <NuxtLayout name="pdf">
      <LMSPdfViewSectionCarrier>
        <h1>hello</h1>
        <iframe id="pdf-iframe"  class="pl-4 w-full h-full"> this is div area  </iframe>
      </LMSPdfViewSectionCarrier>
    </NuxtLayout>
  </div>
</template>

