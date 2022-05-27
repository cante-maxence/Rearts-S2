<template>
    <div class="flex items-center">
        <img class="w-150px h-auto object-cover " :src="artist.imagep" alt="" />
        <h3 class="m-4 font-comfortaa font-bold text-lg">
            {{ artist.name }}
        </h3>
    </div>

    <p class="">
        {{ artist.text }}
    </p>

    <div class="px-6" v-if="artist.prices">
        <div 
            v-for="(p, index) in artist.prices" :key="index"
            @click="open = index"
            class="my-3">
            <div 
                class="flex justify-between rounded-lg py-3 px-6 cursor-pointer"
                :class="{ 'bg-Rouge text-white' : index === open, 'bg-Gris_Clair' : index !== open}"
            >
                <span>{{ p.name }}</span>
                <span>{{ p.price }}€</span>
            </div>
            <div class="bg-Gris_Clair py-3 px-6 -mt-1" :class="{ 'hidden' : index !== open}">
                <p>{{ p.intro }}</p>
                <ul class="list-disc pl-6">
                    <li v-for="(element, i) in p.list" :key="i">
                        {{ element }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ArtistsData from '../data/artistes.json';

export default {
    data: function() {
        const id = this.$route.params.id;
        const artist = ArtistsData.find((a) => a.id == id);

        return {
            artist,
            open: 0
        };
    }
};
</script>