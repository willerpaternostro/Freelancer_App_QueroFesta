<template>
<div>
    <div class="row">
        <q-input class="col" bg-color="grey-2" filled color="pink" bottom-slots v-model="text" label="Item ou loja" style="padding:8px">
        <template v-slot:prepend>
          <q-icon color="pink" name="search" />
        </template>
      </q-input>
    </div>
   
        <div class="row "  >
        <div 
          @click="$router.push({name:'Fornecedores'})"
          v-for="(categoria,index) in categorias" :key="index"
          class="col-xs-6 col-sm-4 row" 
          style="padding:4px"
        >
        <div class="col-xs-4  text-center "  > 
           <q-img  :src="categoria['cat_icon']" />
        </div>
            <span style="font-size:16px;line-height: normal;padding-left:10px" class="self-center col-xs-8 text-start text-grey-8 ">{{categoria['cat_description']}}</span>
        </div>
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
  computed:{
    categorias(){
      return this.$store.state.EuQueroFesta.categorias
    }
  },
  methods:{
   
  },
  mounted(){
    
  }
}
</script>