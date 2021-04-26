<template>
<div>
    <div class="row">
        <q-input class="col" bg-color="grey-2" filled color="pink" bottom-slots v-model="text" label="Item ou loja" style="padding:8px">
        <template v-slot:prepend>
          <q-icon color="pink" name="search" />
        </template>
      </q-input>
    </div>
    <div v-for="(item,index) in items" :key="index" class="row" style="padding-top:8px">
        <q-img @click="$router.push({name:'Fornecedores'})" class="col" style="margin-right:16px; border-radius:8px" height="85px" src="https://cdn.quasar.dev/img/chicken-salad.jpg" >
        <div class="absolute-top-left text-h6 ">
            Mercado
        </div>
        </q-img>
            <q-img @click="$router.push({name:'Fornecedores'})" style=" border-radius:10px" class="col"  height="85px" src="https://cdn.quasar.dev/img/donuts.png" >
        <div class="absolute-top-left text-h6 ">
            Salgado
        </div>
        </q-img>
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
   
  

  }
}
</script>