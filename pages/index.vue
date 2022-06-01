<template>
  <div class="container flex flex-col gap-24">
    <Block1/>
    <About/>
    <Block2/>
  </div>
</template>

<script>
import Block1 from "../components/Main/Block-1.vue";
import About from "../components/Main/About.vue";
import Block2 from "../components/Main/Block-2.vue";
export default {
    layout: "Main",
    components: { Block1, About, Block2 }
}
</script>
