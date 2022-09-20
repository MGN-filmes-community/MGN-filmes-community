<template>
  <v-container fluid class="pa-sm-0 pb-16">
    <v-row justify="center" align="start" class="section1">
      <v-col cols="12" class="text-center pt-15">
        <h1>Comunidade MGN Filmes</h1>
        <h3 class="mt-2">Nova produção <b> “A Fada do Lar” </b></h3>

        <div class="highlight-chip mt-5">
          <h5 class="white--text text-uppercase">
            {{
              hasBeenReleased
                ? 'em exibição nas salas de cinema'
                : 'estreia nos cinemas a 5 de outubro'
            }}
          </h5>
        </div>
      </v-col>

      <v-col cols="12" class="pa-0">
        <OwlCarousel v-bind="settings">
          <div
            v-for="i in 21"
            :key="i"
            :style="{
              width:
                i == 1
                  ? '290px'
                  : $vuetify.breakpoint.mobile
                  ? '70vw'
                  : '990px',
              height:
                i == 1
                  ? '420px'
                  : $vuetify.breakpoint.mobile
                  ? '30vh'
                  : '420px',
            }"
            class="d-flex align-center"
          >
            <v-hover v-slot="{ hover }">
              <v-card class="carousel-card" :class="{ 'on-hover': hover }">
                <!-- <img class="carousel-img" :src="item.src" /> -->

                <img
                  :src="`movie-frames/frame (${i - 1}).webp`"
                  alt="Movie frame"
                />

                <div class="align-self-center">
                  <v-btn
                    class="action-btn"
                    :class="{ 'show-btns': hover }"
                    @click="showVideoPlayerModal = true"
                  >
                    Ver trailer <IconPlay class="ml-2"></IconPlay>
                  </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
        </OwlCarousel>
      </v-col>
      <v-col cols="12" class="text-center">
        <h4 class="">Viste o filme “A Fada do Lar”?</h4>
        <nuxt-link class="" :to="{ path: '', hash: '#tokens' }">
          <v-btn class="action-btn mt-3" :ripple="false" color="#242424">
            RECEBE MGN TOKENS
            <IconArrowDown class="ml-2"> </IconArrowDown>
          </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>
    <span id="team"></span>
    <v-container>
      <v-row justify="center" align="start" class="pt-15">
        <v-col cols="12" sm="12" md="12" class="pt-10">
          <h5 class="font-weight-bold" style="color: #8888fd">QUEM SOMOS</h5>
        </v-col>

        <v-col cols="12" sm="6" md="6" class="">
          <h2 class="mb-5">As produções MGN</h2>
          <p class="normal-text">
            Fundada em 1987 por Tino Navarro a MGN Filmes produziu ou
            co-produziu 42 longas metragens, entre as quais filmes “A Mulher do
            Próximo”, “Adão e Eva”, “Adeus, Pai”, “Zona J”, “Call Girl”, “O
            Xangô de Baker Street”, e “100 Metros”, uma mini-série de ficção
            (Até Amanhã, Camaradas) e uma curta-metragem (Olga Drummond). Os
            filmes da MGN fizeram mais de 6 milhões de espectadores em salas
            cinema, dos quais 1.987.356 em Portugal, foram um enorme sucesso em
            home vídeo e em televisão e ganharam 76 Prémios, entre os quais 17
            Globos de Ouro e 20 Prémios Sophia em Portugal, 6 Prémios Goya em
            Espanha, 3 Prémios do Cinema Brasileiro no Brasil.
          </p>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
          class="pl-sm-12"
          style="position: relative"
        >
          <OwlCarousel
            class="d-flex movie-poster-carousel"
            v-bind="{
              ...settings,
              margin: 20,
              stagePadding: 50,
              center: false,
            }"
          >
            <div
              v-for="i in 20"
              :key="i"
              :style="{
                width: '282px',
                height: '400px',
              }"
            >
              <v-card class="carousel-card">
                <img
                  :src="`movie-posters/poster (${i}).jpg`"
                  alt="Movie poster"
                  loading="lazy"
                />
              </v-card>
            </div>
          </OwlCarousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center" align="center" class="pt-15">
        <v-col cols="12" sm="12" md="12">
          <h4 class="font-weight-bold">A equipa MGN Filmes</h4>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="section-team mt-8">
        <v-col cols="12" sm="4" md="4" class="member-card">
          <div class="flip-horizontal-bottom">
            <img
              src="team/team-1.webp"
              alt="Tino Navarro"
              loading="lazy"
              width="110"
              height="110"
            />
            <div class="highlight-chip mt-5">
              <h6 class="white--text text-uppercase">tino navarro</h6>
            </div>
            <h5 class="mt-3">Fundador e Produtor</h5>
          </div>
          <div class="member-info">
            Tino Navarro nasceu em Vila Flor, em 1954 e começou a trabalhar na
            produção cinematográfica em 1972, numa produtora de filmes chamada
            Cinegra. Em 1987 fundou a MGN Filmes.
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" class="member-card">
          <div>
            <img
              src="team/team-2.webp"
              alt="Carla Silva"
              loading="lazy"
              width="110"
              height="110"
            />
            <div class="highlight-chip mt-5">
              <h6 class="white--text text-uppercase">CARLA SILVA</h6>
            </div>
            <h5 class="mt-3">Produtora Executiva</h5>
          </div>
          <div class="member-info">
            Na MGN Filmes desde 2004 é responsável por financiamentos
            institucionais e pela gestão financeira e administrativa da empresa
            e dos seus projetos.
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" class="member-card">
          <div>
            <img
              src="team/team-3.webp"
              alt="Adriano Navarro"
              loading="lazy"
              width="110"
              height="110"
            />
            <div class="highlight-chip mt-5">
              <h6 class="white--text text-uppercase">ADRIANO NAVARRO</h6>
            </div>
            <h5 class="mt-3">Produtor Executivo</h5>
          </div>
          <div class="member-info">
            Mestre pela Harvard University e pelo Massachusetts Institute of
            Technology (MIT), é responsável pela estratégia e
            internacionalização, pelas novas tecnologias e negócios.
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="community" fluid class="section4 mt-15 pt-6 pb-16">
      <v-row justify="center" align="start" class="pt-sm-14 pb-6">
        <v-col cols="12" sm="6" md="6" class="pr-sm-16">
          <h5 class="white--text mb-6">COMUNIDADE</h5>
          <h2 class="white--text mb-6">A Comunidade MGN</h2>
          <p class="white--text normal-text mb-10">
            A Comunidade MGN Filmes é uma iniciativa promovida pela MGN Filmes
            Lda, com o objetivo de abrir a participação nas várias atividades
            nas quais a produtora se envolve a um núcleo alargado de pessoas,
            transformando uma relação passiva entre quem faz os filmes
            (produtores, autores, actores, técnicos) e quem os vê (espectadores)
            numa relação cada vez mais interativa e participativa, através da
            utilização de iniciativas offline e online, bem como de ferramentas
            da Web3.
          </p>
          <a
            href=""
            target="_blank"
            class="white--text link"
            @click="downloadFile('/litepaper.pdf')"
            >Sabe mais sobre a Comunidade MGN
            <IconArrowForward></IconArrowForward>
          </a>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="topics px-sm-8">
          <h4 class="white--text font-weight-bold">
            Esta comunidade associando os espectadores dos filmes àqueles que os
            fazem tem como objetivos principais:
          </h4>
          <div v-for="(topic, i) in topics" :key="i" class="topic-item">
            <v-img
              contain
              max-width="85"
              :src="require(`assets/images/icon-community-${i + 1}.webp`)"
            >
            </v-img>
            <p class="white--text d-flex mb-0 ml-5 normal-text">
              {{ topic }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="section5 mt-15 pt-15">
      <v-row justify="center">
        <v-col cols="12" sm="9" class="">
          <h2 class="mb-6 text-center">
            Como se pode tornar membro da Comunidade
          </h2>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="card text-center">
          <div class="px-10 py-6">
            <v-img
              contain
              class="mx-auto mb-5"
              max-width="206"
              :src="require(`assets/images/icon-token.webp`)"
            ></v-img>
            <h4 class="mb-5 font-weight-bold">Espectadores de cinema</h4>
            <p class="normal-text mb-10">
              Podem ser membros da Comunidade todos os que tenham assistido a um
              filme da MGN nas salas de cinema a partir de 1 de outubro de 2022.
              Para isso basta enviar o bilhete de cinema e solicitar o $MGN
              token a que tem direito.
            </p>
            <nuxt-link class="" :to="{ path: '', hash: '#tokens' }">
              <v-btn class="action-btn mt-3" :ripple="false" color="#242424">
                RECEBE MGN TOKENS
                <IconArrowDown class="ml-2"> </IconArrowDown>
              </v-btn>
            </nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="card text-center">
          <div class="px-8 py-6">
            <v-img
              contain
              class="mx-auto mb-5"
              max-width="206"
              :src="require(`assets/images/icon-community.webp`)"
            >
            </v-img>
            <h4 class="mb-5 font-weight-bold">
              Autores, Actores, Técnicos e Colaboradores
            </h4>
            <p class="normal-text mb-10">
              Todos os que participaram na produção do filme “A Fada do Lar” e
              atuais colaboradores da MGN podem receber tokens $MGN desde que o
              solicitem, indicando a carteira digital onde os pretendem receber.
              O número de tokens a distribuir por cada um será determinado pela
              MGN Filmes Lda.*
            </p>
            <a href="https://discord.gg/cFyut8Asr8" target="_blank">
              <v-btn class="action-btn mb-5" :ripple="false" color="#242424">
                FALA CONNOSCO PELO DISCORD
              </v-btn>
            </a>
            <p class="info-message">
              *Em datas a anunciar, a MGN distribuirá $MGN tokens por
              participantes em anteriores e futuras produções.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="section5-5 mt-15 pt-15">
      <v-row justify="start">
        <v-col cols="12" sm="12" class="">
          <h4 class="mb-6 text-center font-weight-bold">
            Membros da comunidade MGN
          </h4>
        </v-col>
        <v-col
          v-for="(member, i) in communityMembers"
          :key="i"
          cols="12"
          sm="4"
          md="4"
          class="card text-left"
        >
          <v-card class="border-card d-flex pa-4">
            <img
              class="mr-4"
              alt="Member photo"
              max-width="100"
              :src="`member-photos/member (${0}).webp`"
            />

            <div class="d-flex flex-column justify-center">
              <h5 class="text-uppercase font-weight-bold">
                {{ member.name }}
              </h5>
              <h5 class="">{{ member.role }}</h5>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12" class="text-center pt-sm-16">
          <a
            href="https://discord.gg/cFyut8Asr8"
            target="_blank"
            rel="noopener noreferrer"
            style="color: #8888fd"
            class="link"
          >
            Conhece todos membros através do nosso Discord<icon-arrow-forward
              class="ml-1"
              color="#8888fd"
            >
            </icon-arrow-forward>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="tokens" fluid class="section6 mt-15 pt-15">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6" class="text-left pr-sm-10">
          <div class="pb-6">
            <v-img
              contain
              class="mx-0 mb-5"
              max-width="206"
              :src="require(`assets/images/icon-token.webp`)"
            ></v-img>
            <h5 class="mb-5 font-weight-bold" style="color: #8888fd">
              MGN TOKENS
            </h5>
            <h2 class="mb-5 font-weight-bold">Recebe os teus MGN tokens</h2>
            <p class="normal-text mb-10">
              Se viste o filme “A Fada do Lar” numa sala de cinema, envia uma
              foto do bilhete e recebe MGN tokens, que te darão acesso aos
              canais exclusivos da nossa comunidade e onde poderás participar na
              produção dos próximos conteúdos cinematogáficos e audiovisuais.
            </p>
          </div>
        </v-col>
        <v-col cols="auto" sm="6" md="6" class="stepper text-left">
          <div class="d-flex">
            <IconStep1 v-if="step == 1" class="mr-3" style="flex: 0 0 auto" />
            <IconStepCheck v-else class="mr-3" style="flex: 0 0 auto" />
            <h4>Conecta à tua carteira digital</h4>
          </div>
          <div class="pl-11 pt-5">
            <div v-if="!account" class="d-flex">
              <v-btn
                class="action-btn inverse mb-5 mr-5 mt-2"
                :ripple="false"
                @click="openConnectModal()"
              >
                LIGA À TUA CARTEIRA
              </v-btn>
              <p class="normal-text">
                Não tens uma carteira digital? <br />
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
            </div>
            <div v-else>
              <JazzIcon :account="account" :id="'form'"> </JazzIcon>
            </div>
          </div>
          <div class="d-flex pt-10">
            <IconStep2 class="mr-3" style="flex: 0 0 auto" />
            <h4>
              Indica a sala de cinema e a localidade onde assististe ao filme:
            </h4>
          </div>
          <div class="d-flex pl-11 pt-7">
            <v-text-field
              v-model="location"
              color="#242424"
              placeholder="Sala de cinema/localidade"
            >
            </v-text-field>
          </div>
          <div class="d-flex pt-10">
            <IconStep3 class="mr-3" style="flex: 0 0 auto" />
            <h4>
              Faz upload de uma fotografia do teu bilhete e submete a tua
              informação:
            </h4>
          </div>
          <div class="d-flex align-center pl-11 py-7">
            <v-btn
              class="action-btn inverse mb-5"
              :disabled="isMintDisabled"
              :ripple="false"
              @click="submit()"
            >
              Submete aqui
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <span id="collections"></span>
    <v-container class="section7 my-15 pt-15 pb-16">
      <v-row justify="center">
        <v-col cols="12" sm="12" class="">
          <h5 class="mb-6 font-weight-bold" style="color: #8888fd">
            LITEPAPER & COLECÇÕES DE NFTs
          </h5>
          <h2 class="mb-6 font-weight-bold">
            Sabe tudo sobre a comunidade MGN
          </h2>
        </v-col>
        <v-col cols="12" sm="5" md="5" class="card text-left">
          <v-card class="border-card">
            <v-img
              contain
              class="mx-0 mb-7"
              max-width="100"
              :src="require(`assets/images/icon-litepaper.webp`)"
            >
            </v-img>
            <div class="highlight-chip mb-4 mx-0">
              <h5 class="white--text text-uppercase">litepaper</h5>
            </div>
            <p class="normal-text">
              Sabe mais sobre os MGN tokens no nosso LitePaper. Descarrega
              <a
                href=""
                target="_blank"
                class="link"
                style="color: #8888fd"
                @click="downloadFile('/litepaper.pdf')"
              >
                aqui</a
              >.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7" md="7" class="card text-left">
          <v-card class="collection-card">
            <v-img
              contain
              class="mx-0 mb-7"
              max-width="100"
              :src="require(`assets/images/icon-collection.webp`)"
            >
            </v-img>
            <div class="highlight-chip mb-4 mx-0">
              <h5 class="white--text text-uppercase">colecção de nfts</h5>
            </div>
            <p class="normal-text">Colecção de NFTs brevemente disponíveis.</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <VideoPlayerModal
      v-if="showVideoPlayerModal"
      @close="showVideoPlayerModal = false"
    />
    <ConnectModal v-if="showConnectModal" @close="showConnectModal = false" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import MetaMaskOnboarding from '@metamask/onboarding'

import OwlCarousel from 'vue-owl-carousel'
import IconArrowForward from '../assets/svg/icon-arrow-forward.vue'
import IconStep1 from '../assets/svg/icon-step1.vue'
import IconStep2 from '../assets/svg/icon-step2.vue'
import IconStepCheck from '../assets/svg/icon-step-check.vue'
import IconStep3 from '../assets/svg/icon-step3.vue'
import IconArrowDown from '~/assets/svg/icon-arrow-down.vue'
import IconPlay from '~/assets/svg/icon-play.vue'
import VideoPlayerModal from '~/modals/video-player-modal.vue'
import ConnectModal from '~/modals/connect-modal.vue'

export default {
  name: 'IndexPage',
  components: {
    OwlCarousel,
    IconArrowDown,
    IconPlay,
    IconArrowForward,
    IconStep1,
    IconStep2,
    IconStep3,
    VideoPlayerModal,
    IconStepCheck,
    ConnectModal,
  },

  data() {
    return {
      communityMembers: [
        {
          name: 'Filipe Veiga',
          role: 'Espectador de cinema',
        },
        {
          name: 'Filipe Veiga',
          role: 'Espectador de cinema',
        },
        {
          name: 'Filipe Veiga',
          role: 'Espectador de cinema',
        },
        {
          name: 'Filipe Veiga',
          role: 'Espectador de cinema',
        },
      ],
      uploadedTicket: null,
      uploadedTicketName: 'Nenhum ficheiro selecionado',
      location: null,
      step: 1,
      premierDate: '2022-10-05T22:00:00Z',
      hasBeenReleased: false,
      showVideoPlayerModal: false,
      showConnectModal: false,
      settings: {
        loop: true,
        stagePadding: 100,
        autoplay: true,
        // autoplaySpeed: true,
        dots: false,
        margin: 40,
        autoWidth: true,
        autoHeight: true,
        center: true,
        nav: false,
        items: 3,
        autoplayHoverPause: true,
      },
      topics: [
        'Reflectir sobre projetos e processos de produção;',
        'Estabelecer formas de comunicação ativas entre todos quebrando as barreiras existentes; ',
        'Recompensar o talento (autores, actores e técnicos) e os espectadores dos filmes da MGN;',
        'Descentralizar progressivamente as decisões.',
      ],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  computed: {
    ...mapState(['account']),
    isMintDisabled() {
      return !(this.location && this.account)
    },
  },
  mounted() {
    const now = new Date()

    const distance = new Date(this.premierDate) - now
    if (distance < 0) {
      this.hasBeenReleased = true
    }
  },
  methods: {
    startOnboarding() {
      const onboarding = new MetaMaskOnboarding()
      onboarding.startOnboarding()
    },
    downloadFile(file) {
      window.open(file)
    },
    submit() {
      const preflledURL = (address, location) =>
        `https://docs.google.com/forms/d/e/1FAIpQLSfMPZXdIHZv9zQ61GHgRShuqB3lzMY3CnuqVn24k-_hQg7OJA/viewform?usp=pp_url&entry.1538976001=${address}&entry.1021803014=${location}`

      window.open(preflledURL(this.account, this.location), '_blank')
    },
    handleTicketUpload() {
      const file = this.$refs['ticket-upload']?.files?.[0]
      this.uploadedTicketName = file?.name
      this.uploadedTicket = file

      console.log(this.uploadedTicket)
    },
    openConnectModal() {
      this.showConnectModal = true
    },
    async connectWallet() {
      try {
        console.log('connectWallet')
        const { address, chainId } = await this.$store.dispatch('checkProvider')
        console.log(address, chainId)

        if (address) {
          this.step = 2
          this.showConnectModal = false
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
.owl-stage-outer {
  max-width: 100vw !important;
}
.movie-poster-carousel {
  @media screen and (min-width: 1024px) {
    position: absolute;
    max-width: 47.5vw;
  }
  // max-width: 47.5vw;
  // width: 100%;
}
.section-team {
  .member-card:nth-child(1) > div:first-child {
    background-image: linear-gradient(59deg, #f9f3ec 5%, #e1dcf0 92%);
  }
  .member-card:nth-child(2) > div:first-child {
    background-image: linear-gradient(59deg, #eae5ef 5%, #d2cff2 92%);
  }
  .member-card:nth-child(3) > div:first-child {
    background-image: linear-gradient(59deg, #d9d5f1 5%, #bab8f5 92%);
  }

  .member-card {
    text-align: center;
    position: relative;
    overflow: hidden;
    .member-info {
      position: absolute;
      opacity: 0;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 80%;
      max-width: 100vw;
      animation: puff-out-center 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }

    &:hover {
      > div * {
        opacity: 0.1;
      }
      .member-info {
        animation: puff-in-center 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      }
    }
    > div:first-child {
      border-radius: 4px;
      padding: 42px;
    }
  }
}
.active.center .carousel-card {
  &.v-card {
    transition: opacity 0.4s ease-in-out;
  }

  &.on-hover img {
    opacity: 0.6;
  }
  .show-btns {
    display: inline;
  }
  .action-btn {
    position: absolute;
    bottom: 80px;
    right: 60px;
  }
}
.carousel-card.v-card {
  box-shadow: none !important;
  border-radius: 0;
  background: none;
  .action-btn {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .action-btn {
      display: inline;
      position: absolute;
      bottom: 80px;
      right: 60px;
    }
  }
}
.carousel-img {
  height: 420px;
}
.section1 {
  padding-bottom: 60px;
  background-image: linear-gradient(
    55deg,
    #faf4ec 13%,
    #c5c3f3 71%,
    #9595fa 94%
  );
  max-width: 100vw;
  @media screen and (min-width: 1024px) {
    height: 870px;
  }
}
.section4 {
  background-color: #242424;
  .row {
    max-width: 1262px;
    margin: 0 auto;
    .topics {
      .topic-item {
        display: flex;
        align-items: center;

        padding: 24px 0 18px 0;

        border-bottom: solid 1px #fff;
      }
    }
  }
  * {
    color: white;
  }
}

.section5 {
  .card > div:first-child {
    height: 100%;
    background-image: linear-gradient(49deg, #faf4ec 3%, #dad6f1 91%);
  }
}
.section6 {
  background-image: linear-gradient(
    61deg,
    #faf4ec 14%,
    #c5c3f3 71%,
    #9595fa 93%
  );
  .row {
    max-width: 1262px;
    margin: 0 auto;
  }
}
#mgn {
  .collection-card,
  .border-card {
    border-radius: 4px;
    box-shadow: none !important;
    padding: 45px 60px;
    height: 100%;
  }
  .border-card {
    border: solid 1px #242424;
  }
}

.section7 {
  .collection-card,
  .collection-card {
    background-image: linear-gradient(68deg, #faf4ec 5%, #d7d3f1 93%);
  }
}
</style>
