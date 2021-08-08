import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const About = () => import('../views/about/About');
const Profile = () => import('../views/profile/Profile');
const ShopCart = () => import('../views/shopcart/ShopCart');

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta:{
      title:'图书兄弟'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'图书兄弟-首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta:{
      title:'图书兄弟-分类'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{
      title:'图书兄弟-商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta:{
      title:'图书兄弟-购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      title:'图书兄弟-个人中心'
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//通过全局导航守卫，讲标签页标题名改变
router.beforeEach((to, from, next) => {
  //如果没有登录，在这里到Login
  next();
  document.title = to.meta.title;
});

export default router
