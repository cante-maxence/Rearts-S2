<template>
  <div>
    <div class="title center">TD 03 - Firebase</div>
    <hr />

    <h5>Firebase - Se connecter</h5>
    <form @submit.prevent="onCnx()">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark">Email :</button>
        </div>
        <input class="form-control" type="text" v-model="user.email" required />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark">Mot de passe :</button>
        </div>
        <input
          class="form-control"
          type="password"
          v-model="user.password"
          required
        />
      </div>
      <div class="alert alert-warning text-center mb-3" v-if="message != null">
        {{ message }}
      </div>
      <div>
        <button class="float-left" @click="onDcnx()">Deconnexion</button>
        <button variant="dark" class="float-right" type="submit">
          Connexion
        </button>
      </div>
    </form>
  </div>

  <div>
    <h5>Liste des pays - Liste synchronisée</h5>
  </div>
  <form class="mb-3">
    <h6>Nouveau pays</h6>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Nom</span>
      </div>
      <input type="text" v-model="nom" class="form-control" required />
      <button
        class="btn btn-light"
        type="button"
        @click="createPays()"
        title="Création"
      >
        <i class="fa fa-save fa-lg"></i>
      </button>
    </div>
  </form>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nom</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pays in listePaysSynchro" :key="pays.id">
        <td>{{ pays.id }}</td>
        <td>
          <input type="text" v-model="pays.nom" />
        </td>
        <td>
          <button class="btn light" @click.prevent="updatePays(pays)">
            <i class="fa fa-edit fa-lg"></i>
          </button>
          <button class="btn light" @click.prevent="deletePays(pays)">
            <i class="fa fa-trash fa-lg"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      listePays: [],
    };
  },
  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }
    this.getPays();
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("user connecté", response.user);
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user déconnecté", this.user);
          this.message = "user non connecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion", error);
        });
    },

    async getPays() {
      const firestore = getFirestore();

      const dbPays = collection(firestore, "pays");

      const query = await getDocs(dbPays);
      query.forEach((doc) => {
        let pays = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listePays.push(pays);
      });
    },
  },
};
</script>

<style>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
</style>