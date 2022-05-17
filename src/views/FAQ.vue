<template>
  <div>
    <div class="title center">
      Td01 - Les directives
    </div>
    <hr/>

    <h4>syntaxe simple data-binding (lecture seule)</h4>
    <div>Résultat : {{msg1}}</div>
    <hr/>

    <h4>v-bind</h4>
    <div v-bind:title='msg2'>
      Résultat : Passer votre souris sur moi pendant quelques secondes 
      pour voir le titre
    </div>
    <hr/>

    <h4>v-html</h4>
    <span>Pas d'interpretation de HTML : {{msg3}}</span>
    <br/>
    <p>utilise v-html : <span v-html="msg3"></span></p>
    <hr/>

    <h4>v-on et expression Javascript</h4>
    <button v-on:click='ok = true'>Oui</button>
    <button v-on:click='ok = false'>Non</button>
    <p>{{ ok ? 'Oui' : 'Non'}}</p>
    <hr/>

    <h4>v-model</h4>
    <input type='text' v-model='saisie' />
    <br/>
    <p>
      Message saisi : {{ saisie }}
    </p>
    <hr/>
    
    <h4>v-show</h4>
      <button v-on:click='seen =!seen'>valeur : {{seen}}</button>
    <div v-show='seen'>
      Résultat : Vous me voyez lorsque seen==true
    </div>
    <hr/>
  
    <h4>v-if</h4>
      <button v-on:click='seen =!seen'>valeur : {{seen}}</button>
    <div v-if='seen'>
      Résultat : Vous me voyez lorsque seen==true
    </div>
    <hr/>
    
    <h4>v-if / v-else</h4>
    <input type='text' v-model='saisie' />
    <br/>
    <p v-if='saisie'>
      Message saisi : {{saisie}}
    </p>
    <p v-else>
      <i>Pas de message</i>
    </p>
    <hr/>

    <h4>v-for</h4>
    <ol>Liste
      <li v-for='el in liste' v-bind:key='el'>{{el.text}}</li>
    </ol>
    <hr/>

    <h4>v-for avec index</h4>
    <ul>Liste
      <li v-for='(el, index) in liste' v-bind:key='index'>
        {{index}} - {{el.text}}</li>
    </ul>
    <hr/>

    <h4>methode / fonction</h4>
    <div>affiche()
      <p>{{msg4}}</p>
      <button v-on:click='affiche'>Message affiché</button>
    </div>
    <hr/>

    <h4>methode / fonction</h4>
    <div>reverseMessage()
      <p>{{msg4}}</p>
      <button v-on:click='reverseMessage'>Message retourné</button>
    </div>
    <hr/>
    <br/>

  </div>
</template>

<script>
export default {
  data(){
    return {
      msg1: 'hello Vuejs !', 
      msg2: 'Vous avez affiché le message le ' + new Date().toLocaleString(),
      msg3: '<span style="color:red">Ceci est en rouge</span>',
      ok:false,
      saisie:'',
      seen: true,
      liste: [
        {text: 'Apprendre Javascript'},
        {text: 'Apprendre Vue'},
        {text: 'créer quelque chose'}
      ],
      msg4: 'Hello MMI'
    }
  },
    methods:{
    affiche:function(){
      alert('Affichage de '+this.msg4)
    },

    reverseMessage:function(){
      this.msg4 = this.msg4
      .split('') // Recupère chaque caractère dans un tableau
      .reverse() // Inverse le tableau
      .join('') // recréé une chaine de caractères avec chaque élément du tableau 
    }

  }
}
</script>

<style>
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



