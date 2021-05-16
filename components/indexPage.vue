<template>
  <div class="container">
    <ValidationObserver ref="observer">
        <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="InputEmail">Email address</label>
            <ValidationProvider name="email" ref="oberver" v-slot="{ errors }" rules="required|validName">
                 <input 
                 type="text" 
                 class="form-control"
                 name="email" 
                 id="InputEmail" 
                 aria-describedby="emailHelp" 
                 placeholder="Enter email"
                 v-model="name"
                 
                >
                <ul>
                    <li v-for="(error,index) in errors" :key="index">
                        <span>{{error }}</span>
                    </li>
                </ul>
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
    async onSubmit(){
        let observer : any = this.$refs.observer
        const isValidate = await observer.validate()
        if(!isValidate){
            console.log("is not valid")
        }else{
            this.name=""
            observer.reset()
        }
    }
}
</script>

<style>

</style>
