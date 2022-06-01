<template>

    <div class="items-center text-center p-5 py-52">
        <p class="m-5">
            Page non trouvée. La page que vous avez demandée n'a pas été trouvée
        </p>
        <p class="m-5">
            Page not found. The page you requested was not found
        </p>
        <Bouton type="bouton" @click="redirectMe()" class="btn btnsecondary" > 
            Retour à l'accueil 
        </Bouton>
    </div>

</template>




<script>
import Bouton from '/src/components/icones/bouton.vue'

export default {
        name: "PageNotFound",

        methods: {
            redirectMe(){
                this.$router.push({ name: 'Accueil'})
            }
        },

        components: { 
            Bouton,
        }

}
</script>