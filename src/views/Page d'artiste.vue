<template>
    <div class="container">                
        <div class="title center">
        TP 02 - Ajax, propriétés calculées et filtrage
          <div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Filtrage</span>
                </div>
                <select  class="form-control" v-model='categorie'>
                    <option value='0' selected>Toutes les catégories</option>
                    <option v-for='cat in listeCategorie' :value='cat.id' :key='cat.id' >{{cat.lib}}</option>
                </select>
            </div>
        </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-6" style="border 1px solid lightGray;">
                <div v-for="video in searchByCategory" 
                    class="rounded float-left" style="padding:5px;text-align:center;"
                    :key="video.id">

                    <a href="#" @click="select(video)">
                        <img v-bind:src="video.image" 
                            class="img-fluid thumbnail" 
                            style="margin:0 auto;height:120px;min-width:90px;"
                        />
                    </a>
                </div>
            </div>

            <div class="col-6 alert alert-success"  v-if='view'>
                <div class="row">
                    <div>
                        <img v-bind:src="videoSelect.image" 
                            class="rounded img-fluid w-100 "                             
                        />
                        <div class="center">
                            <div><h5>{{videoSelect.titre}}</h5></div>
                            <div><h5>{{videoSelect.annee}} - {{videoSelect.duree}} mn</h5></div>                            
                            <h6>
                                <span v-for="cat in videoSelect.lesCategories" :key="cat.id">
                                {{cat.lib}}&nbsp;
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <hr/>
                <div class="row">
                    <label><b>Distribution : </b></label>
                    <br/>
                    <div>
                        <span v-for="acteur in videoSelect.lesActeurs" :key="acteur.id">
                            {{acteur.prenom}} {{acteur.nom}} ,
                        </span>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <label><b>Réalisation : </b></label>
                    <div>
                        <span v-for="real in videoSelect.lesRealisateurs" :key="real.id">
                            {{real.prenom}} {{real.nom}} ,
                        </span>
                    </div>
                </div>
                <hr/>
                <div class="row">                   
                    <label><b>Synopsis : </b></label>
                    <p>{{videoSelect.synopsis}}</p>                    
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Tp02View',
    data() {
        return {
            listeVideo:[],
            listeCategorie:[],
            categorie:0,
            videoSelect :{
                titre : null,
                image : null,
                annee : 0,
                duree : 0,
                synopsis : null,
                lesActeurs : null,
                lesRealisateurs : null
            },
            view:false        
        }
    },
    computed:{
        searchByCategory(){
            if(this.categorie != 0){
                let cat = this.categorie;
                return this.listeVideo.filter(function(video){
                    let trouve = false;
                    video.lesCategories.forEach(function(c){
                        if(c.id == cat){
                            trouve = true;
                        }
                    })
                    return trouve;
                })            
            }else{
                return this.listeVideo;
            }
        }
    },
    mounted(){ // Montage du composant
        // Requête Ajax / axios - Liste des vidéos
        axios.get('https://jsonvideo.jmfino.fr/listeVideo.php')
        // Réponse (promise) de la requête
        .then(response => {
            // Affichage des données reçues dans la console
            console.log('reponse liste Videos ', response.data);
            // Chargement de la liste des videos
            this.listeVideo = response.data;
        })
        // Erreur Ajax
        .catch(function(error){
            console.log('erreur Ajax', error);
        })

        // Requête Ajax / axios - Liste des catégories
        axios.get('https://jsonvideo.jmfino.fr/listeCategorie.php')
        // Réponse (promise) de la requête
        .then(response => {
            // Affichage des données reçues dans la console
            console.log('reponse liste Catégories ', response.data);
            // Chargement de la liste des catégories
            this.listeCategorie = response.data;
        })
        // Erreur Ajax
        .catch(function(error){
            console.log('erreur Ajax', error);
        })
    },
    methods:{
      select: function(video){
        this.videoSelect = video;
        this.view = true;
        console.log("video recuperée", this.videoSelect);
      },     
    }
}
</script>

<style scoped>
.center{ text-align: center; }
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4{ font-weight:bold; }
</style>


