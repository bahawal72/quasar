<template>
   <div class="col-xs-3"></div>
    <div class="col-xs-6">
      <div class=" col-xs-6 q-gutter-sm q-my-md">
        <q-btn @click="changePage(url)" push class="full-width text-white" color="red-14" style="font-size: 20px;">{{btnText}}</q-btn>
      </div>
    </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['btnText', 'url'],
  setup () {
    return {}
  },
  methods: {
    changePage(url) {
      if(url) {
        this.$router.push(url)
      }
    }
  }
}
</script>
