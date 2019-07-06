<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { reqAddress } from './api'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: "App",
    data () {
      return {
        msg: 'App Component'
      }
    },

    async mounted () {
      const result = await reqAddress('116.36867', '40.10038')
      console.log('result', result)
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
