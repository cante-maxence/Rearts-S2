<template>
    <main>
        <h2>Faites un *don !</h2>
        <p>*Les dons sont envoyés à des associations partenaires.</p>

        <dh-component>

            <div role="radiogroup" class="mx-auto py-5">

                <div class="flex items-center py-3">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-Rouge rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="label1" class="ml-2 leading-4 font-normal text-black-prima dark:text-gray-100">5€</p>
                </div>

                <div class="flex items-center py-3">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-Rouge rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="label1" class=" ml-2 leading-4 font-normal text-black-primary dark:text-gray-100">10€</p>
                </div>

                <div class="flex items-center py-3">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-Rouge rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="label1" class=" ml-2 leading-4 font-normal text-black-primary dark:text-gray-100">20€</p>
                </div>

                <div class="flex items-center py-3">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-Rouge rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="label1" class=" ml-2 leading-4 font-normal text-black-primary dark:text-gray-100">50€</p>
                </div>

                <div class="flex items-center py-3">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-Rouge rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="label1" class=" ml-2 leading-4 font-normal text-black-primary dark:text-gray-100">100€</p>
                </div>

                <div class="flex items-center py-3">
                    <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                        <div class="check-icon hidden border-4 border-Rouge rounded-full w-full h-full z-1"></div>
                    </div>
                    <p id="label1" class=" ml-2 leading-4 font-normal text-black-primary dark:text-gray-100">Autre montant</p>
                    <input type="text" class="font-comfortaa text-black-primary p-1  rounded focus:outline-none focus:border-blue-700 mx-2 border-0 bg-Gris_Clair"/>
                </div>
            </div>
        </dh-component>

        <div class="flex flex-col text-center items-center">
            <Bouton>
                <slot>Faire un don</slot>
            </Bouton>
        </div>

        <hr class="h-0.5 mt-8 mb-4 bg-Gris_Clair">

        <h2>Les associations partenaraires</h2>


        <div class="my-8">
            <h3>
                L'association Enfants du Désert
            </h3>
    
            <div class="flex  items-center">
                <img class="w-32 h-32 ml-5" src="/images-hp/Association2.jpg" alt="">
        
                <p class="ml-8 mr-3">
                    Une association loi 1901 à but non lucratif qui vient en aide aux enfants du sud marocain et d'Argentine.
                </p>
            </div>
        </div>

        <div class="my-8">
            <h3>
                Les Blouses Roses 
            </h3>
    
            <div class="flex  items-center">
                <img class="w-32 h-32 ml-5" src="/images-hp/Association1.jpg" alt="">
        
                <p class="ml-8 mr-3">
                    Interviennent principalement auprès des enfants hospitalisés et des personnes âgées en Ehpad.
                </p>
            </div>
        </div>

        <div class="my-8">
            <h3>
                30 millions d’amis
            </h3>
    
            <div class="flex  items-center">
                <img class="w-32 h-32 ml-5" src="/images-hp/Association5.jpg" alt="">
        
                <p class="ml-8 mr-3">
                    Elle vise à lutter contre les abandons, contre les trafics d’animaux, et tente d’améliorer les lois pour protéger les animaux.
                </p>
            </div>
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

    </main>
</template>



<script>
import Bouton from "/src/components/icones/bouton.vue"

export default {
    components: { 
        Bouton,

    }
}

</script>

<style>
    .checkbox:checked {
        border: none;
    }
    .checkbox:checked + .check-icon {
        display: flex;
    }
</style>