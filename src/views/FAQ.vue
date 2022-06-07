<template>
        <h2>FAQ</h2>

        <div class="">
            <p>
                Questions les plus récurentes
            </p>

            <h3>
                Comment trouver des artistes ?
            </h3>

            <p>
                Parcourir le fil d’actu, qui affiche les artistes. 
                Tu y verras différents types d’artistes. N’hésite pas à le personnaliser pour faire apparaître des artistes étant spécialisés dans un domaine.
            </p>
            <br>

            <p>
                Utiliser la barre de recherche si tu sais précisément qui tu cherches.
            </p>

            <h3>
                Acheter, étapes par étapes
            </h3>

            <h3>              
                1. Trouve un artiste
            </h3>

            <p>
                Parcours le “cathalogue” pour trouver un artiste qui t’intéresse.
            </p>

            <h3>              
                2. Contacte l’artiste
            </h3>

            <p>
                Appuie sur “Contacter” où directement sur “Acheter”.
            </p>

            <p>
                Veille à utiliser notre messagerie sécurisée : ne déplace jamais la conversation hors de Réarts.
            </p>

            <p>
                Consulte les évaluations précédentes. Regarde ce que d’autres membres ont dit à propos de leurs achats.
            </p>

            <h3>              
                3. Paie ton service
            </h3>

            <p>
                Pour régler l’article choisi, appuie sur le bouton Acheter de l’annonce du service.
            </p>

            <p>
                Lors du paiement : <br>
                Saisis ton adresse et ton numéro de téléphone (si cela t’est demandé). Vérifie bien que les informations saisies soient correctes.
                Sélectionne la méthode de paiement que tu préfères. <br>
                Choisis un lieu de livraison. <br>
                Appuie sur Payer pour confirmer ta commande.
            </p>

            <h3>              
                4. Réceptionne ton achat
            </h3>

            <p>
                En fonction du service proposé, tu receveras ton service avant ou à la date précise. Exeception si le service ce fait envoyer physiquement.
            </p>
        </div>



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


</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";


export default {
  components: { ChevronLeftIcon, ChevronRightIcon },

}

</script>
