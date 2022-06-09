<template>
        <h2>FAQ</h2>

        <div class="">
            <input v-model='filter' type="search" class="border-black border-2">
            <p>
                Questions les plus récurentes
            </p>

            <div v-for='faq in filterByName' :key='faq.id'>
                <div>
                    <h3>{{ faq.question }}</h3>
                </div>

                <div>
                    <p>{{ faq.reponse }}</p>
                </div>
            </div>
        </div>



        <div class="flex flex-col items-center text-center my-10">
            <div
                class="flex flex-row  border h-10 w-60 rounded-lg border-gray-400 relative"
            >
                <button
                class="font-semibold border-r bg-Rouge hover:bg-ClearRed text-white border-gray-400 h-full w-32 flex rounded-l focus:outline-none cursor-pointer"
                >
                <ChevronLeftIcon class="m-auto w-5 stroke-white" />
                </button>
                <div
                class=" bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
                >
                <p>1</p>
                </div>
                <div
                class="hover:bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
                >
                <p>2</p>
                </div>
                <div
                class="hover:bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
                >
                <p>3</p>
                </div>
                <div
                class="hover:bg-Gris_Clair w-24 text-xs md:text-base flex items-center justify-center cursor-default p-4"
                >
                <p>4</p>
                </div>
            
                <button
                class="font-semibold border-l  bg-Rouge hover:bg-ClearRed text-white border-gray-400 h-full w-32 flex rounded-r focus:outline-none cursor-pointer"
                >
                <ChevronRightIcon class="m-auto w-5 stroke-white" />
                </button>
            </div>
        </div>


</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";



import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    export default {
      components:{
        ChevronLeftIcon, ChevronRightIcon
        },
      

        data(){
            return{
                nom:null,
                listeFaqSynchro:[],
                filter:''
            }
        },

        computed:{
          orderByName:function(){
            return this.listeFaqSynchro.sort(function(a, b){
              if(a.nom < b.nom) return -1;
              if(a.nom > b.nom) return 1;
              return 0;
            })
          },

          filterByName:function(){
            if(this.filter.length > 0){
              let filter = this.filter.toLowerCase();
              return this.orderByName.filter(function(faq){
                return faq.question.toLowerCase().includes(filter);
              })
            }else{
              return this.orderByName;
            }
          }
        },


        mounted(){
            this.getFaqSynchro();
        },

        methods:{
            async getFaqSynchro(){
                const firestore = getFirestore();
                const dbFaq= collection(firestore, "faq");
                const query = await onSnapshot(dbFaq, (snapshot) =>{
                    this.listeFaqSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            
        }
      
    }


</script>