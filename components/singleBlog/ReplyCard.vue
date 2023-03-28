<template>
   <div class=" mt-14">
                        <h3 class=" mb-4">
                            Leave A Reply
                        </h3>
                        <div>
                            Your email address will not be published. Requires fields are marked*
                        </div>
                        <div class=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 ">
                            <div>
                                <input type="text" class=" from-control" placeholder="Name*">
                            </div>
                            <div>
                                <input type="email" class=" from-control" placeholder="Email*">
                            </div>
                            <div class="md:col-span-2 col-span-1">
                                <input type="url" class=" from-control" placeholder="Website Address">
                            </div>
                            <div class="md:col-span-2 col-span-1">
                                <textarea class=" from-control" placeholder="Your Message*" rows="5"></textarea>
                            </div>
                        </div>
                        <button class="btn btn-primary mt-[30px]">
                            Post Comment
                        </button>
                    </div>
</template>