import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index.vue"
Vue.use(VueRouter)
import page1 from "../components/界面1.vue"
import page2 from "../components/界面2.vue"
import page3 from "../components/界面3.vue"
import page4 from "../components/界面4.vue"
const routes = [
  {
    //默认界面，index
    path: '/',
    name: 'index',
    component: index,
    children:
    [
      {
        component: page1,
        path: "page1",
        name:"页面1"
      },
      {
        component:page2,
        path:"page2",
        name:"页面2"
      },
      {
        component:page3,
        path:"page3",
        name:"页面3"
      },
      {
        component:page4,
        path:"page4",
        name:"页面4"
      },
    ],
  },


]

const router = new VueRouter({
  routes
})

export default router
