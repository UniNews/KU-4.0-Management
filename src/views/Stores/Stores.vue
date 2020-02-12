<template>
  <div>
    <!-- Header -->
    <header-comp>
      <span>STORES</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:option>
        <div class="columns">
          <div class="column">
            <button
              class="button is-success is-fullwidth"
              @click="addButtonClicked()"
            >
              <b>CREATE NEW STORE</b>
            </button>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <b-select placeholder="Sort selection" expanded>
                  <option
                    v-for="option in sortChoices"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.text }}
                  </option>
                </b-select>
              </div>
              <div class="column">
                <b-field>
                  <b-input
                    placeholder="Search..."
                    v-model="searchInput"
                    type="search"
                    icon="magnify"
                  >
                  </b-input>
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div
          class="columns is-mobile has-text-centered has-text-weight-bold bottomBorderGrey"
        >
          <div class="column is-1">No.</div>
          <div class="column">Name</div>
          <div class="column">Category</div>
          <div class="column is-hidden-mobile"># News</div>
          <div class="column is-hidden-tablet">#News</div>
          <div class="column">Latest update</div>
          <div class="column">Detail</div>
        </div>
        <div
          class="columns is-mobile has-text-centered is-vcentered bottomBorderLightGrey"
          v-for="(item, index) in mockupData"
          :key="item.id"
        >
          <div class="column is-1">{{ index + 1 }}</div>
          <div class="column">{{ item.name }}</div>
          <div class="column">{{ item.category }}</div>
          <div class="column">{{ item.news }}</div>
          <div class="column">{{ item.latestupdate }}</div>
          <div class="column cursorPointer">
            <i class="material-icons" @click="isDetailCardModalActive = true"
              >find_in_page</i
            >
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
    <b-modal :active.sync="isDetailCardModalActive" :width="500" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="textCenter marginBottom20px font20px">
            <b>STORE DETAIL</b>
          </div>
          <div>
            <b>Name</b><span class="marginLeft20px">Kuma Shabu</span>
            <hr />
          </div>
          <div>
            <b>Category</b><span class="marginLeft20px">Buffet</span>
            <hr />
          </div>
          <div>
            <b>Description</b
            ><span class="marginLeft20px">A yakiniku buffet restaurant</span>
            <hr />
          </div>
          <div>
            <b>President</b><span class="marginLeft20px">Wongsatorn P.</span>
            <hr />
          </div>
          <div>
            <b>Address</b><span class="marginLeft20px">-</span>
            <hr />
          </div>
          <div>
            <b>Email</b><span class="marginLeft20px">-</span>
            <hr />
          </div>
          <div>
            <b>Phone</b><span class="marginLeft20px">081-123-4567</span>
            <hr />
          </div>
          <div>
            <b>Facebook Page</b
            ><span class="marginLeft20px">KU Shabu Buffet</span>
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
                @click="
                  isDetailCardModalActive = false;
                  isRemoveCardModalActive = true;
                "
              >
                <b>REMOVE</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <!-- Remove Modal -->
    <b-modal :active.sync="isRemoveCardModalActive" :width="500" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="textCenter marginBottom20px font20px">
            <b>Are you sure to delete this store ?</b>
          </div>
          <hr />
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <button
                class="button is-success is-fullwidth"
                @click="removeButtonClicked()"
              >
                <b>CONFIRM</b>
              </button>
            </div>
            <div class="column is-two-fifths">
              <button
                class="button is-success is-fullwidth is-outlined"
                @click="isRemoveCardModalActive = false"
              >
                <b>CANCEL</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";

export default {
  components: { HeaderComp, CardComp },
  data() {
    return {
      sortChoices: [
        { value: 0, text: "Sort by name" },
        { value: 1, text: "Sort by category" },
        { value: 2, text: "Sort by news" },
        { value: 3, text: "Sort by date" }
      ],
      searchInput: "",
      mockupData: [
        {
          id: 0,
          name: "Kuma shabu and yakiniku",
          category: "Buffet",
          news: 101112,
          latestupdate: "1010/10/10"
        },
        {
          id: 1,
          name: "Kuma shabu and yakiniku",
          category: "Buffet",
          news: 101112,
          latestupdate: "1010/10/10"
        },
        {
          id: 2,
          name: "Kuma shabu and yakiniku",
          category: "Buffet",
          news: 101112,
          latestupdate: "1010/10/10"
        }
      ],
      isDetailCardModalActive: false,
      isRemoveCardModalActive: false
    };
  },
  methods: {
    addButtonClicked() {
      this.$router.push("/addStores");
    },
    editButtonClicked() {
      this.$router.push("/editStores/101112");
    },
    removeButtonClicked() {
      this.isRemoveCardModalActive = false;
      alert("removeButtonClicked()");
    }
  }
};
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
