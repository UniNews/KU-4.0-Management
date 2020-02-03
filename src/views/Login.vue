<template>
  <div>
    <div class="container pageFullHeight">
      <div class="columns is-vcentered is-mobile fullHeight">
        <div class="column">
          <div class="columns is-centered is-mobile">
            <div
              class="column is-two-fifths-tablet is-three-fifths-mobile card"
            >
              <div class="card-content">
                <div class="columns is-centered is-mobile">
                  <div class="column is-two-fifths">
                    <div>
                      <figure class="image is-128x64">
                        <img
                          src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo-600x400.jpg"
                          alt="Logo Image"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="columns is-centered is-mobile">
                  <div class="column is-full-mobile is-four-fifths-tablet">
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
                </div>
                <div class="columns is-centered is-mobile">
                  <div class="column is-one-third">
                    <b-button
                      type="is-primary"
                      expanded
                      rounded
                      @click="onSubmit()"
                      >Login</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { LOGIN, AUTOLOGIN } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(LOGIN, {
        username: this.username,
        password: this.password
      });
      // if(this.isAuthenticated) this.$router.push("/dashboard");
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  watch: {
    isAuthenticated(newValue, oldValue) {
      if (newValue === true) this.$router.push("/dashboard");
    }
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
