<template>
  <div class=" flex flex-col gap-10 sm:gap-40">
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
            РАКОВИНА <br />
            ИЗ ДИЗАЙНЕРСКОГО <br />
            БЕТОНА
          </h1>
          <span class="text-xl">
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
    <!-- 1 -->
    <section class="w-full flex flex-col gap-8 justify-center container">
      <headerh-3>Готовые раковины</headerh-3>
      <headerh-4
        >У нас всегда есть в наличии 12 самых популярных моделей раковин,
        стандартных размеров, которые легко встроятся в любой
        гарнитур</headerh-4
      >
      <div class="flex flex-col gap-4 sm:flex-row  justify-between mt-8">
        <div class="flex flex-col gap-4 justify-center items-center">
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/UbWynqMQ46I.jpg"
            alt=""
            class="rounded-md w-[300px] sm:w-[435px] h-[350px] object-cover"
          />
          <button class="font-bold uppercase">Заказать</button>
        </div>
        <div class="flex flex-col gap-4 justify-center items-center">
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-05-20_13-59-07.jpg"
            alt=""
            class="rounded-md w-[300px] sm:w-[435px] h-[350px] object-cover"
          />
          <button class="font-bold uppercase">Заказать</button>
        </div>
        <div class="flex flex-col gap-4 justify-center items-center">
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/KGOv5ECxrI.jpg"
            alt=""
            class="rounded-md w-[300px] sm:w-[435px] h-[350px] object-cover"
          />
          <button class="font-bold uppercase">Заказать</button>
        </div>
      </div>
      <span class="w-full text-center mt-10"
        >Также мы можем изготовить раковину стандартного размера в любом
        цвете.<br />
        Срок изготовления 10 дней.</span
      >
    </section>
    <!-- 2 -->
    <section class="w-full flex flex-col gap-8 justify-center container">
      <headerh-3>Изготовим раковину на заказ</headerh-3>
      <headerh-4
        >Любого размера, формы и цвета с использованием металла, дерева и даже
        стекла</headerh-4
      >
      <div class="frame_blc">
       <iframe width="1280" height="700" src="https://www.youtube.com/embed/N0cD5M0_1yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <!-- /.frame_blc -->

      <span
        class="w-full flex justify-center mx-auto text-center max-w-[700px] mt-4"
      >
        Срок изготовления 30 дней
      </span>
    </section>
    <!-- 3 -->
    <section class="w-full relative">
      <div class="container  flex flex-col gap-8 justify-center ">
        <headerh-3>ЭТАПЫ РАБОТЫ</headerh-3>
        <headerh-4
          >Изготовление не стандартной раковины это полностью ручная работа.
          Раковина будет выполнена в единственном экземпляре</headerh-4
        >
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          <div v-for="(item, i) in etapy" :key="i" class="flex flex-col gap-2 ">
            <img
              :src="item.img"
              alt=""
              class="rounded-md w-[300px] h-[240px] sm:w-[400px] sm:h-[300px] object-cover"
            />
            <span class=" w-full max-w-[300px] font-bold text-xl"
              >{{ item.subname }}
            </span>
            <span class=" w-full max-w-[300px]">{{ item.name }} </span>
          </div>
        </div>
      </div>
      <img src="/img/03.png" alt="" class="absolute top-12 right-0 z-[-2]" />
    </section>

    <!-- 4 -->
    <section class="w-full flex flex-col gap-8 justify-center container">
      <headerh-3>Три типа фактуры</headerh-3>
      <headerh-4
        >Текстура выполняет декоративную функцию, раковины будут одинаковы по
        прочности и качеству</headerh-4
      >
      <div class="flex flex-col sm:flex-row justify-center items-start gap-8">
        <div class="flex flex-col justify-center items-center gap-4">
          <img src="/img/Ellipse1.jpg" alt="" />
          <div class="w-full flex justify-center">
            <span class="max-w-[200px] text-center"
              >Глянцевый (на ощупь как полированный камень)</span
            >
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <img src="/img/Ellipse2.jpg" alt="" />
          <div class="w-full flex justify-center">
            <span class="max-w-[200px] text-center">Матовый</span>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <img src="/img/Ellipse3.png" alt="" />
          <div class="w-full flex justify-center">
            <span class="max-w-[200px] text-center">Рельефный</span>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <reqv-1 />
    </section>
    <section class="container w-full flex flex-col gap-8 justify-center">
      <headerh-3>Особенности дизайнерского бетона</headerh-3>
      <div class="flex flex-col sm:flex-row justify-between gap-4">
        <div
          v-for="(item, i) in osobennosti"
          :key="i"
          class="flex flex-col justify-center items-center gap-4"
        >
          <img :src="item.img" alt="" />
          <span class="text-center">{{ item.name }}</span>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col gap-8 justify-center container">
      <headerh-3
        >Поможем со сложным монтажом <br />
        <span class="text-[#C4AC7B]">в любой точке россии</span>
      </headerh-3>
      <headerh-4
        >Для монтажа не стандартных раковин мы разрабатываем системы креплений,
        а также тумбы, подстолья из металла и дерева</headerh-4
      >
      <div class="flex justify-center">
        <div class="frame_blc">
         <iframe width="1280" height="720" src="https://www.youtube.com/embed/f35hPHfSAyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <!-- /.frame_blc -->
      </div>
    </section>
    <section class="w-full flex flex-col gap-8 justify-center container">
      <headerh-3>Приглашаем в наш шоурум в краснодаре</headerh-3>
      <headerh-4
        >который находится по адресу: Монтажников 3/2, корпус 2</headerh-4
      >
      <swiper :options="swiperOption2" class="w-full !px-10">
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-39-58.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-40-17.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-41-04.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-41-06.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-41-07.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-41-09.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-41-13.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2022-06-09_11-41-17.jpg"
            alt=""
            class="rounded-md"
          />
        </swiper-slide>

        <div slot="button-prev" class="swiper-button-prev !mr-20"></div>
        <div slot="button-next" class="swiper-button-next !ml-20"></div>
      </swiper>
    </section>
    <!-- req1 -->
    <section class="w-full bg-[red] container" v-if="form.view">
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

