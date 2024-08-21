<script>
import { ref } from 'vue'
import { Welcome, Dashboard } from './index'
import { setOpenBefore, getOpenBefore } from '../../../helpers/misc'
export default {
    name: 'Home',
    setup(){
        const IsOB = getOpenBefore()
        const openBefore = ref(IsOB)

        return {
            openBefore,
        }
    },
    components: {
        Welcome,
        Dashboard
    }
}
</script>

<template>
    <Dashboard v-if="openBefore" />
    <Welcome v-else />
</template>

<style scoped>
    
</style>