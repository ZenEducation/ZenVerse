<script setup>
    import { ref, watchEffect } from "vue";
import { createCourse } from "~~/stores/createCourse";

    import SectionMain from "@/components/Sections/SectionMain.vue";
    import CardBox from "@/components/Cards/CardBox.vue";
    import BaseDivider from "@/components/NavBar/BaseDivider.vue";
    import PremFormField from "@/components/Forms/FormField.vue";
    import PremFormControl from "@/components/Forms/FormControl.vue";
    import FormCheckRadioGroup from "~~/components/Forms/FormCheckRadioGroup.vue";
    import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
    import BaseButton from "~~/components/Buttons/BaseButton.vue";
    import SectionTitleLineWithButton from "~~/components/Sections/SectionTitleLineWithButton.vue";
    import { QuillEditor } from "@vueup/vue-quill";
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import { mdiTrashCan } from "@mdi/js";
    import Lessonsetting from "@/components/LMS/Admin/CreateCourse/lessonsetting.vue"


    const courseStore = createCourse();

    const draftOption = {
        one: "Draft"
    }

    const toolbarOptions = [
        [{'direction': 'rtl'}],
        [{'size': ['small', false, 'large', 'huge']}],
        [{'header':[1,2,3,4,5,6,false]}],
        [{'font': []}],
        [{'header':1},{'header':2}],
        [{'color':[]},{'background':[]}],
        ['bold','italic','underline','strike'],
        [{'script': 'sub'}, {'script': 'super'}],
        [{'list':'ordered'},{'list':'bullet'}],
        [{'align':[]}],
        [{'indent':'-1'},{'indent':'+1'}],
        ['blockquote'],
        ['image','video','link'],
        ['code-block'],
        ['clean']
    ]


    const newtitleText = ref('');
    const titleText = ref('');

    watchEffect(() => {
        if (titleText.value === ''){
            newtitleText.value = 'New Text Lesson';
        }else{
            newtitleText.value = titleText.value;
        }
    })
    
const saveData = ()=>{
    const data = {
        id:1,
        name:titleText.value,
        icon:"mdiText",
        type:"Text"
    }
  courseStore.addLessonsOnChapters(data)

}

</script>

<template>
    <div>
       
                <SectionTitleLineWithButton
                    main
                >
                    <BaseButtons>
                        <FormCheckRadioGroup
                        class="font-bold"
                        :options="draftOption"
                        style="transform: translateY(15%);"
                        />
                        <svg style="transform: translateY(-30%); margin-right: 25px; " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 7v2h2V7h-2m3 10v-2h-1v-4h-3v2h1v2h-1v2h4m8-5c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8Z"/></svg>
                        <BaseButton 
                            type="submit" 
                            color="info" 
                           
                            label="DISCARD CHANGES"
                            
                            outline/>
                        <BaseButton 
                            type="submit" 
                            color="info" 
                            label="SAVE"
                           @click="saveData()"
                            
                            /> 
                    </BaseButtons>
                </SectionTitleLineWithButton>
                <div class="gird gird-cols-1 gap-6 mb-6 xl:grid-cols-4">
                    <CardBox 
                        class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
                        if-from
                        @submit.prevent="submit"    
                    >
                        <h1 class="text-3xl text-dark-700">{{ newtitleText }}</h1>
                        <BaseDivider/>
                        <PremFormField label="Title">
                            <PremFormControl
                                v-model="titleText"
                                placeholder="New Text Lesson"
                            />
                        </PremFormField>
                        <PremFormField label="Content">
                            <QuillEditor style="min-height: 30vh;" theme="snow" :toolbar="toolbarOptions"/>
                        </PremFormField>
                        <BaseDivider/>
                    </CardBox>
                </div>
           
        <LessonSettings :lesson="{type:'Text'}" />
 
   
<Lessonsetting />
        
    </div>
</template>