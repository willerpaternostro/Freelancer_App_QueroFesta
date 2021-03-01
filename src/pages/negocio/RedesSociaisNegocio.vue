<template>
    <div >
        <q-form class="text-grey-7">
            <div class="row">
                <label>Facebook</label>
                <q-input class="col-12" bottom-slots v-model="facebook" label="Digite o nome"  :dense="true" />
            </div>
            <div class="row">
                <label>Instagram</label>
                <q-input class="col-12" bottom-slots v-model="instagram" label="Digite o nome"  :dense="true" />
            </div>
            <div class="row">
                <label>Linkedin</label>
                <q-input class="col-12" bottom-slots v-model="linkedin" label="Digite o nome"  :dense="true" />
            </div>
            <div class="row">
                <label>Youtube</label>
                <q-input class="col-12" bottom-slots v-model="youtube" label="Digite o nome"  :dense="true" />
            </div>
        </q-form>
        
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        facebook:'',
        instagram:'',
        linkedin:'',
        youtube:'',
        items:[1,2,3,4,5],
        botaoFundo:''
      }
  },
  methods:{
   irContatoNegocio(){
       this.$router.push({name:'DescricaoNegocio'})
   }
  },
  mounted(){
      this.botaoFundo = this.$q.screen.height
      this.botaoFundo = this.botaoFundo/4
  }
}
</script>

<style>

</style>