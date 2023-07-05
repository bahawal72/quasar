<template>
  <q-page>
    <div class="q-mt-sm">
      <q-item>
        <q-item-section top avatar class="q-mt-sm">
          <q-avatar>
            <img src="public/uncle.png" alt="">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <div class="row">
            <div class="col-12">
              <span style="font-size: 15px;" class="">&nbsp;Mark Taylor</span>
            </div>
            <div class="col-12 q-ml-xs">
              <q-item-label style="font-size: 10px;" class="text-red-14">Coldwell Banker Commercial</q-item-label>
            </div>
            <div class="col-5">
              <q-icon name="location_on" color="grey" />
              <span class="text-grey" style="font-size: 11px;">Grand Junction, CO</span>
            </div>
            <div class="col-7 text-right">
              <q-icon color="grey" name="calendar_month" />
              <span style="font-size: 11px;" class="text-grey">&nbsp;24/04/2023</span>
            </div>
          </div>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption><img src="public/brav.png" alt="" /></q-item-label>
        </q-item-section>
      </q-item>
      <div class="row">
        <div class="col-xs-12 q-ml-md text-red-14 text-weight-lighter" style="font-size: 15px;">
          Multi Tenant Retail/ Office Property
        </div>
        <div class="col-xs-10 text-grey-7 q-ml-md" style="font-size: 13px;">
          I have a client that is looking to purchase a building with multiple units so they can move their businesses
          into a single building. Need about 4,000 SF of high visibility retail/office with designated parking.
        </div>
        <div class="col-xs-12 q-mt-md flex justify-center">
          <q-img style="width:350px;" src="public/warehouse.png" alt="" />
        </div>
        <div class="col-xs-6 text-right q-ml-sm q-mt-lg">
          <q-btn icon="mail" rounded color="red-14" label="Direct Message" />
        </div>
        <div class="col-xs-5 q-px-lg q-mt-lg">
          <q-btn icon="report" rounded color="red-3" text-color="red-14" label="report" />
        </div>
        <div class="col-xs-12 q-pa-md" style="font-size: 16px;">
          Public replies
        </div>

        <q-item>
          <q-item-section top avatar>
            <q-avatar>
              <q-img src="public/pic2.png" alt="" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="">Ray Rickard</q-item-label>
            <div class="row">
              <div class="col-12">
                <q-icon name="person" color="grey" />
                <span style="font-size: 12px;" class="text-grey">&nbsp;Jalyn Vanconett, ccim</span>
              </div>
              <div class="col-7">
                <q-icon name="location_on" color="grey" />
                <span class="text-grey" style="font-size: 11px;">Grand Junction, CO</span>
              </div>
              <div class="col-5">
                <q-icon color="grey" name="calendar_month" />
                <span style="font-size: 11px;" class="text-grey">&nbsp;24/04/2023</span>
              </div>
              <div>
                <p class="text-grey-8" style="font-size: 13px;">I have a client that is looking to something similar to
                  what you are offering.</p>
              </div>
            </div>
          </q-item-section>
        </q-item>
        <div class="col-xs-12 q-ml-md">
          Write Your Comment Here
        </div>
        <div class="col-xs-12 q-ml-md q-mt-md">
          <div>
            <q-input standout="bg-grey-4 text-red-14" v-model="text" type="textarea" label="Type your reply"
              style="width: 385px;" />
          </div>
          <div class="q-mt-md q-mr-xl text-right">
            <q-btn class="q-px-lg" rounded color="red-14" label="post" />
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
