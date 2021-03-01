<template>
    <div >
        <textarea v-model="descricao" class="full-width text-grey-7" style="height:300px;font-size:21px" />
    </div>
</template>
<script>


export default {
  data(){
    return{
        descricao:'',
        teclado:false
      }
  },
  methods:{
   irContatoNegocio(){
       this.$router.push({name:'InformacaoNegocio'})
   }
  },
    mounted(){
   
  }
}
</script>

<style>

</style>