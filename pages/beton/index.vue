<template>
  <div class="container flex flex-col gap-10 sm:gap-40">
    <section class="flex">
      <img src="/img/02.png" alt="" class="absolute top-12 right-0 z-[-2]" />
      <div
        class="flex justify-between items-center flex-col sm:flex-row  w-full  h-full"
      >
        <div
          class=" flex flex-col items-center sm:items-start gap-4 sm:gap-8 sm:order-1 order-2"
        >
          <h1 class=" text-xl  sm:text-6xl  font-black mt-8 sm:mt-0">
            Бетон
          </h1>
          <span class="text-xs sm:text-xl">
            От производителя
          </span>
          <button class="button !text-[black]" @click="form.view = true">
            Оставить заявку
          </button>
          <div
            class="flex justify-start items-center gap-16 w-full text-xs sm:text-xl"
          >
            <span
              >Российское <br />
              сырьё</span
            >
            <span
              >15 лет<br />
              гарантия</span
            >
            <span
              >Доставка<br />
              по России</span
            >
          </div>
        </div>
        <div class="order-1 sm:order-2">
          <div class="relative">
            <img
              class="w-[290px] h-auto sm:w-[720px] sm:h-[500px] object-cover rounded-md"
              src="/img/shells_main.jpg"
              alt=""
            />
            <div
              class=" w-[40px] sm:w-[94px] h-[250px] sm:h-[510px] absolute bg-cover bg-[url('/img/golden.png')] bg-center -top-6 sm:-top-12 -right-6 sm:-right-11 z-[-1]"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div
          v-for="(item, i) in category"
          :key="i"
          class="flex flex-col gap-4 rounded-md"
        >
          <div class="relative">
            <NuxtLink
              :to="`${item.url}`"
              class="absolute bottom-4 right-4 z-[2] !text-white blur_button w-60 flex justify-center py-6 text-4xl rounded-md"
            >
              {{ item.name }}
            </NuxtLink>
            <img
              class="w-full h-[300px] object-cover  z-[-1] rounded-md"
              :src="item.img"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- req1 -->
    <section class="w-full bg-[red]" v-if="form.view">
      <div
        
        class="w-full bg-[#13131363]/90 backdrop-blur-sm h-full  flex justify-center items-center  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  md:inset-0  md:h-full"
      >
        <div class="w-full max-w-[320px] flex justify-center items-center">
          <form
            action=""
            class="flex flex-col gap-4 w-full justify-center bg-white p-8 rounded-md drop-shadow-2xl"
          >
            <div class=" flex rounded-md shadow-sm  h-12">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
              >
                Телефон
              </span>
              <input
                type="text"
                class="focus:ring-neutral-600 focus:border-neutral-600 flex-1 block w-full rounded-none border  rounded-r-md sm:text-sm border-gray-300 pl-4"
                v-facade="'+7 (###) ###-##-##'"
                name="phone"
                v-model="form.phone"
                placeholder="+7 (___) ___−__−__"
              />
            </div>
            <div class=" flex rounded-md shadow-sm  h-12">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
              >
                Имя
              </span>
              <input
                type="text"
                v-model="form.name"
                class="focus:ring-neutral-600 focus:border-neutral-600 flex-1 block w-full rounded-none border  rounded-r-md sm:text-sm border-gray-300 pl-4"
                placeholder="Иван"
              />
            </div>
            <button
              type="button"
              v-if="form.name !== null && form.phone !== null"
              @click="getTeelegrammToMain()"
              class="bg-white h-12  px-6 border border-gray-300 rounded-md shadow-sm  leading-4 text-neutral-600 font-bold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
            >
              Оставить заявку
            </button>
            <div class="w-full text-center mt-4 cursor-pointer " @click="form.view = false">
              Закрыть
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import About from '../../components/Main/About.vue'

import axios from 'axios'

export default {
  layout: 'Main',
  components: { About },
  data () {
    return {
      category: [
        {
          name: 'Раковины',
          url: '/shells',
          img: require('~/static/img/main_cat1.jpg')
        },
        {
          name: 'Столешницы',
          desc: 'Авторский декор из бетона, посуда, вазы, салатницы',
          url: '/countertop',
          img: require('~/static/img/main_cat2.jpg')
        },
        {
          name: 'Кашпо',
          url: '/cashpo',
          img: require('~/static/img/main_cat3.jpg')
        },
        {
          name: 'Панели',
          url: '/plates',
          img: require('~/static/img/main_cat4.jpg')
        }
      ],
      form: {
        view: false,
        name: null,
        phone: null
      },
      errors: null
    }
  },
    methods: {
    getTeelegrammToMain () {
      const fullMessege =
        'Заявка с главной формы' +
        '\n' +
        'Телефон:  ' +
        this.form.phone +
        '\n' +
        'Имя: ' +
        this.form.name 

      axios
        .post(
          'https://api.telegram.org/bot5507407144:AAGgvYyUMvdr6YPo5v7sn7jFJsudZOSUQdM/sendMessage?chat_id=-1001748257949',
          {
            text: fullMessege
          }
        )
        .then(response => (this.fullMessege = response.data.id))
        .catch(e => {
          this.errors.push(e)
        })
      this.succes = true
    }
  }
}
</script>
<style>
.blur_button {
  background: rgba(255, 255, 255, 0.123);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3),
    inset 10px 0px 10px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  transition: all 0.2s ease-in-out;
}

.blur_button:hover {
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
}
</style>
