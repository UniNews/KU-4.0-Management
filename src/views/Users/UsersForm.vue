<template>
  <div>
    <div v-if="isEdit" class="columns is-centered is-mobile">
      <div class="column is-half-mobile is-one-third-tablet">
        <img 
          class="stretchImage blackBorder" 
          src="https://previews.123rf.com/images/burakowski/burakowski1202/burakowski120200228/12221967-grunge-example-stamp.jpg" 
          alt="Image of the club"
        >
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Username">
          <b-input v-model="username"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Password">
          <b-input v-model="password" type="password" password-reveal></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Display name">
          <b-input v-model="displayName"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="First name">
          <b-input v-model="firstName"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last name">
          <b-input v-model="lastName"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Biography">
            <b-input maxlength="200" type="textarea" v-model="biography"></b-input>
        </b-field>
      </div>
    </div>
    <b-field class="file">
        <b-upload v-model="file">
            <a class="button is-primary">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload</span>
            </a>
        </b-upload>
        <span class="file-name" v-if="file">
            {{ file.name }}
        </span>
    </b-field>
    <div class="columns marginY10px">
      <div class="column is-one-third-tablet">
        <button class="button is-success is-fullwidth" @click="saveButtonClicked()"><b>SAVE</b></button>
      </div>
      <div class="column is-one-third-tablet">
        <button class="button is-success is-outlined is-fullwidth" @click="cancelButtonClicked()"><b>CANCEL</b></button>
      </div>
    </div>

    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
export default {
  props: {
    isEdit: Boolean
  },
  data() {
    return {
      file: null,
      username: "",
      password: "",
      displayName: "",
      firstName: "",
      lastName: "",
      biography: "",
      isLoading: false,
    }
  },
  methods: {
    saveButtonClicked() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$buefy.notification.open({
          duration: 2000,
          message: `New user has been created`,
          position: 'is-bottom-right',
          type: 'is-success'
        });
        this.$router.back();
      }, 3 * 1000)
    },
    cancelButtonClicked() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.marginY10px {
  margin-top: 10px;
  margin-bottom: 10px;
}
.stretchImage {
  width: 100%;
  height: 100%;
}
.blackBorder {
  border: 1px solid black;
  box-shadow: 2px 2px grey;
}
</style>