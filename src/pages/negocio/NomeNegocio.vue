<template>
    <div >
        <div class="row justify-end">
           <span v-if="!editar" class="col-2 text-gre-7" style="font-size:16px">3 de 7</span>
        </div>
        <div class="row justify-center">
            <div  class="col-12">
                <q-input 
                    v-model="nomeNegocio" 
                    label="Digite o nome" 
                    maxlength="60"
                    color="pink" 
                    :dense="true"
                    :error="checkErro_nomeNegocio"
                    :error-message="msgErro_nomeNegocio"
                    @input="checkErro_nomeNegocio=false, msgErro_nomeNegocio=''"
                /> 
            </div>  
        </div> 
        <q-footer class="bg-white" >
            <div class="row justify-center" style="padding:8px 0px 8px">
                <q-btn class="col-6" color="pink" :label="editar?'Editar':'Salvar'" @click="validarInputs" />
            </div>
        </q-footer> 
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        //Edit
        editar:false,
        idLojaEditar:'',

        nomeNegocio:'',
        checkErro_nomeNegocio:false,
        msgErro_nomeNegocio:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
    validarInputs(){
        this.checkErro_nomeNegocio = false
        if(this.nomeNegocio.length == 0){
            this.checkErro_nomeNegocio = true
            this.msgErro_nomeNegocio = "Campo obrigatório"
        }
        if(!this.checkErro_nomeNegocio){
            this.prosseguirCadastroLoja()
        }
    },
    editarLoja(){
        return this.$store.dispatch('EuQueroFesta/editarLoja',{nomeNegocio:this.nomeNegocio, idLojaEditar:this.idLojaEditar})
    },
    prosseguirCadastroLoja(){
        if(!this.editar){
            this.$q.localStorage.set('cadastroNegocio_nome',this.nomeNegocio)
            this.$router.push({name:'ContatoNegocio'})
        }else{
            this.editarLoja()
        }
    },
  },
  mounted(){
      if(this.$route.params.editar){
          this.editar = true;
          this.nomeNegocio = this.$route.params.negocioAlterar['sto_title'];
          this.idLojaEditar = this.$route.params.negocioAlterar['id'];
      }else{
        if(this.$q.localStorage.getItem('cadastroNegocio_nome')){
          this.nomeNegocio = this.$q.localStorage.getItem('cadastroNegocio_nome')
        }
      }
  }
}
</script>

<style>

</style>