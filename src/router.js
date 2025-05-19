import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import PersonalStatement from './pages/PersonalStatement.vue'
import Demonstrations from './pages/Demonstrations.vue'
import DatasetContributions from './pages/DatasetContributions.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/personal-statement', component: PersonalStatement },
    { path: '/demonstrations', component: Demonstrations },
    { path: '/dataset-contributions', component: DatasetContributions },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})