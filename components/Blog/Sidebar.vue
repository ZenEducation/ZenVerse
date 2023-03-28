<template>
    <div class="lg:col-span-4 col-span-12">
        <div class="sidebarWrapper space-y-[30px]">
            <div class="wdiget widget_search">
                <div class="bg-[#F8F8F8] flex rounded-md shadow-e1 items-center py-[4px] pl-3 relative">
                    <div class="flex-1">
                        <input type="text" placeholder="Search keyword..."
                            class="border-none focus:ring-0 bg-transparent" />
                    </div>
                    <div class="flex-none">
                        <button class="btn btn-primary">
                            <img src="" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <BlogCategories />
         
        
        </div>
    </div>
</template>