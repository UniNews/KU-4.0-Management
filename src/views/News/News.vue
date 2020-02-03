<template>
  <div class="bgThemeColor">
    <!-- Header -->
    <header-comp>
      <span>NEWS</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:option>
        <div class="columns">
          <div class="column is-4">
              <button class="button is-success is-fullwidth" @click="addButtonClicked()"><b>CREATE NEWS</b></button>  
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <b-select placeholder="Sort selection" expanded>
                    <option
                        v-for="option in sortChoices"
                        :value="option.value"
                        :key="option.value">
                        {{ option.text }}
                    </option>
                </b-select>
              </div>
              <div class="column">
                <b-field>
                    <b-input placeholder="Search..."
                        v-model="searchInput"
                        type="search"
                        icon="magnify">
                    </b-input>
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="columns is-mobile has-text-centered has-text-weight-bold bottomBorderGrey is-size-7-touch	">
          <div class="column is-1">No.</div>
          <div class="column">Title</div>
          <div class="column is-2">Source</div>
          <div class="column is-2">Type</div>
          <div class="column is-2">Detail</div>
        </div>
          <div 
            class="columns is-mobile has-text-centered is-vcentered bottomBorderLightGrey is-size-7-touch"
            v-for="(news, index) in newsData" :key="news._id"
          >
            <div class="column is-1">{{ index + 1 }}</div>
            <div class="column">{{ news.title }}</div>
            <div class="column is-2">{{ news.user.displayName }}</div>
            <div class="column is-2 is-capitalized">{{ news.type }}</div>
            <div class="column cursorPointer is-2">
              <i class="material-icons" @click="detailIconClicked(news._id)">find_in_page</i>
            </div>
          </div>
      </template>
      <template v-slot:pagination>
        <div class="columns is-centered is-mobile marginY15px">
            <button class="button">
              <i class="material-icons">chevron_left</i>
            </button>
            <button class="button marginX15px" disabled>1</button>  
            <button class="button">
              <i class="material-icons">chevron_right</i>
            </button> 
        </div>
      </template>
    </card-comp>
    <!-- Detail Modal -->
    <detail-modal
      :status="isDetailCardModalActive"
      context="NEWS"
      :displayObject="getDetailModalObject"
      @modalClosed="isDetailCardModalActive = false;"
      @edit="editButtonClicked(newsDetailId)"
      @remove="isDetailCardModalActive = false; isRemoveCardModalActive = true;"
    ></detail-modal>
    <!-- Remove Modal -->
    <remove-modal
      context="news"
      :status="isRemoveCardModalActive"
      @confirm="removeButtonClicked(newsDetailId)"
      @modalClosed="isRemoveCardModalActive = false;"
    ></remove-modal>
    <!-- Loading -->
    <loading-comp
      :isLoading="isLoading"
    ></loading-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";
import newsService from "@/services/news.js";
import LoadingComp from "@/components/Mainpage/Loading.vue";
import RemoveModal from "@/components/Mainpage/RemoveModal.vue";
import DetailModal from "@/components/Mainpage/DetailModal.vue";
import alertMixin from "@/mixins/alert.js";

export default {
  mixins: [ alertMixin ],
  components: { HeaderComp, CardComp, LoadingComp, DetailModal, RemoveModal },
  data() {
    return {
      sortChoices: [
        { value: 0, text: "Sort by title" },
        { value: 1, text: "Sort by source" },
        { value: 2, text: "Sort by type" },
      ],
      searchInput: "",
      newsData: [],
      newsDetailId: null,
      newsDetailObject: null,
      isDetailCardModalActive: false,
      isRemoveCardModalActive: false,
      isLoading: false,
    }
  },
  created() {
    this.setAllNews();
  },
  computed: {
    getDetailModalObject() {
      return {
        "Category": this.newsDetailObject ? this.newsDetailObject.type : "",
        "Source": this.newsDetailObject ? this.newsDetailObject.user.displayName : "",
        "Title": this.newsDetailObject ? this.newsDetailObject.title : "",
        "Description": this.newsDetailObject ? this.newsDetailObject.description : "",
      }
    }
  },
  methods: {
    setAllNews() {
      newsService.getAllNews()
        .then(res => {
          this.newsData = [...res.data];
          this.newsData = this.newsData.filter(el => {
            return el.type !== "lost-founds";
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    addButtonClicked() {
      this.$router.push("/addNews");
    },
    editButtonClicked(newsDetailId) {
      this.$router.push(`/editNews/${newsDetailId}`);
    },
    removeButtonClicked(newsDetailId) {
      this.isLoading = true;
      setTimeout(() => {
        newsService.deleteNewsById({ id: this.newsDetailId })
          .then(res => {
            this.setAllNews();
            this.notificationTrigger("News has been deleted", "success");
          })
          .catch(err => {
            this.notificationTrigger("ERROR !!!", "danger");
            console.log(err);
          });
        this.isLoading = false;
        this.newsDetailId = null;
        this.newsDetailObject = null;
      }, 1000);
    },
    detailIconClicked(newsDetailId) {
      this.newsDetailId = newsDetailId;
      for(let i in this.newsData) {
        if(this.newsData[i]._id === this.newsDetailId) {
          this.newsDetailObject = this.newsData[i];
          break;
        }
      }
      this.isDetailCardModalActive = true;
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
.marginLeft20px {
  margin-left: 20px;
}
.marginBottom20px {
  margin-bottom: 20px;
}
.textCenter {
  text-align: center;
}
.font20px {
  font-size: 20px;
}
</style>