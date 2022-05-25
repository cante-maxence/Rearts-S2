<template>
    <img class="w-24 h-auto" src="/images-icones/Logoblanc.svg" alt="">
    <div  class="w-max "><Profil class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/> </div>
    
    <!-- menu -->
    <nav>
        <div  class="w-max "><Menu class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/>
          <div class="text-blanc-primary">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/Apropos">A propos</RouterLink>
            <RouterLink to="/compteArtiste">Votre Compte</RouterLink>
            <RouterLink to="/Dons">Dons</RouterLink>
            <RouterLink to="/FAQ">FAQ</RouterLink>
            <RouterLink to="/Inscription">Inscription</RouterLink>
            <RouterLink to="/Messagerie">Messagerie</RouterLink>
            <RouterLink to="/MLegal">Mentions légales</RouterLink>
            <RouterLink to="/NosArtistes">Nos Artistes</RouterLink>
            <RouterLink to="/PageArtiste">Page de l'artiste</RouterLink>
            </div>
       </div>
    </nav>
</template>