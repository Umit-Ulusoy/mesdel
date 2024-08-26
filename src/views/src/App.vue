<script>
export default {
  data() {
    return {
      token: "de"
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
  <router-view :token="token"></router-view>
</template>

<style lang="scss">
@import url("main.scss");
</style>
