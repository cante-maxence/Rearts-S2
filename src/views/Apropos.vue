<template>

        <h2>A propos</h2>

        <p>
            Nous sommes un groupe de 3 étudiants en BUT MMI à Montbéliard. <br>

            Nous sommes donc arrivé ici et avons créés ce site. <br>

            Notre but est donc pour vous de faire un site simple, hergonomique, et sécurisé. <br>
        </p>

        <h2>
            N'hésitez pas à nous rejoindre sur les réseaux sociaux !
        </h2>

        <h2>
            Contactez-nous en cas de problèmes
        </h2>

    <div class="h-96 -mt-14"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-Gris_Clair w-full shadow rounded p-8 sm:p-12 -mt-72">
            <form action="" method="post">
                <div class="md:flex items-center">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Email</label>
                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-Rouge rounded" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Objet</label>
                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-Rouge rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-gray-300">Message</label>
                        <textarea type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-Rouge border-0 rounded"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <Bouton class="mt-9  hover:bg-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </Bouton>
                </div>
            </form>
        </div>
    </div>


</template>

<script>
import Bouton from "/src/components/icones/bouton.vue";

export default {
    components: {
        Bouton,

    }
}

</script>
