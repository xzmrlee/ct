
import HttpRequest from './axios'
// import settings from './settings'

// const baseUrl = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'
const baseUrl ='http://172.26.1.201:12000/ac'
const axios = new HttpRequest(baseUrl)
export default axios
