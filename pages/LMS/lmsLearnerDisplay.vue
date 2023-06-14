<script setup>

const layout = 'lmslearnerdisplay'
// const layout = 'pdf'

// import SectionMain from "@/components/LMS/SectionMain.vue";
import { onMounted,computed } from 'vue';
// import pdfMake from "pdfmake/build/pdfmake";
import {pdfViewerStore} from "~/stores/lmsLearnerDisplay.js"
const allPdfData = pdfViewerStore()
import pdfView from "../../components/LMS/PdfView.vue"
import audioView from "../../components/LMS/AudioView.vue"
import videoView from "../../components/LMS/VideoView.vue"
import RichTextView from "../../components/LMS/RichTextView.vue"
import QuizView from "../../components/LMS/QuizView.vue"
import PPTView from "../../components/LMS/PPTView.vue"
const file = computed(()=>{
  return allPdfData.currentPDF
})


// console.log(allPdfData.currentPDF)
// const generatePDF = () => {
//   const docDefinition = {
//     content: [
//       {
//         layout: 'lightHorizontalLines',
//         table: {
//           headerRows: 1,
//           widths: [ '*', 'auto', 100, '*' ],
//           body: [
//             [ 'First', 'Second', 'Third', 'The last one' ],
//             [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
//             [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
//           ]
//         }
//       }
//     ]
//   };

//   const pdfDocGenerator = pdfMake.createPdf(docDefinition);

//   pdfDocGenerator.getBlob((blob) => {
//     const fileURL = URL.createObjectURL(blob);
//     const iframe = document.getElementById('pdf-iframe');
//     iframe.src = fileURL;
//   });
// };


// onMounted(() => {
//       const script = document.createElement('script');
//       script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js';
//       script.async = true;
//       script.onload = () => {
//         const pdfFontsScript = document.createElement('script');
//         pdfFontsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js';
//         pdfFontsScript.async = true;
//         pdfFontsScript.onload = () => {
//           generatePDF();
//         };
//         document.head.appendChild(pdfFontsScript);
//       };
//       document.head.appendChild(script);
//     });




</script>

<template>
  <div>
    <NuxtLayout  :name="layout">
      <LMSPdfViewSectionCarrier>
        <pdfView :source="allPdfData.currentPDF" v-if="file.type=='pdf'"  />
        <audioView  :source="allPdfData.currentPDF" v-if="file.type=='audio'" />
        <videoView  :source="allPdfData.currentPDF" v-if="file.type=='video'" />
        <RichTextView :source="allPdfData.currentPDF" v-if="file.type=='text'" />
        <QuizView :source="allPdfData.currentPDF" v-if="file.type=='quiz'" />
        <PPTView :source="allPdfData.currentPDF" v-if="file.type=='ppt'" />

        
      </LMSPdfViewSectionCarrier>
    </NuxtLayout>
  </div>
</template>

