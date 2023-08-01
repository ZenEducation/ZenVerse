<template>
    <NuxtLayout name="accounts">
        <div class="p-6">

            <div class=" flex gap-3 flex-wrap justify-between items-center my-6">
                <div class="flex gap-2 items-center">
                    <FormControl placeholder="Search ledger"/>
                    <BaseButton :icon="mdiFilter" color="info" />
                </div>
                <div>
                    <p class="pb-2 underline">Jul 9,2023 - Jul 9 , 2024</p>
                </div>
                <div class="flex gap-2 items-center">
                    <BaseButton :icon="mdiUpload" color="info" />
                    <BaseButton :icon="mdiShare" color="info" />
                    <BaseButton :icon="mdiDownload" color="info" />

                </div>


            </div>
            <div class="grid max-sm:grid-cols-1 grid-cols-2 gap-0">
                <div class="border p-1">
                    <p>Cash is coming in (+) </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Particular</th>
                                <th>Amount</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Date">26-7-2023</td>
                                <td data-label="Particular">To select Account</td>
                                <td data-label="Amount">500</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="border p-1">
                    <p>Cash is going out (-) </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Particular</th>
                                <th>Amount</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Date">26-7-2023</td>
                                <td data-label="Particular">To select Account</td>
                                <td data-label="Amount">500</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="text-right pr-4 pb-2">By Balance C/F: Rs. 200.00</p>
                </div>

            </div>
            <p class="text-center py-2">Rs. 200.00</p>
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 gap-2 ">
                <div class="border p-5 dark:bg-slate-700 bg-white border-b-4 border-b-black">
                    <p>Total Transactions: 0.00</p>
                    <p>Debit : 0.00</p>
                    <p>Credit : 0.00</p>
                </div>
                <div class="border p-5  dark:bg-slate-700 bg-white border-b-4 border-b-black">
                    <p>Opening Balance</p>
                    <p>0.00</p>
                </div>
                <div class="border p-5 dark:bg-slate-700  bg-white border-b-4 border-b-black">
                    <p>Net Total</p>
                    <p>Debit : 0.00</p>
                    <p>Credit : 0.00</p>
                </div>
                <div class="border p-5  dark:bg-slate-700 bg-white border-b-4 border-b-black">
                    <p>Closing Balance</p>
                    <p>0.00</p>
                </div>

            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import FormControl from "@/components/Forms/FormControl.vue"
import BaseButton from "@/components/Buttons/BaseButton.vue"
import { mdiDownload, mdiFilter, mdiShare, mdiUpload } from "@mdi/js";
</script>

<style lang="scss" scoped>

</style>