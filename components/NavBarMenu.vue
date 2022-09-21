<template>
  <div class="menu">
    <div class="menu-background"></div>
    <ul class="menu-content">
      <slot></slot>
    </ul>
    <button class="nav-close" @click="$emit('close')">
      <icon-close color="#242424"> </icon-close>
    </button>
  </div>
</template>

<script>
import IconClose from '@/assets/svg/icon-close.vue'

export default {
  name: 'NavBarMenu',

  components: { IconClose },
}
</script>

<style lang="scss" scoped>
.menu {
  margin: auto;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    29deg,
    #faf4ec 9%,
    #c5c3f3 73%,
    #9595fa 96%
  );
}

.menu-content {
  list-style: none;
  text-align: center;
  margin: auto;
  margin-top: 33%;
  width: 60%;
  padding: 10px 20px;
}

.nav-close {
  position: absolute;
  top: 20px;
  right: 20px;
}

li {
  margin: 25px auto;
  text-align: center;
}
</style>
