<script setup>


import SectionMain from "@/components/LMS/SectionMain.vue";
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js';
  script.async = true;
  script.onload = () => {
    const pdfFontsScript = document.createElement('script');
    pdfFontsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js';
    pdfFontsScript.async = true;
    pdfFontsScript.onload = () => {
      // Your existing code for generating the PDF
      // ...
    };
    document.head.appendChild(pdfFontsScript);
  };
  document.head.appendChild(script);
});
onMounted(() => {
 
  {

var docDefinition = {
content: [
{
layout: 'lightHorizontalLines', // optional
table: {
  // headers are automatically repeated if the table spans over multiple pages
  // you can declare how many rows should be treated as headers
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
}
}
)


</script>

<template>
  <div>
    <NuxtLayout name="pdf">
      <SectionMain >
       
        <iframe id="pdf-iframe" width="100%" height="600" class = "pl-4">   </iframe>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

