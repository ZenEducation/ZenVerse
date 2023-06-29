<template>
    <div class="rounded-md shadow dark:shadow-gray-800">
        <div class="p-6">
            <a :href="data.joblink" class="title h5 text-lg font-semibold hover:text-indigo-600">{{ data.title }}</a>
            <p class="text-slate-400 mt-2"><i class="uil uil-clock text-indigo-600"></i> Posted {{ data.daysafterposted }}
                Days ago</p>

            <div class="flex justify-between items-center mt-4">
                <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{{ data.jobType
                }}</span>

                <p class="text-slate-400"><i class="uil uil-usd-circle text-indigo-600"></i> ${{ data.maxSalary }} -
                    ${{ data.minSalary }}/{{ data.salaryperiod }}</p>
            </div>
        </div>

        <div class="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
            <img src="@/images/facebook.png"
                class="h-12 w-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="">

            <div class="ltr:ml-3 rtl:mr-3 ml-3">
                <h6 class="mb-0 font-semibold text-base">{{ data.jobDepartmentId }}</h6>
                <span class="text-slate-400 text-sm">{{ data.jobLocation }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleJobCard',
    props: {
        data: Object
    }
}
</script>
