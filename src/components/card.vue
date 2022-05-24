<template>
    <figure class="flex.flex-col m-11 bg-gray-50">
        <figcaption class="relative p-2 border-2 border-t-2 border-Gris_Clair flex flex-col">

            <section>
                <div class="flex items-center">
                    <img class="w-150px h-auto object-cover " :src="imagep" alt=""
                    />
                    <h3 class="m-4 font-comfortaa font-bold text-lg">
                        {{ name }}</h3>
                </div>
                <div>
                    <img class="flex m-auto w-150px h-auto my-5" :src="image" alt=""
                    />
                    <div class="my-4 text-base font-comfortaa font-medium text-center text-black-primary" >
                        <p>{{ text }}</p>   </div>     
                </div>
                
                <div  class="flex items-center my-3">
                    <div  class="w-max "><Star class="h-5 w-5 mr-1 inline-block fill-star-color" />
                    </div>

                    <p class="text-star-color font-comfortaa font-medium text-base inline-block">
                        {{ note }} </p>
                </div>

                <p class="font-comfortaa font-bold text-base text-black-primary">A partir de {{ price }}</p>
                
                <div  class="w-max ml-auto"><heart class="h-8 w-8 mr-1 inline-block object-right-bottom" />      
                    {{ like }}</div>

            </section>
        </figcaption>
    </figure>
</template>

<script >
import heart from './icones/heart.vue';
import Star from './icones/star.vue';

export default {
    props: {
        imagep:String,
        name:String,
        image:String,
        text:String,
        note:Boolean,
        price:String,
        favori:Boolean,
        note:String,

    },

  components: { heart, Star },

}

</script>