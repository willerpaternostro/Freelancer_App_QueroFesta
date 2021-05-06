import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'http://beta.prcweb.com.br/api/',
    timeout: 120000,
  })

Vue.prototype.$axios = axiosInstance

export {axiosInstance}