<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue"
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiChartTimelineVariant, mdiMagnify } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import SvgIcon from "@jamescoyle/vue-icon"
import { mdiEye, mdiPen } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import { DataStore } from "@aws-amplify/datastore"
import { OfferLater } from "@/src/models/index.js"
import html2pdf from "html2pdf.js";


const searchquery = ref('');
const categoryFilter = ref('');
const isSendedFilter = ref('');




// const items = reactive(DummyData)
// const items = reactive([])
const items = ref([])
const Designation = ref([])

onMounted(() => {
    items.value = []
    handleGetData()
    getCategory()
})

const handleGetData = async () => {
    try {
        const offer = await DataStore.query(OfferLater);
        items.value = offer.sort((a, b) => b.OfferLaterNo - a.OfferLaterNo);
        const uniqueCategories = [...new Set(items.value.map(item => item.Designation))];
        console.log(uniqueCategories);
        Designation.value = uniqueCategories;
        console.log(Designation.value);

    } catch (err) {
        console.error(err);
    }
};

const getCategory = async () => {
    try {
        items.value.map((item) => {
            Designation.value.push(Designation.value.includes(item.Designation))
        })

    } catch (error) {
        console.error(error);
    }
}

const pdfContent = ref(null);
const pdfData = ref({
    name: '',
    designation: '',
    salary: 0,
    email: '',
    perTaskHour: '',
    additional: ''
})

const openPdf = async (id) => {
    window.alert("clicked")
    await items.value.map((item) => {
        if (item.id == id) {
            pdfData.value.name = item.Name
            pdfData.value.designation = item.Designation
            pdfData.value.salary = item.Salary
            pdfData.value.email = item.Email
            pdfData.value.perTaskHour = item.perTaskorHour
            pdfData.value.additional = item.AdditionalConditions
        }
    })
    const content = pdfContent.value;

    html2pdf()
        .from(content)
        .set({ margin: 20, filename: 'hee_hee.pdf', image: { type: 'jpeg', quality: 1 }, pagebreak: { mode: 'avoid-all', before: '#page2el' } })
        .outputPdf('blob')
        .then((pdfBlob) => {
            const blobURL = URL.createObjectURL(pdfBlob);
            window.open(blobURL, '_blank');
        })
        .catch((error) => {
            console.error('Error generating PDF:', error);
        });
}

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(4);

const currentPage = ref(0);

const checkedRows = ref([]);

const isCategoryDropdownOpen = ref(false);
const isPublishedDropdown = ref(false)

const toggleCategoryDropdown = () => {
    isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
    isPublishedDropdown.value = false;
    isSendedFilter.value = ""
};

const togglePublishedInput = () => {
    isPublishedDropdown.value = !isPublishedDropdown.value
    isCategoryDropdownOpen.value = false;
    categoryFilter.value = ""
    dateFilter.value = ""
};


const filteredItems = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedisSendedFilter = isSendedFilter.value.trim().toLowerCase();

    const data = items.value;
    if (trimmedSearchQuery) {
        const filteredData = data.filter((item) => {
            return (
                item.OfferLaterNo.toString().includes(trimmedSearchQuery) ||
                item.Name.toLowerCase().includes(trimmedSearchQuery) ||
                item.Email.toLowerCase().includes(trimmedSearchQuery)
            );
        });
        return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)));
    } else if (trimmedCategoryFilter) {
        const filteredData = data.filter((item) => {
            return (
                item.Designation.toLowerCase().includes(trimmedCategoryFilter)
            )
        });
        return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)));
    } else if (trimmedisSendedFilter) {
        const filteredData = data.filter((item) => {
            return (
                item.isSended.toString().toLowerCase().includes(trimmedisSendedFilter)
            )
        });
        return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)))
    } else {
        return data.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)));
    }
});

watch(searchquery, () => {
    currentPage.value = 0;
});



//Pagination Function
//for pages in pagination based on data max 4 data will show per page
const numPages = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedisSendedFilter = isSendedFilter.value.toLowerCase();

    const data = items.value;
    let filteredData = data;


    if (trimmedSearchQuery) {
        filteredData = data.filter((item) => {
            return (
                item.OfferLaterNo.toString().includes(trimmedSearchQuery) ||
                item.Name.toLowerCase().includes(trimmedSearchQuery) ||
                item.Email.toLowerCase().includes(trimmedSearchQuery)

            );
        });
    }
    if (trimmedCategoryFilter) {
        filteredData = data.filter((item) => {
            return (

                item.Designation.toLowerCase().includes(trimmedCategoryFilter)
            )
        });
    }
    if (trimmedisSendedFilter) {
        filteredData = data.filter((item) => {
            return (
                item.isSended.toString().toLowerCase().includes(trimmedisSendedFilter)
            )
        });

    }


    return Math.ceil(filteredData.length / perPage.value);

});



const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});

