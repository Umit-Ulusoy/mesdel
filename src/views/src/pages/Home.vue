<script>
import { ref } from 'vue'
import { Welcome, Dashboard } from './index'
export default {
    name: 'Home',
    setup(){
        const openBefore = ref(false)

        function isOpenBefore(){
            openBefore.value = !openBefore.value
        }
        return {
            openBefore,
            isOpenBefore
        }
    },
    components: {
        Welcome,
        Dashboard
    }
}
</script>

<template>
    <Welcome v-if="openBefore" />
    <Dashboard v-else />
</template>

<style scoped>
    
</style>