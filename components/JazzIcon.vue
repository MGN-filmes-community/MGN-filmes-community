<template>
  <v-container pl-0>
    <v-row>
      <v-col cols="auto" class="px-0">
        <div
          :id="'jazzicon-' + id"
          :style="{
            width: size + 'px',
            height: size + 'px',
          }"
        ></div>
      </v-col>
      <v-col class="d-flex align-center account">
        {{ account | truncate(16) }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jazzicon from '@metamask/jazzicon'

export default {
  props: {
    account: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      size: 42,
    }
  },
  watch: {
    address(value) {
      if (value) {
        this.setIconWallet(this.size, this.id, this.account)
      }
    },
  },
  mounted() {
    this.setIconWallet(this.size, this.id, this.account)
  },
  methods: {
    setIconWallet(size, id, account) {
      if (account) {
        const body = document.getElementById('jazzicon-' + id)
        const icon = document.getElementById('jazzicon-' + id + '-icon')
        if (body && !icon) {
          const acc = parseInt(account.slice(2, 10), 16)
          const el = jazzicon(size, acc)
          el.id = 'jazzicon-' + id + '-icon'
          el.classList.add('icon')

          body.insertBefore(el, body.firstChild)

          //   this.iconSet = true;
        }
      }
    },
  },
}
</script>

<style scoped>
.account {
  text-decoration: none;
}
</style>
