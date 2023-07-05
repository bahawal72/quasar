<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header>
      <div class="row">
        <div class="col-xs-12">
        <q-img src="public/Untitled.jpeg" />
        <div class="col-xs-12 text-center">
          <p class="absolute-top text-white q-mt-lg" style="font-size: 25px; font-weight: bolder;">Stay Up To Date
            With<br> The Co-Opportunity<br> Message Board</p>
        </div>
      </div>
      </div>
    </q-header>
    <q-page-container>

      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
