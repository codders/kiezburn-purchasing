<template>
  <section class="">
    <h1 class="title">Purchasing Dashboard</h1>
    <h2 class="subheading">Manage your purchases and receipts here<code>nuxt-child</code></h2>
    <v-flex xs12 id="purchaseNav">
      <nuxt-link class="purchaseNavRoute" to="/purchasing">Dashboard Home</nuxt-link>
      <nuxt-link class="purchaseNavRoute" to="/purchasing/addreceipt">Add Receipt</nuxt-link>
      <nuxt-link class="purchaseNavRoute" to="/purchasing/amazon">Amazon</nuxt-link>
    </v-flex>
    <v-divider></v-divider>
    <v-flex id="purchaseChild" xs12>
      <nuxt-child :key="$router.fullPath"></nuxt-child>
    </v-flex>

  </section>
</template>

<script>
export default {
}
</script>

<style>
#purchaseNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.purchaseNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#purchaseChild {
  margin-top: 1em;
}
</style>
<!--  -->
