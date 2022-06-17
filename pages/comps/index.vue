<template>
  <div class="grid grid-cols-1 gap-20">
      <reqv1/>
      <reqv2/>
  </div>
</template>

<script>
import reqv1 from '../../components/Requests/req_v1.vue'
import reqv2 from '../../components/Requests/req_v2.vue'
export default {
  components: { reqv1, reqv2 },
    layout: 'Main'
}
</script>

<style>

</style>