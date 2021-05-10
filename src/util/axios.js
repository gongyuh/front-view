import axios from "axios";
import errorHandle from "./errorHandle";

//把axios的请求封装成一个类
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  //获取axios的配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      timeout: 10000,
    };
    return config
  }
  //设定拦截器
  interceptors() {
      //请求超过了十秒钟断定请求失败
    const instance = axios.create();

    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log("config:" + config);
        return config;
      },
      (err) => {
        errorHandle(err);
        // Do something with request error
        return Promise.reject(err);
      }
    );
    
    // 响应请求的拦截器
    instance.interceptors.response.use(
      (res) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log("res is:" + res);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      (err) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        debugger;
        errorHandle(err);
        return Promise.reject(err);
      }
    );
  }
  //创建实例
  request(options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(),options)
    this.interceptors(instance)
    return instance.request(newOptions)
  }
  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }
  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}



export default HttpRequest;
