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
              name="team"
              label="Select Team"
              id="team"
              v-model="team"
            ></v-text-field>
            <v-text-field
              name="amount"
              label="Refundable Amount"
              id="amount"
              v-model="amount"
            ></v-text-field>
            <v-text-field
              name="description"
              label="Purchase Description"
              id="description"
              v-model="description"
              multi-line
            ></v-text-field>
            <v-text-field
              name="comments"
              label="Additional Comments"
              id="comments"
              v-model="comments"
              multi-line
            ></v-text-field>
            <div>
              <input type="file" multiple accept="image/*" @change="detectFiles($event.target.files)">
              <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
            </div>
            <v-btn @click="addReceipt">Add Receipt</v-btn>
          </v-flex>
        </v-layout>

  </section>
</template>

<script>
import {auth,DB,Store} from '@/services/fireinit.js'

export default {
  asyncData({store}) {
    return {
      receiptsRef: DB.ref(`users/${store.state.user.uid}/receipts`),
      propertiesRef: DB.ref(`users/${store.state.user.uid}/properties`),
      photosRef: DB.ref(`users/${store.state.user.uid}/photos`)
    }
  },
  data () {
    return {
      progressUpload: 0,
      file: File,
      uploadTask: '',
      downloadURL: '',
      team: '',
      amount: '',
      description: '',
      comments: '',
      receipts: {},
      properties: {},
      attachments: []
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
    vm.team = vm.amount = vm.description = vm.comments = '';
  },
  methods: {
    addReceipt () {
      if (!(this.team != '' && this.amount != '' && this.description != '' && this.attachments.length > 0)) {
        console.log("Not filing empty receipt");
        return;
      }
      this.receiptsRef.push({
        team: this.team,
        amount: this.amount,
        description: this.description,
        comments: this.comments,
        attachments: this.attachments
      }).then(() => {
        this.team = this.amount = this.description = this.comments = '';
        this.attachments = [];
      })
    },
    detectFiles (fileList) {
      Array.from(Array(fileList.length).keys()).map( x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      let vm = this;
      vm.photosRef.push().then(ref => {
        vm.uploadTask = Store.ref(`users/${auth.currentUser.uid}/photos/${ref.key}`).put(file);
        vm.uploadTask.then(snapshot => {
           ref.set({ downloadURL: snapshot.downloadURL });
           vm.attachments.push(ref.key);
          })
      }); 
    }
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
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
.progress-bar {
  margin: 10px 0;
}
</style>
<!--  -->
