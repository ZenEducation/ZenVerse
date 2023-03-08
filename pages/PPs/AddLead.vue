
<script>
import SectionMain from "@/components/Sections/SectionMain.vue";
import AddLeadForm from "@/components/AddLead/AddLeadForm.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {
  mdiBallotOutline,
  mdiCreditCardOutline,
} from "@mdi/js";

</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionTitleLineWithButton
               :icon="mdiBallotOutline"
               title="Advanced forms example"
               main
             >
               <BaseButton
                 href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
                 label="Buy dashboard"
                 :icon="mdiCreditCardOutline"
                 color="contrast"
                 rounded-full
                 small
          />
        </SectionTitleLineWithButton>
            <SectionMain>
                <AddLeadForm />
            </SectionMain>
        </NuxtLayout>
    </div>
</template>