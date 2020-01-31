import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from "@/views/Dashboard/Dashboard.vue"
import Clubs from "@/views/Clubs/Clubs.vue"
import ClubsAdd from "@/views/Clubs/ClubsAdd.vue"
import ClubsEdit from "@/views/Clubs/ClubsEdit.vue"
import Stores from "@/views/Stores/Stores.vue"
import StoresAdd from "@/views/Stores/StoresAdd.vue"
import StoresEdit from "@/views/Stores/StoresEdit.vue"
import News from "@/views/News/News.vue"
import NewsAdd from "@/views/News/NewsAdd.vue"
import NewsEdit from "@/views/News/NewsEdit.vue"
import Users from "@/views/Users/Users.vue"
import UsersAdd from "@/views/Users/UsersAdd.vue"
import UsersEdit from "@/views/Users/UsersEdit.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        // Clubs
        {
          path: "/clubs",
          name: "Clubs",
          component: Clubs
        },
        {
          path: "/addClubs",
          name: "AddClubs",
          component: ClubsAdd
        },
        {
          path: "/editClubs/:id",
          name: "EditClubs",
          component: ClubsEdit
        },
        // Stores
        {
          path: "/stores",
          name: "Stores",
          component: Stores
        },
        {
          path: "/addStores",
          name: "AddStores",
          component: StoresAdd
        },
        {
          path: "/editStores/:id",
          name: "EditStores",
          component: StoresEdit
        },
        // News
        {
          path: "/news",
          name: "News",
          component: News
        },
        {
          path: "/addNews",
          name: "AddNews",
          component: NewsAdd
        },
        {
          path: "/editNews/:id",
          name: "EditNews",
          component: NewsEdit
        },
        // Users
        {
          path: "/users",
          name: "Users",
          component: Users
        },
        {
          path: "/addUsers",
          name: "AddUsers",
          component: UsersAdd
        },
        {
          path: "/editUsers/:id",
          name: "EditUsers",
          component: UsersEdit
        },
    ]
})