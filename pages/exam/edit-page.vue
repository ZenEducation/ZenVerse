<template>
  <div class="text-[#7d7d7d]">
    <exam-nav/>
    <side-bar/>
    <page-content/>
  </div>
</template>

<script>
import ExamNav from '~~/components/Exam/Exam-Nav.vue'
import SideBar from '~~/components/Exam/Side-Bar.vue'
import PageContent from '~~/components/Exam/Page-Content.vue'
export default {
  components: { ExamNav, SideBar, PageContent },
}
</script>

<style>
.section {
    font-size: 16px;
    color: #7d7d7d;
    background-color: #FFF;
    padding: 20px;
    margin: 12px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}

.section:hover{
    box-shadow: 0 4px 10px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 24%);
}

.section-add {
    font-size: 16px;
    color: #7d7d7d;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    border-radius: 2px;
    cursor: pointer;
}

.section-add:hover{
    box-shadow: 0 4px 10px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 24%);
}


li {
    display: flex;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    font-weight: 400;
    height: 32px;
    list-style: none;
    padding: 2px;
    font-size: 12px;
    text-align: left;
    width: 167px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.box-shadow {
    margin: 6px 20px 15px;
    box-shadow: 0 1px 1px 0 rgb(133 133 133 / 30%), 0 0 0 1px rgb(49 115 221 / 3%);
}

.side-bar {
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 6%);
    max-width: 200px;
    background: white;
}

.list-lable {
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 400;
    padding: 0 20px;
    text-transform: capitalize;
}

.bottom-side-nav {
  width: 100%;
    border-bottom: 1px solid rgba(199,199,199,.2);
    cursor: pointer;
}

.bottom-side-nav a {
    margin-top: 0!important;
    padding: 8px 20px;
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.lr-btn {
    font-size: 12px;
    color: #b3b3b3!important;
    padding: 1px 6px;
    border: 1px solid rgba(199,199,199,.2);
    background-color: #f7f7f7;
    font-weight: 600;
    font-style: normal;
    line-height: 22.5px;
}
</style>