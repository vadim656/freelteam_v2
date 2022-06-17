<template>
  <div class="w-full flex flex-col gap-8 justify-center">
      
    <headerh3>ПОСМОТРИТЕ КАК СМОТРИТЬСЯ СТОЛЕШНИЦЫ В ИНТЕРЬЕРЕ</headerh3>
    <headerh4
      >Атмосфера - главный критерий клиентов, при выборе кафе, ресторана,
      гостиницы или бара</headerh4
    >
    <div class="flex justify-center ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Headerh3 from '~/components/headerh3.vue'
import Headerh4 from '~/components/headerh4.vue'

export default {
  components: {
    Headerh3,
    Headerh4
  }
}
</script>

<style></style>
