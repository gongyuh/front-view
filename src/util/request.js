import HttpRequest from './axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'develpment'?
config.baseUrl.dev : config.baseUrl.process
// const baseUrl = config.baseUrl.dev

const axios = new HttpRequest(baseUrl)

export default axios
