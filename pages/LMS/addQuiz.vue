<script setup>
import { ref, reactive, onMounted } from "vue";
import {
    mdiBallot,
    mdiAccount,
    mdiCreditCardOutline,
    mdiFileUploadOutline,
    mdiDragVertical,
    mdiTrashCanOutline,
    mdiDotsVertical,
} from "@mdi/js";

import SectionMain from "@/components/Sections/SectionMain.vue";

import CardBox from "@/components/Cards/CardBox.vue";

import PremFormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "~~/components/Forms/FormCheckRadio.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormUploadFiles from "@/components/LMS/FormUploadFiles.vue";
import Uploadtext from "@/components/LMS/Uploadtext.vue";
import SeclectionMultipleButton from "@/components/Sections/SeclectionMultipleButton.vue";
import QuilEditor from "@/components/LMS/QuilEditor.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue"
import SectionTitle from "@/components/Sections/SectionTitle.vue"
import PremFormControlListbox from "~~/components/Forms/PremFormControlListbox.vue";



const options = ref([
    { id: 1, option: "option1" },
    { id: 2, option: "option2" },

])

const totaloptions = ref([]);
onMounted(() => {
    totaloptions.value = options.value.map(item => ({
        id: item.id,
        name: `Transformed ${item.option}`
    }));
});

const header = computed(() => {
    if (inputValue.value) {
        return `${inputValue.value}`;
    } else {
        return "Untitled Quiz";
    }
});
const inputValue = ref("");
const contentValue = ref("");
const questionVal = ref("")
const uploadQuestion = ref(false)

const question = computed(() => {
    if (questionVal.value) {
        return `${questionVal.value}`;
    } else {
        return "What is your Question?";
    }
})

const upload = () => {
    uploadQuestion.value = !uploadQuestion.value
}


const addOption = () => {
    const newOptionId = options.value.length + 1;
    const newOption = {
        id: newOptionId,
        option: `option${newOptionId}`,
    };
    options.value.push(newOption);
    totaloptions.value.push({
        id: newOption.id,
        name: `Transformed ${newOption.option}`,
    });
};
const deleteOption = (index) => {
    options.value.splice(index, 1);
    totaloptions.value.splice(index, 1);
    // Rearrange numbering
    totaloptions.value.forEach((option, i) => {
        option.id = i + 1;
        option.name = `Transformed option${option.id}`;
    });
};

const questionType = ref("onecorrect");



</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SeclectionMultipleButton :icon="mdiFileUploadOutline" :title="header" main>
                    <BaseButton label="DISCARD CHANGES" :icon="mdiCreditCardOutline" rounded-full small />
                    <BaseButton label="SAVE" :icon="mdiCreditCardOutline" color="contrast" rounded-full small />
                </SeclectionMultipleButton>

                <div class="grid grid-cols-1 gap-6 mb-6">
                    <CardBox :icon="mdiBallot" class="mb-6 lg:mb-0 xl:col-span-3" is-form @submit.prevent="submit">
                        <PremFormField label="Title" horizontal>
                            <FormUploadFiles v-model="inputValue" :icon-left="mdiAccount" help="Title" />
                        </PremFormField>

                    </CardBox>
                    <div class="flex flex-col">
                        <CardBox>
                            <div class=" flex">
                                <SectionTitleLineWithButton :title="'Question#1 ' + question">

                                </SectionTitleLineWithButton>

                            </div>
                            <PremFormField label="Question Type" horizontal>
                                <select name="questiontype" v-model="questionType" id="questiontype">
                                    <option value="onecorrect">One Correct Answer</option>
                                    <option value="multiplecorrect">Multiple Correct Answers</option>
                                </select>
                            </PremFormField>

                            <PremFormField label="Question" horizontal>
                                <QuilEditor v-model="questionVal"></QuilEditor>
                            </PremFormField>


                            <div v-if="questionType == 'onecorrect'" class="my-2"
                                v-for="(totaloption, index) in totaloptions" :key="totaloption.id">
                                <PremFormField :label="'Choice ' + totaloption.id">
                                    <QuilEditor />

                                </PremFormField>
                                <input type="radio" name="option" id="'option' + totaloption.id">
                                <label for="'option' + totaloption.id" class="ml-2">This is the Correct Answer</label>
                                <br>
                                <button @click="deleteOption(index)">Delete</button>
                            </div>
                            <div v-else class="my-2" v-for="(totaloption, index) in totaloptions" :key="index">
                                <PremFormField :label="'Choice ' + totaloption.id">
                                    <QuilEditor />

                                </PremFormField>
                                <input type="checkbox" class="rounded-3xl" name="'option' + totaloption.id"
                                    id="'option' + totaloption.id">
                                <label for="'option' + totaloption.id" class="ml-2">This is the Correct Answer</label>
                                <br>
                                <button @click="deleteOption(index)">Delete</button>
                            </div>
                            <button @click="addOption" class=" bg-blue-700 p-3 rounded-md text-white">Add Choice</button>
                            <PremFormField label="Explanation" horizontal>
                                <QuilEditor />
                            </PremFormField>
                        </CardBox>
                        <div class="flex my-5 gap-3">
                            <button class=" bg-blue-700 p-3 rounded-md text-white">Add Question</button>
                            <button @click="upload"
                                class=" bg-white border border-blue-700 p-3 rounded-md text-blue-700">Import More
                                Questions</button>
                        </div>
                        <CardBox v-show="uploadQuestion">
                            <PremFormField label="" horizontal >
                                <Uploadtext pdffile downloadlist :icon="mdiDragVertical" :iconRight="mdiTrashCanOutline"
                                    dragText="Drag & Drop an XLSX file to import"  :icon-left="mdiAccount"
                                    help="Upload a video file" placeholder="Upload a video file" />
                            </PremFormField>
                        </CardBox>
                    </div>

                </div>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>


  

