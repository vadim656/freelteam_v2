<template>
  <div class=" w-full flex flex-col gap-10 sm:gap-40">
    <section class="flex container">
      <img src="/img/02.png" alt="" class="absolute top-12 right-0 z-[-2]" />
      <div
        class="flex justify-between items-center flex-col sm:flex-row  w-full  h-full"
      >
        <div
          class=" flex flex-col items-center sm:items-start gap-8 sm:order-1 order-2"
        >
          <h1
            class=" text-xl  sm:text-6xl  font-black mt-8 sm:mt-0 flex justify-start text-left  uppercase"
          >
            КРОВЛЯ
          </h1>
          <h4 class="text-center sm:text-left leading-6">
            ГИДРОИЗОЛЯЦИЯ ПЛОСКОЙ КРОВЛИ<br />
            БИТУМНО-ЭМУЛЬСИОННОЙ МАСТИКОЙ<br />
            “СИНЗАТИМ” И “БИТУМЕКС” ОТ 1240 РУБ/м2
          </h4>
          <span class="text-xl">
            От производителя
          </span>
          <button class="button !text-[black]" @click="form.view = true">
            Рассчитать стоимость
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
              src="/img/roof/Rectangle264.jpg"
              alt=""
            />
            <div
              class=" w-[40px] sm:w-[94px] h-[250px] sm:h-[510px] absolute bg-cover bg-[url('/img/golden.png')] bg-center -top-6 sm:-top-12 -right-6 sm:-right-11 z-[-1]"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 -->

    <section class="container w-full flex flex-col gap-8 justify-center ">
      <headerh-3>КРОВЛЯ ДО/ПОСЛЕ ПОКРЫТИЯ МАСТИКОЙ</headerh-3>
      <headerh-4>Без швов и стыков. Нет швов - нет протечек! </headerh-4>
      <div class="flex justify-between flex-col sm:flex-row gap-8 sm:gap-12">
        <img
          src="https://app.freelteam.ru/wp-content/uploads/2022/06/Rectangle268.jpg"
          alt=""
          class="rounded-md max-w-[620px] object-cover"
        />
        <img
          src="https://app.freelteam.ru/wp-content/uploads/2022/06/Rectangle269.jpg"
          alt=""
          class="rounded-md max-w-[620px] object-cover"
        />
      </div>
    </section>

    <section class="bg-neutral-100 py-24">
      <div class="container w-full flex flex-col gap-8 justify-center">
        <headerh-3
          >ИДЕАЛЬНО ПОДХОДИТ ДЛЯ РЕМОНТА СТАРОГО РУЛОННОГО ПОКРЫТИЯ</headerh-3
        >
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-4 items-start">
          <div
            v-for="(item, i) in osobennosti"
            :key="i"
            class="flex flex-col justify-center items-center gap-4"
          >
            <img
              :src="item.img"
              alt=""
              class="w-full sm:w-[240px] h-auto  sm:h-[240px] object-cover"
            />
            <span class="text-center font-bold px-2">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container w-full flex flex-col gap-8 justify-center ">
      <headerh-3>ДЕШЕВЛЕ И БЫСТРЕЕ КАПИТАЛЬНОГО РЕМОНТА</headerh-3>
      <div
        class="flex flex-col sm:flex-row justify-between  items-center gap-8 sm:gap-0"
      >
        <div class="w-full sm:w-2/5 grid grid-cols-1 gap-8 pl-0 sm:pl-8">
          <div class="flex gap-6 items-center">
            <img
              src="/img/roof/Ellipse13.png"
              alt=""
              class="w-[72px] h-auto object-cover"
            />
            <div class="flex flex-col gap-2">
              <h4 class="font-bold text-xl">ЭКОНОМИЯ ДО 2 РАЗ</h4>
              <span class="text-xs sm:text-base"
                >Без демонтажа старого покрытия</span
              >
            </div>
          </div>
          <div class="flex gap-6 items-center">
            <img
              src="/img/roof/Ellipse14.png"
              alt=""
              class="w-[72px] h-auto object-cover"
            />
            <div class="flex flex-col gap-2">
              <h4 class="font-bold text-xl">БЫСТРЫЙ РЕЗУЛЬТАТ</h4>
              <span class="text-xs sm:text-base"
                >Всего 5-7 дней и Ваша кровля прослужит еще минимум 15 лет</span
              >
            </div>
          </div>
          <div class="flex gap-6 items-center">
            <img
              src="/img/roof/Ellipse15.png"
              alt=""
              class="w-[72px] h-auto object-cover"
            />
            <div class="flex flex-col gap-2">
              <h4 class="font-bold text-xl">100% НАДЕЖНОСТЬ</h4>
              <span class="text-xs sm:text-base"
                >Гидроизоляция без швов и сквозных отверстий</span
              >
            </div>
          </div>
          <div class="flex gap-6 items-center">
            <img
              src="/img/roof/Ellipse16.png"
              alt=""
              class="w-[72px] h-auto object-cover"
            />
            <div class="flex flex-col gap-2">
              <h4 class="font-bold text-xl">РАССРОЧКА ПЛАТЕЖА</h4>
              <span class="text-xs sm:text-base"
                >Согласование с учетом ваших возможностей</span
              >
            </div>
          </div>
        </div>
        <div class="w-full sm:w-3/5 flex justify-end">
          <img src="/img/roof/Rectangle282.jpg" alt="" class="rounded-md" />
        </div>
      </div>
    </section>

    <section class="w-full relative">
      <div class="container w-full flex flex-col gap-8 justify-center ">
        <headerh-3
          >МЫ ИСПОЛЬЗУЕМ <br />
          <span class="text-[#C4AC7B]">2 ВИДА МАТЕРИАЛА</span></headerh-3
        >
        <headerh-4>Под разные задачи и бюджет</headerh-4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div class="flex flex-col gap-4 text-left sm:text-right">
            <h4 class="font-bold text-xl sm:pr-20">“СИНТАЗИМ”</h4>
            <span class="sm:px-20 leading-6"
              >Уникальная советская оборонная разработка не имеющая аналогов в
              мире имеет применение от фундамента до кровли легко ложится на
              сухую и мокрую основу устойчива к агрессивной химической
              среде</span
            >
          </div>
          <img
            src="/img/roof/Rectangle299.jpg"
            alt=""
            class="rounded-md w-full sm:max-w-[588px] h-auto object-cover"
          />

          <img
            src="/img/roof/Rectangle300.jpg"
            alt=""
            class="rounded-md w-full sm:max-w-[588px] h-auto object-cover"
          />
          <div class="flex flex-col gap-4">
            <h4 class="font-bold text-xl sm:pl-20">“БИТУМЕКС”</h4>
            <span class="sm:px-20 leading-6"
              >Создана на основе высококачественных кровельных битумов,
              модифицированных СБС полимерами.<br />
              Применяется для устройства кровли и гидро-пароизоляции, а также
              приклеивания рулонных кровельных материалов.<br />
              Средство показывает устойчивость к воздействию температур до +100
              С</span
            >
          </div>
        </div>
      </div>

      <img src="/img/03.png" alt="" class="absolute -top-[520px] right-0 z-[-2]" />
    </section>

    <section class="bg-neutral-100 py-24">
      <div class="container flex flex-col gap-8">
        <headerh-3>ПОМОЖЕМ ОПРЕДЕЛИТСЯ С МАТЕРИАЛОМ</headerh-3>
        <reqv-1 />
      </div>
    </section>

    <section class="container w-full flex flex-col gap-8 justify-center">
      <headerh-3
        >ГДЕ ЕЩЁ ПРИМЕНЯЮТСЯ<br /><span class="text-[#C4AC7B]"
          >НАШИ МАТЕРИАЛЫ</span
        >
      </headerh-3>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 justify-center gap-12 items-start"
      >
        <div class="flex flex-col justify-start items-center gap-4">
          <img src="/img/roof/Ellipse17.png" alt="" /><span
            class="px-4 sm:px-8 text-center text-sm sm:text-base"
            >Защита металлических конструкций от коррозии и разрушения</span
          >
        </div>
        <div class="flex flex-col justify-start items-center gap-4">
          <img src="/img/roof/Ellipse17.png" alt="" /><span
            class="px-4 sm:px-8 text-center text-sm sm:text-base"
            >Гидроизоляция фундаментов, подвалов, хранилищ, подземных гаражей
            стоянок, санузлов</span
          >
        </div>
        <div class="flex flex-col justify-start items-center gap-4">
          <img src="/img/roof/Ellipse17.png" alt="" /><span
            class="px-4 sm:px-8 text-center text-sm sm:text-base"
            >Наклеивание плоских изделий к любым поверхностям без
            дополнительного подстилающей гидроизоляции (кафель, плитка,
            линолеум, фанера и т.п.)</span
          >
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
            <div
              class="w-full text-center mt-4 cursor-pointer "
              @click="form.view = false"
            >
              Закрыть
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="container w-full flex flex-col gap-8 justify-center">
      <headerh-3>Приглашаем в наш шоурум в краснодаре</headerh-3>
      <headerh-4
        >который находится по адресу: Монтажников 3/2, корпус 2</headerh-4
      >
      <swiper :options="swiperOption2" class="w-full !px-10">
        <swiper-slide>
          <img src="/img/slider_shellse_2_1.jpg" alt="" class="rounded-md" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/slider_shellse_2_2.jpg" alt="" class="rounded-md" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/slider_shellse_2_1.jpg" alt="" class="rounded-md" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/slider_shellse_2_2.jpg" alt="" class="rounded-md" />
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev !mr-20"></div>
        <div slot="button-next" class="swiper-button-next !ml-20"></div>
      </swiper>
    </section>
  </div>
