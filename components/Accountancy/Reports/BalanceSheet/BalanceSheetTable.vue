<template>
  <div class="mt-3">

    <div class="flex w-10/12 py-3 mx-auto border-b">
      <div class="w-6/12 font-medium px-2 flex items-center">
        <div class="">Particular</div>
        <BaseIcon :path="mdiMagnify" />
      </div>
      <div class="w-3/12 font-medium text-center">As Of 31 March 2023</div>
      <div class="w-6/12 font-medium text-center ">As Of 31 March 2022</div>
    </div>
    <!-- table Loop  -->
    <div class="w-10/12 py-3 mx-auto">
      <div class="uppercase px-2 cursor-pointer">I Equity and Liabilities</div>

      <!-- financial year show  -->
      <div class="mt-2" >
        <!-- share holder -->
        <div class="" v-if="typeOfData == 'Financial Year' ">
        <div class="w-full">
          <div class="w-full flex py-1 border-b cursor-pointer" @click="shareAndFund=!shareAndFund">
            <div class="w-6/12 px-2 flex items-center uppercase">
              Share Holder's FUNDS
            </div>

            <div class="w-3/12 text-center pr-[4rem]">40,0000.00 DR</div>
            <div class="w-6/12 text-center pr-[4rem]">40,0000.00 DR</div>
          </div>

          <div class="" v-if="shareAndFund">
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Reserves & Surplus
              </div>

              <div class="w-3/12 text-center pr-[4rem]">40,0000.00 DR</div>
              <div class="w-6/12 text-center pr-[4rem]">40,0000.00 DR</div>
            </div>
            <!-- General Reserves -->
            <div class="w-full flex py-1 border-b bg-gray-200 dark:bg-gray-900">
              <div class="w-6/12 px-2 flex items-center pl-8">
                General Reserves
              </div>

              <div class="w-3/12 text-center pl-[4rem]">40,0000.00 DR</div>
              <div class="w-6/12 text-center pl-[4rem]">40,0000.00 DR</div>
            </div>
            <!-- Profit and Loss -->
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Profit and Loss
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
          </div>
        </div>
        <!-- Non Current Liabilities  -->
        <div class="w-full flex py-1 border-b">
          <div class="w-6/12 px-2 flex items-center uppercase">
            Non Current Liabilities
          </div>

          <div class="w-3/12 text-center pr-[4rem]">45780.00 DR</div>
          <div class="w-6/12 text-center pr-[4rem]">4145S0.00 DR</div>
        </div>
        <!-- Current Liabilities -->
        <div class="w-full">
        <div class="w-full flex py-1 border-b cursor-pointer" @click="currentLaybalityes=!currentLaybalityes">
          <div class="w-6/12 px-2 flex items-center uppercase">
            Current Liabilities
          </div>

          <div class="w-3/12 text-center pr-[4rem]">100000.00 DR</div>
          <div class="w-6/12 text-center pr-[4rem]">100000.00 DR</div>
        </div>
        <div class="" v-if="currentLaybalityes" >
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Duties & Taxes
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00 </div>
              <div class="w-6/12 text-center pr-[4rem]">0.00 </div>
            </div>
            <!-- General Reserves -->
         
          
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 GST CESS
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 TCS Payable
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 TDS Payable
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 UTGST
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>

            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 IGST
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 CGST
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-8">
                 SGST
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>

            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Sundry Creditors
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00 </div>
              <div class="w-6/12 text-center pr-[4rem]">0.00 </div>
            </div>

            <div class="w-full flex py-1 border-b bg-gray-200 dark:bg-gray-900">
              <div class="w-6/12 px-2 flex items-center pl-8">
                Aakash Balasaheb Shendge
              </div>

              <div class="w-3/12 text-center pl-[4rem]">10,0000.00 Dr.</div>
              <div class="w-6/12 text-center pl-[4rem]">10,0000.00 Dr.</div>
            </div>
          </div>
      </div></div>
    </div>
      <!-- first sub  -->
      <div class="w-full flex py-3">
        <div class="w-6/12 px-2 flex items-center ">Total Liabilities</div>

        <div class="w-3/12 text-center pl-[4rem]">0.00</div>
        <div class="w-6/12 text-center pl-[4rem]">0.00</div>
      </div>
    </div>
    <div class="w-10/12 py-3 mx-auto">
      <div class="uppercase px-2 cursor-pointer" >II Assets</div>

      <!-- financial year show  -->
   
      <div class="mt-2" v-if="typeOfData == 'Financial Year' ">
        <!-- share holder -->
        <div class="w-full">
          <div class="w-full flex py-1 border-b">
            <div class="w-6/12 px-2 flex items-center uppercase">
              Fixed Assets 
            </div>

            <div class="w-3/12 text-center pr-[4rem]">0.00 </div>
            <div class="w-6/12 text-center pr-[4rem]">0.00 </div>
          </div>

     
        </div>
        <!-- Non Current Liabilities  -->
        <div class="w-full flex py-1 border-b">
          <div class="w-6/12 px-2 flex items-center uppercase">
            Non Current Assets
          </div>

          <div class="w-3/12 text-center pr-[4rem]">0.00 </div>
          <div class="w-6/12 text-center pr-[4rem]">0.00 </div>
        </div>
        <!-- Current Liabilities -->
        <div class="w-full">
        <div class="w-full flex py-1 border-b cursor-pointer" @click="currentAssets=!currentAssets">
          <div class="w-6/12 px-2 flex items-center uppercase">
            Current Assets
          </div>

          <div class="w-3/12 text-center pr-[4rem]">500000.00 CR </div>
          <div class="w-6/12 text-center pr-[4rem]">500000.00 CR</div>
        </div>
        <div class="" v-if="currentAssets">
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Tax on Export
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00 </div>
              <div class="w-6/12 text-center pr-[4rem]">0.00 </div>
            </div>
            <!-- General Reserves -->
         
          
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Tax on Advance
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                 TCS Receivable
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                 TDS Receivable
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                 Reverse Charge
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>

            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                 Bank Accounts
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                Cash
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>
            <div class="w-full flex py-1 border-b">
              <div class="w-6/12 px-2 flex items-center uppercase pl-4">
                 Sundry Debtors
              </div>

              <div class="w-3/12 text-center pr-[4rem]">0.00</div>
              <div class="w-6/12 text-center pr-[4rem]">0.00</div>
            </div>

          

            <div class="w-full flex py-1 border-b bg-gray-200 dark:bg-gray-900">
              <div class="w-6/12 px-2 flex items-center pl-8">
                Aakash Balasaheb Shendge
              </div>

              <div class="w-3/12 text-center pl-[4rem]">10,0000.00 Dr.</div>
              <div class="w-6/12 text-center pl-[4rem]">10,0000.00 Dr.</div>
            </div>
          </div>
      </div></div>

      <!-- first sub  -->
      <div class="w-full flex py-3">
        <div class="w-6/12 px-2 flex items-center">Total Assets</div>

        <div class="w-3/12 text-center pl-[4rem]">0.00</div>
        <div class="w-6/12 text-center pl-[4rem]">0.00</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import {
  mdiDownload,
  mdiFilter,
  mdiShare,
  mdiUpload,
  mdiArrowExpandAll,
  mdiReload,
  mdiFileDocumentOutline,
  mdiFilterOutline,
  mdiExportVariant,
  mdiMagnify,
} from "@mdi/js";

const props=defineProps(['typeOfData'])


const equality = ref(false)
const assets = ref(false)
const shareAndFund = ref(false)
const currentLaybalityes=ref(false)
const currentAssets = ref(false)
const type= ref("date-range")


</script>

<style></style>
