<template>
  <div class="grid grid-cols-2 gap-8">
    <div v-for="(item, i) in category" :key="i" class="flex flex-col gap-4">
      <div class="relative">
          <h2 class="absolute bottom-4 right-4 z-[2] !text-white border-2 border-light-100 py-2 px-4 font-55">{{ item.name }}</h2>
        <img class="w-full h-[300px] object-cover brightness-50 hover:brightness-30 z-[-1]" :src="item.img" alt="" />
        
      </div>
      <div class="flex justify-end">
          <p class="text-right w-2/3 font-20">{{ item.desc }}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: [
        {
          name: 'Дизайн',
          desc: 'Дизайн проекты домов, ресторанов, отелей, квартир под ключ  ',
          url: '',
          img: require('../../assets/img/853_original.webp')
        },
        {
          name: 'Декор',
          desc: 'Авторский декор из бетона, посуда, вазы, салатницы',
          url: '',
          img: require('../../assets/img/853_original.webp')
        },
        {
          name: 'Бетон',
          desc: 'Раковины, столешницы, кашпо, панели',
          url: '',
          img: require('../../assets/img/853_original.webp')
        },
        {
          name: 'Дерево',
          desc: 'Мебель, панели, лестницы из натурального дерева ',
          url: '',
          img: require('../../assets/img/853_original.webp')
        },
        {
          name: 'Металл',
          desc: 'Навесы, лестницы, перголы, мангалы ',
          url: '',
          img: require('../../assets/img/853_original.webp')
        },
        {
          name: 'Кровля',
          desc: ' -- ',
          url: '',
          img: require('../../assets/img/853_original.webp')
        }
      ]
    }
  }
}
</script>

<style></style>
