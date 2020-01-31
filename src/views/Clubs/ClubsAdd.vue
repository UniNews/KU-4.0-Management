<template>
  <div>
    <!-- Header -->
    <header-comp>
      <span>CREATE NEW CLUB</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:body>
        <clubs-form
          :isEdit="false"
        ></clubs-form>
      </template>
    </card-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";
import ClubsForm from "@/views/Clubs/ClubsForm.vue";

export default {
  components: { HeaderComp, CardComp, ClubsForm },
  data() {
    return {
      sortChoices: [
        { value: 0, text: "Sort by name" },
        { value: 1, text: "Sort by category" },
        { value: 2, text: "Sort by news" },
        { value: 3, text: "Sort by date" },
      ],
      searchInput: "",
      mockupData: [
        {
          id: 0,
          name: "KU Potential Club",
          category: "Buddhism",
          news: 101112,
          latestupdate: "1010/10/10"
        },
        {
          id: 1,
          name: "KU Potential Club",
          category: "Buddhism",
          news: 101112,
          latestupdate: "1010/10/10"
        },
        {
          id: 2,
          name: "KU Potential Club",
          category: "Buddhism",
          news: 101112,
          latestupdate: "1010/10/10"
        },
      ],
    }
  },
  methods: {
    addButtonClicked() {
      this.$router.push("/addClubs");
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