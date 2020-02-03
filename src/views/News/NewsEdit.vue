<template>
  <div class="bgThemeColor">
    <!-- Header -->
    <header-comp>
      <span>EDIT NEWS</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:body>
        <news-form
          :isEdit="true"
          :newsId="newsId"
          :newsDetailOriginal="newsDetail"
          @updateSaveButtonClicked="updateNews"
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
      newsId: null,
      newsDetail: {},
      isLoading: false
    };
  },
  created() {
    this.newsId = this.$route.params.id;
    newsService
      .getNewsById({ id: this.newsId })
      .then(res => {
        this.newsDetail = { ...res.data };
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    addButtonClicked() {
      this.$router.push("/addClubs");
    },
    updateNews(event) {
      this.isLoading = true;
      setTimeout(() => {
        newsService
          .updateNewsById(event)
          .then(res => {
            this.notificationTrigger("News has been updated", "success");
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
