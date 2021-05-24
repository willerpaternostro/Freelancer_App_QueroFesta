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
            v-for="(categoria,index) in items" :key="index"
            class="col-xs-6 col-sm-4 row" 
            style="padding:4px"
        >
        <div class="col-xs-4  text-center "  > 
           <q-img  src="~assets/bolo.jpg" />
        </div>
            <span style="font-size:16px;line-height: normal;" class="self-center col-xs-8 text-center text-pink ">Categoria {{index}} teste teste</span>
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
  methods:{
   
  

  }
}
</script>