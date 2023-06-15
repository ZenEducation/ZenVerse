<template>
  <div class="text-[#7d7d7d]">
    <exam-nav />
    <div class="side-bar pt-[60px] h-[100vh] float-left">
      <div class="max-h-[418px]">
        <header
          class="uppercase text-[16px] text-[#808080] font-semibold py-2.5 px-5"
        >
          Quiz Maker
        </header>

        <ul>
          <li
            class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow"
            @click="addSection"
          >
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Add section
          </li>

          <li class="border-l-[3px] border-[#ffcc80] rounded-sm box-shadow">
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Test attachments
          </li>

          <!-- groups -->
          <p class="list-lable">Groups</p>
          <li class="border-l-[3px] border-[#47B9F8] rounded-sm box-shadow">
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Group questions
          </li>

          <!-- questions -->
          <p class="list-lable">questions</p>
          <li class="border-l-[3px] border-[#c38aff] rounded-sm box-shadow">
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Multiple choice
          </li>
          <li class="border-l-[3px] border-[#EF9A9A] rounded-sm box-shadow">
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Numerical
          </li>
          <li class="border-l-[3px] border-[#FFCC80] rounded-sm box-shadow">
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Essay
          </li>
          <li class="border-l-[3px] border-[#a266cc] rounded-sm box-shadow">
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Fill in the blanks
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="bottom-side-nav">
            <a href="">Groups</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Export questions</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">All questions</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Import from pool</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Import</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Settings</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Publish status</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="pt-[88px] px-[15px] ml-[200px] h-screen overflow-y-scroll scroll-m-0 aside-scrollbars-light bg-[#ededed]"
    >
      <div class="mt-5 flex justify-between">
        <p
          class="text-[16px] text-[#808080] lowercase font-semibold ml-[9.5px]"
        >
          chemistry
        </p>
        <p
          class="text-[14px] text-[#b7b9be] lowercase font-semibold mr-[9.5px]"
        >
          {{ sections }} sections {{ questions }} questions
        </p>
      </div>

      <div>
        <div class="section">Instruction</div>
        <div class="section flex items-center border-l-[3px] border-[#FFB11B]">
          Test Attachments

          <img
            class="w-[16px] h-[18px] mx-8"
            src="@/images/others/delete.svg"
            alt=""
          />
        </div>
        <VueDraggableNext
          :list="items"
          tag="body"
          class="dragArea list-group w-full"
        >
          <div
            class="section-add m-3 pb-[1px]"
            v-for="(i, index) in items"
            :key="index"
          >
            <div
              @click="dropdown[index] = !dropdown[index]"
              class="p-5 flex justify-between"
            >
              {{ i.SectionName }}
              <div class="flex items-center">
                <button class="lr-btn px-5">EDIT</button>
                <!-- add delete btn -->
                <img
                  class="w-[16px] h-[18px] ml-5"
                  src="@/images/others/delete.svg"
                  alt=""
                />

                <p class="text-[13px] px-5">{{ sectionquestions }} questions</p>
                <!-- add arror -->
                <img
                  class="collapse-status-668700"
                  id="collapse-status"
                  style="margin: 2px 20px 0 15px; width: 8px"
                  src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_collapse.svg"
                />
              </div>
            </div>

            <Transition name="slider">
              <div
                v-if="dropdown[index]"
                class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#fff8e0] text-center m-[3px]"
              >
                Drag and Drop new question
              </div>
            </Transition>
          </div>
        </VueDraggableNext>

        <div
          class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#f0f8e8] text-center m-3"
        >
          Drag and Drop new question
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExamNav from "~~/components/ExamPortal/Exam/Exam-Nav.vue";
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
const items = ref([
  {
    SectionName: "section 1",
  },
  {
    SectionName: "section 2",
  },
  {
    SectionName: "section 3",
  },
  {
    SectionName: "section 4",
  },
  {
    SectionName: "section 5",
  },
  {
    SectionName: "section 6",
  },
  {
    SectionName: "section 7",
  },
  {
    SectionName: "section 8",
  },
  {
    SectionName: "section 9",
  },
  {
    SectionName: "section 10",
  },
]);

const dropdown = ref([]);
const sections = ref(2);
const questions = ref(0);
const sectionquestions = ref(0);

const addSection = () => {
  let newobj = {
    SectionName: "New Section",
  };
  items.value.push(newobj);
};
</script>

<style>
.section {
  font-size: 16px;
  color: #7d7d7d;
  background-color: #fff;
  padding: 20px;
  margin: 12px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.section:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 24%);
}

.section-add {
  font-size: 16px;
  color: #7d7d7d;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-radius: 2px;
  cursor: pointer;
}

.section-add:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 24%);
}

li {
  display: flex;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  font-weight: 400;
  height: 32px;
  list-style: none;
  padding: 2px;
  font-size: 12px;
  text-align: left;
  width: 167px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.box-shadow {
  margin: 6px 20px 15px;
  box-shadow: 0 1px 1px 0 rgb(133 133 133 / 30%), 0 0 0 1px rgb(49 115 221 / 3%);
}

.side-bar {
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 6%);
  max-width: 200px;
  background: white;
}

.list-lable {
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 400;
  padding: 0 20px;
  text-transform: capitalize;
}

.bottom-side-nav {
  width: 100%;
  border-bottom: 1px solid rgba(199, 199, 199, 0.2);
  cursor: pointer;
}

.bottom-side-nav a {
  margin-top: 0 !important;
  padding: 8px 20px;
  color: #7d7d7d;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.lr-btn {
  font-size: 12px;
  color: #b3b3b3 !important;
  padding: 1px 6px;
  border: 1px solid rgba(199, 199, 199, 0.2);
  background-color: #f7f7f7;
  font-weight: 600;
  font-style: normal;
  line-height: 22.5px;
}
</style>
