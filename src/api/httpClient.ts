import { type Method } from 'types/api'
import axios, { type AxiosResponse } from 'axios'

export default class HttpClient {
  static call<T>(
    method: Method,
    url: string,
    data: any = null
  ): Promise<AxiosResponse<T>> | any {
    return axios({
      method,
      url,
      data,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
