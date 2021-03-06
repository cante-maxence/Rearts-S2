import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Apropos from '../views/Apropos.vue'
import Profil from '../views/Profil.vue'
import Dons from '../views/Dons.vue'
import FAQ from '../views/FAQ.vue'
import Inscription from '../views/Inscription.vue'
import Messagerie from '../views/Messagerie.vue'
import MLegal from '../views/MLegal.vue'
import NosArtistes from '../views/NosArtistes.vue'
import PageArtiste from '../views/PageArtiste.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Connexion from '../views/Connexion.vue'
import Favoris from '../views/Favoris.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                            name: 'Accueil',              component: Accueil      },
    { path: '/Apropos',                     name: 'Apropos',              component: Apropos      },
    { path: '/Dons',                        name: 'Dons',                 component: Dons         },
    { path: '/FAQ',                         name: 'FAQ',                  component: FAQ          },
    { path: '/Inscription',                 name: 'Inscription',          component: Inscription  },
    { path: '/Messagerie',                  name: 'Messagerie',           component: Messagerie   },
    { path: '/MLegal',                      name: 'MLegal',               component: MLegal       },
    { path: '/NosArtistes',                 name: 'NosArtistes',          component: NosArtistes  },
    { path: '/artistes/:id',                name: 'PageArtiste',          component: PageArtiste  },
    { path: '/:pathMatch(.*)*',             name: 'PageNotFound',         component: PageNotFound },
    { path: '/Connexion',                   name: 'Connexion',            component: Connexion    },
    { path: '/Profil',                      name: 'Profil',               component: Profil       },
    { path: '/Favoris',                      name: 'Favoris',               component: Favoris       },
  ]
})

export default router