<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-1"></div>
      <div class="col-xs-10 q-mt-lg text-grey text-weight-bold" style="font-size: 20px;">
        SUBSCRIPTION PLAN

      </div>
      <div class="col-xs-9 q-mt-sm">
        <p class="text-red-14">Start a paid plan with 90 days Free Trial</p>
      </div>
      <div class=" col-xs-7 q-pa-md q-gutter-y-md column items-start">
        <q-btn-group push>
          <q-btn push label="Monthly" class="bg-red-14 text-white" />
          <q-btn push label="Yearly" class="bg-white text-grey" />
        </q-btn-group>
      </div>
      <div class="q-my-md">
        <q-btn color="white text-weight-bolder" text-color="grey" label="$19.00/Monthly" style="font-size: 18px;" />
      </div>
      <div class="col-xs-9 q-mt-md q-mb-xl">
        <q-input outlined v-model="text" label="Activation Code" color="red" class="bg-red-1">
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="row">
      <ButtonRed btn-Text="Verify" />
    </div>
  </q-page>
</template>

<script>
import ButtonRed from 'src/components/button-red.vue';

export default {
  components: { ButtonRed }
}
</script>
