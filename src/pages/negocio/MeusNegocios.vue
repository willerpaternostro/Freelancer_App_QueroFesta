<template>
    <div >
        <q-card   flat v-for="(store,index) in stores" :key="index" class="my-card" style="padding-bottom:8px">
            <q-card-section horizontal class="row" >
                <q-img
                    @click="irMeuNegocio(store)"
                    style="border-radius:10px"
                    height="90px"
                    class="col-5"
                    :src="store['sto_image']"
                />
           
                <q-card-section class="col-7" >
                    <div class="row" @click="irMeuNegocio(store)">
                        <span class="text-h6 col-12" >
                            {{store.sto_title?store.sto_title:''}}
                        </span>
                    </div>
                    <div class="row" style="margin-top:10px">
                        <div class="col-10" @click="irMeuNegocio(store)"> 
                            <span class=" text-grey-6" >
                                <q-icon v-if="store['sto_uf'] || store['sto_city']" name="room" color="grey-6" /> {{verificarLocalizacao(store)}}
                            </span>
                        </div>
                        <div class="col-2">
                             <q-icon size="21px" name="delete" color="grey-7"  @click="abrirDialogExcluir(store)" />
                        </div>
                    </div>
                </q-card-section>
            </q-card-section>
        </q-card>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="adicionarNovoNegocio" round color="yellow-8" icon="add" size="19px" />
        </q-page-sticky>

        <!-- EXCLUIR NEGÓCIO --> 
        <q-dialog persistent v-model="excluirNegocio" >
            <q-card style="width: 300px; ">
                <q-card-section >
                <div class="text-h5 text-center text-weight-bold" style="padding-top:40px ">
                    Excluir esta loja?</div>
                </q-card-section>

                <q-card-section class=" text-center text-grey-6" style="font-size:18px">
                   Você tem certeza que deseja excluir a loja <span class="text-weight-bold text-grey-9">{{nomeLojaExcluir}} </span>?
                </q-card-section>

                <q-card-actions  class="bg-white row justify-center" style="padding-bottom:30px">
                    <q-btn class="col-4" color="grey" text-color="white" label="Cancelar" v-close-popup style="margin-right:30px" />
                    <q-btn @click="excluirLoja" class="col-4" color="red" text-color="white" label="Excluir" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>
</template>
<script>


export default {

  data(){
    return{
        excluirNegocio:false,
        text:'',

        //Excluir
        idExluir:'',
        nomeLojaExcluir:''
      
      }
  },
    computed:{
        stores(){
            return this.$store.state.EuQueroFesta.stores
        }
    },
  methods:{
        requisitarStores(){
            return this.$store.dispatch('EuQueroFesta/requisitarStores')
        },
        irMeuNegocio(store){
            console.log("LOJA SELECIONADA");
            this.$router.push({name:'InformacaoNegocio', params:{ meuNegocio:store }})
        },
        abrirDialogExcluir(dados){
            this.excluirNegocio = true;
            this.idExluir = dados['id'];
            this.nomeLojaExcluir = dados['sto_title']
        },
        adicionarNovoNegocio(){
            this.limparDadosNegocio()
            this.$router.push({name:'CidadeNegocio'})

        },
        excluirLoja(){
            return this.$store.dispatch('EuQueroFesta/excluirLoja',{id:this.idExluir})
        },
        limparDadosNegocio(){
            return this.$store.commit('EuQueroFesta/limparDadosNegocio')
        },
        verificarLocalizacao(store){
            let cidade =  store.sto_city?store.sto_city:''
            let estado = store.sto_uf?' - '+store.sto_uf:''
            if(!cidade && !estado){
                return ''
            }
            return cidade + estado
        }
  },
  beforeMount(){
       this.requisitarStores()
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