<script>
export default {
  data() {
    return {
      token: null
    };
  },
  mounted() {
    chrome.storage.local.get('token', (result) => {
			if (result.token) {
        this.token = result.token
			} else {
				console.log("Token bulunamadı")
			}
		})
    this.$router.push('/')
  }
};


</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
