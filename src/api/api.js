import axios from 'axios'
import { Message, Loading } from 'element-ui'
import i18n from '../assets/i18n/i18n'

// 请求 api
const base = 'https://wxtest.nttdata-it.com/wechatapi'
const options = {
  fullscreen: true,
  text: '加载中...',
  background: 'rgba(255, 255, 255, 0.5)',
  lock: true
}

export function PostData (url, data) {
  return new Promise((resolve, reject) => {
    // loadingInstance变量
    const loadingInstance = Loading.service(options)
    // 获取当前国际化对象
    const i18nMsg = i18n.messages[i18n.locale]
    axios
      .post(base + url, data)
      .then(response => {
        // 关闭加载对话框
        loadingInstance.close()
        if (response.data.code === -1) {
          Message.error(response.data.error_msg) // 发生异常
        }
        resolve(response)
      })
      .catch(err => {
        // 关闭加载对话框
        loadingInstance.close()
        Message.error(i18nMsg.global.errInfo)
        reject(err)
      })
  })
}
// 请求 api (get)
export function GetData (url, data) {
  return new Promise((resolve, reject) => {
    // loadingInstance变量
    const loadingInstance = Loading.service(options)
    // 获取当前国际化对象
    const i18nMsg = i18n.messages[i18n.locale]
    axios
      .get(base + url, {
        params: {
          // 请求参数
          data: data
        }
      })
      .then(response => {
        // 关闭加载对话框
        loadingInstance.close()
        resolve(response)
      })
      .catch(err => {
        // 关闭加载对话框
        loadingInstance.close()
        Message.error(i18nMsg.global.errInfo)
        reject(err)
      })
  })
}

// children-3
export const child3 = params => PostData('/getSwitch', params)
// children-4
export const child4 = params => GetData('/getMenuList', params)
