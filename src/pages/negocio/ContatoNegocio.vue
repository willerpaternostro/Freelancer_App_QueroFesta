<template>
    <div style="padding:8px">
        <q-form class="text-grey-7">
            <div class="row">
                <label>Endereço</label>
                <q-input class="col-12" bottom-slots v-model="endereco" label="Digite o nome"  :dense="true" />
            </div>
            <div class="row">
                <label>Telefone</label>
                <q-input class="col-12" bottom-slots v-model="telefone" label="Digite o nome"  :dense="true" />
            </div>
            <div class="row">
                <label>Whatsapp</label>
                <q-input class="col-12" bottom-slots v-model="whatsapp" label="Digite o nome"  :dense="true" />
            </div>
            <div class="row">
                <label>Website</label>
                <q-input class="col-12" bottom-slots v-model="website" label="Digite o nome"  :dense="true" />
            </div>
        </q-form>
     
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        endereco:'',
        telefone:'',
        whatsapp:'',
        website:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
   irContatoNegocio(){
       this.$router.push({name:'FotosVideosNegocio'})
   }
  }
}
</script>

<style>

</style>