<script>
import DmList from '../../components/DmList.vue'
import { getUserDms, getUserData } from '../../../helpers/apiHandler'
export default {    
    name: 'Dashboard',
    setup(){
        const dms = getUserDms()
        return {
            dms
        }
    },
    components: {
        DmList
    }
}
</script>

<template>
    <DmList :dms="dms" />
</template>

<style lang="scss">
</style>