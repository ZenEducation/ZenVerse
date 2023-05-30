import { defineStore } from "pinia";

// dummy pdf values
const dummyData = [
  {
    chapterNumber: 1,
    chapterTitle: "Introduction",
    lessons: [
      {
        lessonNumber: 1,
        lessonTitle: "Getting Started",
        lessonContent: "...",
        done: false,
        src: "https://www.africau.edu/images/default/sample.pdf",
      },
      {
        lessonNumber: 2,
        lessonTitle: "Basic Concepts",
        lessonContent: "...",
        done: false,
        src: "https://www.orimi.com/pdf-test.pdf",
      },
    ],
  },
  {
    chapterNumber: 2,
    chapterTitle: "Intermediate",
    lessons: [
      {
        lessonNumber: 1,
        lessonTitle: "Advanced Topics",
        lessonContent: "...",
        done: false,
        src: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
      },
      {
        lessonNumber: 2,
        lessonTitle: "Hands-On Exercises",
        lessonContent: "...",
        done: false,
        src: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
      },
    ],
  },
];

export const state = () => ({
  allPDFData: dummyData,
  currentChapter: dummyData[0],
  currentPDF: dummyData[0].lessons[0],
 
});
const getters = {
   allItems: (state) => state.allPDFData,

};

export const actions = {
  getCurrentPdf(pdf, chapter) {
    (this.currentPDF = pdf), (this.currentChapter = chapter);
  },
  markAsCompleted(pdf, chapter) {
    // mark as completed

    this.allPDFData = this.allPDFData.map((chapters) => {
      if (chapters.chapterNumber == chapter.chapterNumber) {
        chapters.lessons.map((lesson) => {
          if (lesson.lessonNumber == pdf.lessonNumber) {
            lesson.done = true;

            return lesson;
          }
        });
      }

      return chapters;
    });

    // get the next pdf

    const lastChapter =this.allPDFData[this.allPDFData.length - 1];
    const lastPdf=lastChapter.lessons[lastChapter.lessons.length - 1];

  

    if (
      chapter.lessons[chapter.lessons.length - 1].lessonNumber ==
      pdf.lessonNumber
    ) {
      console.log("last chapter");

      this.currentChapter = this.allPDFData.find(
        (item) => item.chapterNumber == chapter.chapterNumber + 1
      );
      console.log(this.currentChapter);
      this.currentPDF = this.currentChapter.lessons[0];
    } 

    
    else {
      this.currentPDF = chapter.lessons.find(
        (item) => item.lessonNumber == pdf.lessonNumber + 1
      );
    }
  },

  // // incomplete the pdf

  markAsInCompleted(pdf, chapter) {
    this.allPDFData = this.allPDFData.map((chapters) => {
      if (chapters.chapterNumber == chapter.chapterNumber) {
        chapters.lessons.map((lesson) => {
          if (lesson.lessonNumber == pdf.lessonNumber) {
            lesson.done = false;

            return lesson;
          }
        });
      }

      return chapters;
    });
  },
};

export const pdfViewerStore = defineStore("pdfStore", {
  state,
  getters,
  actions,
});
