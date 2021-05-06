<template>
    <div>
        <q-img
        src="~assets/home_primeira_fundo.png"
        style="height: 200px;margin-bottom:8px"
        >
            <p style="padding-bottom:40px" class="text-h6 text-black absolute-center full-width text-center">Encontre fornecedores para sua festa </p>
            <div class="absolute-bottom text-subtitle1 text-center">
                <q-input 
                    bg-color="white" 
                    color="orange" 
                    outlined  
                    v-model="text" 
                    label="Encontre um fornecedor"
                    hint="Você está em: São Carlos"
                >
                    <template v-slot:prepend>
                        <q-icon color="orange" name="search" />
                    </template>
                    <template v-slot:append>
                        <q-btn flat :to="{name:'Localizacao'}" color="orange" icon="fas fa-map-marker-alt" />  
                    </template>
                </q-input>
            </div>
        </q-img>
        
        <q-carousel
            v-model="slides"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            arrows
            height="150px"
            class="bg-grey-1  rounded-borders"
            style="padding:0px"
        >
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img  class="rounded-borders col-10 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
                    <q-img class="rounded-borders col-2 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-10 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
                    <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
                <q-img class="rounded-borders col-6 full-height"  src="https://cdn.quasar.dev/img/donuts.png" />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
                    <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
                </div>
            </q-carousel-slide>
        </q-carousel>
        <div class="row" style="">
            <div class="col-6"> 
                <span @click="$router.push({name:'Categorias'})" class="text-h6 text-grey-9 text-weight-bold">
                    Categorias
                </span>
            </div>
             <div class="col-6 row justify-end"> 
                <q-btn no-caps flat color="red" label="Ver todas"  />
            </div>
        </div>
        <q-carousel
            v-model="slidesCategorias"
          
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            infinite
            arrows
            height="150px"
            class="bg-grey-1  rounded-borders"
        >
        <!-- Obs: elementos dinâmicos em carrossel não podem ter mesmo nome de váriavel -->
 
        <q-carousel-slide  v-for="(item,index) in qtdCategoria" :key="index"  :name="index" >
           <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" >
                <q-img  v-for="(element,index) in categorias" :key="index"  class=" col-xs-6 " :src="'http://beta.prcweb.com.br/api/Users/getImg/1/'+element.cat_image"  />
            </div>
        </q-carousel-slide>
     
        </q-carousel>
        <!-- SUGESTÕES DE FORNECEDORES -->
        <div class="row" style="">
            <span class="text-h6 text-grey-9 text-weight-bold">Últimos vistos</span>
        </div>
        <q-carousel
            v-model="slidesUltimosVistos"
            v-if="ultimosVistos"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            arrows
            height="150px"
            class="bg-grey-1  rounded-borders"
            style=" margin-bottom:60px"
        >
          <q-carousel-slide :name="index+1" class="column no-wrap" v-for="(novo,index) in ultimosVistos" :key="index">
           <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" >
                <q-img v-for="(itemNovo,index) in novo" :key="index"   class="rounded-borders  col-xs-6" :src="'http://beta.prcweb.com.br/api/Etc/anonGetImg/'+itemNovo.cat_image"  />
            </div>
        </q-carousel-slide>
      
        </q-carousel>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        slides:1,
        //Categorias
        slidesCategorias:1,
        novasCategorias:[],
        // Últimos vistos
        slidesUltimosVistos:1,
        ultimosVistos:null,
        categorias:[],
        qtdCategoria:[]
      }
  },
  computed:{
    
  },
  methods:{
   
  
  },
  watch:{
  
  },
  created(){
      
  },
  beforeMount(){
    
 
  },
  mounted(){
    console.log("MOUNTED-HOME");
    this.categorias = this.$q.localStorage.getItem('categories')
    this.categorias.forEach((elemento,index) => {this.qtdCategoria.push(index)})
    console.log(this.categorias);
  }
  
}
</script>

<style>
.q-carousel__slide, .q-carousel .q-carousel--padding{
    padding: 0px  !important;
}
.q-img__content > div {
    background: rgba(0,0,0,0);
}
input#f_2fac663e-5f38-4461-89e1-55c43f7fa20f.q-field__native.q-placeholder{
    color: orange !important;
    font-size: 18px;
}
</style>