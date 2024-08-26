<script>
import { ref } from 'vue'
import { Welcome, Dashboard } from './index'
import { setOpenBefore, getOpenBefore } from '../../../helpers/misc'
export default {
    name: 'Home',
    setup(props){
        const isOpenBefore = getOpenBefore()
        const isToken = ref(false)
        const openBefore = false
        if(props?.token){
            isToken.value = true
        }
        if(!isOpenBefore){
            setOpenBefore(true)
            return
        }
        const data = ref({
            openBefore: openBefore,
            tokenFound: isToken,
            token: props?.token
        })

        return {
            openBefore,
            tokenFound: isToken,
            data
        }
    },
    components: {
        Welcome,
        Dashboard
    },
    props: ["token"]
}
</script>

<template>
    {{ JSON.stringify(data) }}
    <p style="background: red; padding: 1rem;">token: {{ token }}</p>
    <Dashboard :data="data" v-if="openBefore && tokenFound" />
    <Welcome :data="data" v-else /> 
</template>

<style scoped>
    
</style>