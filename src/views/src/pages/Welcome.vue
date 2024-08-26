<script>
export default {    
    name: 'Welcome',
    setup(props){

        return {
            data: props.data
        }
    },
    props: ['data']
}
</script>

<template>
    <h1>HOŞGELDİNİZ!</h1>
    <div v-if="!data.openBefore && data.tokenFound">
        <img src="" alt="discord avatar">
        <p>Global Name</p>
        <p>User Name</p>
        <button>Devam</button>
    </div>
    <div v-else>
        <p>Devam etmek için aşağıdaki düğmeye basmanız yeterli.</p>
        <p>Ve lütfen eklentiyi kullanmadan önce, eklenti açıkken sayfayı yenileyiniz.</p>
        <button>Devam</button>
    </div>
</template>

<style lang="scss">
</style>