<template>
  <div class="container">
    <my-index-page/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyIndexPage from '~/components/indexPage.vue'
@Component({
  components:{
    MyIndexPage
  }
})
export default class MyIndex extends Vue {
}
</script>

<style>

</style>
