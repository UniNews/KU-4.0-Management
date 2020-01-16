<template>
  <div>

    <div class="container" style="height: 100vh;">
      <div class="columns is-vcentered is-mobile" style="height: 100%;">
        <div class="column">
          <div class="columns">
            <div class="column"></div>
            <div class="column is-two-fifths">
              <div class="card">
                <div class="card-content">
                  <div class="columns is-mobile">
                    <div class="column"></div>
                    <div class="column is-two-fifths">
                      <div>
                        <figure class="image is-128x64">
                          <img 
                            src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo-600x400.jpg" 
                            alt="Logo Image"
                          >
                        </figure>
                      </div>
                    </div>
                    <div class="column"></div>
                  </div>
                  <div class="columns is-mobile">
                    <div class="column"></div>
                    <div class="column is-four-fifths">
                      <b-field>
                          <b-input 
                            class="paddingY10px"
                            placeholder="Username"
                            type="text"
                            v-model="username"
                          ></b-input>
                      </b-field>
                      <b-field>
                          <b-input 
                            class="paddingY10px"
                            placeholder="Password"
                            type="password"
                            v-model="password"
                          ></b-input>
                      </b-field>
                    </div>
                    <div class="column"></div>
                  </div>
                  <div class="columns is-mobile">
                    <div class="column"></div>
                    <div class="column">
                      <b-button 
                        type="is-primary"  
                        expanded rounded
                        @click="onSubmit(username, password)"
                      >Login</b-button>
                    </div>
                    <div class="column"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </div> 

    <!-- Old Code -->
    <!-- <div v-if="!isAuthenticated">
      <h1>Sign in</h1>
      <p>
        <router-link :to="{ name: 'register' }">Need an account?</router-link>
      </p>
      <form v-on:submit.prevent="onSubmit(username, password);">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button>Sign in</button>
      </form>
    </div>
    <div v-else>
      <h1>Logged in</h1>
    </div> -->

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { LOGIN, REGISTER } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onSubmit(username, password) {
      this.$store.dispatch(LOGIN, { username, password });
      if(this.isAuthenticated) this.$router.push("/dashboard");
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>

<style scoped>
.testBorderGreen {
  border: 1px solid green;
}
.paddingY10px {
  padding-top: 10px;
  padding-bottom: 10px;
}
.paddingY20px {
  padding-top: 20px;
  padding-bottom: 20px;
}
.backgroundImage {
  background-image: linear-gradient(to bottom right, green, lightgreen);

}
</style>