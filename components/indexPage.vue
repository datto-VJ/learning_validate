<template>
  <div class="container">
    <ValidationObserver ref="observer">
        <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="InputEmail">Email address</label>
            <ValidationProvider name="email" ref="oberver" v-slot="{ errors }" rules="required">
                 <input 
                 type="text" 
                 class="form-control"
                 name="email" 
                 id="InputEmail" 
                 aria-describedby="emailHelp" 
                 placeholder="Enter email"
                 v-model="name"
                >
                <span v-show="isShow">{{errors[0]}}</span>
            </ValidationProvider>           
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MyIndexPage extends Vue {
    name:string=""
    isShow:boolean=false
    async onSubmit(){
        let observer : any = this.$refs.observer
        const isValidate = await observer.validate()
        if(!isValidate){
            return this.isShow=true
        }
        this.isShow=false
    }
}
</script>

<style>

</style>
