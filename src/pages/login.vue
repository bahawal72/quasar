<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12 text-center q-my-md text-weight-bold" style="font-size: 20px;">
        <p>Login</p>
      </div>
    </div>
    <C1Login />
    <div class="row">
      <ButtonRed btn-Text="Login" url="/verify"/>
      <div class="col-12 q-my-lg">
        <p class="text-center">Do not have an account?<a href="">Signup</a></p>
      </div>
    </div>
    <BootomImg />
  </q-page>
</template>
<script>
import BootomImg from 'src/components/bootomImg.vue';
import ButtonRed from 'src/components/button-red.vue';
import C1Login   from 'src/components/c1-login.vue';

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
