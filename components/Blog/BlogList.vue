<template>
  

        <div class="grid grid-cols-12 gap-[30px]">
            <div class="lg:col-span-8 col-span-12">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-if="blogs.length" v-for="blog in blogs">
                        <BlogCard :blog="blog" />
                    </div>

                </div>
            
            </div>
            <BlogSidebar />
        </div>
</template>

<script>

export default {
    props: ['blogs'],
}
</script>