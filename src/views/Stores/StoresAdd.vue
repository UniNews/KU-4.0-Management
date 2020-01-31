<template>
  <div>
    <!-- Header -->
    <header-comp>
      <span>CREATE NEW STORE</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:body>
        <stores-form
          :isEdit="false"
        ></stores-form>
      </template>
    </card-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";
import StoresForm from "@/views/Stores/StoresForm.vue";

export default {
  components: { HeaderComp, CardComp, StoresForm },
  data() {
    return {
    }
  },
  methods: {
    addButtonClicked() {
      this.$router.push("/addStores");
    }
  } 
}
</script>

<style scoped>
.bottomBorderGrey {
  border-bottom: 2px solid grey;
}
.bottomBorderLightGrey {
  border-bottom: 2px solid lightgrey;
}
.cursorPointer {
  cursor: pointer;
}
.marginX15px {
  margin-left: 15px;
  margin-right: 15px;
}
.marginY15px {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>