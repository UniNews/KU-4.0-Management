<template>
  <div class="bgThemeColor">
    <!-- Header -->
    <header-comp>
      <span>CREATE NEWS</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:body>
        <news-form
          :isEdit="false"
          @createSaveButtonClicked="createNews"
        ></news-form>
      </template>
    </card-comp>
    <!-- Loading -->
    <loading-comp :isLoading="isLoading"></loading-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";
import NewsForm from "@/views/News/NewsForm.vue";
import newsService from "@/services/news.js";
import LoadingComp from "@/components/Mainpage/Loading.vue";
import alertMixin from "@/mixins/alert.js";

export default {
  mixins: [alertMixin],
  components: { HeaderComp, CardComp, NewsForm, LoadingComp },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    createNews(event) {
      this.isLoading = true;
      setTimeout(() => {
        newsService
          .createNews(event)
          .then(res => {
            this.notificationTrigger("News has been created", "success");
            this.isLoading = false;
          })
          .catch(err => {
            this.notificationTrigger("ERROR !!!", "danger");
            this.isLoading = false;
            console.log(err);
          });
        this.$router.back();
      }, 1000);
    }
  }
};
</script>

<style scoped></style>
