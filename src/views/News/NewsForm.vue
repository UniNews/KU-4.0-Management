<template>
  <div>
    <div v-if="isEdit" class="columns is-centered is-mobile">
      <div class="column is-half-mobile is-one-third-tablet">
        <img 
          class="stretchImage blackBorder" 
          :src="imageURL" 
          alt="Image of the club"
        >
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="News title">
          <b-input v-model="title"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Type">
            <b-select placeholder="Select type" v-model="type" expanded>
                <option
                    v-for="option in types"
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
        <b-field label="News Detail">
            <b-input type="textarea" v-model="description"></b-input>
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
  </div>
</template>

<script>
export default {
  props: {
    isEdit: Boolean,
    newsId: String,
    newsDetailOriginal: Object
  },
  data() {
    return {
      file: null,
      imageURL: null,
      title: null,
      type: "club",
      types: [
        { value: "club", text: "Club" },
        { value: "promotions", text: "Promotion" },
        { value: "lost-founds", text: "Lost & Founds" },
        { value: "universities", text: "Universities" },
      ],
      description: null,
    }
  },
  watch: {
    newsDetailOriginal() {
      this.setInitialData();
    }
  },
  methods: {
    setInitialData() {
      this.imageURL = this.newsDetailOriginal.imageURL[0];
      this.title = this.newsDetailOriginal.title;
      this.description = this.newsDetailOriginal.description;
      this.type = this.newsDetailOriginal.type;
    },
    saveButtonClicked() {
      let images = [];
      if(this.imageURL) {
        images.push(this.imageURL);
      } else {
        images.push("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK-CsPyTnscg0U7fTFrmQn1eYrMLJ-UOVQYFvBrAeqjg-iSQMW");
      }
      if(this.isEdit) {
        let updatedData = {
          id: this.newsId,
          data: {
            imageURL: images,
            title: this.title,
            description: this.description,
            type: this.type
          }
        };
        this.$emit("updateSaveButtonClicked", updatedData);
      } else {
        let createdData = {
          imageURL: images,
          title: this.title,
          description: this.description,
          type: this.type
        }
        this.$emit("createSaveButtonClicked", createdData);
      }
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