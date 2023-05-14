<script setup>

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import SectionMain from "@/components/LMS/SectionMain.vue";


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

