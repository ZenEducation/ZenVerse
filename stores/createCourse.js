import { defineStore } from "pinia";



export const state = () => ({
section:"first",
newChapter:{
    name:"",
    lessons:[]
},

allChapters:[],
currentChapter:null
});
const getters = {
//    allItems: (state) => state.allPDFData,
currentChapterItem: (state) => state.currentChapter

};

export const actions = {

    // show chapter name section
showAddChapterNameSection(){
        this.section="add-chapter"
    },
    // add chapter name
    addChapterName(name){
      
        this.newChapter.name=name
    },

    // update chapter
    updateChapterName(item){
      this.allChapters.map((data)=>{
        if(data.id==item.id){
            data.name=item.name
        }
        return data
      })
   
    },

    // delete chapter 
   deleteChapter(item){
    this.allChapters.splice(item, 1)
   },

   // selected chapter 
   selectedChapter(item){
    this.currentChapter = item
    console.log(item)
   },
    // show lesson types 
    showLessonType(){
        this.section="lesson-type"
    },


    // show chapter add item 
    showChapterAddItem(item){

         this.section=item 
         
    },

    // add chapter item
    addLessonsItem(item){
       this.allChapters.push(item)
    },

    //add lessons on the chapters 

    addLessonsOnChapters(lesson){
      this.allChapters.map((item)=>{
        if(item.id===this.currentChapterItem.id){
          if(item.lessons==undefined){
            item.lessons=[]
            item.lessons.push(lesson)
          } else {
            item.lessons.push(lesson)
          }
        }
        return item 
      })
      console.log(this.allChapters)
    },

    



};

export const createCourse = defineStore("createCourse", {
  state,
  getters,
  actions,
});
