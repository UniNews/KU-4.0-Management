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
          <div class="column">
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
          <div class="column">Topic</div>
          <div class="column is-2">Source</div>
          <div class="column is-2">Category</div>
          <div class="column is-2">Latest update</div>
          <div class="column is-1">Detail</div>
        </div>
          <div 
            class="columns is-mobile has-text-centered is-vcentered bottomBorderLightGrey is-size-7-touch"
            v-for="(item, index) in mockupData" :key="item.id"
          >
            <div class="column is-1">{{ index + 1 }}</div>
            <div class="column">{{ item.news }}</div>
            <div class="column is-2">{{ item.source }}</div>
            <div class="column is-2">{{ item.category }}</div>
            <div class="column is-2">{{ item.latestupdate }}</div>
            <div class="column cursorPointer is-1">
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
            <b>NEWS DETAIL</b>
          </div>
          <div>
            <b>Category</b><span class="marginLeft20px">Store</span>
            <hr>
          </div>
          <div>
            <b>Source</b><span class="marginLeft20px">CafeDotCom</span>
            <hr>
          </div>
          <div>
            <b>Topic</b><span class="marginLeft20px">คืนความสุขเด็กคอม! BNK48 มาเยือนสิ้นเดือนมกราคมนี้ !!</span>
            <hr>
          </div>
          <div>
            <b>Detail</b>
            <span class="marginLeft20px">
              คาเฟ่ดอทคอมคืนความสุขให้เด็กคอมโดยการใช้เงินที่หามาได้ไปกับการจ้าง BNK48 
              มาแสดง concert ให้กับเด็กคอม ในวันที่ 31 ม.ค. ที่กำลังจะถึงนี้ 
              สถานที่คือ ตึกวิศวคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตราสตร์ 
              เวลาตั้งแต่ 00.01 - 03.00 น. สิทธิพิเศษเฉพาะเด็กคอมได้ถ่ายรูปคู่กับศิลฟินฟรีก่อนเริ่มงาน
            </span>
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
            <b>Are you sure to delete this news ?</b>
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
import newsAxios from "@/axios/newsAxios.js";

export default {
  components: { HeaderComp, CardComp },
  data() {
    return {
      sortChoices: [
        { value: 0, text: "Sort by topic" },
        { value: 1, text: "Sort by source" },
        { value: 2, text: "Sort by category" },
        { value: 3, text: "Sort by date" },
      ],
      searchInput: "",
      mockupData: [
        {
          id: 0,
          news: "เปิดรับสมัคร staff สำหรับจัดาน potential day 2020",
          source: "KU Potential Club",
          category: "Club",
          latestupdate: "1010/10/10"
        },
        {
          id: 1,
          news: "ค่ายรวมพล คนถ่ายรูป",
          source: "KU Photo Club",
          category: "Club",
          latestupdate: "1010/10/10"
        },
        {
          id: 2,
          news: "คืนความสุขเด็กคอม! BNK48 มาเยือนสิ้นเดือนมกราคมนี้ !!",
          source: "CafeDotCom",
          category: "Store",
          latestupdate: "1010/10/10"
        },
      ],
      isDetailCardModalActive: false,
      isRemoveCardModalActive: false,
    }
  },
  created() {
    newsAxios.getAllNews()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    addButtonClicked() {
      this.$router.push("/addNews");
    },
    editButtonClicked() {
      this.$router.push("/editNews/101112");
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