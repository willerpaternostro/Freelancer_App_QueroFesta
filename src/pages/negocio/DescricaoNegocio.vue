<template>
    <div >
      <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">7 de 7</span>
        </div>
        <textarea v-model="descricaoNegocio" class="full-width text-grey-7" style="height:300px;font-size:21px; margin-top:20px;border: 1px solid black" />
        <q-footer class="bg-white" >
            <div class="row justify-center" style="padding:8px 0px 8px">
                <q-btn class="col-6" color="pink" label="Finalizar" no-caps @click="validarInputs" />
            </div>
        </q-footer> 
    </div>
   
</template>
<script>


export default {
  data(){
    return{
        descricaoNegocio:'',
        teclado:false
      }
  },
   methods:{
    validarInputs(){
        this.prosseguirCadastroLoja()
    },
    prosseguirCadastroLoja(){
        this.$q.localStorage.set('cadastroNegocio_descricao', this.descricaoNegocio)
        this.cadastrarLoja()
    },
    cadastrarLoja(){
        return this.$store.dispatch('EuQueroFesta/cadastrarLoja')
    }
   
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_descricao')){
          this.nomeNegocio = this.$q.localStorage.getItem('cadastroNegocio_descricao')
      }
  }
}
</script>

<style>

</style>