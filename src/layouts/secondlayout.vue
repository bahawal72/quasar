<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header class="bg-white">
      <div class="row">
        <div class="col-xs-2 q-pa-sm ">
          <q-img src="public/coop-logo 2.png" />
        </div>
        <div class="col-xs-9 q-gutter-sm q-pa-sm">
          <div class="row justify-end">
            <div class="col-2">
              <q-btn round icon="notifications" class="bg-red-14 q-mx-md">
              </q-btn>
            </div>
            <div class="col-2">
              <q-btn round icon="person" class="bg-red-14 q-mx-lg"></q-btn>
            </div>
          </div>
        </div>
      </div>
      <q-separator/>
    </q-header>
    <q-footer>

      <q-tabs
        v-model="tab"
        class="bg-grey-4 text-grey-7 shadow-2"
      >
        <q-tab name="mails" icon="mail" />
        <q-tab name="alarms" icon="add_comment" />
        <q-tab name="movies" icon="forum" />
        <q-tab name="movies" icon="settings" />
      </q-tabs>

    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
