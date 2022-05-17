<template>
    <div>
        <div class="title center">
            TP 01 - Saisie d'un film
        </div>
        <hr/>
        <div class='row'>
            <h4>Saisie :</h4>
            <br/>
            <form @submit.prevent='saisie' class='container'>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Titre</span>
                    </div>
                    <input type="text" v-model="titre" class="form-control" placeholder="Titre du film">
                </div>
                <br/>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Année</span>
                    </div>
                    <input type="text" 
                        v-model="annee" 
                        class="form-control" 
                        placeholder="Année du film"
                    >
                </div>
                <br/>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Pays</span>
                    </div>
                    <select v-model="pays">
                        <option value='' disabled selected>Sélectionner un pays</option>
                        <option v-for="pays in listePays" :key='pays'>{{pays}}</option>
                    </select>
                </div>
                <br/>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Genre</span>
                    </div>
                    <select v-model="genre">
                        <option value='' disabled selected>Sélectionner un genre</option>
                        <option v-for="genre in listeGenre" :key='genre'>{{genre}}</option>
                    </select>
                </div>
                <br/>

                <input type='submit' value='Valider' />
            </form>
        </div>
        <hr/>
      
        <div class='row'>
            <ol>
                <h4>Liste des films saisis :</h4>
                    <li v-for="movie in liste" :key='movie.id'>
                    id: {{movie.id}} - Titre : {{movie.titre}} - Année : {{movie.annee}} - Pays : {{movie.pays}} - genre : {{movie.genre}}
                    </li>
            </ol>
        </div>
        <hr/>
    </div>    
</template>

<script>
  export default {
    data(){
      return {
        // Liste à remplir de films
        liste: [],
        // Définition d'un film
        id : 0,
        titre : "",
        annee : 2022,
        pays : "",
        genre : "",
        // Liste des pays
        listePays :     ["Allemagne", "Australie","Canada","France","US"],
        // liste des genres
        listeGenre :    ["Dramatique", "Comédie","Enfants","Fantastique","Guerre", "Science-Fiction"]
      } 
    },
    methods:{
      saisie: function(){
        // Initialisation du film à mettre dans le tableau
        let film = {
          id:0,
          titre : "",
          annee : 0,
          pays : "",
          genre : ""
        }
        // Calcul du id
        this.id++;
        // On renseigne le nouveau film
        film.id     = this.id;
        film.titre  = this.titre;
        film.annee  = this.annee;
        film.pays   = this.pays;
        film.genre  = this.genre;
        // On le charge dans le tableau
        this.liste.push(film);
      }
    }
  }
</script>

<style scoped>
.center{
 text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4{
  font-weight:bold;
}
</style>




