<template>
  <b-modal :active.sync="modalStatus" :width="500" scroll="keep">
    <div class="card">
      <div class="card-content">
        <div class="textCenter marginBottom20px font20px">
          <b>{{ context }} DETAIL</b>
        </div>
        <div v-for="(value, name) in displayObject" :key="name">
          <b>{{ name }}</b
          ><span class="marginLeft20px">{{ value }}</span>
          <hr />
        </div>
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <button
              class="button is-success is-fullwidth"
              @click="editButtonClicked()"
            >
              <b>EDIT</b>
            </button>
          </div>
          <div class="column is-two-fifths">
            <button
              class="button is-success is-fullwidth is-outlined"
              @click="removeButtonClicked()"
            >
              <b>REMOVE</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    status: Boolean,
    context: String,
    displayObject: Object
  },
  data() {
    return {
      modalStatus: false
    };
  },
  watch: {
    status() {
      this.modalStatus = this.status;
    },
    modalStatus() {
      if (!this.modalStatus) {
        this.$emit("modalClosed");
      }
    }
  },
  methods: {
    editButtonClicked() {
      this.$emit("edit");
    },
    removeButtonClicked() {
      this.$emit("remove");
    }
  }
};
</script>

<style scoped>
.textCenter {
  text-align: center;
}
.marginBottom20px {
  margin-bottom: 20px;
}
.font20px {
  font-size: 20px;
}
.marginLeft20px {
  margin-left: 20px;
}
</style>
