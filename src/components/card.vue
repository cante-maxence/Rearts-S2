<template>
    <div class="m-5 p-4 h-[465px] w-80 border-2 border-Gris_Clair">
        <router-link :to="link">
            <div>
                <figure class="flex items-center">
                    <img class="w-[40px] h-auto object-cover " :src="imagep" alt="" />
                    <figcaption>
                        <h3 class="m-4 font-comfortaa font-bold text-lg">{{ name }}</h3>
                    </figcaption>
                </figure>
            </div>
            
            <figure>
                <img class="flex m-auto w-[200px] h-auto my-5" :src="image" alt="" />
                <figcaption>
                    <p class="my-4 text-base font-comfortaa font-medium text-center text-black-primary">
                        {{ text }}
                    </p>
                </figcaption>
            </figure>
        </router-link>

        <div class="flex items-center">
            <Star class="h-auto w-5 mr-1 inline-block fill-star-color" />

            <p class="text-star-color font-comfortaa font-medium text-base inline-block">
                {{ note }}
            </p>
        </div>

        <p class="font-comfortaa font-bold text-base text-black-primary">A partir de {{ price }}</p>
                
        <div  class="w-max ml-auto">
            <heart class="h-8 w-8 mr-1 inline-block object-right-bottom" :like="like" />      
        </div>
    </div>
</template>

<script >
import { RouterLink } from "vue-router";
import heart from './icones/heart.vue';
import Star from './icones/star.vue';

export default {
    props: {
        imagep: String,
        name: String,
        image: String,
        text: String,
        note: Boolean,
        price: String,
        like: Boolean,
        note: String,
        link: String,
    },

    components: { 
        RouterLink,
        heart,
        Star,
    },
}

</script>