export default {
  components: { reqv1, reqv2, Swiper, SwiperSlide, Headerh3, Headerh4 },
  layout: 'Main',
  directives: {
    swiper: directive
  },
  data () {
    return {
      osobennosti: [
        {
          name: '15 лет гарантии',
          img: '/img/all/Ellipse1.png'
        },
        {
          name: 'Крепче гранита',
          img: '/img/all/Ellipse2.png'
        },
        {
          name: 'Влаго и морозо-устойчивый',
          img: '/img/all/Ellipse3.png'
        },
        {
          name: 'Всегда сохраняет свой цвет',
          img: '/img/all/Ellipse4.png'
        },
        {
          name: 'Легкий уход',
          img: '/img/all/Ellipse5.png'
        }
      ],
      etapy: [
        {
          subname: '1. Замер',
          name:
            'Мы выезжаем на замер или получаем точные размеры от вашего дизайнера',
          img: 'http://app.freelteam.ru/wp-content/uploads/2022/06/photo_1.jpg'
        },
        {
          subname: '2. Разработка чертежей',
          name: 'В точности до миллиметра мы отрисовываем все детали',
          img: 'http://app.freelteam.ru/wp-content/uploads/2022/06/photo_2.jpeg'
        },
        {
          subname: '3. Создание 3D макета',
          name: '',
          img: 'http://app.freelteam.ru/wp-content/uploads/2022/06/photo_3.jpeg'
        },
        {
          subname: '4. Изготовление формы для заливки бетона',
          name: '',
          img: 'http://app.freelteam.ru/wp-content/uploads/2022/06/photo_4.jpg'
        },
        {
          subname: '5. Полировка',
          name: '',
          img: 'http://app.freelteam.ru/wp-content/uploads/2022/06/photo_5.jpg'
        },
        {
          subname: '6. Выполнение монтажа',
          name: 'Монтаж в течение 48 часов',
          img: 'http://app.freelteam.ru/wp-content/uploads/2022/06/photo_6.jpg'
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
        'Заявка с Раковины' +
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

.frame_blc {
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
}
.frame_blc iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
