import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  zh_CN: require('./zh'), // 中文语言包
  en_US: require('./en') // 英文语言包
}

export default new VueI18n({
  locale: 'zh_CN', // set locale 默认显示英文
  messages: messages // set locale messages
})
