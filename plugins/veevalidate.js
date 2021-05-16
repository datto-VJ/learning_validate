import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend
} from 'vee-validate'
 import { required} from 'vee-validate/dist/rules.umd.js'
extend('required',{
    ...required
    ,
    message:"please check again",
},
extend('validName',{
    message:"Tối thiểu tám ký tự, ít nhất một chữ cái và một số",
    validate:(value)=>{
        let errMessage = ""
        const mustContainTheseCharts = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        let containRequiredCharts = mustContainTheseCharts.test(value)
        if(containRequiredCharts){
            return true
        }else{
            return false
        }
    }
})
)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver) 