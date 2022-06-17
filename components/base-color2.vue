<template>
  <div class=" bg-neutral-100 py-12">
    <div class="flex flex-col sm:flew-row w-full items-center container  gap-10">
      <div class="flex w-full flex-col gap-6 items-center justify-center">
        <span class="text-xl sm:text-6xl font-bold text-center uppercase"
          >Четыре базовых цвета</span
        >
        <span class="text-center text-xs sm:text-xl"
          >Можем изготовить столешницу
          <span class="font-bold ">в любом цвете по Pantone</span>
        </span>
        <div class="flex flex-wrap gap-4 items-center mt-4">
          <div v-for="(item , i) in baseColor4" :key="i" class="flex flex-col justify-center items-center">
             <img
            :src="item.img"
            alt=""
            class="w-[120px] sm:w-[180px] h-auto object-cover"
          />
            <span>{{ item.name }}</span>
          </div>
         
        </div>
      </div>
      <div class="flex w-full flex-col gap-6 items-center justify-center">
        <span class="text-xl sm:text-6xl font-bold text-center uppercase"
          >Два типа фактуры</span
        >
        <span class="text-center text-xs sm:text-xl">Между собой отличаются только тактильными качествами</span>
        <div class="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <div v-for="(item , i) in baseColor2" :key="i" class="flex flex-col justify-center items-center">
             <img
            :src="item.img"
            alt=""
            class="w-[120px] sm:w-[180px] h-auto object-cover"
          />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseColor4: [
        {
          name:'Терраццо',
          img: '/img/all/Ellipse1_6.png'
        },
        {
          name:'Белый',
          img: '/img/all/Ellipse1_1.png'
        },
        {
          name:'Серый',
          img: '/img/all/Ellipse1_2.png'
        },
        {
          name:'Антрацит',
          img: '/img/all/Ellipse1_3.png'
        }
      ],
      baseColor2: [
        {
          name:'Пористая',
          img: '/img/all/Ellipse1_4.png'
        },
        {
          name:'Глянцевая',
          img: '/img/all/Ellipse1_5.png'
        }
        
      ]
    }
  }
}
</script>

<style></style>
