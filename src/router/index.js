import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Calendar from '@/views/Calendar.vue'
import Services from '@/views/Services.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: Calendar
	},
	{
		path: '/services',
		name: 'Services',
		component: Services
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router