const clearResult = () => {
    searchquery.value = ""
    categoryFilter.value = ""
    isSendedFilter.value = ""
    isCategoryDropdownOpen.value = false;
    isPublishedDropdown.value = false;
}
</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="All Testimonial" main>

                    <NuxtLink to="/offer/createoffer"><button
                            class="w-36 h-[40px] text-sm px-1 bg-gray-800 text-white dark:bg-white dark:text-black "> Create
                            Offer Letter
                        </button>
                    </NuxtLink>


                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField horizontal>
                        <PremFormControl v-model="searchquery" :icon="mdiMagnify" placeholder="Search by Name or EmailID" />
                    </PremFormField>
                    <PremFormField label="Filter By:" horizontal>

                        <BaseButtons>


                            <BaseButton label="Designation" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleCategoryDropdown" :active="isCategoryDropdownOpen" />



                            <BaseButton label="Sent / Draft" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="togglePublishedInput" :active="isPublishedDropdown" />


                        </BaseButtons>



                        <!-- Designation Dropdown -->
                        <div v-if="isCategoryDropdownOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="categoryFilter" class="w-1/2">
                                <option value="">Select Designation</option>
                                <option v-for="categoryItem in Designation" :value="categoryItem" :key="categoryItem">
                                    {{ categoryItem }}
                                </option>
                            </select>
                        </div>



                        <!-- Send / Draft Dropdown -->
                        <div v-if="isPublishedDropdown" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="isSendedFilter" class="w-1/2">
                                <option value=""> Select Type </option>
                                <option value="true">Send</option>
                                <option value="false">Draft</option>


                            </select>
                        </div>

                        <div style="align-items: right; text-align: right; text-decoration: underline;"><button
                                @click="clearResult">Reset Filters</button>
                        </div>

                    </PremFormField>

                </CardBox>

                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <!-- <TableViewCreator :data="newData" /> -->
                    <CardBoxModal v-model="isModalActive" title="Sample modal">
                        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                        <p>This is sample modal</p>
                    </CardBoxModal>

                    <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
                        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                        <p>This is sample modal</p>
                    </CardBoxModal>

                    <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
                        <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
                            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
                            {{ checkedRow.name }}
                        </span>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="text-center">Name</th>
                                <th class="text-center">Designation</th>
                                <th class="text-center">Salary</th>
                                <th class="text-center">Per Task/Hour</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Sent/Draft</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(client, index) in filteredItems" :key="client.id"
                                class="border-b-0 lg:w-6 before:hidden">
                                <td data-label="Client ID" class="border-b-0 lg:w-6 before:hidden text-center">
                                    {{ client.OfferLaterNo }}
                                </td>
                                <td data-label="Title" class="text-center">
                                    {{ client.Name }}
                                </td>


                                <td data-label="Category" class="text-center">
                                    {{ client.Designation }}
                                </td>
                                <td data-label="Created_By" class="text-center">
                                    {{ client.Salary }}
                                </td>
                                <td data-label="Published" class="text-center">
                                    {{ client.perTaskorHour }}
                                </td>

                                <td data-label="Submitted" class="lg:w-1 whitespace-nowrap text-center">
                                    {{ client.Email }}
                                </td>
                                <td data-label="Send/Draft" class="text-center">
                                    {{ client.isSended }}
                                </td>
                                <td class="before:hidden lg:w-1 whitespace-nowrap">

                                    <div class=" flex justify-center gap-2">
                                        <button class="full p-1 bg-blue-400 text-white border-0"
                                            @click="() => openPdf(client.id)"><svg-icon type="mdi"
                                                :path="mdiEye"></svg-icon></button>
                                        <NuxtLink :to="'/Offer/EditOffer/' + client.id"><button
                                                class="full p-1 bg-blue-400 text-white border-0"><svg-icon type="mdi"
                                                    :path="mdiPen"></svg-icon></button>
                                        </NuxtLink>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                        <BaseLevel>
                            <BaseButtons>
                                <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage"
                                    :label="page + 1" :color="page === currentPage ? 'lightDark' : 'whiteDark'" small
                                    @click="currentPage = page" />
                            </BaseButtons>
                            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
                        </BaseLevel>
                    </div>

                </CardBox>
                <div class="hidden">
                    <div ref="pdfContent">
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <p class="c90 title" id="h.yddvdixby0ot"><span class="c22">Offer letter </span></p>
                        <p class="c66 subtitle" id="h.4ln4q8facorn"><span class="c16"><br> {{ pdfData.designation }} </span>
                        </p>

                        <div id="page2el"></div>

                        <p class="c51"><span class="c48">Dear {{ pdfData.name
                        }},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                                class="c39 c59">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="c19">Mumbai, India</span></p>
                        <p class="c72"><span class="c69 c39">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </span></p>
                        <p class="c72"><span class="c60">CONGRATULATIONS AND WELCOME ABOARD!<br></span><span
                                class="c82"><br>We are
                                delighted to extend this offer of Job for the position of a </span><span class="c69 c78">{{
                                    pdfData.designation }}
                            </span><span class="c29"> with our company, Spark Excellence Paathshala Private
                                Limited.<br><br>Please review
                                the
                                summary of terms and guidelines for your anticipated Job with us in the Terms of the Job
                                document.<br><br><br><br><br><br>Best Wishes,</span></p>
                        <p class="c72"><span
                                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 122.50px; height: 70.96px;"><img
                                    alt="" src="@/pages/Offer/images/image1.jpg"
                                    style="width: 122.50px; height: 70.96px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                                    title=""></span></p>
                        <p class="c72"><span class="c29">Authorized Signatory,<br>Spark Excellence Paathshala Pvt Ltd</span>
                        </p>

                        <div id="page2el"></div>

                        <br>
                        <br>
                        <br>
                        <div>
                            <p class="c66"><span class="c77 c83">PAATHshala Designation </span><span
                                    class="c81">Internship</span>
                            </p>
                        </div>
                        <br>
                        <br>
                        <hr>
                        <br>
                        <p class="c66"><span class="c57 c77">MUMBAI, INdIA</span></p>
                        <br>
                        <br>
                        <p class="c66"><span class="c53">&nbsp; &nbsp; </span><span
                                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 281.33px;"><img
                                    alt="" src="@/pages/Offer/images/image3.png"
                                    style="width: 624.00px; height: 281.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                                    title=""></span></p>
                        <p class="c66"><span class="c49">&nbsp; &nbsp; </span></p>
                        <p class="c66"><span class="c49">Mission And Vision<br></span></p>
                        <p class="c66"><span class="c57 c67">&quot;We aim to transform with utmost efficiency, each student,
                                into the
                                intellectually &nbsp; &nbsp;best version of themselves, with the underlying purpose of
                                giving them the
                                best
                                possible chance of excelling in the career of their choice&quot;<br>&quot;In the process, we
                                also
                                provide
                                career guidance, life coaching and motivation coaching&quot;</span>
                        </p>
                        <br>

                        <div id="page2el"></div>

                        <br>
                        <br>
                        <br>
                        <br>
                        <p class="c66"><span class="c53">TERMS OF THE INTERNSHIP<br><br></span><span class="c30">Dear
                                {{ pdfData.name }},</span><span class="c53 c65"><br></span></p>
                        <p class="c66"><span class="c25 c40">We appreciate your interest in providing your Services as a
                            </span><span class="c17"> {{ pdfData.designation }} </span><span class="c31">&nbsp;</span><span
                                class="c25 c40">to </span><span class="c31 c62">Spark Excellence Paathshala Private
                                Limited</span></p>
                        <ul class="c8 lst-kix_xctautootrdm-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c25 c40">This Agreement records the terms and
                                    conditions agreed
                                    to
                                </span><span class="c25 c40 c70">inter se </span><span class="c25 c40">the Company also
                                    referred to as
                                    Company/Organization/Paathshala and you</span><span class="c25 c39">&nbsp;</span><span
                                    class="c25 c40">also referred to as the &lsquo;Intern&rsquo;</span></li>
                            <li class="c2 c7 li-bullet-0"><span class="c15">The Company and the Intern may be individually
                                    referred to
                                    as a
                                    &quot;Party&quot; and collectively as the &quot;Parties&rdquo;<br></span></li>
                        </ul>
                        <ul class="c8 lst-kix_v351shaw0rem-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c11">The Intern shall take due care and diligence in
                                    providing
                                    the
                                    services to the Company and shall ensure that under no circumstances are the services
                                    below the
                                    industry
                                    standard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
                            <li class="c2 c7 li-bullet-0"><span class="c11">The Intern shall perform the services in a
                                    professional and
                                    competent manner, consistent with industry standards reasonably applicable to such
                                    services</span>
                            </li>
                        </ul>
                        <p class="c5 c37"><span class="c11"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0 start" start="1">
                            <li class="c2 c7 li-bullet-0"><span class="c41">PERKS</span></li>
                        </ol>
                        <p class="c37 c46"><span class="c25">Upon </span><span class="c35">successful completion</span><span
                                class="c11">&nbsp;of the Internship, apart from the stipend, the Intern will receive the
                                following:</span>
                        </p>
                        <ul class="c8 lst-kix_q0z9vg7tu61j-0">
                            <li class="c21 c7 li-bullet-0"><span class="c11">Certificate of Internship</span></li>
                            <li class="c21 c7 li-bullet-0"><span class="c11">Letter of Recommendation (If the Company is
                                    genuinely
                                    satisfied
                                    with the Intern&rsquo;s work and work ethics)</span></li>
                            <li class="c7 c21 li-bullet-0"><span class="c11">Extension of &nbsp;the offer to future projects
                                    of the
                                    company</span></li>
                        </ul>
                        <p class="c5"><span class="c10"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="2">
                            <li class="c2 c7 li-bullet-0"><span class="c41">a. work summary</span></li>
                        </ol>
                        <ul class="c8 lst-kix_sdu85bb2f57g-0 start">
                            <li class="c74 c47 c7 li-bullet-0"><span class="c35">This is a Work From Home Internship</span>
                            </li>
                            <li class="c74 c47 c7 li-bullet-0"><span class="c25">This is the &#39;Paathshala Internship
                                    Programme&rsquo;</span></li>
                        </ul>
                        <p class="c5 c47"><span class="c11"></span></p>
                        <p class="c43"><span class="c41">b. stipend</span></p>
                        <p class="c2"><span class="c13">2B.1. This is not a fixed stipend internship. This is an ONLY
                                performance based
                                Internship.</span></p>
                        <p class="c2"><span class="c35 c45">2B.2. This is the internship / freelance opportunity under the
                                &nbsp;the
                                &#39;Paathshala Internship Programme&rsquo;</span></p>
                        <p class="c2"><span class="c35">2B</span><span class="c13">.3. Mode of Work Company is going to
                                delegate work to
                                the
                                Intern, from time to time, work that deems suitable to be delegated to Intern based on his /
                                her
                                skill-set
                                and experience</span></p>
                        <p class="c2"><span class="c62 c35 c85">2B.4. Stipend is {{ pdfData.salary }} Salary for {{
                            pdfData.perTaskHour }} of your work.
                                Learning time
                                is
                                not considered as working time. We trust your honesty to report the working time, rather
                                than the
                                learning
                                time.</span></p>
                        <p class="c2"><span class="c35">2B</span><span class="c35">.5. All taxes that the Intern is liable
                                to pay to the
                                government is the responsibility of the Intern to pay from his/her end</span></p>
                        <p class="c2"><span class="c35">2B</span><span class="c13">.6. The stipend earned by the Intern will
                                be
                                disbursed on
                                or before the 15th Calendar day of the following month after the successful completion, Abu
                                mission and
                                review of the task.</span></p>
                        <p class="c5 c37"><span class="c13"></span></p>
                        <p class="c5 c37"><span class="c13"></span></p>
                        <p class="c43"><span class="c20">C. Additional Conditions</span></p>
                        <p class="c2"><span class="c13">2C.1. Unpaid incubation Training period of 7 days will be observed
                                from the date
                                you
                                start the work with us </span></p>
                        <p class="c2"><span class="c13">2C.2. Day one for your remuneration will start once you start work
                                on an actual
                                project and does not include the Training Period. </span></p>
                        <div class="html2pdf__page-break"></div>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="3">
                            <li class="c2 c7 li-bullet-0"><span class="c41">Professional Ethics</span></li>
                        </ol>
                        <p class="c2"><span class="c11">The Intern will inform the Company about his/her association with
                                any social
                                work/group/NGO. Normally such an association will not be denied unless the same is
                                detrimental to the
                                interests of the Company<br></span>
                        </p>
                        <br>

                        <div id="page2el"></div>


                        <br>
                        <br>
                        <br>
                        <br>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="4">
                            <li class="c2 c7 li-bullet-0"><span class="c41">Environmental Policy Aspects (applicable for at
                                    company
                                    internship)</span><span class="c35"><br></span><span class="c25">4.1. Smoking is
                                    strictly prohibited
                                    in
                                    all the Company&rsquo;s premises during work hours<br>4.2. Consumption of
                                    Alcohol/Narcotics/Pan/Gutkha/Khaini or any other prohibited substances or intoxicants in
                                    Company&rsquo;s
                                    premises or coming to the Company&rsquo;s premises after consumption of the same or
                                    spitting is
                                    strictly
                                    prohibited</span></li>
                        </ol>
                        <p class="c5"><span class="c11"></span></p>
                        <p class="c5"><span class="c11"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="5">
                            <li class="c2 c7 li-bullet-0"><span class="c41">WORK REPORTING AND WORK ETHICS</span></li>
                        </ol>
                        <p class="c2"><span class="c11">5.1. The Intern should submit the Work Report in the official
                                Communication
                                Channel
                                (CC) that the Intern will be informed about<br>5.2. If the Intern drops out of/quits the
                                Internship mid
                                way,
                                due to any reason(s) whatsoever, then the stipend to be disbursed to the Intern or whether
                                or not the
                                stipend should be disbursed to the Intern is at the discretion of the HR Department of the
                                company</span>
                        </p>
                        <p class="c2"><span class="c11">5.3. All the communication (of any format) with the Company which
                                also includes
                                communication with all the official current employees of the Company via phone call, video
                                call, (using
                                any
                                online service like Skype/Zoom Call etc), email, WhatsApp, Telegram, SMS or any other mode
                                is meant for
                                the
                                Intern only and is confidential </span></p>
                        <p class="c5 c37"><span class="c11"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="6">
                            <li class="c37 c79 c7 c86 li-bullet-0"><span class="c41">TERM AND TERMINATION</span></li>
                        </ol>
                        <p class="c2 c79"><span class="c11">If the Intern is not being able to finish the work within
                                deadlines or the
                                quality of the work is not satisfactory due to any reason whatsoever or if the
                                Intern&rsquo;s work
                                ethic,
                                attitude, sincerity are not up to the mark, then unfortunately the Company may have to
                                discontinue the
                                Internship<br></span></p>
                        <div class="html2pdf__page-break"></div>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="7">
                            <li class="c2 c79 c7 li-bullet-0"><span class="c41">INDEMNITY</span></li>
                        </ol>
                        <p class="c2">The Intern hereby undertakes to indemnify, defend and hold harmless the Company,
                            its directors, officers, agents, employees and Interns against any and all losses, liabilities,
                            claims
                            and all related damages, cost and expenses (including but not limited to reasonable lawyers'
                            fees)
                            ("Claims") incurred by the Company as a result of (i) breach of any of the provisions of this
                            Agreement
                            (ii) any failure or default by the Intern to duly perform his/her obligations under this
                            Agreement; or
                            (iii) breach of any applicable law, by-law, regulations or guidelines or of any Third party
                            rights,
                            contractual or otherwise; or (iv) any action taken by any government or other statutory,
                            judicial,
                            quasi-judicial or other competent authority against the Company for any breach or default by the
                            Intern

                        </p>
                        <ul class="c8 lst-kix_chktgp199mro-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c25">All The terms of the Indemnity Clause shall
                                    survive
                                    the
                                    expiry
                                    or termination of this Agreement [For any reason(s) whatsoever]</span></li>
                        </ul>
                        <p class="c5 c37"><span class="c3"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="8">
                            <li class="c2 c7 li-bullet-0"><span class="c41">NON-SOLICIT</span></li>
                        </ol>
                        <p class="c2"><span class="c11">The Intern undertakes that during the term of the Agreement and for
                                a
                                period of
                                1
                                (one) year after termination or expiry of the Agreement, (The Internship end date will be
                                considered as
                                the
                                date on which the Internship certificate is emailed from the Company. If the Intern leaves
                                the
                                Internship
                                mid-way, the end date will be considered as that which could have been the end date if the
                                Intern
                                completed
                                the Internship) the Intern shall not, directly or indirectly, including without limiting to
                                by
                                assisting
                                others, solicit, recruit, induce or attempt to persuade the Internship/ Employment of any
                                person/client/students/parents then engaged by the Company or its affiliates as an Intern,
                                employee,
                                officer, director, independent contractor, agent <br></span></p>
                        <div class="html2pdf__page-break"></div>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="9">
                            <li class="c2 c7 li-bullet-0"><span class="c41">CONFIDENTIALITY</span></li>
                        </ol>
                        <p class="c2"><span class="c11">9.1. The Intern shall keep Confidential Information obtained from
                                the Company as
                                confidential and will not divulge such information to any person/Company/group of
                                individual(s) without
                                prior written consent of the Company</span></p>
                        <p class="c50 c37"><span class="c11">9.2. &quot;Confidential Information&quot; shall mean any
                                Intellectual
                                Property,
                                documents, data, or information that is not generally known to the public, including but not
                                limited to,
                                operations, customer relationships, customer profiles or other customer information relating
                                to the
                                &nbsp;past, &nbsp;present or future business activities of the company, its parent
                                corporations,
                                subsidiaries and affiliates and the customers, clients and suppliers of any of the
                                foregoing, all
                                confidential or proprietary concepts, content (of any format), internal protocols and
                                guidelines,
                                management
                                processes, organization structure, documentation, reports, lists, files, data,
                                specifications, customer
                                software, source code, object code, flow charts, databases, data files, inventions,
                                &nbsp;information,
                                &nbsp;know-how and trade secrets, whether or not patentable or copyrightable, or any
                                scientific or
                                technical
                                &nbsp;information, design, process, procedure, formula or improvement whether deemed
                                commercially
                                valuable
                                or not and not publicly available</span>
                        </p>
                        <br>
                        <br>
                        <br>
                        <br>

                        <!-- <div id="page2el"></div> -->

                        <p class="c50 c37"><span class="c11">9.3. All the communication (of any format) with the Company
                                which also
                                includes
                                communication with all the official current employees of the Company via phone call, video
                                call, (using
                                any
                                online service like Skype/Zoom Call etc), email, WhatsApp, Telegram, SMS or any other mode
                                is meant for
                                the
                                Intern only and is confidential </span></p>
                        <p class="c37 c73"><span class="c11">9.4. The Intern shall not use information or data belonging to
                                the Company
                                or
                                any customer of the Company for purposes other than the fulfilment of duties under this
                                Agreement</span>
                        </p>
                        <p class="c63"><span class="c11">The provisions of this Clause shall not extend to information which
                                was:</span>
                        </p>
                        <ul class="c8 lst-kix_ck1eyh5x9uqv-0 start">
                            <li class="c74 c47 c7 c91 li-bullet-0"><span class="c11">Rightfully in the possession of the
                                    Intern prior to
                                    the
                                    commencement of negotiations that led to this Agreement; or</span></li>
                            <li class="c47 c7 c74 li-bullet-0"><span class="c11">Already in the public domain or becomes so
                                    at a future
                                    date
                                    (But not as a result of a breach of this Clause or any other confidentiality agreement
                                    signed by the
                                    Intern)</span></li>
                        </ul>
                        <ul class="c8 lst-kix_gl21h3hzajib-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c25">&nbsp;All The terms of the Confidentiality
                                    Clause shall
                                    survive
                                    the expiry or termination of this Agreement [For any reason(s) whatsoever]</span></li>
                        </ul>
                        <p class="c5 c52"><span class="c11"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="10">
                            <li class="c2 c52 c7 li-bullet-0"><span class="c41">INTELLECTUAL PROPERTY</span></li>
                        </ol>
                        <p class="c2"><span class="c11">10.1. The Intern acknowledges that the Company owns all right, title
                                and
                                interest in
                                and to the Intellectual Property owned by the Company, whether presently existing or later
                                developed.
                                Nothing herein shall give the Intern any right, title or interest in any of the Intellectual
                                Property
                                owned
                                by the Company. &quot;Intellectual Property&quot; means all patents, trade-marks, service
                                marks, logos,
                                get-up, trade names, brand names, Internet domain names, rights in designs, copyright
                                including rights
                                in
                                computer software, code, portals and moral rights, database rights, semi conductor
                                topography rights,
                                utility models, rights in know-how, trade secrets, and other intellectual property rights
                                and
                                proprietary
                                data, content generated in any format, type, mode, in each case whether registered or
                                unregistered and
                                including applications for registration, and all rights or forms of protection having
                                equivalent or
                                similar
                                effect anywhere in the world</span></p>
                        <p class="c2"><span class="c11">10.2. All the content generated (in any format, type, mode) by the
                                Intern during
                                the
                                Internship is also considered as the Company&rsquo;s Intellectual Property and the Intern
                                has no rights
                                over
                                the same to keep the content, share, use for personal or commercial purposes, non-commercial
                                purposes,
                                reproduce, market, advertise or do anything else via any medium, in any format, at any point
                                of time
                                <br>10.3. The company may use the content generated (in any format, type, mode) by the
                                Intern during the
                                Internship for commercial/non-commercial/any purposes. In case of commercial use, the Intern
                                shall not
                                have
                                any rights over the commercial value generated of the content at any point of time. The
                                company is the
                                sole
                                intellectual property owner of all the content generated (in any format, type or mode) by
                                the Intern.
                                The
                                company holds complete rights to utilize the content generated for any of its subsidiaries,
                                currently
                                existing or later formed as well, apart from itself<br>10.4. The Intern shall upon the
                                request of the
                                Company execute all necessary documents and otherwise, provide prompt and sufficient
                                assistance, anytime
                                during and subsequent to the Term of the Internship, to enable the Company to obtain for
                                itself or its
                                nominees; copyrights, designs, trademarks or other legal protection for the Intellectual
                                Property owned
                                by
                                the Company<br>10.5. The Intern hereby constitutes the Company as the irrevocable attorney
                                for the
                                purposes
                                of executing any and all documents necessary to protect the interests of the Company and for
                                procuring
                                the
                                full benefits of the provisions of the Agreement which shall include: (i) applying to any
                                statutory
                                authority for procuring trademarks, designs, copyrights or otherwise, and (ii) for assigning
                                to itself
                                or
                                its nominees all Intellectual Property owned by the Company. The Company shall, if it deems
                                necessary,
                                be
                                entitled to use the name of the Intern for any such purpose<br>10.6. Notwithstanding
                                anything contained
                                in
                                this Agreement, the Intern agrees, understands and acknowledges that all Intellectual
                                Property, whether
                                presently existing or later developed by the Intern including but not limited to content (in
                                any format
                                or
                                type), code, software, portal, anything pursuant to this Agreement, are the sole and
                                exclusive property
                                of
                                the Company. The Intern agrees to and hereby does assign, grant and convey to the Company
                                any of
                                Intern&rsquo;s respective rights, titles and interests, in all the Intellectual Property,
                                whether
                                presently
                                existing or later developed by the Intern in pursuant to this Agreement</span>
                        </p>
                        <br>
                        <ul class="c8 lst-kix_gb8xgz994ysp-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c25">All The terms of the Intellectual Property
                                    Clause shall
                                    survive
                                    the expiry or termination of this Agreement [For any reason(s) whatsoever]</span></li>
                        </ul>
                        <br>

                        <div id="page2el"></div>

                        <br>
                        <br>
                        <br>
                        <br>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="11">
                            <li class="c2 c7 li-bullet-0"><span class="c68">11a. COPYRIGHT</span><span
                                    class="c38 c54"><br><br></span><span class="c25 c38">If, during the Internship Period,
                                    Intern creates any original work of authorship
                                    fixed
                                    in any tangible medium of expression, which is the subject matter of copyright,
                                    including, without
                                    limitation, video tapes, written presentations, computer programs, drawings, models,
                                    manuals,
                                    brochures
                                    and the like, that relate to the Company&rsquo;s business, products sold or services,
                                    whether such
                                    work
                                    is created solely by Intern or jointly with others, the Company shall be deemed to be
                                    the sole
                                    author of
                                    such work if the work is prepared by Intern within the scope of Intern&rsquo;s
                                    Internship; or if the
                                    work is not prepared by Intern within the scope of Intern&rsquo;s Internship, but is
                                    specially
                                    ordered
                                    by the Company, including, without limitation, as a contribution to a collective work,
                                    or as a part
                                    of
                                    an audio-visual work, as a translation, as a supplementary work, as a compilation, or as
                                    an
                                    instructional text, or is created using any resources or property of the Company, the
                                    work shall be
                                    considered a work made for hire, and the Company shall be the sole author of the work,
                                    the Company
                                    holds
                                    the sole copyright over the work and the work is protected by the International
                                    Copyright Order. If
                                    such
                                    work is neither prepared by Intern within the scope of Internship, nor as a work made
                                    for hire,
                                    Intern
                                    hereby assigns to the Company all of Intern&rsquo;s world-wide right, title and interest
                                    in and to
                                    such
                                    work and all rights of the copyright therein. Intern agrees to, upon the request of the
                                    Company,
                                    whether
                                    during or after the period of Intern&rsquo;s Internship by the Company, assist the
                                    Company in the
                                    protection of the Company&rsquo;s world-wide right, title and interest in and to the
                                    work and all
                                    rights
                                    of copyright therein, including, without limitation, the execution of all formal
                                    assignment
                                    documents
                                    requested by the Company, and the execution of all lawful oaths and applications for
                                    registration of
                                    copyright in India and foreign countries</span></li>
                        </ol>
                        <br>
                        <ul class="c8 lst-kix_m6x1egylg4hm-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c25 c38">The terms of the Copyright Clause shall
                                    survive the
                                    expiry
                                    or termination of this Agreement [For any reason(s) whatsoever]</span></li>
                        </ul>
                        <p class="c2 c80"><span class="c25 c38"><br></span><span class="c68">11B. COPYRIGHT
                                infringement<br></span><span class="c11">The Intern does not have rights to keep/share the
                                content generated (in any format, type,
                                mode)
                                by the Intern during the Internship with self/any third party. If the Intern uses the
                                content generated
                                (in
                                any format, type, mode) by the Intern during the Internship for any purposes; commercial,
                                non-commercial,
                                personal or any, that shall be considered as a copyright infringement in which case the
                                company holds
                                the
                                rights to invoke legal proceedings against the Intern as per the Indian Copyright Law</span>
                        </p>
                        <br>
                        <ul class="c8 lst-kix_flf1eurmkzx2-0 start">
                            <li class="c2 c7 li-bullet-0"><span class="c25 c38">The terms of the Copyright Infringement
                                    Clause shall
                                    survive
                                    the expiry or termination of this Agreement [For any reason(s) whatsoever</span></li>
                        </ul>
                        <p class="c5"><span class="c11 c38"></span></p>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="12">
                            <li class="c37 c7 c71 li-bullet-0"><span class="c41">REPRESENTATIONS AND WARRANTIES</span></li>
                        </ol>
                        <p class="c2"><span class="c11">11.1. The Company represents and warrants to the Intern that the
                                following is
                                true
                                and correct as of the Effective Date and the Execution Date:</span></p>
                        <p class="c2"><span class="c11">11.1.1 The Company has the full power and authority to enter into,
                                execute and
                                deliver this Agreement and to perform the transactions contemplated hereby</span></p>
                        <p class="c50 c37"><span class="c25">11.1.2 The execution and delivery by the Company of this
                                agreement and the
                                performance by the Company of the transactions contemplated hereunder have been duly
                                authorized by all
                                necessary corporate, statutory, contractual or any other third party, as may be necessary;
                            </span><span class="c13">and</span>
                        </p>
                        <br>
                        <p class="c2"><span class="c11 c38">11.2. The Intern represents and warrants to the Company that the
                                following
                                is
                                true and correct as of the Effective Date and the Execution Date:</span></p>
                        <p class="c2"><span class="c11">11.2.1. The Intern has the authority, skill, experience, and
                                resources to render
                                services hereunder and shall so render the services in an ethical and bona fide manner and
                                in compliance
                                with all applicable laws and regulations</span></p>
                        <p class="c2"><span class="c11">11.2.2. The Intern has the authority to enter into this Agreement
                                and that its
                                obligations hereunder are not in conflict with any other obligations, statutory, contractual
                                or
                                otherwise</span></p>
                        <p class="c2 c64"><span class="c11">11.3. This Agreement constitutes the legal, valid and binding
                                obligation of
                                the
                                Intern, enforceable against the Intern in accordance with its terms and it is in compliance
                                and shall at
                                all
                                times continue to be in compliance with the regulatory requirements to the extent that such
                                regulatory
                                requirements are related to the performance of the Intern&rsquo;s obligations under this
                                Agreement<br></span>
                        </p>
                        <br>

                        <div id="page2el"></div>

                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <ol class="c8 lst-kix_qz80bg7gwhll-0" start="13">
                            <li class="c2 c7 c64 li-bullet-0"><span class="c41">MISCELLANEOUS</span></li>
                        </ol>
                        <p class="c37 c50"><span class="c25">12.1.</span><span class="c35">&nbsp;</span><span
                                class="c32">Assignment:</span><span class="c88 c89">&nbsp;</span><span class="c11">The
                                Intern shall not
                                assign, contract, sub-contract or otherwise transfer the Intern&rsquo;s roles,
                                responsibilities and
                                obligations hereunder, nor shall the Intern delegate to perform services and duties under
                                this
                                Agreement,
                                without the prior written consent of the Company</span></p>
                        <p class="c2"><span class="c25">12.2.</span><span class="c9">&nbsp;</span><span class="c32">No
                                Subcontracting:</span><span class="c9">&nbsp;</span><span class="c11">The Intern shall not
                                further
                                subcontract the services without the prior written consent of Company and such consent may
                                be refused
                                without any cause by Company or subject to such conditions as Company in its sole discretion
                                may think
                                fit.
                                The decision of the Company shall be final and binding with regard to such conditions or
                                approval, as
                                the
                                case may be, and will not be subject to dispute resolution as set out in this Agreement. It
                                is clarified
                                that should the Company permit Intern to subcontract the services, Intern shall always
                                remain solely
                                responsible and liable for complying with the terms of this Agreement including the
                                obligations herein.
                                Further, the Intern shall cause the sub-contractor to enter into a joinder agreement,
                                wherein the
                                sub-contractor shall agree to be bound by the terms and assume the obligations under this
                                Agreement</span>
                        </p>
                        <p class="c2 c64"><span class="c25">12.3.</span><span class="c88">&nbsp;</span><span
                                class="c32">Conflict of
                                Interest:</span><span class="c9">&nbsp;</span><span class="c11">The Intern warrants that:
                                (i) The Intern
                                is
                                not obligated under any other consulting or other agreement which would affect the
                                Company&#39;s rights
                                or
                                the Company&#39;s duties under this Agreement; and (ii) this Agreement and the duties
                                required herein
                                are
                                not in conflict with the Intern commitments to any third party, and are not in violation of
                                any other
                                confidentiality agreements</span></p>
                        <p class="c2"><span class="c25">12.4.</span><span class="c32">Entire Understanding:</span><span
                                class="c25 c39">&nbsp;</span><span class="c25">This Agreement contains the complete and
                                integrated
                                understanding and agreement between the Parties hereto and supersedes any understanding,
                                agreement or
                                negotiation, whether oral or written, as set forth herein or in written amendments hereto
                                duly executed
                                by
                                the Parties<br>12.5.</span><span class="c87">&nbsp;</span><span class="c32">Governing Law
                                and
                                Jurisdiction:
                            </span><span class="c11">This Agreement shall, in all respects, be governed by and construed in
                                all respects
                                in
                                accordance with the laws of India without giving effect to conflict of laws principles. Any
                                dispute
                                arising
                                out of this Agreement shall be subject to the exclusive jurisdiction of the courts of
                                India</span></p>
                        <p class="c2"><span class="c25">12.6.</span><span class="c32">&nbsp;Relationship: </span><span
                                class="c25">Nothing
                                in this Agreement shall constitute or be deemed to constitute a partnership, joint venture,
                                agency
                                relationship or the like between the Company and the Intern<br><br></span><span
                                class="c32 c38">12.7. Waiver:</span><span class="c25 c38">&nbsp;Waiver by
                                one
                                Party hereto of breach of any provision of this Agreement by the other shall not operate or
                                be construed
                                as
                                a continuing waiver</span>
                        </p>
                        <p class="c2 c61"><span class="c25">12.8. </span><span class="c32">LOSS MANAGEMENT:</span><span
                                class="c35">&nbsp;</span><span class="c11">Any loss (monetary or non-monetary) due to damage
                                of the
                                Company
                                property, tangible or intangible, whether major or minor, intentional or unintentional by
                                the Intern
                                shall
                                be recovered from the Intern&rsquo;s stipend due to be paid or security deposit of the
                                Intern (if any)
                                or
                                from the Intern directly in the form of cash/cheque/online transaction </span></p>
                        <p class="c2 c61"><span class="c25">12.9.</span><span class="c32">&nbsp;General:</span><span
                                class="c9">&nbsp;</span><span class="c11">The Company is free to make any changes in the
                                Terms and
                                Conditions of the Agreement if and when deemed necessary for the overall work effectiveness
                                and
                                efficiency,
                                development and growth of the Company and the Intern will be communicated well in time about
                                any
                                changes, if
                                and when they are made</span></p>
                        <p class="c33 c84"><span class="c11"></span></p>
                        <p class="c33"><span class="c35">This agreement is confidential and the contents of the same should
                                not be
                                shared
                                with or disclosed to a third party either in part(s) or full</span></p>
                        <p class="c42 c37"><span class="c57 c76"></span></p>
                        <p class="c42 c37"><span class="c0"></span></p>
                        <p class="c50"><span class="c55">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                                class="c36">For
                                and on
                                behalf of Spark Excellence Paathshala Private Limited</span><span class="c26">&nbsp;</span>
                        </p>
                        <br>
                        <br>
                        <p class="c28"><span
                                style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 184.09px; height: 107.70px;"><img
                                    alt="" src="@/pages/Offer/images/image2.jpg"
                                    style="width: 184.09px; height: 107.70px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                                    title=""></span><span
                                class="c29"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authorized
                                Signatory,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spark Excellence Paathshala
                                Pvt Ltd</span>
                        </p>
                        <br>
                        <br>
                    </div>
                </div>

            </SectionMain>
        </NuxtLayout>
    </div>
</template>