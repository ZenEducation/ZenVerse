<template>
    <p style="font-size: 40px;">
        {{ blog.title }}
    </p>
    <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
            <div class="grid grid-cols-12 gap-[30px]">
                <div class="lg:col-span-8 col-span-12">
                    <div class="bg-[#F8F8F8] rounded-md">
                        <img src="" alt="" class=" rounded-t-md mb-10">
                        <div class="px-10 pb-10">
                            <div class="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                                <a class=" flex items-center space-x-2" href="#">
                                    <img src="" alt="">
                                    <span>Admin</span>
                                </a>
                                <a class=" flex items-center space-x-2" href="#">
                                    <img src="" alt="">
                                    <span>21 Feb, 22</span>
                                </a>
                                <a class=" flex items-center space-x-2" href="#">
                                    <img src="" alt="">
                                    <span>3 Min Read</span>
                                </a>

                            </div>


                            <p>
                                {{ blog.content }}
                            </p>

                        </div>
                    </div>
                    <hr/>
                    <h1 style="font-size: 20px;">Comments</h1>
                    <SingleBlogComments />

                </div>

            </div>
        </div>
    </div>
</template>

<script >
export default{
    props: ['blog'],
    setup(){
        
    }
}

</script>