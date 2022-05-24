import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import UpdateDetail from '../views/UpdateDetail.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/detail/:id',
		name: 'Detail',
		component: Detail,
		props: true,
	},
	{
		path: '/update/detail/:id',
		name: 'UpdateDetail',
		component: UpdateDetail,
		props: true,
	},
	//redirect
	{
		path: '/home',
		redirect: '/',
	}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
