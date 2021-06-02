<template>
    <div>
        <div class="row">
            <q-input class="col" bg-color="grey-2" filled color="pink" bottom-slots v-model="text" label="Encontre um fornecedor ..." >
                <template v-slot:append>
                    <q-icon color="pink" name="search" />
                </template>
            </q-input>
        </div>
        <div  v-if="stores" style="margin-bottom:60px">
            <q-card @click="verLoja(loja)" flat v-for="(loja,index) in stores" :key="index" class="my-card">
                <q-card-section horizontal class="row">
                    <q-img
                    style="border-radius:10px"
                    height="90px"
                    class="col-5"
                    :src="loja['sto_image']"
                    />
                    <q-card-section class="col-7">
                        <div class="row">
                            <span class="text-h6 col" >
                                {{loja['sto_title']}}
                            </span>
                        </div>
                        <div class="row" style="margin-top:10px">
                            <span class=" text-grey-6" >
                               {{loja['sto_categories']}}
                            </span><br>
                        </div>
                        <span  class=" text-black text-subtitle1 text-weight-bold row justify-end">
                            <q-icon style="padding:5px" size="19px" name="far fa-heart" color="pink" />  
                        </span>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>

export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        
      }
  },
  computed:{
    stores(){
        return this.$store.state.EuQueroFesta.stores
    }
  },
    methods:{
        verLoja(loja){
            this.adicionarUltimosVistos(loja)
            this.$router.push({name:'Fornecedor',params:{loja:loja}})
        },
      
        adicionarUltimosVistos(loja){
            let meusUltimosVistos = this.$q.localStorage.getItem('meusUltimosVistos');
            let verifica = false;

            if(Array.isArray(meusUltimosVistos)){
                if(meusUltimosVistos.length > 0){
                    verifica = meusUltimosVistos.find(element => { return element['id'] === loja['id']})
                }
            }
            if(!verifica){
                meusUltimosVistos.push(loja)
                this.$q.localStorage.set('meusUltimosVistos',meusUltimosVistos)
            }
        }
    },
  mounted(){
   console.log(this.stores);
  }
}
</script>

<style>
.q-img__content > div {
    background: rgba(0,0,0,0);
}
input#f_2fac663e-5f38-4461-89e1-55c43f7fa20f.q-field__native.q-placeholder{
    color: orange !important;
    font-size: 18px;
}
div.q-card__section.q-card__section--vert{
    padding-top: 0px !important;
    padding-right: 0px !important;
}
</style>