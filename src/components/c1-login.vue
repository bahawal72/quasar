<template>
  <div class="row">
    <div class="col-1">
    </div>
    <div class="col-xs-10">
      <q-input outlined v-model="text" label="Email" color="red">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <div class="q-my-md">
        <q-input v-model="password" outlined type="isPwd ? 'password' : 'text'" label="Password" color="red">
          <template v-slot:prepend>
            <q-icon name="lock" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {}
  }
}
</script>
