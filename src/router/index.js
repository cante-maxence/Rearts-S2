import { createRouter, createWebHistory } from 'vue-router'
import Apropos from '../views/Apropos.vue'
import compteArtist from '../views/compteArtiste.vue'
import Dons from '../views/Dons.vue'
import FAQ from '../views/FAQ.vue'
import Inscription from '../views/Inscription.vue'
import Messagerie from '../views/Messagerie.vue'
import MLegal from '../views/MLegal.vue'
import NosArtistes from '../views/NosArtistes.vue'
import PageArtiste from '../views/PageArtiste.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/Apropos', name: 'Apropos', component: Apropos },
    { path: '/compteArtiste', name: 'compteArtiste', component: compteArtiste },
    { path: '/Dons', name: 'Dons', component: Dons },
    { path: '/FAQ', name: 'FAQ', component: FAQ },
    { path: '/Inscription', name: 'Inscription', component: Inscription },
    { path: '/Messagerie', name: 'Messagerie', component: Messagerie },
    { path: '/MLegal', name: 'MLegal', component: MLegal },
    { path: '/NosArtistes', name: 'NosArtistes', component: NosArtistes },
    { path: '/PageArtiste', name: 'PageArtiste', component: PageArtiste },
  ]
})

export default router


