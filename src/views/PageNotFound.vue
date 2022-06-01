<template>

    <div class="items-center text-center p-5 py-52">
        <p class="m-5">
            Page non trouvée. La page que vous avez demandée n'a pas été trouvée
        </p>
        <p class="m-5">
            Page not found. The page you requested was not found
        </p>
        <bouton type="bouton" @click="redirectMe()" class="btn btnsecondary" > 
            Retour à l'accueil 
        </bouton>
    </div>

</template>




<script>
import bouton from '/src/components/icones/bouton.vue'

export default {
        name: "PageNotFound",

        methods: {
            redirectMe(){
                this.$router.push({ name: 'Accueil'})
            }
        },

        components: { 
            bouton,
        }

}
</script>