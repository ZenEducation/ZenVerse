import { useCollectionStore } from "~~/stores/collections"

const collectionStore = useCollectionStore()

export default defineNuxtRouteMiddleware((to, from) => {
    const route = to.params.category

    if (!route || !collectionStore.isValidRoute(route)) {
        alert("Invalid route!");

        return navigateTo('/dashboard')
    }
})