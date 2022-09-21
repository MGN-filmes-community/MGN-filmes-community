<template>
  <v-app id="mgn">
    <v-app-bar fixed app :height="78" elevation="0">
      <nuxt-link class="header-link ml-0" :to="{ path: '' }">
        <MgnLogo></MgnLogo>
      </nuxt-link>
      <v-spacer />
      <div class="d-none d-sm-flex justify-space-around grow">
        <nuxt-link class="header-link" :to="{ path: '', hash: '#team' }"
          >Quem Somos</nuxt-link
        >
        <nuxt-link class="header-link" :to="{ path: '', hash: '#community' }"
          >Comunidade</nuxt-link
        >
        <nuxt-link class="header-link" :to="{ path: '', hash: '#tokens' }"
          >MGN tokens</nuxt-link
        >
        <nuxt-link class="header-link" :to="{ path: '', hash: '#collections' }"
          >Colecções NFTs</nuxt-link
        >
        <v-spacer />

        <nuxt-link
          :to="{ path: '', hash: '#tokens' }"
          style="text-decoration: none"
        >
          <v-btn
            v-if="!account"
            class="action-btn"
            :ripple="false"
            color="#242424"
          >
            RECEBE MGN TOKENS
            <IconArrowDown class="ml-2"></IconArrowDown>
          </v-btn>
          <div v-else>
            <JazzIcon :account="account" :id="'header'"> </JazzIcon>
          </div>
        </nuxt-link>
      </div>
      <nav-bar-menu v-if="showNav" class="" @close="showNav = false">
        <li @click="showNav = false">
          <nuxt-link class="header-link" :to="{ path: '', hash: '#team' }"
            >Quem Somos</nuxt-link
          >
        </li>
        <li @click="showNav = false">
          <nuxt-link class="header-link" :to="{ path: '', hash: '#community' }"
            >Comunidade</nuxt-link
          >
        </li>
        <li @click="showNav = false">
          <nuxt-link class="header-link" :to="{ path: '', hash: '#tokens' }"
            >MGN tokens</nuxt-link
          >
        </li>
        <li @click="showNav = false">
          <nuxt-link
            class="header-link"
            :to="{ path: '', hash: '#collections' }"
            >Colecções NFTs</nuxt-link
          >
        </li>
      </nav-bar-menu>
      <div class="box hidden-sm-and-up">
        <button
          class="hamburger-menu"
          style="font-size: 24px"
          @click="showNav = true"
        >
          &#9776;
        </button>
      </div>
    </v-app-bar>
    <v-main>
      <div>
        <Nuxt />
      </div>
    </v-main>
    <v-footer>
      <v-container>
        <v-row justify="space-between" class="flex-nowrap">
          <MgnFooterLogo />
          <div class="d-none d-sm-flex justify-center grow">
            <nuxt-link class="header-link" :to="{ path: '', hash: '#team' }"
              >Quem Somos</nuxt-link
            >
            <nuxt-link
              class="header-link"
              :to="{ path: '', hash: '#community' }"
              >Comunidade</nuxt-link
            >
            <nuxt-link class="header-link" :to="{ path: '', hash: '#tokens' }"
              >MGN tokens</nuxt-link
            >
            <nuxt-link
              class="header-link"
              :to="{ path: '', hash: '#collections' }"
              >Colecções NFTs</nuxt-link
            >
          </div>

          <a
            class="header-link white--text text-decoration-none d-flex align-center"
            href="https://discord.gg/cFyut8Asr8"
            target="_blank"
          >
            <IconDiscord class="mr-2" />
            Entra na comunidade
          </a>
        </v-row>
        <v-row class="mt-5">
          <v-col class="text-center white--text">
            {{ new Date().getFullYear() }} &copy; MGN Filmes Community - All
            rights reserved
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import MgnFooterLogo from '../assets/svg/mgn-footer-logo.vue'
import IconDiscord from '../assets/svg/icon-discord.vue'
import MgnLogo from '~/assets/svg/mgn-logo.vue'
import IconArrowDown from '~/assets/svg/icon-arrow-down.vue'

export default {
  name: 'DefaultLayout',
  components: { MgnLogo, IconArrowDown, MgnFooterLogo, IconDiscord },
  data() {
    return { showNav: false }
  },
  computed: {
    ...mapState(['account']),
  },
}
</script>

<style lang="scss">
#mgn {
  .header-link {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #242424;
    text-decoration: none;

    margin: 0 15px;
    display: flex;
    align-items: center;
    // display: flex;
    // align-items: center;
    &.nuxt-link-exact-active {
      font-weight: bold;
    }
  }
  .v-app-bar {
    background-color: #fff;
    .v-toolbar__content {
      max-width: 1262px;
      margin: 0 auto;
      padding: 4px 12px;
      .header-link {
        color: #242424;
      }
    }
  }
  .v-footer {
    @media screen and (min-width: 1024px) {
      padding: 32px 100px 50px;
    }
    background-color: #242424;
    .container {
      max-width: 1262px;
      .header-link {
        color: white;
      }
    }
  }
}
</style>
