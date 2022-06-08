<template>
    <div class="pb-6">
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

        <div class="tendency py-3 w-full overflow-hidden">
            <div><img src="/images-caroussel-hp/image1.jpg"></div>
            <div><img src="/images-caroussel-hp/image2.jpg"></div>
            <div><img src="/images-caroussel-hp/image3.jpg"></div>
            <div><img src="/images-caroussel-hp/image4.jpg"></div>
            <div><img src="/images-caroussel-hp/image5.jpg"></div>
            <div><img src="/images-caroussel-hp/image6.jpg"></div>
            <div><img src="/images-caroussel-hp/image7.jpg"></div>
            <div><img src="/images-caroussel-hp/image8.jpg"></div>
            <div><img src="/images-caroussel-hp/Rectangle9.jpg"></div>
        </div>

        <div class="flex justify-end">
            <RouterLink to="/NosArtistes">
                <Bouton>
                    <slot>Découvrir</slot>
                </Bouton>     
            </RouterLink>
        </div>

        <h3 class="mt-10">
            N’oubliez pas les associations !
        </h3>
        <p>
            Pour chaque dessins n’oubliez de sélectionnez une association partenaires.
        </p>

        <!-- Contents -->
        <div class="association py-3 w-full overflow-hidden">
            <div><img class="h-40 w-40" src="/images-hp/Association1.jpg"></div>
            <div><img class="h-40 w-40" src="/images-hp/Association2.jpg"></div>
            <div><img class="h-40 w-40" src="/images-hp/Association3.jpg"></div>
            <div><img class="h-40 w-40" src="/images-hp/Association4.jpg"></div>
            <div><img class="h-40 w-40" src="/images-hp/Association5.jpg"></div>
        </div>

        <div class="flex justify-end">
            <RouterLink to="/Dons">    
                <Bouton>
                    <slot>Voir plus</slot>
                </Bouton>
            </RouterLink>
        </div>

        <h3 class="mt-16">
            Des vidéos youtube !
        </h3>
        <p>
            Venez découvrir les différents artistes de Réarts sur notre chaînes Youtube ! 
        </p>

        <div class="flex justify-center mt-5 mb-3">
            <iframe width="full" height="auto" src="https://www.youtube.com/embed/uAPNFdrLINM" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import card from "/src/components/card.vue";
import Bouton from "/src/components/icones/bouton.vue";
import Menu from "/src/components/icones/menu.vue"
import Profil from "/src/components/icones/profil.vue";
import { tns } from 'tiny-slider/src/tiny-slider';

export default {
    components: { 
        card,
        Bouton,
        Menu,
        Profil
    },
    mounted: () => {
        // Slider des tendances
        tns({
            container: '.tendency',
            loop: true,
            items: 1,
            autoplay: true,
            mode: 'gallery',
            autoplayTimeout: 5000,
            autoplayButtonOutput: false,
            nav: false,
            controls: false,
            preventScrollOnTouch: 'auto'
        });

        // Slider des associations
        tns({
            container: '.association',
            loop: true,
            items: 2.5,
            autoplay: false,
            autoplayButtonOutput: false,
            nav: false,
            controls: false,
            preventScrollOnTouch: 'auto'
        });
    }
};
</script>
