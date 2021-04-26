<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">3 de 7</span>
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
                <q-btn class="col-6" color="pink" label="Salvar" @click="validarInputs" />
            </div>
        </q-footer> 
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
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
    prosseguirCadastroLoja(){
        this.$q.localStorage.set('cadastroNegocio_nomeNegocio',this.nomeNegocio)
            this.$router.push({name:'ContatoNegocio'})
    },
   
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_nomeNegocio')){
          this.nomeNegocio = this.$q.localStorage.getItem('cadastroNegocio_nomeNegocio')
      }
  }
}
</script>

<style>

</style>