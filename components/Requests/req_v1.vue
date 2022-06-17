<template>
  <div class="container w-full flex flex-col gap-8 justify-center items-center">
    <div class="text-[22px] font-bold text-center">
      Оставьте заявку, мы свяжемся с вами течение 15 мин
    </div>
    <div class="w-full">
      <form action="" class="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <div class=" flex rounded-md shadow-sm  h-12">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
          >
            Телефон
          </span>
          <input
            type="text"
            class="focus:ring-neutral-600 focus:border-neutral-600 flex-1 block w-full rounded-none border  rounded-r-md sm:text-sm border-gray-300 pl-4"
            placeholder="+7"
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
            class="focus:ring-neutral-600 focus:border-neutral-600 flex-1 block w-full rounded-none border  rounded-r-md sm:text-sm border-gray-300 pl-4"
            placeholder="Иван"
          />
        </div>

        <button type="button" class="bg-white h-12  px-6 border border-gray-300 rounded-md shadow-sm  leading-4 text-neutral-600 font-bold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600">Оставить заявку</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
