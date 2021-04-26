<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">1 de 7</span>
        </div>
        <div class="row">
            <q-input 
                class="col-12"  
                bg-color="grey-2" 
                filled 
                color="pink" 
                bottom-slots 
                v-model="nomeCidadeNegocio" 
                label="Digite CEP, Cidade ou endereço" 
                :error="checkErro_nomeCidadeNegocio"
                :error-message="msgErro_nomeCidadeNegocio"
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
        <q-separator />
      
        </q-list>
       
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        nomeCidadeNegocio:'',
        checkErro_nomeCidadeNegocio:false,
        msgErro_nomeCidadeNegocio:'',
        items:[1,2,3,4,5],
      }
  },
  methods:{
    validarInputs(){
        this.checkErro_nomeCidadeNegocio = false
        if(this.nomeCidadeNegocio.length == 0){
            this.checkErro_nomeCidadeNegocio = true
            this.msgErro_nomeCidadeNegocio = "Campo obrigatório"
        }
        if(!this.checkErro_nomeCidadeNegocio){
            this.prosseguirCadastroLoja()
        }
    },
    prosseguirCadastroLoja(){
        this.$q.localStorage.set('cadastroNegocio_nomeCidadeNegocio',this.nomeCidadeNegocio)
            this.$router.push({name:'CategoriaNegocio'})
    },
   
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_cidadeNegocio')){
          this.nomeCidadeNegocio = this.$q.localStorage.getItem('cadastroNegocio_nomeCidadeNegocio')
      }
  }
}
</script>

<style>

</style>