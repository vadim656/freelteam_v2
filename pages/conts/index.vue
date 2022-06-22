<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 h-full">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbd8a39af5cc6133d14feb803b384b872449f8f4efc50f592e1e1c126735e114&amp;source=constructor"
      width="100%"
      height="720"
      frameborder="0"
    ></iframe>

    <div
      class="bg-neutral-700 text-white flex flex-col gap-12 justify-center items-start p-8 sm:p-40"
    >
      <h2 class="font-bold text-xl sm:text-6xl uppercase">Контакты</h2>
      <div class="flex flex-col gap-4">
        <span
          >+7(918) 153-83-12<br />
          FREELTEAM@BK.RU</span
        >
        <span
          >Монтажников 3/2, корпус 2<br />
          Собственное производство. Гарантия 15 лет. Выезд по Рф!
        </span>
        <span
          >Мы — Freeelteam!<br />
          Мы на рынке ЮФО с 2018 года.<br />
          КАШПО из дизайнерского бетона для зеленых питомцев.<br />
          ДЕКОР для дома и офиса . Собственное производство.<br />
          Гарантия 15 лет. Выезд по Рф!</span
        >
      </div>
      <div>
        <div class="flex gap-4">
          <a href="/"> <img src="../../assets/img/vk-logo.png" alt=""/></a>
          <a href="/"> <img src="../../assets/img/ok-logo.png" alt=""/></a>
          <a href="/"
            ><img src="../../assets/img/telega-logo.pnf.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Contact'
}
</script>

<style></style>
