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
}
)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver) 