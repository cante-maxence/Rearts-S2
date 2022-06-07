<template>


    <div class="items-center text-center">
        <h2>Découvrez réarts !</h2>
        <p>
            Un site sur lequel l’imagination d’un enfant ce rencontre avec les capacitées d’un artiste !
        </p>
        <p class="font-bold text-Rouge">
            Un petit dessin pour lui, un grand souvenir pour vous !
        </p>

        <div class="py-4">
            <RouterLink to="/Inscription">
                <Bouton>
                    <slot>S'inscrire</slot>
                </Bouton>
            </RouterLink>
        </div>
    </div>

    <h3>
        Les tendances !
    </h3>

            <!-- caroussel -->
    <div class="relative rounded-xl overflow-auto mb-4">
    <!-- Contents -->
    <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-3 pt-3">
        <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image1.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image2.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image3.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image4.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image5.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image6.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image7.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/image8.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white" src="/images-caroussel-hp/Rectangle9.jpg">
        </div>
        <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
    </div>
    </div>
            <!-- caroussel -->

    <div class="float-right">
        <RouterLink to="/NosArtistes">
            <Bouton>
                <slot>Découvrir</slot>
            </Bouton>     
        </RouterLink>
    </div>

    <h3 class="mt-24">
        N’oubliez pas les associations !
    </h3>
    <p>
        Pour chaque dessins n’oubliez de sélectionnez une association partenaires.
    </p>


            <!-- caroussel -->
    <div class="relative rounded-xl overflow-auto mb-4">
    <!-- Contents -->
    <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-3 pt-3">
        <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-28 h-28 rounded-lg shadow-xl bg-white" src="/images-hp/Association1.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-28 h-28 rounded-lg shadow-xl bg-white" src="/images-hp/Association2.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-28 h-28 rounded-lg shadow-xl bg-white" src="/images-hp/Association3.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-28 h-28 rounded-lg shadow-xl bg-white" src="/images-hp/Association4.jpg">
        </div>
        <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img class="shrink-0 w-28 h-28 rounded-lg shadow-xl bg-white" src="/images-hp/Association5.jpg">
        </div>


        </div>
        <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
    </div>


    <RouterLink to="/Dons">    
        <Bouton>
            <slot>Voir plus</slot>
        </Bouton>
    </RouterLink>

    <h3>
        Des vidéos youtube !
    </h3>
    <p>
        Venez découvrir les différents artistes de Réarts sur notre chaînes Youtube ! 
    </p>
    <iframe width="auto" height="200" src="https://www.youtube.com/embed/uAPNFdrLINM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




</template>

<script>
import card from "/src/components/card.vue";
import Bouton from "/src/components/icones/bouton.vue";
import Menu from "/src/components/icones/menu.vue"
import Profil from "/src/components/icones/profil.vue";
import ArtistsData from '../data/artistes.json';

export default {
    components: { 
        card,
        Bouton,
        Menu,
        Profil
    },
    data: function() {
        const artists = ArtistsData.map((a) => {
            a['link'] = '/artistes/' + a.id;
            return a;
        });

        return {
            artists
        };
    }
};
</script>
