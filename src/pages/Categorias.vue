<template>
<div>
    <div class="row">
        <q-input @input="procurarCategoria(inputBusca)" class="col" bg-color="grey-2" filled color="pink" bottom-slots v-model="inputBusca" label="Procurar categoria ..." style="padding:8px">
        <template v-slot:prepend>
          <q-icon color="pink" name="search" />
        </template>
      </q-input>
    </div>
   
    <div v-if="inputBusca.length == 0" class="row " style="margin-bottom:100px" >
      <div 
        @click="$router.push({name:'Fornecedores'})"
        v-for="(categoria,index) in CATEGORIAS" :key="index"
        class="col-xs-6 col-sm-4 row" 
        style="padding:4px"
      >
      <div class="col-xs-4  text-center "  > 
          <q-img  :src="'/iconesCategoria/'+categoria['imagem']" />
      </div>
          <span style="font-size:16px;line-height: normal;padding-left:10px" class="self-center col-xs-8 text-start text-grey-8 ">{{categoria['nome']}}</span>
      </div>
    </div>
    <div v-if="inputBusca.length >0" class="row " style="margin-bottom:100px" >
      <div 
        @click="$router.push({name:'Fornecedores'})"
        v-for="(categoria,index) in busca" :key="index"
        class="col-xs-6 col-sm-4 row" 
        style="padding:4px"
      >
      <div class="col-xs-4  text-center "  > 
          <q-img  :src="'/iconesCategoria/'+categoria['imagem']" />
      </div>
          <span style="font-size:16px;line-height: normal;padding-left:10px" class="self-center col-xs-8 text-start text-grey-8 ">{{categoria['nome']}}</span>
      </div>
    </div>
</div>
</template>
<script> 
export default {
  name: 'PageIndex',
  data(){
    return{
        inputBusca:'',
        items:[1,2,3,4,5],
        busca:[]
      }
  },
  computed:{
    categorias(){
      return this.$store.state.EuQueroFesta.categorias
    },
    CATEGORIAS(){
      return this.$store.state.EuQueroFesta.CATEGORIAS
    }
  },
  methods:{
    procurarCategoria(nomeBusca){
      nomeBusca = nomeBusca.toUpperCase()
      this.busca = this.CATEGORIAS.filter(element =>{return element.nome.toUpperCase().includes(nomeBusca)})
      console.log(this.busca);
    }
   
  },
  mounted(){
    
  }
}
</script>