import { defineStore } from "pinia";

const state = () => ({
    categories:[
        {
            name: 'Matt Daniel',
            description: 'Data Category',
            language: '<div>&#127482;&#127480; English</div>',
            icon: '',
            slug: 'Article',
            count: 2,
        },
    ]
})

export const useCategoryStore = defineStore('category', {
    state
  })