<template>
  <div class="container w-full mx-auto  mb-12 py-8">
    <header class="flex w-full justify-between items-center">
      <a href="/">
        <img
          class="w-[221px] h-auto object-cover"
          src="../../assets/img/54778.png"
          alt=""
        />
      </a>
      <div class="hidden  sm:block">
        <ul class="flex gap-12 font-18">
          <nuxt-link
            to="/"
            class="cursor-pointer hover:underline hover:underline-offset-2"
            >Главная</nuxt-link
          >
          <nuxt-link
            to="/"
            class="cursor-pointer hover:underline hover:underline-offset-2"
            >О Нас</nuxt-link
          >
          <nuxt-link
            to="/"
            class="cursor-pointer hover:underline hover:underline-offset-2"
            >Фотогаллерея</nuxt-link
          >
          <nuxt-link
            to="/"
            class="cursor-pointer hover:underline hover:underline-offset-2"
            >Прайс</nuxt-link
          >
          <NuxtLink
            to="/conts"
            class="cursor-pointer hover:underline hover:underline-offset-2"
            >Контакты</NuxtLink
          >
        </ul>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="hidden sm:block font-black font-16 sm:text-[24px] text-[#48484a] underline decoration-2 underline-offset-2 mr-4"
        >
          +7 (918) 153-83-12
        </button>
        <a href="">
          <img src="/img/cart_icon.svg" alt="" />
        </a>
        <button class="sm:hidden block" @click="menu = true">
          <img src="/img/menu_icon.svg" alt="" />
        </button>
      </div>
    </header>
    <!-- menu -->
    <transition name="fade">
      <section
        class="absolute flex flex-col top-0 left-0 w-screen h-screen bg-[#232323] p-4 gap-8 z-[9999999999]"
        v-if="menu"
      >
        <div class="flex justify-end" @click="menu = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 rotate-45 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <div class="flex justify-between">
          <ul class="flex flex-col gap-4">
            <nuxt-link to="/" class="text-white text-xl">О Нас</nuxt-link>
            <nuxt-link to="/" class="text-white text-xl"
              >Фотогаллерея</nuxt-link
            >
            <nuxt-link to="/" class="text-white text-xl">Прайс</nuxt-link>
            <nuxt-link to="/" class="text-white text-xl">Контакты</nuxt-link>
          </ul>

          <div class="flex gap-4 flex-col">
            <a href="/"> <img src="~/assets/img/vk-logo.png" alt=""/></a>
            <a href="/"> <img src="~/assets/img/ok-logo.png" alt=""/></a>
            <a href="/"><img src="~/assets/img/telega-logo.pnf.png" alt=""/></a>
          </div>
        </div>
        <div  @click="menu = false" class="w-full flex justify-center items-center">
          <NuxtLink
          to="/contacts"
        
          class="text-white font-bold border-2 py-4 px-6 w-full rounded-md text-center"
        >
          Заказать звонок
        </NuxtLink>
        </div>
        
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  created () {},
  data () {
    return {
      menu: false
    }
  },
  props: {},
  methods: {
    closeMenu(){
      this.menu = false
      console.log('eee');
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
