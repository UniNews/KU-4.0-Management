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
          <div class="column">
              <button class="button is-success is-fullwidth" @click="addButtonClicked()"><b>CREATE NEW USER</b></button>  
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
          <div class="column">Displayname</div>
          <div class="column">Fullname</div>
          <div class="column">Email</div>
          <div class="column is-2">Detail</div>
        </div>
          <div 
            class="columns is-mobile has-text-centered is-vcentered bottomBorderLightGrey is-size-7-touch"
            v-for="(item, index) in mockupData" :key="item.id"
          >
            <div class="column is-1">{{ index + 1 }}</div>
            <div class="column">{{ item.displayname }}</div>
            <div class="column">{{ item.firstname }} {{ item.lastname }}</div>
            <div class="column">{{ item.email }}</div>
            <div class="column cursorPointer is-2">
              <i class="material-icons" @click="isDetailCardModalActive = true">find_in_page</i>
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
            <b>USER DETAIL</b>
          </div>
          <div>
            <b>Display name</b><span class="marginLeft20px">ก้องสั่งลุย</span>
            <hr>
          </div>
          <div>
            <b>Full name</b><span class="marginLeft20px">Varit Varit</span>
            <hr>
          </div>
          <div>
            <b>Email</b><span class="marginLeft20px">varit.as@ku.th</span>
            <hr>
          </div>
          <div>
            <b>Mobile phone</b><span class="marginLeft20px">081-234-5678</span>
            <hr>
          </div>
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <button 
                class="button is-success is-fullwidth"
                @click="editButtonClicked()"
              ><b>EDIT</b></button>
            </div>
            <div class="column is-two-fifths">
              <button 
                class="button is-success is-fullwidth is-outlined"
                @click="isDetailCardModalActive = false; isRemoveCardModalActive = true;"
              ><b>REMOVE</b></button>
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
            <b>Are you sure to delete this user ?</b>
          </div>
          <hr>
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <button 
                class="button is-success is-fullwidth"
                @click="removeButtonClicked()"
              ><b>CONFIRM</b></button>
            </div>
            <div class="column is-two-fifths">
              <button 
                class="button is-success is-fullwidth is-outlined"
                @click="isRemoveCardModalActive = false;"
              ><b>CANCEL</b></button>
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
        { value: 0, text: "Sort by display name" },
        { value: 1, text: "Sort by full name" },
        { value: 2, text: "Sort by email" }
      ],
      searchInput: "",
      mockupData: [
        {
          id: 0,
          displayname: "ก้องสั่งลุย",
          firstname: "varit",
          lastname: "varit",
          email: "varit.as@ku.th"
        },
        {
          id: 1,
          displayname: "ม่อนสั่งลุย",
          firstname: "wongsatorn",
          lastname: "wongsatorn",
          email: "wongsatorn.as@ku.th"
        },
        {
          id: 2,
          displayname: "พอลสั่งลุย",
          firstname: "wasuthun",
          lastname: "wasuthun",
          email: "wasuthun.as@ku.th"
        },
        {
          id: 3,
          displayname: "เจมมี่สั่งลุย",
          firstname: "sathira",
          lastname: "sathira",
          email: "sathira.as@ku.th"
        },
      ],
      isDetailCardModalActive: false,
      isRemoveCardModalActive: false,
    }
  },
  methods: {
    addButtonClicked() {
      this.$router.push("/addUsers");
    },
    editButtonClicked() {
      this.$router.push("/editUsers/101112");
    },
    removeButtonClicked() {
      this.isRemoveCardModalActive = false;
      alert("removeButtonClicked()");
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