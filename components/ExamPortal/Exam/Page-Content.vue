<template>
    <div class="pt-[88px] px-[15px] ml-[200px] h-screen bg-[#ededed]">
          <div class="mt-5 flex justify-between">
              <p class="text-[16px] text-[#808080] lowercase font-semibold ml-[9.5px]">chemistry</p>
              <p class="text-[14px] text-[#b7b9be] lowercase font-semibold mr-[9.5px]">{{sections}} sections {{questions}} questions</p>
          </div>

          <div>
            <div class="section">Instruction</div>
            <div class="section flex items-center border-l-[3px] border-[#FFB11B]">
                Test Attachments

                <img class="w-[16px] h-[18px] mx-8" src="@/images/others/delete.svg" alt="">
            </div>

            <div class="section-add m-3 pb-[1px]">
                <div @click="dropdown = !dropdown" class="p-5 flex justify-between">
                   Section 1
                  <div class="flex items-center">
                      <button class="lr-btn px-5">EDIT</button>
                      <!-- add delete btn -->
                     <img class="w-[16px] h-[18px] ml-5" src="@/images/others/delete.svg" alt="">

                      <p class="text-[13px] px-5">{{sectionquestions}} questions</p>
                      <!-- add arror -->
                      <img class="collapse-status-668700" id="collapse-status" style="margin: 2px 20px 0 15px; width: 8px;" src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_collapse.svg">
                  </div>
                </div>

                <Transition name="slider">
                <div v-if="dropdown" class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#fff8e0] text-center m-[3px]">
                    Drag and Drop new question
                </div>
                </Transition>
            </div>

            <div class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#f0f8e8] text-center m-3">
                Drag and Drop new question
            </div>

          </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
setup(){
    const dropdown = ref(false)
const sections = ref(2)
const questions = ref(0)
const sectionquestions = ref(0)

return{dropdown, sections, questions, sectionquestions}
}
}
</script>