<template>
    <div style="padding:8px">
        <div class="row">
            <q-input class="col-12" bottom-slots v-model="text" label="Digite o nome" counter maxlength="60" :dense="true">
                <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="search" />
                </template>
            </q-input>
        </div>  
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
   irContatoNegocio(){
       this.$router.push({name:'ContatoNegocio'})
   }
  }
}
</script>

<style>

</style>