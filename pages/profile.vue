<template>
  <section class="">
    <h2 class="title">Setup your purchasing profile</h2>

        <v-flex id="profileChild" xs12>
          <nuxt-child :key="$router.fullPath"></nuxt-child>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <p>Name:
              <v-text-field
                name="name"
                label="Enter your name"
                id="name"
                v-model="name"
              ></v-text-field>
            </p>
            <p>
              Default Area:
              <select v-model="area">
                <option v-for="(areaname, path) in areas" :key="path" v-bind:value="areaname">
                  {{areaname}}
                </option>
              </select>
            </p>
            <p>
              Mobile number:
              <v-text-field
                name="number"
                label="+49 176..."
                id="number"
                v-model="number"
              ></v-text-field>
            </p>
            <p>
              E-mail:
              <v-text-field
                name="email"
                label="bob@example.com"
                id="email"
                v-model="email"
              ></v-text-field>
            </p>
            <p>
              Account name:
              <v-text-field
                name="accountname"
                label="J. Smith"
                id="accountname"
                v-model="accountname"
              ></v-text-field>
            </p>
            <p>
              IBAN:
              <v-text-field
                name="iban"
                label="DE43... or GB21... etc."
                id="iban"
                v-model="iban"
              ></v-text-field>
            </p>
            <v-btn @click="saveProfile">Save Profile</v-btn>
          </v-flex>
        </v-layout>

  </section>
</template>

<style>
select {
  border: 1px solid black
}
</style>

<script>
import {DB} from '@/services/fireinit.js'
import {DataModel} from '@/util/models.js'

export default {
  asyncData({store}) {
    return {
      profileRef: DB.ref(`users/${store.state.user.uid}/profile`),
      areasRef: DB.ref(`admin/areas`)
    }
  },
  data () {
    return {
      area: '',
      areas: [],
      name: '',
      number: '',
      email: '',
      accountname: '',
      iban: '',
      profile: {}
    }
  },
  created () {
    let vm = this
    vm.areasRef.on('value', function(snapshot) {
      vm.areas = DataModel.extractAreas(snapshot.val());
    });
    vm.profileRef.on('value', function(snapshot) {
      vm.profile = snapshot.val();
      vm.name = vm.profile['name'];
      vm.number = vm.profile['number'];
      vm.email = vm.profile['email'];
      vm.accountname = vm.profile['accountname'];
      vm.iban = vm.profile['iban'];
      vm.area = vm.profile['area'];
    });
  },
  methods: {
    saveProfile () {
      this.profileRef.set({
        name: this.name,
        number: this.number,
        email: this.email,
        accountname: this.accountname,
        iban: this.iban,
        area: this.area
      })
    }
  }
}
</script>

<style>
#profileNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.profileNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#profileChild {
  margin-top: 1em;
}
</style>
<!--  -->
