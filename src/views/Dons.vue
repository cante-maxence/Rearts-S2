<template>
    <main>
        <h2>Faites un *don !</h2>
        <p>*Les dons sont envoyés à des associations partenaires.</p>

        <dh-component>

            <div role="radiogroup" class="mx-auto py-12">

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
                    <input type="text" class="font-comfortaa text-black-primary p-1  focus:outline-none focus:border-blue-700 mx-2 border-0 bg-Gris_Clair"/>
                </div>
            </div>
        </dh-component>

        <Bouton>
            <slot>Faire un don</slot>
        </Bouton>


    </main>
</template>

<script>


</script>

<style>
    .checkbox:checked {
        border: none;
    }
    .checkbox:checked + .check-icon {
        display: flex;
    }
</style>