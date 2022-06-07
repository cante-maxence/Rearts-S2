<template>
    <main>
        <h2>A propos</h2>

        <p>
            L'apparition de "Réarts" à débuté en janvier 2022, par 3 étudiants en BUT MMI à Montbéliard. <br> <br>
            Maxence Cante, Léopold Ohnimus, et Rose Menegain ont créé ce site web pour offrir de nouveaux souvenirs aux enfants. <br> <br>
            Dans cet univers, les dessins d'enfants prendront donc vie avec l'un des styles particuliers de nos artistes présents sur le site.
            Les trois fondateurs de Réarts ont donc mis leurs compétences à profit pour vous satisfaire.
        </p>

        <h3 class="pt-10">
            N'hésitez pas à nous rejoindre sur les réseaux sociaux !
        </h3>

        <h3 class="pt-10 -mb-14">
            Contactez-nous en cas de problèmes
        </h3>

        <div class="h-96 -mt-14"></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-Gris_Clair w-full shadow rounded p-6 sm:p-12 -mt-72">
                <form action="" method="post">
                    <div class="md:flex items-center">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Email</label>
                            <input type="text" class="font-comfortaa text-black-primary p-3 focus:outline-none focus:border-Rouge mt-4 border-2 border-Gris_Francanglais rounded bg-Gris_Francanglais" />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-6">
                        <div class="w-full flex flex-col">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Objet</label>
                            <input type="text" class="font-comfortaa text-black-primary p-3 focus:outline-none focus:border-Rouge mt-4 border-2 border-Gris_Francanglais rounded bg-Gris_Francanglais"/>
                        </div>
                        
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-6">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Message</label>
                            <textarea type="text" class="h-40 text-base font-comfortaa text-black-primary p-3 focus:outline-none focus:border-Rouge border-2 border-Gris_Francanglais rounded bg-Gris_Francanglais"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <Bouton class="mt-6  focus:ring-2 focus:ring-offset-1 focus:ring-red-900 focus:outline-none">
                            Send message
                        </Bouton>
                    </div>
                </form>
            </div>
        </div>
    </main>


</template>

<script>
import Bouton from "/src/components/icones/bouton.vue";

export default {
    components: {
        Bouton,

    }
}

</script>
