<template>



        <div class="question-type mt-4">
   
          <div v-if="source.method == 'single'">
            Chose only One best answer
          </div>
          <div v-else>Chose ALL answers that apply</div>
        </div>
          <div class="choices_container " >
            <div
              class="choices flex my-3 border border-slate-300 cursor-pointer"
              v-for="(option, idx) in currentChoices"
              :key="idx"
              @click="selectAnswer(option)"
              :class="[{ active_option: option.selected }]"
            >
              <!-- :class="[
                { active_option: activeOption && activeOptionId == option.id },
              ]" -->
              <div
                class="choiceId flex-none w-14 h-14 bg-gray-300 dark:bg-slate-600 flex justify-center items-center"
              >
                {{ option.id }}
              </div>
              <div
                class="choice_test grow h-14 flex justify-start items-center px-2"
                v-html="option.option"
              ></div>
              <div
                class="icons flex-none w-14 h-14 flex justify-center items-center"
              ></div>
            </div>
        
       

 
  
       
  
  
    
    

    
    </div>
  </template>
  
  <script setup>
const emit = defineEmits(['onAction'])
  import { computed ,ref,reactive,onMounted,onUpdated} from "vue";
  const props = defineProps({
    source: {
      type: Object,
      default: {},
      required: true,
    },
  });
  // dummy data

  // variables


   


  const currrentQuizId = ref(0);
  const currentQuiz =ref(null);
  const currentChoices = ref(null);
  onMounted(() => {
    currentQuiz.value= props.source;
    currentChoices.value= props.source.choices;
})
onUpdated(()=>{
  currentQuiz.value= props.source;
    currentChoices.value= props.source.choices;
})

  const chosedOptions = ref(null);
  const activeOption = ref(false);
  const activeOptionId = ref(null);
  const confirmButtonShown = ref(false);

  // select options
  const selectAnswer = (option) => {
    chosedOptions.value = null;
    chosedOptions.value = option;
    activeOption.value = true;
    activeOptionId.value = option.id;
    confirmButtonShown.value = true;
    // if quiz is multiple select option type the update the options
    if (currentQuiz.value.method == "multiple") {
      currentChoices.value = currentChoices.value.map((chose) => {
        if (chose.id == option.id) {
          if (chose.selected == true) {
            chose.selected = false;
          } else {
            chose.selected = true;
          }
        }
        return chose;
      });
  

    }
    // if only one select type quiz
    else {
      currentChoices.value = currentChoices.value.map((chose) => {
        if (chose.id == option.id) {
          chose.selected = true;
        } else {
          chose.selected = false;
        }
        return chose;
      });

    
    }

    emit('onAction') 
  };
  


  

  

  </script>
  
  <style scoped>
  .main_container {
    padding-bottom: 10% !important;
    min-height: 100%;
  }
  .choices:hover {
    border-color: #293e6e !important;
  }
  .choices:hover .choiceId {
    background: #293e6e !important;
    color: white;
  }
  
  .active_option {
    border-color: #293e6e !important;
  }
  .active_option .choiceId {
    background: #293e6e !important;
    color: white;
  }
  
  .incurrect_ans {
    background: #dd412d;
  }
  .currectAns {
    background: #3d813e;
  }
  
  hr {
    border: 1px solid rgb(153, 153, 153);
    border-radius: 5px;
  }
  </style>
  