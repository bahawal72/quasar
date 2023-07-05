<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-12 text-grey text-h6 text-center text-weight-bold q-mt-xl">
        <p>VERIFY YOUR EMAIL ADDRESS</p>
      </div>
      <div class="col-xs-9">
       <p class="text-grey text-weight-bold"> Before proceeding, please check your email <br> xyz@emailaddress.com for an activation <br> code. If you did not receive the
        email.<br>  <span class="text-red">SEND ACTIVATION CODE AGAIN</span></p>
      </div>
      <div class="col-xs-9 q-my-md">
        <q-input outlined v-model="text" label="Activation Code" color="red">
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>
      </div>
      <div class="col-xs-8">
       <ButtonRed  btn-Text="Verify" url="/plan"/>
      </div>
      <div>
        <BootomImg/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BootomImg from 'src/components/bootomImg.vue';
import ButtonRed from 'src/components/button-red.vue';

export default {
    components: { ButtonRed, BootomImg }
}
</script>
