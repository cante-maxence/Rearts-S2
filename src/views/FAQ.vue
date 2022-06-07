<template>
        <h2>FAQ</h2>

        <div class="font-comfortaa">
            <p>
                Questions les plus récurentes
            </p>

            <h3>
                Comment trouver des artistes ?
            </h3>

            <ul class="font-normal text-base">
                <li>
                    Parcourir le fil d’actu, qui affiche les artistes. 
                    Tu y verras différents types d’artistes. N’hésite pas à le personnaliser pour faire apparaître des artistes étant spécialisés dans un domaine.
                </li>
                <li>
                    Utiliser la barre de recherche si tu sais précisément qui tu cherches.
                </li>
            </ul>

            <h3>
                Comment trouver des artistes ?
            </h3>

            <p>
                En vigueur au 12/04/2022 <br>

                Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
                des modalités de mise à disposition du site et des services par Réarts et de définir les conditions
                d’accès et d’utilisation des services par « l'Utilisateur ». <br>
                Les présentes CGU sont accessibles sur le site à la rubrique «CGU». <br>

                Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des
                présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque
                utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : «
                Je reconnais avoir lu et compris les CGU et je les accepte ». <br>
                En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer
                à l'accès des services proposés par le site.
                https://rearts.fr se réserve le droit de modifier unilatéralement et à tout moment le contenu des
                présentes CGU. <br>
            </p>
        </div>

<div
    class="flex flex-row  border h-10 w-60 rounded-lg border-gray-400 relative"
  >
    <button
      class="font-semibold border-r bg-Rouge hover:bg-ClearRed text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
    >
      <ChevronLeftIcon class="m-auto w-5 stroke-white" />
    </button>
    <input
      type="hidden"
      class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
      readonly
      name="custom-input-number"
    />
    <div
      class="bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
    >
      <p>1</p>
    </div>
    <div
      class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
    >
      <p>2</p>
    </div>
    <div
      class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
    >
      <p>3</p>
    </div>
    <div
      class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
    >
      <p>4</p>
    </div>

    <button
      class="font-semibold border-l  bg-Rouge hover:bg-ClearRed text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
    >
      <ChevronRightIcon class="m-auto w-5 stroke-white" />
    </button>

  </div>


</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";


export default {
  components: { ChevronLeftIcon, ChevronRightIcon },

}

</script>
