<template>
  <section class="">
    <v-layout row wrap>
      <template v-if="receiptCount > 0">
        <v-flex xs12 md4>
          <h2>Your Receipts</h2>
          <v-list>
            <v-list-tile v-for="(receipt, key) in receipts" :key="key">
              <nuxt-link :to="'/purchasing/receipts/' + key"><v-list-tile-title>{{receipt.description}}</v-list-tile-title></nuxt-link>
              <v-spacer></v-spacer>
              <v-list-tile-title>&nbsp;€{{receipt.amount}}</v-list-tile-title>
              <v-spacer></v-spacer>
              <v-list-tile-action @click="deleteReceipt(key)">
                <v-btn icon><v-icon>delete</v-icon></v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-spacer></v-spacer>
      </template>
    </v-layout>
  </section>
</template>

<script>
import {auth,DB,Store} from '@/services/fireinit.js'

export default {
  asyncData({store}) {
    return {
      receiptsRef: DB.ref(`users/${store.state.user.uid}/receipts`),
    }
  },
  data () {
    return {
      receipts: {},
      receiptCount: 0
    }
  },
  created () {
    let vm = this
    vm.receiptsRef.on('value', function(snapshot) {
      vm.receipts = snapshot.val();
      vm.receiptCount = snapshot.numChildren();
    });
  },
  methods: {
    deleteReceipt (key) {
    }
  }
};

</script>

<style>
.avatar {
  max-width: 100px;
}
.avatar img {
  max-width: 100%;
}
</style>
