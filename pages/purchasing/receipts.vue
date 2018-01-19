<template>
  <section class="">

        <v-flex id="purchasingChild" xs12>
          <nuxt-child :key="$router.fullPath"></nuxt-child>
        </v-flex>
        <v-flex>
          <div ng-bind-html="trustedHtml" class="ng-binding"><h2>IMPORTANT!! READ FIRST!#</h2>
          <p>Please read the Kiezburn refund guidelines -  <a href="https://goo.gl/Bu9u7f" target="_blank">HERE</a></p>
          <p>NOTE: Please don't send us your Amazon order statements, these are not invoices. Here's how to get your Amazon invoices: <a href="https://docs.google.com/document/d/1Ohq6VUl09i7K9tnxk7y2wvxMhMcv4Jut4lCmJSeAOeY/edit?usp=sharing" target="_blank">HERE</a></p>
          <h5>This is <strong>only</strong> for Kiez Burn production expenditures.</h5>
          <p>*If you are an artist or performer wanting to request a refund, please <a href="https://drive.google.com/open?id=1i4wKp5kMHA0-FYjdTktA9FYnUb5HpG9M5bP1MLN7a-4" target="_blank">READ THIS </a> or get in touch with your Kiez Burn Arts &amp; Entertainment contact.</p>
          <p>Please fill out the form below to get a refund for expenditures made for Kiez Burn. </p>
          <p><strong>The process is as follows:</strong></p>
          <ol>
          <li>You fill out the form below and attach a digital copy of the receipts / invoices.</li>
          <li>The teamlead gets notified and they check that the refund request is in line with agreements.</li>
          <li><strong>We need the physical receipts for refunds</strong> You can hand them in with your team lead, or bring them to the Kiez Burn event and hand them over to the finance lead (Arthur), either during build office hours (Office hours will be signposted during build), or during the event at the infostand on:<br>
          Friday: 17-19h or<br>
          Sunday: 13-14h</li>
          <li>The physical receipts will be checked against the refund request and once agreed, you will receive a refund on the account that you have specified in this form.</li>
          <li><strong>WE NEED THE PHYSICAL RECEIPTS!!!</strong></li>
          </ol>
          <p><strong>Thank you for helping us make this event beautiful and a reality</strong></p></div>
        </v-flex>
        <v-layout row wrap>
          <template v-if="receipts != null && receipts.size > 0">
            <v-flex xs12 md4>
              <h2>Your Receipts</h2>
              <v-list>
                <v-list-tile v-for="(item, key) in items" :key="key">
                  <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  <v-spacer></v-spacer>
                  <v-list-tile-action @click="deleteItem(key)">
                    <v-btn icon><v-icon>delete</v-icon></v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-spacer></v-spacer>
          </template>
          <v-flex xs12 md6>
            <h2>Add Receipt</h2>
            <v-text-field
              @keyup.enter="addItem"
              name="item"
              label="Add New Item"
              id="item"
              v-model="item"
            ></v-text-field>
            <v-btn @click="addItem">Add Item</v-btn>
          </v-flex>
        </v-layout>

  </section>
</template>

<script>
import {DB} from '@/services/fireinit.js'

export default {
  asyncData({store}) {
    return {
      receiptsRef: DB.ref(`users/${store.state.user.uid}/receipts`),
      propertiesRef: DB.ref(`users/${store.state.user.uid}/properties`)
    }
  },
  data () {
    return {
      item: '',
      receipts: {},
      properties: {}
    }
  },
  created () {
    let vm = this
    vm.receiptsRef.on('value', function(snapshot) {
      vm.receipts = snapshot.val()
    });
    vm.propertiesRef.on('value', function(snapshot) {
      vm.properties = snapshot.val();
    });
  },
  methods: {
    addItem () {
      this.itemsRef.push({
        name: this.item
      }).then(() => {
        this.item = ''
      })
    },
    deleteItem (key) {
      this.itemsRef.child(key).remove()
    },
    addProperty () {
      if (this.propertyName != '') {
        if (this.propertyValue == '') {
          this.propertiesRef.child(this.propertyName).remove();
        } else {
          this.propertiesRef.child(this.propertyName).set(this.propertyValue);
        }
        this.propertyValue = '';
      }
    }
  }
}
</script>

<style>
#purchasingNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.purchasingNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#purchasingChild {
  margin-top: 1em;
}
</style>
<!--  -->
