<template>
    <div>
        <div class="title center">
            TD 02 - Cycle de vie / Ajax
        </div>
        <hr/>

        <h4>
            <span>Liste des villageois</span>
            <span class="float-right">
                <i v-if='viewList' class="fa fa-level-up" 
                    v-on:click='viewList = !viewList'></i>
                <i v-if='!viewList' class="fa fa-level-down" 
                    v-on:click='viewList = !viewList'></i>
            </span>
        </h4>
        <ul v-if='viewList'>
            <li v-for='villageois in liste' :key="villageois.id">
                {{villageois.nom}} - {{villageois.laSpecialite.nom}} 
                - {{villageois.leLieuHabitat.nom}}
            </li>
        </ul>
        <hr/>

        <h4>
            <span>Cartes des villageois</span>
            <span class="float-right">
                <i v-if='viewCard' class="fa fa-level-up" v-on:click='viewCard = !viewCard'></i>
                <i v-if='!viewCard' class="fa fa-level-down" v-on:click='viewCard = !viewCard'></i>
            </span>
        </h4>
        <div class="cardGlobale"  v-if='viewCard'>
            <div class="card cardGaulois" v-for='villageois in liste' :key='villageois.id' >
                <img class="card-img-top center image" 
                    :src="villageois.image" :alt="villageois.nom" />
                <div class="card-body">
                    <h5 class="card-title titre">{{villageois.nom}}</h5>
                    <p class="card-text texte">
                        {{villageois.laSpecialite.nom}}
                        <br/>
                        {{villageois.leLieuHabitat.nom}}
                    </p>
                </div>
            </div>
        </div>
        <hr/>

        <h4>
            <span>Filtrage par nom</span>
            <span class="float-right">
                <i v-if='viewFilter_1' 
                    class="fa fa-level-up" 
                    v-on:click='viewFilter_1 = !viewFilter_1'>
                </i>                
                <i v-if='!viewFilter_1' 
                    class="fa fa-level-down" 
                    v-on:click='viewFilter_1 = !viewFilter_1'>
                </i>
            </span>
        </h4>
        <hr/>

        <div v-if='viewFilter_1'>
            <div class="input-group">
                <input type="text" v-model="query" class="form-control" placeholder="Recherche">
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-search"></i></span>
                </div>
            </div>
            <div class="cardGlobale"  >
                <div class="card cardGaulois" v-for='villageois in searchByName' :key='villageois.id' >
                    <img class="card-img-top center image" 
                        :src="villageois.image" :alt="villageois.nom" />
                    <div class="card-body">
                        <h5 class="card-title titre">{{villageois.nom}}</h5>
                        <p class="card-text texte">{{villageois.laSpecialite.nom}}<br/>
                            {{villageois.leLieuHabitat.nom}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr/>

        <h4>
            <span>Filtrage par Spécialité</span>
            <span class="float-right">
                <i v-if='viewFilter_2' 
                    class="fa fa-level-up" 
                    v-on:click='viewFilter_2 = !viewFilter_2'>
                </i>                
                <i v-if='!viewFilter_2' 
                    class="fa fa-level-down" 
                    v-on:click='viewFilter_2 = !viewFilter_2'>
                </i>
            </span>
        </h4>
        <hr/>
        <div v-if='viewFilter_2'>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Spécialités</span>
                </div>
                <select v-model="spSelect">
                    <option v-for="sp in listeSp" :key='sp.id' :value='sp.id'>{{sp.nom}}</option>
                </select>
            </div>

            <div class="cardGlobale"  >
                <div class="card cardGaulois" v-for='villageois in searchBySpe' :key='villageois.id' >
                    <img class="card-img-top center image" 
                        :src="villageois.image" :alt="villageois.nom" />
                    <div class="card-body">
                        <h5 class="card-title titre">{{villageois.nom}}</h5>
                        <p class="card-text texte">
                            {{villageois.laSpecialite.nom}}
                            <br/>
                            {{villageois.leLieuHabitat.nom}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr/>



    </div>
</template>
          
<script>
    import axios from 'axios'
    export default {   
        data(){
            return{
                liste:[], // Liste des villageois
                viewList:false, // Cache / affiche la liste des villageois
                viewCard:false, // cache / affiche les cartes des villageois
                
                viewFilter_1:false, // Cache / affiche les cartes filtrées par nom
                query:'', // Le motif de filtrage

                viewFilter_2:false, // Cache / affiche les cartes filtrées par spécialités
                listeSp:[], // Liste des spécialités
                spSelect:0 // id de la spécialité sélectionnée
            }
        },
        computed:{
            searchByName() {
                // On récupère le critère de filtrage
                // Il vaut mieux utiliser une variable locale
                // Sinon problème que nous verrons plus tard dans le cours
                // (zones occultées)
                let query = this.query;
                // On renvoie la liste filtrée
                return this.liste.filter(function(villageois){
                    // On ne renvoie que les villageois dont le nom contient 
                    // La chaîne de caractères saisie
                    return villageois.nom.includes(query);
                })                
            },

            searchBySpe() {
                // On récupère la specialité sélectionnée
                // Il vaut mieux utiliser une variable locale
                // Sinon problème que nous verrons plus tard dans le cours
                // (zones occultées)
                let sp = this.spSelect;
                // On renvoie la liste filtrée
                return this.liste.filter(function(villageois){
                    // On ne renvoie que les villageois dont le id 
                    // de la spécialité est égale à celui de la spécialité 
                    // sélectionnée dans la liste déroulante
                    return villageois.laSpecialite.id == sp;
                })                
            },
            
        },
        mounted(){ // Montage du composant
            // Requête Ajax / axios - Liste des villageois
            axios.get('https://jsongaulois.jmfino.fr/listeVillageois.php')
            // Réponse (promise) de la requête
            .then(response => {
                // Affichage des données reçues dans la console
                console.log('reponse liste Villageois ', response.data);
                // Chargement de la liste des villageois
                this.liste = response.data;
            })
            // Erreur Ajax
            .catch(function(error){
            console.log('erreur Ajax', error);
            })

            // Requête Ajax / axios - Liste des spécialités
            axios.get('https://jsongaulois.jmfino.fr/listeSpecialites.php')
            // Réponse (promise) de la requête
            .then(response => {
                // Affichage des données reçues dans la console
                console.log('reponse liste Spécialités ', response.data);
                // Chargement de la liste des spécialités
                this.listeSp = response.data;
            })
            // Erreur Ajax
            .catch(function(error){
            console.log('erreur Ajax', error);
            })
        },
    }
</script>
    
<style>
.center{ text-align: center; }
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4{ font-weight:bold;}
.cardGlobale{
    display:flex;
    flex-flow: row wrap; 
    text-align:center;
    justify-content: space-around;
}
.cardGaulois{
    max-width:170px;
    margin-top:5px;
}
.image{
  min-height:200px;
}
</style>



