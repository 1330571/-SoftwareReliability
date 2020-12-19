import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index.vue"
Vue.use(VueRouter)
import JMpage from "../views/JM模型.vue"
import GOpage from "../views/GO模型.vue"
import Duanepage from "../views/Duane模型.vue"
import Schneidewindpage from "../views/Schneidewind.vue"
import login from "../views/login.vue"
import Dataquery from "../views/Dataquery";
import Dataadd from "../views/Dataadd";
import Dataupdate from "../views/Dataupdate";
const routes = [
  {
    //默认界面，index
    path: '/',
    name: '可靠性模型',
    component: index,
    redirect:"/login",
    isshow:true,
    children:
    [
      {
        component: JMpage,
        path: "/JM",
        name:"J-M模型",
        isshow:true
      },
      {
        component:GOpage,
        path:"/GO",
        name:"G-O模型",
        isshow:true
      },

      {
        component:Schneidewindpage,
        path:"/Schneidewind",
        name:"Schneidewind模型",
        isshow:true
      },
    ],
  },
  {
    component:login,
    path:"/login",
    name:"login",
    isshow:false,
  },
  {
    component:index,
    path:"/data",
    name:"模型数据",
    isshow:true,
    children:
    [
      {
        component:Dataquery,
        path:"/query",
        name:"数据查询",
        isshow:true
      },
      {
        component:Dataadd,
        path:"/add",
        name:"数据新增",
        isshow:true
      },
      {
        component:Dataupdate,
        path:"/update",
        name:"数据修改",
        isshow:false
      }
    ]
  }



]

const router = new VueRouter({
  routes
})

export default router
