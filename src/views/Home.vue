<template>
  <div class="home">
    <h3>{{ $t("global.errInfo") }}</h3>
    <button @click="langToggle">en/中</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    langToggle () {
      if (this.$i18n.locale === 'zh_CN') {
        this.$i18n.locale = 'en_US'
      } else {
        this.$i18n.locale = 'zh_CN'
      }
    }
  }
}
</script>
