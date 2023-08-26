<template>
  <NuxtLayout name="accounts">
    <div class="p-4">
      <p class="font-normal text-lg border-b-2 mb-2">Sales</p>
      <div class="flex flex-wrap gap-4 justify-between items-center">
      <FormField label="Select Customer" class="w-1/3 max-md:w-full">

        <FormControl
        
        placeholder="account"
        v-model="addFormData.account"
        :options="['Customer1' , 'Customer2']"
        />
      </FormField>
        <div class="pr-8">
          <p class="text-xl">Balance Due</p>
          <p>0.00</p>
        </div>

      </div>
      <div class="grid grid-cols-3 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div class="">
          <p>Billing Address</p>
          <div class="grid grid-cols-1 gap-2 p-2">
            <FormControl class="w-full" placeholder="Country" />
            <FormControl class="w-full" placeholder="State" />
            <FormControl class="w-full" placeholder="GSTIN" />
            <FormControl class="w-full" placeholder="PIN Code" />
          </div>
        </div>
        <div class="">
          <p> <span><input type="checkbox" name="" id=""></span> Shiping Address same as billing address</p>
          <div class="grid grid-cols-1 gap-2 p-2">
            <FormControl class="w-full" placeholder="Country" />
            <FormControl class="w-full" placeholder="State" />
            <FormControl class="w-full" placeholder="GSTIN" />
            <FormControl class="w-full" placeholder="PIN Code" />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4">
        <FormControl
          placeholder="Attention To"
          class="w-1/3 max-md:w-full p-2"
        />
        <FormControl
          placeholder="Email"
          type="email"
          class="w-1/3 max-md:w-full p-2"
        />
        <FormControl placeholder="Mobile No" class="w-1/3 max-md:w-full p-2" />
        <FormControl
          placeholder="Voucher Number"
          v-model="addFormData.voucherNo"
          class="w-1/3 max-md:w-full p-2"
        />
        <FormControl
          placeholder="Invoice Date"
          type="date"
          class="w-1/3 max-md:w-full p-2"
          v-model="addFormData.Date"
        />
      </div>
      <table class="border">
        <thead>
          <tr>
            <th>#</th>
            <th>Product/Service Description</th>
            <th>Qty/Unit</th>
            <th>Rate (₹)</th>
            <th>Amount (₹)</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in items">
            <td data-label="#">{{index+1}}</td>
            <td data-label="Product/Service Description"> 
                <FormControl v-model="item.Product"  />  
                Entry Date
                <p>20-05-2023</p>  
            </td>
            <td data-label="Qty/Unit"><FormControl v-model="item.Qty" aria-valuemin="1" type="number"  /> </td>
            <td data-label="Rate (₹)"><FormControl v-model="item.Rate" type="number"  /> </td>
            <td data-label="Amount (₹)">{{ item.Qty*item.Rate }} </td>
            <td data-label="Discount"><FormControl v-model="item.Discount" type="number"  /> </td>
            <td data-label="Tax"><FormControl v-model="item.Tax" type="number" /> </td>
            <td data-label="Total">{{ item.Qty*item.Rate - item.Discount + item.Tax }}</td>
            <td data-label="">
              <BaseButton color="danger" :icon="mdiTrashCan" @click="deleteLine(index)" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex gap-4">
        <p @click="addNewLine" class="cursor-pointer text-blue-200"> Add New Item </p>

      </div>
      <div class="grid grid-cols-2 max-md:grid-cols-1 gap-7 mt-12">
        <div class="grid grid-cols-3 max-lg:grid-cols-1 gap-3">
          <FormField label="Ship Date">
            <FormControl type="date" />
          </FormField>
          <FormField label="Ship Via">
            <FormControl />
          </FormField>
          <FormField label="Tracking No.">
            <FormControl />
          </FormField>
          <FormField label="Field 1">
            <FormControl />
          </FormField>
          <FormField label="Field 2">
            <FormControl />
          </FormField>
          <FormField label="Field 3">
            <FormControl />
          </FormField>
          <FormField label="Note">
            <FormControl type="textarea" />
          </FormField>
        </div>
        <div class="">
          <div class="grid grid-cols-2">
            <p>Total Amount</p>
            <p>{{netTotal.totalAmount}}</p>
          </div>
          <div class="grid grid-cols-2">
            <p>Discount</p>
            <p>{{netTotal.Discount}}</p>
          </div>
          <div class="grid grid-cols-2">
            <p>Taxable Value</p>
            <p>{{netTotal.Tax}}</p>
          </div>
          <div class="grid grid-cols-2">
            <p>Tax</p>
            <p>{{netTotal.Tax}}</p>
          </div>
          <div class="grid grid-cols-2">
            <p>CESS</p>
            <p>0.00</p>
          </div>
          <div class="grid grid-cols-2">
            <p>Total</p>
            <p>{{netTotal.payable}}</p>
          </div>

          <div class="mt-8 bg-slate-300 p-4 max-w-sm rounded ">
            <p class="text-xl">Deposit</p>
            <FormField label="Select Account">
              <FormControl :options="['Account 1','Account 2']" />
            </FormField>
            <FormField label="Amount">
              <FormControl type="number" />
            </FormField>
            <p>Balance : 0.00</p>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-6 items-center my-5">
        <BaseButton label="Clear" color="danger" />
        <BaseButton label="Generate Sales and Update Account" color="info" @click="submitProfile" />
        <BaseButton label="Generate Sales" color="info" @click="submitProfile" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiPencil, mdiTrashCan, mdiFilter } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import uuid4 from "uuid4";
import {
  mdiDotsVertical,
  mdiAccountPlus,
  mdiWindowClose,
  mdiAccount,
  mdiMail,
  mdiCellphone,
  mdiAsterisk,
  mdiFormTextboxPassword,
} from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";

const items = ref([
  {
    Product: "",
    Qty: 0,
    Rate: 0,
    Amount: 0,
    Discount: 0,
    Tax: 0,
  },
]);

const addNewLine = () => {
  items.value.push({
    Product: "",
    Qty: 0,
    Rate: 0,
    Amount: 0,
    Discount: 0,
    Tax: 0,
  });
};

const deleteLine = (i)=>{
    console.log("del" , i);
    items.value.splice(i,1);
}

const netTotal = computed(()=>{
    let totalAmount = 0;
    let Discount = 0;
    let Tax=0;
    let Cess = 0;
    let payable = 0;
    items.value.forEach(item => {
        totalAmount += item.Qty*item.Rate;
        Discount += item.Discount;
        Tax += item.Tax;
        payable += item.Qty*item.Rate - item.Discount + item.Tax;
    });
    return {totalAmount , Discount , Tax , payable}
})


const addFormData = ref({
  Date: "Mar 03, 2021",
  account: "account 1",
  voucherType: "v1",
  voucherNo: "",
  sales: "sa",
  return: "re",
  qtyRate: "32",
  discount: netTotal.value.Discount,
  tax: netTotal.value.Tax,
  netSales: "12",
});

async function submitProfile() {
    console.log(addFormData.value);
  await useMainStore().addInvoice({
    id: uuid4(),
    Date: addFormData.value.Date,
    account: addFormData.value.account,
    voucherType: addFormData.value.voucherType,
    voucherNo: addFormData.value.voucherNo,
    sales: addFormData.value.sales,
    return: addFormData.value.return,
    qtyRate: addFormData.value.qtyRate,
    discount: addFormData.value.discount,
    tax: addFormData.value.tax,
    netSales: addFormData.value.netSales,
  });
  console.log("data store", useMainStore().Invoices);

}
</script>

<style lang="scss" scoped></style>
