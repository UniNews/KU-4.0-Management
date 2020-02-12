<template>
  <div class="bgThemeColor">
    <!-- Header -->
    <header-comp>
      <span>USERS</span>
    </header-comp>
    <!-- Card -->
    <card-comp>
      <template v-slot:option>
        <div class="columns">
          <div class="column is-4">
            <button
              class="button is-success is-fullwidth"
              @click="addButtonClicked()"
            >
              <b>CREATE NEW USER</b>
            </button>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <b-select placeholder="Sort selection" v-model="sortSelection" expanded>
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
          class="columns is-mobile has-text-centered has-text-weight-bold bottomBorderGrey is-size-7-touch	"
        >
          <div class="column is-1">No.</div>
          <div class="column">Display Name</div>
          <div class="column">Type</div>
          <div class="column">Email</div>
          <div class="column is-2">Detail</div>
        </div>
        <div
          class="columns is-mobile has-text-centered is-vcentered bottomBorderLightGrey is-size-7-touch"
          v-for="(user, index) in usersData"
          :key="user.id"
        >
          <div class="column is-1">{{ index + 1 }}</div>
          <div class="column">{{ user.displayName }}</div>
          <div class="column is-capitalized">{{ user.accessType }}</div>
          <div class="column">{{ user.email }}</div>
          <div class="column cursorPointer is-2">
            <i class="material-icons" @click="detailIconClicked(user._id)"
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
    <detail-modal
      :status="isDetailCardModalActive"
      context="USER"
      :displayObject="getDetailModalObject"
      @modalClosed="isDetailCardModalActive = false"
      @edit="editButtonClicked(usersDetailId)"
      @remove="
        isDetailCardModalActive = false;
        isRemoveCardModalActive = true;
      "
    ></detail-modal>
    <!-- Remove Modal -->
    <remove-modal
      context="user"
      :status="isRemoveCardModalActive"
      @confirm="removeButtonClicked(usersDetailId)"
      @modalClosed="isRemoveCardModalActive = false"
    ></remove-modal>
    <!-- Loading -->
    <loading-comp :isLoading="isLoading"></loading-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/Mainpage/Header.vue";
import CardComp from "@/components/Mainpage/Card.vue";
import userService from "@/services/user.js";
import DetailModal from "@/components/Mainpage/DetailModal.vue";
import RemoveModal from "@/components/Mainpage/RemoveModal.vue";
import LoadingComp from "@/components/Mainpage/Loading.vue";
import detailModalMixin from "@/mixins/detailModal.js";
import alertMixin from "@/mixins/alert.js";

export default {
  mixins: [detailModalMixin, alertMixin],
  components: { HeaderComp, CardComp, DetailModal, RemoveModal, LoadingComp },
  data() {
    return {
      sortSelection: "byDisplayName",
      sortChoices: [
        { value: "byDisplayName", text: "Sort by display name" },
        { value: "byType", text: "Sort by type" },
        { value: "byEmail", text: "Sort by email" }
      ],
      searchInput: "",
      usersData: [],
      usersDataOriginal: [],
      usersDetailId: null,
      usersDetailObject: null,
      isDetailCardModalActive: false,
      isRemoveCardModalActive: false,
      isLoading: false,
    };
  },
  computed: {
    getDetailModalObject() {
      let type = this.checkNullAndExist(this.usersDetailObject, "accessType");
      let category = this.checkNullAndExist(this.usersDetailObject, "category");
      let displayName = this.checkNullAndExist(
        this.usersDetailObject,
        "displayName"
      );
      let description = this.checkNullAndExist(
        this.usersDetailObject,
        "description"
      );
      let address = this.checkNullAndExist(this.usersDetailObject, "address");
      let email = this.checkNullAndExist(this.usersDetailObject, "email");
      let mobilephone = this.checkNullAndExist(
        this.usersDetailObject,
        "mobilePhone"
      );
      return {
        Type: type,
        Category: category,
        "Display Name": displayName,
        Description: description,
        Address: address,
        Email: email,
        "Mobile Phone": mobilephone
      };
    }
  },
  watch: {
    searchInput() {
      this.editDisplayData();
    },
    sortSelection() {
      this.editDisplayData();
    }
  },
  created() {
    this.setAllUsers();
  },
  methods: {
    setAllUsers() {
      userService
        .getAllUsers()
        .then(res => {
          let data = res.data;
          // Set the (accessType = user) if the object doesn't have accessType attribute
          for (let i in data) {
            let current = data[i];
            if (!current.accessType) {
              current.accessType = "user";
            }
          }
          this.usersData = [...data];
          this.usersDataOriginal = [...data];
          this.editDisplayData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    addButtonClicked() {
      this.$router.push("/addUsers");
    },
    editButtonClicked(usersDetailId) {
      this.$router.push(`/editUsers/${usersDetailId}`);
    },
    removeButtonClicked() {
      this.isLoading = true;
      setTimeout(() => {
        userService
          .deleteUsersById({ id: this.usersDetailId })
          .then(res => {
            this.setAllUsers();
            this.notificationTrigger("User has been deleted", "success");
          })
          .catch(err => {
            this.notificationTrigger("ERROR !!!", "danger");
            console.log(err);
          });
        this.isLoading = false;
        this.usersDetailId = null;
        this.usersDetailObject = null;
      }, 1000);
    },
    detailIconClicked(usersDetailId) {
      this.usersDetailId = usersDetailId;
      for (let i in this.usersData) {
        if (this.usersData[i]._id === this.usersDetailId) {
          this.usersDetailObject = this.usersData[i];
          break;
        }
      }
      this.isDetailCardModalActive = true;
    },
    editDisplayData() {
      let filteredData = this.filterData(
        this.usersDataOriginal,
        this.searchInput
      );
      let displayData = this.sortData(filteredData, this.sortSelection);
      this.usersData = displayData;
    },
    filterData(originalData, searchInput) {
      return originalData.filter(el => {
        let keyword = searchInput.toLowerCase();
        let displayName = el.displayName.toLowerCase();
        let accessTypeName = el.accessType.toLowerCase();
        let emailName = el.email.toLowerCase();
        return (
          displayName.includes(keyword) ||
          accessTypeName.includes(keyword) ||
          emailName.includes(keyword)
        );
      });
    },
    sortData(filteredData, choice) {
      if (choice) {
        if (choice === "byDisplayName")
          filteredData = this._.orderBy(filteredData, ["displayName"], ["asc"]);
        else if (choice === "byType")
          filteredData = this._.orderBy(
            filteredData,
            ["accessType"],
            ["asc"]
          );
        else if (choice === "byEmail")
          filteredData = this._.orderBy(filteredData, ["email"], ["asc"]);
      }
      return filteredData;
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
