<template>
  <section class="">
    <v-layout row wrap>
        <v-flex xs12 md4>
        <h2>{{receipt.description}}</h2>
        <p>Comment: {{receipt.comment}}</p>
        <p>Amount: {{receipt.amount}}</p>
        <p class="receipt-photo" v-for="(photo, key) in receipt.attachments" :key="key">
          <img :src="`${photo.downloadURL}`">
          <v-spacer></v-spacer>
        </p>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import {auth,DB,Store} from '@/services/fireinit.js'

export default {
  asyncData({store,params}) {
    return {
      receiptRef: DB.ref(`users/${store.state.user.uid}/receipts/${params.id}`),
      photosRef: DB.ref(`users/${store.state.user.uid}/photos`),
    }
  },
  data () {
    return {
      receipt: {},
      photos: {}
    }
  },
  created () {
    let vm = this
    vm.receiptRef.on('value', function(snapshot) {
      vm.receipt = snapshot.val();
    });
    vm.photosRef.on('value', function(snapshot) {
      vm.photos = snapshot.val();
      console.log("Photos: ", vm.photos);
    });
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
.receipt-photo img {
  max-width: 100%;
}
</style>
