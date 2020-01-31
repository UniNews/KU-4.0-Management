<template>
  <div class="bgThemeColor">
    <!-- Header -->
    <header-comp>
      <span>EDIT THE USER</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:body>
        <users-form
          :isEdit="true"
        ></users-form>
      </template>
    </card-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";
import UsersForm from "@/views/Users/UsersForm.vue";

export default {
  components: { HeaderComp, CardComp, UsersForm },
  data() {
    return {
    }
  },
  methods: {
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