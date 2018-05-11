<template>
  <v-container>
    <v-layout text-xs-center>
      <v-flex xs12 md8 offset-md2>
        <div class="wrapper">
          <div class="intro">
            <h2>Art Grant Refund Requests</h2>
            <p>Welcome to the Art Grants receipts-processing site.</p> 
            <p>To register your expenses you will need to:</p>
            <p>
              <ol>
                <li>Sign in to a Google / GMail account using the sign-in button below</li>
                <li>Fill out your <nuxt-link to="/profile">Purchasing Profile</nuxt-link></li>
                <li>Add details of your expenses with the <nuxt-link to="/purchasing/addrefundrequest">Add Refund Request</nuxt-link> form</li>
              </ol>
            </p>
          </div>
          <div v-if="!$store.state.user">
            <login-form></login-form>
            <!-- <v-btn outline large flat nuxt @click="$router.push('/login')" primary>Sign In</v-btn> -->
          </div>
          <div v-else class="flexWrapper">
            <h4 class="blue--text">You're logged in!</h4>
            <v-btn icon class="blue white--text">
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </div>
        </div>
        <div>
          <p>Code for this site is on <a href="https://github.com/codders/kiezburn-purchasing">Github</a> - pull requests welcome!</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '~/components/LoginForm'

export default {
components: {
  LoginForm
  }
}
</script>

<style scoped>
.fake {
  background: blue;
}
.wrapper {
  margin-top: -7.5em;
}
.flexWrapper {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.container {
  height: calc(100vh - 100px);
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
}
.title {
  font-size: 2.5em !important;
  /*margin-top: -5em;*/
}
div.intro {
  align-content: left;
  align-items: left;
}

@media (min-width: 750px) {
  .title {
    font-size: 3.5em !important;
  }
}
</style>
