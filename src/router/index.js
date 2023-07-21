import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Calendar from '@/views/Calendar.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'Calendar',
		path: '/calendar',
		component: Calendar
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

// {
// 	name: 'Blank',
// 	path: '/blank',
// 	component: () => import('@/views/Blank.vue')
// }