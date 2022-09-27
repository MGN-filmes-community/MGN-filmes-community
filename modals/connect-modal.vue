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
                  v-if="!isSafari"
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

                <v-col v-if="!isSafari" cols="12" sm="8">
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
                <v-col v-else cols="12" lg="9" md="8" sm="7">
                  <p class="normal-text text-center">
                    Este browser não é compatível com a carteira digital
                    MetaMask. Por favor descarregue o
                    <a
                      href="https://www.google.com/intl/pt-PT/chrome/"
                      target="_blank"
                      class="link"
                      style="color: #8888fd"
                    >
                      Chrome
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
      isSafari: false,
    }
  },
  mounted() {
    this.isSafari =
      (navigator.vendor &&
        navigator.vendor.includes('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.includes('CriOS') === -1 &&
        navigator.userAgent.includes('FxiOS') === -1) ||
      /apple/i.test(navigator.vendor)
  },

  methods: {
    getMobileOperatingSystem() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone'
      }

      if (/android/i.test(userAgent)) {
        return 'Android'
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS'
      }

      return 'unknown'
    },
    checkIfMobile() {
      let check = false
      ;(function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          // eslint-disable-next-line no-useless-escape
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true
      })(navigator.userAgent || navigator.vendor || window.opera)
      return check
    },
    startOnboarding() {
      if (this.checkIfMobile()) {
        const mOS = this.getMobileOperatingSystem()
        let downloadURL
        switch (mOS) {
          case 'Windows Phone':
            break
          case 'Android':
            downloadURL =
              'https://play.google.com/store/apps/details?id=io.metamask&hl=pt_PT&gl=US'
            break
          case 'iOS':
            downloadURL =
              'https://apps.apple.com/pt/app/metamask-blockchain-wallet/id1438144202'
            break

          default:
            break
        }

        window.open(downloadURL, '_blank')
      } else {
        const onboarding = new MetaMaskOnboarding()
        onboarding.startOnboarding()
      }
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
