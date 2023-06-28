<template>
  <div
    class="fixed popupContainer text-center h-full w-full flex justify-center items-center"
  >
    <div class="w-12/12 sm:w-5/12  h-fit bg-white dark:bg-slate-900 text-left px-5">
      <div class="text-right pt-4">
        <BaseIcon
          :path="mdiCloseThick"
          class="cursor-pointer mr-1 text-gray-600 dark:text-gray-500"
          size="24"
          h="24"
          w="24"
          @click="closePopup"
        />
      </div>

      <div
        class="
  "
      >
        <div class=""></div>
        <div class="">
          <div :class="value.status">
            <select
              v-model="value.status"
              id="underline_select"
              class="w-full py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer teachingDropdown"
              :class="value.status"
            >
              <option value="Revising" class="Revising px-3">Revising</option>
              <option value="Completed" class="redText Completed">
                Completed
              </option>
              <option value="on it" class="blueText On It">On It</option>
              <option value="Assigned-Not Started" class="Assigned">
                Assigned - Not Started
              </option>
              <option value="Unassigned" class="Unassigned">Unassigned</option>
            </select>
          </div>
          <div class="mt-3">
            Progress : {{ progressText }} 
          </div>
      

          <div class="">
            <input
              help=""
              placeholder=""
              type="range"
              min="1"
              max="5"
              step="1"
              v-model="progressValue"
              class="w-full mt-3"
              @change="progressChange"
            />
          </div>
          <div class="">
            <a :href="value.link" target="_blank">
              {{ value.link }}
            </a>
          </div>

          <div class="mt-4">
            <div class="flex justify-start items-center">
              <div class="">Assigned On :</div>
              <div class="ml-3">
                <PremFormControl help="" placeholder="" type="date" />
              </div>
            </div>
            <div class="flex justify-start items-center mt-3">
              <div class="">Due On :</div>
              <div class="ml-12">
                <PremFormControl help="" placeholder="" type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- commends -->
      <div class="flex mt-5 items-center justify-between">
        <div class="grow">
          <PremFormControl help="" placeholder="Add Comment..." class=""
          v-model="comment"
          />
        </div>
     
        <div class="w-15 ml-1">
          <BaseButton
            label="Add"
            type="button"
            color="info"
            class="uppercase py-2"
            :style="[]"
            @click="addCommands"
          />
        </div>
      </div>

      <div class="mt-5 mb-5">
        <div class="">Commands :</div>
        <div class="mt-3" v-for="(cmd,idx) in comments" :key="idx" >{{ idx+1 }}. {{ cmd }}</div>
     
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  mdiChevronDown,
  mdiMenuDown,
  mdiContentSave,
  mdiDeleteOutline,
  mdiTable,
  mdiCloseThick,
} from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import { ref, onMounted } from 'vue'
const emit = defineEmits(["close"]);
const props = defineProps(["value"]);

const closePopup = () => {
  emit("close");
};

const progressValue = ref(null);
const pregreessitem = props.value.status;
const progressText = ref(pregreessitem);


onMounted(() => {
 if(progressText.value == "Revising")
 {
  progressValue.value=4
 }
 if(progressText.value == "Completed")
 {
  progressValue.value=5
 }
 if(progressText.value == "on it")
 {
  progressValue.value=3
 }
 if(progressText.value == "Assigned-Not Started")
 {
  progressValue.value=2
 }
 if(progressText.value == "Unassigned")
 {
  progressValue.value=1
 }
})

const progressChange = () => {
  if (progressValue.value == 5) {
    progressText.value = "Completed";
  }
  if (progressValue.value == 4) {
    progressText.value = "Revising";
    
  }
 
  if (progressValue.value == 3) {
    progressText.value = "on it";
  }
  if (progressValue.value == 2) {
    progressText.value = "Assigned-Not Started";
  }
  if (progressValue.value == 1) {
    progressText.value = "Unassigned";
  }
};


const comment=ref(null)
const comments = ref(['Sample comments'])

const addCommands=()=>{
  comments.value.push(comment.value)
  console.log(comment.value)
}

</script>
<style scoped>
.popupContainer {
  background: rgba(0, 0, 0, 0.514);
  width: 100% !important;
  height: 100vh !important;
  z-index: 50;
}

.Completed {
  color: #41bb41 !important;
  background: transparent !important;

  cursor: pointer;
}

.Progress,
.on {
  color: #f99a33;
  background: transparent !important;

  cursor: pointer;
}

.Unassigned {
  color: #ec6ab8;
  background: transparent !important;

  cursor: pointer;
}

.openPopup {
  position: fixed;
  top: 0;
  left: 0;
}

/* module  */
.Revising {
  color: #6d81ff;
  background: transparent !important;

  cursor: pointer;
}
.Assigned {
  color: grey;
  background: transparent !important;
  cursor: pointer;
}
</style>
