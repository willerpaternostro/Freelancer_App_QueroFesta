<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">2 de 7</span>
        </div>
        <div class="row">
            <q-input 
                class="col-12" 
                bg-color="grey-2" 
                filled 
                color="pink" 
                bottom-slots 
                v-model="nomeCategoriaNegocio" 
                label="Digite CEP, Cidade ou endereço" 
                :error="checkErro_nomeCategoriaNegocio"
                :error-message="msgErro_nomeCategoriaNegocio"
            >
                <template v-slot:prepend>
                    <q-icon color="pink" name="search" />
                </template>
                <template v-slot:append>
                    <q-icon @click="validarInputs" color="pink" name="send" />
                </template>
            </q-input>
        </div>
        <q-list >
            <q-item>
                <q-item-section>
                    <q-item-label>São Carlos</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-badge  color="blue" label="10k" />
                </q-item-section>
            </q-item>
            
        </q-list>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        nomeCategoriaNegocio:'',
        checkErro_nomeCategoriaNegocio:false,
        msgErro_nomeCategoriaNegocio:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
    validarInputs(){
        this.checkErro_nomeCategoriaNegocio = false
        if(this.nomeCategoriaNegocio.length == 0){
            this.checkErro_nomeCategoriaNegocio = true
            this.msgErro_nomeCategoriaNegocio = "Campo obrigatório"
        }
        if(!this.checkErro_nomeCategoriaNegocio){
            this.prosseguirCadastroLoja()
        }
    },
    prosseguirCadastroLoja(){
        this.$q.localStorage.set('cadastroNegocio_nomeCategoriaNegocio',this.nomeCategoriaNegocio)
            this.$router.push({name:'NomeNegocio'})
    },
   
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_nomeCategoriaNegocio')){
          this.nomeCategoriaNegocio = this.$q.localStorage.getItem('cadastroNegocio_nomeCategoriaNegocio')
      }
  }
}
</script>

<style>

</style>