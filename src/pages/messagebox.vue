<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-12 q-my-md">
        <span class="q-pa-lg" style="font-size: 19px;">Message Board</span>
      </div>
      <div class="col-xs-10 q-px-md">
        <q-input rounded outlined v-model="text" label="Search">
          <template v-slot:append>
            <q-avatar color="red-14" text-color="white" style="font-size: 45px;">
              <q-icon name="search">
              </q-icon>
            </q-avatar>
          </template>
        </q-input>
      </div>

      <div class="">
        <q-btn class="q-pa-sm" round style="font-size: 17px;" icon="menu" color="red-14">
          <q-menu class="bg-grey-3" persistent>
            <q-list>
              <div>
                <div class="col-xs-12">
                  <div class="q-pa-md" style="font-size: 18px;">
                    Search Filters
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                     <div class="row">
                      <div class="col-3">
                        <q-btn @click="type = 'all'" class="q-ml-md q-px-lg" style="font-size: 13px;" :color="type == 'all' ? 'red-14' : 'white'" :text-color="type == 'all' ? 'white' : 'black'" label="All" />
                      </div>
                      <div class="col-4">
                        <q-btn  @click="type = 'commercial'" class="q-ml-xs" style="font-size: 13px;" :color="type == 'commercial' ? 'red-14' : 'white'" :text-color="type == 'commercial' ? 'white' : 'black'"
                          label="Commercial"/>
                      </div>
                      <div class="col-4">
                        <q-btn @click="type = 'residential'" class="q-ml-xs" style="font-size: 13px;" :color="type == 'residential' ? 'red-14' : 'white'" :text-color="type == 'residential' ? 'white' : 'black'"
                          label="Residential" />

                      </div>
                     </div>
                    </div>
                    <div class="q-mt-lg q-ml-md">
                      <img  src="public/price.png" alt="">
                    </div>
                    <div style="font-size: 14px;" class="q-mt-lg q-pl-xs text-weight-bold">
                      Price
                    </div>
                  </div>
                  <div class="row q-ml-md">
                    <div class="col-6">
                      <q-input placeholder="Min Price" v-model="text" :dense="dense" />
                    </div>
                    <div class="col-5 q-px-sm">
                      <q-input placeholder="Max Price" v-model="text" :dense="dense" />
                    </div>
                  </div>
                  <div class="row q-ml-sm">
                    <div class="q-pa-sm q-mt-sm">
                      <img src="public/agent.png" alt="">
                    </div>
                    <div style="font-size: 14px;" class="col-6 q-mt-md text-weight-bold">
                      Select Agent
                    </div>
                    <div class="col-10 q-ml-sm">
                      <q-select v-model="model" :options="options" label="Agent Name" />
                    </div>
                  </div>
                  <div class="row q-ml-sm" v-if="type == 'commercial'">
                    <div class="col-1 q-pa-sm q-mt-sm">
                      <img src="public/star.png" alt="">
                    </div>
                    <div style="font-size: 15px;" class="col-11 q-mt-md q-pl-xs q-gutter-sm text-weight-bold">
                      Search By Use
                    </div>
                    <div class="col-12 q-ml-sm text-grey-7">
                      Property Type

                    </div>
                    <div class="col-3 q-ml-sm q-mt-sm">
                      <q-btn class="q-pt-sm text-grey-9" style="font-size: 10px;" icon="business_center"
                        color="grey-5">&nbsp; Office</q-btn>
                    </div>
                    <div class="col-3 q-ml-sm q-mt-sm">
                      <q-btn class="text-grey-9 q-pt-sm q-" style="font-size: 10px;" icon="storefront"
                        color="grey-5">&nbsp; Retail</q-btn>
                    </div>
                    <div class="col-5 q-ml-sm q-mt-sm">
                      <q-btn class="text-grey-9 q-pt-sm q-" style="font-size: 10px;" icon="factory" color="grey-5">&nbsp;
                        Industrial</q-btn>
                    </div>
                    <div class="col-3 q-ml-sm q-mt-sm">
                      <q-btn class="q-pt-sm text-grey-9" style="font-size: 10px;" icon="forest" color="grey-5">&nbsp;
                        Land</q-btn>
                    </div>
                    <div class="col-3 q-ml-sm q-mt-sm">
                      <q-btn class="q-pt-sm text-grey-9" style="font-size: 10px;" icon="holiday_village"
                        color="grey-5">&nbsp; Flex</q-btn>
                    </div>
                    <div class="col-3 q-ml-sm q-mt-sm">
                      <q-btn class="q-pt-sm text-grey-9" style="font-size: 10px;" icon="apartment" color="grey-5">&nbsp;
                        Mixed</q-btn>
                    </div>
                    <div class="col-3 q-pa-sm q-mt-sm q-gutter-x-md">
                      <img src="public/edit_calendar.png" alt="">
                    </div>
                    <div style="font-size: 14px;" class="col-8 q-mt-md items-start text-weight-bold q-gutter-xl">
                      Search By Listing Date
                    </div>
                    <div class="col-5 q-ml-sm">
                      From
                      <q-input class="text-grey" placeholder="mm/dd/yy" v-model="text" :dense="dense" />
                    </div>
                    <div class="col-5 q-ml-sm">
                      To
                      <q-input class="text-grey" placeholder="mm/dd/yy" v-model="text" :dense="dense" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="q-ml-md q-mt-lg">
                  <img src="public/loco.png" alt="">
                </div>
                <div class="q-mt-lg q-ml-sm text-weight-bold">
                  Search By Location
                </div>
                <div class="col-10 q-ml-lg">
                  <q-select v-model="model" :options="options" label="Don Angie, Greenwich Avenue, New York, NY, USA" />
                </div>
              </div>
              <div class="row">
                <div class="col-6 q-ml-md">
                  <q-btn class="q-mt-xl" icon="search" color="red-14" label="Search" />
                </div>
                <div class="col-4">
                  <q-btn dense flat style="font-size: 15.8px;" class="bg-black text-white q-my-xl q-px-lg" label="Cancel">
                  </q-btn>
                </div>
              </div>
            </q-list>
          </q-menu>
        </q-btn>
      </div>

      <div class="col-xs-11 q-mt-md text-center q-pa-xs">
        <q-btn-group rounded>
          <q-btn color="red-14" rounded class="q-pr-lg" label="All" />
          <q-btn color="white" text-color="grey" rounded class="q-pr-lg" label="Commercial" />
          <q-btn color="white" text-color="grey" rounded class="q-pr-lg" label="Residential" />
        </q-btn-group>
      </div>
      <div class="q-mt-sm">
        <q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="public/uncle.png" alt="">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-red-14">Price Reduction - Bring a buyer </q-item-label>
            <div class="row">
              <div class="col-12">
                <q-icon name="person" color="grey" />
                <span style="font-size: 12px;" class="text-grey">&nbsp;Mark Taylor</span>
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
                <p class="text-grey text-weight-bolder" style="font-size: 11px;">I've had a significant price reduction on
                  this medical office and procedure space....</p>
              </div>
            </div>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption><img src="public/brav.png" alt="" /></q-item-label>
          </q-item-section>
        </q-item>
        <div class="row justify-center">
          <div class="col-xs-11"><q-separator></q-separator></div>
        </div>
        <!-- <<<<<==========================================>>>>>>>>>>> -->
        <q-item class=" q-mt-sm">
          <q-item-section top avatar>
            <q-avatar>
              <img src="public/pic2.png" alt="">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-blue-14">Preschool/Daycare </q-item-label>
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
                <p class="text-grey text-weight-bolder" style="font-size: 11px;">I have a client that is looking to
                  purchase a building with multiple</p>
              </div>
            </div>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption><img src="public/daycarepic.png" alt="" /></q-item-label>
          </q-item-section>
        </q-item>
        <div class="row justify-center">
          <div class="col-xs-11"><q-separator></q-separator></div>
        </div>

        <!-- <<<<<<<<<======================>>>>>>>>> -->

        <q-item class=" q-mt-sm">
          <q-item-section top avatar>
            <q-avatar>
              <img src="public/pic3.png" alt="">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-blue-14">Looking for Restaurant Space</q-item-label>
            <div class="row">
              <div class="col-12">
                <q-icon name="person" color="grey" />
                <span style="font-size: 12px;" class="text-grey">&nbsp;Ray Rickard</span>
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
                <p class="text-grey text-weight-bolder" style="font-size: 11px;">I have a client that is looking to
                  purchase a building with multiple</p>
              </div>
            </div>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption><img src="public/baloon.png" alt="" /></q-item-label>
          </q-item-section>
        </q-item>
        <div class="row justify-center">
          <div class="col-xs-11"><q-separator></q-separator></div>
        </div>
        <!-- <<<<<<<<<<<================================>>>>>>>>>>>>>> -->
        <q-item class=" q-mt-sm">
          <q-item-section top avatar>
            <q-avatar>
              <img src="public/pic4.png" alt="">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-red-14">Multi Tenant Retail/ Office</q-item-label>
            <div class="row">
              <div class="col-12">
                <q-icon name="person" color="grey" />
                <span style="font-size: 12px;" class="text-grey">&nbsp;Amy Gariss</span>
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
                <p class="text-grey text-weight-bolder" style="font-size: 11px;">I have a client that is looking to
                  purchase a building with multiple</p>
              </div>
            </div>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption><img src="public/last.png" alt="" /></q-item-label>
          </q-item-section>
        </q-item>
        <div class="row justify-center">
          <div class="col-xs-11"><q-separator></q-separator></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      lightDialog: false,
      darkDialog: false,
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
     type: 'all'
    }

  }
}
</script>
