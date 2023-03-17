<template>
    <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
        <img src="../../images/project-main-image.jpg" class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="">
        <div class="absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0"></div>

        <div class="content">
            <div class="icon absolute z-10 hidden group-hover:block top-4 ltr:right-4 rtl:left-4 transition-all duration-500">
                <a href="../../images/project-main-image.jpg" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
            </div>

            <div class="title absolute z-10 hidden group-hover:block bottom-4 ltr:left-4 rtl:right-4">
                <a href="#0" class="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</a>
                <p class="text-slate-100 tag mb-0">{{props.data.name}}</p>
            </div>
        </div>
    </div>
    <!-- {{ props.data }} -->
    </template>
    
    <script setup>
    import {
        defineProps
    } from 'vue';

    const props = defineProps({
        data:Object,
    })
    </script>