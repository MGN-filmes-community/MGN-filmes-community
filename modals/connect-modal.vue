<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal-network" role="dialog" @click.stop>
        <section id="modalDescription" class="modal-body">
          <slot name="body">
            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              <IconClose />
            </button>
            <v-container>
              <v-row justify="center">
                <v-col cols="12" sm="11" class="mb-8">
                  <h3
                    class="text-center font-weight-bold"
                    style="font-size: 35px"
                  >
                    Conecta à tua carteira
                  </h3>
                </v-col>

                <v-col
                  cols="12"
                  sm="9"
                  class="d-flex align-center justify-start switch-network-card mb-16 px-11 py-4"
                  style="cursor: pointer"
                  @click="connectWallet()"
                >
                  <img
                    class="mr-5"
                    :src="require('@/assets/images/icon-metamask.webp')"
                    width="60"
                    alt=""
                  />

                  <h4>{{ state }}</h4>
                </v-col>

                <v-col cols="12" sm="8">
                  <p class="normal-text text-center">
                    Não tens uma carteira digital?
                    <a
                      href=""
                      target="_blank"
                      class="link"
                      style="color: #8888fd"
                      @click="startOnboarding()"
                    >
                      Instala aqui
                    </a>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import MetaMaskOnboarding from '@metamask/onboarding'
import IconClose from '~/assets/svg/icon-close.vue'

export default {
  name: 'NetworkModal',
  components: {
    IconClose,
  },
  data() {
    return {
      state: 'MetaMask',
    }
  },
  created() {
    // this.loadingTask();
  },

  methods: {
    startOnboarding() {
      const onboarding = new MetaMaskOnboarding()
      onboarding.startOnboarding()
    },
    close() {
      this.$emit('close')
    },
    async connectWallet() {
      try {
        this.state = 'A connectar...'
        console.log('connectWallet')
        const { address, chainId } = await this.$store.dispatch('checkProvider')
        console.log(address, chainId)

        if (address) {
          this.close()
        }
      } catch (error) {
        console.log('error connecting', error.message)
        if (error?.message === 'WRONG_NETWORK') {
          this.showNetworkModal = true
        }
      }
    },
  },
}
</script>

<style lang="scss">
.modal-network {
  .btn-close {
    svg path {
      fill: #242424;
    }
  }
}
</style>
<style lang="scss" scoped>
.switch-network-card {
  background-color: #f7f7f7;
}
.modal-backdrop {
  z-index: 1060;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  overflow-x: auto;
}

.modal-network {
  max-width: 880px;
  min-width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  .modal-body {
    padding: 24px;

    @media screen and (min-width: 1024px) {
      padding: 88px;
    }
    position: relative;
  }

  .btn-close {
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: #092e33;
    background: transparent;
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 99;
    svg path {
      fill: #242424;
    }
  }
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
