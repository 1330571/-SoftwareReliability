import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index.vue"
Vue.use(VueRouter)
import JMpage from "../components/JM模型.vue"
import GOpage from "../components/GO模型.vue"
import Duanepage from "../components/Duane模型.vue"
import Schneidewindpage from "../components/Schneidewind.vue"
const routes = [
  {
    //默认界面，index
    path: '/',
    name: '软件可靠性',
    component: index,
    children:
    [
      {
        component: JMpage,
        path: "/JM",
        name:"J-M模型"
      },
      {
        component:GOpage,
        path:"/GO",
        name:"G-O模型"
      },
      {
        component:Duanepage,
        path:"/Duane",
        name:"Duane模型"
      },
      {
        component:Schneidewindpage,
        path:"/Schneidewind",
        name:"Schneidewind模型"
      },
    ],
  },


]

const router = new VueRouter({
  routes
})

export default router
