<template>
  <b-modal :active.sync="modalStatus" :width="500" scroll="keep">
    <div class="card">
      <div class="card-content">
        <div class="textCenter marginBottom20px font20px">
          <b>Are you sure to delete this {{ context }} ?</b>
        </div>
        <hr />
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <button
              class="button is-success is-fullwidth"
              @click="confirmButtonClicked()"
            >
              <b>CONFIRM</b>
            </button>
          </div>
          <div class="column is-two-fifths">
            <button
              class="button is-success is-fullwidth is-outlined"
              @click="cancelButtonClicked()"
            >
              <b>CANCEL</b>
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
    context: String,
    status: Boolean
  },
  data() {
    return {
      modalStatus: false
    };
  },
  watch: {
    status() {
      this.modalStatus = status;
    },
    modalStatus() {
      if (!this.modalStatus) {
        this.$emit("modalClosed");
      }
    }
  },
  methods: {
    closeModal() {
      this.modalStatus = false;
    },
    confirmButtonClicked() {
      this.$emit("confirm");
      this.closeModal();
    },
    cancelButtonClicked() {
      this.closeModal();
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
</style>
