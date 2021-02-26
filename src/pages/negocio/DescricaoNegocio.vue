<template>
    <div style="padding:8px">
        <textarea class="full-width text-grey-7" style="height:300px; margin-top:30px;font-size:21px">
            ojfjsajfpaspofsapojfasjfpaskfopasjjfaspfoasjpojasofjogipsajgosakopjfsapjgpaskfoaskfopasjfpoas    
        </textarea>
        <div class="row justify-center absolute-bottom" style="padding:10px">
            <q-btn @click="irContatoNegocio"  class="col-10" label="Salvar" rounded no-caps color="pink" />
        </div>
    </div>
</template>
<script>


export default {
  data(){
    return{
        facebook:'',
        instagram:'',
        linkedin:'',
        youtube:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
   irContatoNegocio(){
       this.$router.push({name:'InformacaoNegocio'})
   }
  }
}
</script>

<style>

</style>