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
          <b-input v-model="username" placeholder="Kuma shabu"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal placeholder="123456"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Store name">
          <b-input v-model="name" placeholder="Kuma shabu"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Store category">
            <b-select placeholder="Select category" expanded>
                <option
                    v-for="option in categories"
                    :value="option.value"
                    :key="option.value">
                    {{ option.text }}
                </option>
            </b-select>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Description">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Address">
          <b-input v-model="address" placeholder="Amornphan market"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="President">
          <b-input v-model="president" placeholder="Admin Admin"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Email">
          <b-input v-model="email" placeholder="kumashabu@gmail.com"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Phone">
          <b-input v-model="phone" placeholder="081-234-5678"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Facebook Page">
          <b-input v-model="fbpage" placeholder="Kuma shabu buffet"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Instagram">
          <b-input v-model="ig" placeholder="kumashabu"></b-input>
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
      name: "",
      categories: [
        { value: 0, text: "Buffet" },
        { value: 1, text: "Seafood" },
        { value: 2, text: "Snacks & Drinks" },
        { value: 3, text: "Italian" },
        { value: 4, text: "Thai" },
      ],
      address: "",
      president: "",
      email: "",
      phone: "",
      fbpage: "",
      ig: "",
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
          message: `A new store has been created`,
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