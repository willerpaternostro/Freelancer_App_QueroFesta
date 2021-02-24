<template>
   <div>
        <div class=" row justify-center">  
            <img src="~assets/logo_euquero.png"  style="width:150px;  margin-bottom:0px" />
        </div>
        <div class=" row justify-center">  
            <h3 class="text-h5 text-weight-bold ">Selecione um plano</h3>
        </div>
        <div class=" row justify-center">  
            <p class="text-grey-7 text-weight-bold">Now we need to verify your identity</p>
        </div>
        <q-list bordered padding >
            <q-item class="listaPlanos">
                <q-item-section style="max-width:60px" >
                    <q-avatar color="positive" text-color="white"> 1</q-avatar>
                </q-item-section>

                <q-item-section>
                <q-item-label class="text-h6">Plano A</q-item-label>
                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section side top style="padding:0px">
                <q-item-label caption> 
                    <q-badge  class="gradientRosa">
                        Recomendado
                    </q-badge>
                </q-item-label>
             
                </q-item-section>
            </q-item>
            <q-item class="listaPlanos">
                <q-item-section style="max-width:60px" >
                    <q-avatar color="positive" text-color="white"> 2</q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label class="text-h6">Plano B</q-item-label>
                    <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>
            </q-item>
    </q-list>
    
    <div class="row justify-center absolute-bottom" style="padding:20px 10px 20px 10px">
      <q-btn 
       :to="{name:'PagamentoFornecedor'}"
        rounded
        text-color="white"
        color="pink" class="col-8"  no-caps>Continue </q-btn>
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
    irFornecedor(){
        this.$router.push({name:'Fornecedor'})
    },
  }
}
</script>

<style>
.gradientRosa{
    background-image: linear-gradient(to right,  rgb(255, 0, 98),rgb(245, 198, 46) ) !important;
}
div.q-item.q-item-type.row.no-wrap.listaPlanos{
    padding: 16px !important;
    
}
</style>