</template>

<script>
import reqv1 from '../../components/Requests/req_v1.vue'
import reqv2 from '../../components/Requests/req_v2.vue'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { directive } from 'vue-awesome-swiper'
import Headerh3 from '../../components/headerh3.vue'
import Headerh4 from '../../components/headerh4.vue'
import BaseColor from '../../components/base-color.vue'
import VideoFrame from '../../components/video-frame.vue'
import BaseColor2 from '../../components/base-color2.vue'

export default {
  components: {
    reqv1,
    reqv2,
    Swiper,
    SwiperSlide,
    Headerh3,
    Headerh4,
    BaseColor,
    VideoFrame,
    BaseColor2
  },
  layout: 'Krovlya',
  directives: {
    swiper: directive
  },
  data () {
    return {
      osobennosti: [
        {
          name: 'Наноситься безогненым методом',
          img: '/img/roof/Ellipse8.png'
        },
        {
          name: 'Практически не имеет запаха',
          img: '/img/roof/Ellipse9.png'
        },
        {
          name: 'Не требует спец подготовки поверхности',
          img: '/img/roof/Ellipse10.png'
        },
        {
          name: 'Высыхание в течении 12 часов',
          img: '/img/roof/Ellipse11.png'
        },
        {
          name: 'Наносится без дорогостоящего оборудования',
          img: '/img/roof/Ellipse12.png'
        }
      ],
      osobennosti2: [
        {
          name: 'Отталкивает воду и запахи',
          img: '/img/all/Ellipse3_1.png'
        },
        {
          name: 'Не темнеет при намокании',
          img: '/img/all/Ellipse3_2.png'
        },
        {
          name: 'Износостойкий /не царапается',
          img: '/img/all/Ellipse3_3.png'
        },
        {
          name: 'Можно использовать чистящее средство',
          img: '/img/all/Ellipse3_4.png'
        }
      ],
      swiperOption: {
        slidesPerView: 'auto',
        loop: true,
        direction: 'horizontal',
        centeredSlides: true,
        loopAdditionalSlides: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption2: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption3: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption4: {
        slidesPerView: 1,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      form: {
        view: false,
        name: null,
        phone: null
      }
    }
  },
  methods: {
    getTeelegrammToMain () {
      const fullMessege =
        'Заявка с Столешницы( /countertop )' +
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
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
</style>
