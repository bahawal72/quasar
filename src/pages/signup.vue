<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12 text-center q-my-md text-weight-bold" style="font-size: 20px;">
        <p>Create Account</p>
      </div>
      <div class="col-1"></div>
      <div class="col-xs-10">
        <q-input outlined v-model="text" label="Name" color="red">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      </div>
    </div>
    <C1Login />
    <div class="row">
    <ButtonRed btn-Text="Signup"/>
  </div>
    <div class="col-12 q-my-lg">
      <p class="text-center">Already have an account?<a href="">Login</a></p>
    </div>

    <BootomImg/>
  </q-page>
</template>

<script>
import BootomImg from 'src/components/bootomImg.vue';
import ButtonRed from 'src/components/button-red.vue';
import C1Login from 'src/components/c1-login.vue';

export default {
  // name: 'PageName',
  data() {
    return {
      password: null,
      isPwd: true
    };
  },
  components: { C1Login, BootomImg, ButtonRed }
}
</script>
