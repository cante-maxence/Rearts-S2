<template>
  <main>

    <h2>Nos artistes !</h2>

    <section class="flex-col object-center items-center grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
            <article v-for="artist in artists" :key="artist.id">
                <card 
                    :imagep="artist.imagep"
                    :name="artist.name"
                    :image="artist.image"
                    :text="artist.text"
                    :price="artist.price"
                    :like="artist.like"
                    :note="artist.note"
                    :link="artist.link"
                />
            </article>
    </section>

    <div class="flex flex-col items-center text-center my-10">
        <div
            class="flex flex-row  border h-10 w-60 rounded-lg border-gray-400 relative"
        >
            <button
            class="font-semibold border-r bg-Rouge hover:bg-ClearRed text-white border-gray-400 h-full w-32 flex rounded-l focus:outline-none cursor-pointer"
            >
            <ChevronLeftIcon class="m-auto w-5 stroke-white" />
            </button>
            <div
            class=" bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
            >
            <p>1</p>
            </div>
            <div
            class="hover:bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
            >
            <p>2</p>
            </div>
            <div
            class="hover:bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
            >
            <p>3</p>
            </div>
            <div
            class="hover:bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
            >
            <p>4</p>
            </div>
        
            <button
            class="font-semibold border-l  bg-Rouge hover:bg-ClearRed text-white border-gray-400 h-full w-32 flex rounded-r focus:outline-none cursor-pointer"
            >
            <ChevronRightIcon class="m-auto w-5 stroke-white" />
            </button>
        </div>
    </div>

  </main>

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