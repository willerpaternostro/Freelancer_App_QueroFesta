<template>
    <div>
        <q-img
        src="~assets/festa_party.png"
        style="height: 200px;margin-bottom:8px"
        >
            <p style="padding-bottom:40px" class="text-h6 absolute-center full-width text-center text-white">.</p>
            <div class="absolute-bottom text-subtitle1 text-center">
                <q-input 
                    bg-color="white" 
                    color="pink" 
                    outlined  
                    v-model="text" 
                    label="Encontre um fornecedor"
                    hint="Você está em: São Carlos"
                >
                    <template v-slot:prepend>
                        <q-icon color="pink" name="search" />
                    </template>
                    <template v-slot:append>
                        <q-btn flat :to="{name:'Localizacao'}" color="pink" icon="fas fa-map-marker-alt" />  
                    </template>
                </q-input>
            </div>
        </q-img>
    <div style="padding:2px">
        <q-carousel
            v-model="slides"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            arrows
            infinite
            height="150px"
            class="bg-grey-1  rounded-borders"
            style="padding:0px"
        >
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img  class="rounded-borders col-12 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-12 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  /> 
                </div>
            </q-carousel-slide>
        </q-carousel>
        <div class="row" style="margin-top:10px">
            <div class="col-6"> 
                <span @click="$router.push({name:'Categorias'})" class="text-h6 text-grey-9 text-weight-bold">
                    Categorias
                </span>
            </div>
             <div class="col-6 row justify-end"> 
                <q-btn @click="$router.push({name:'Categorias'})" no-caps flat color="red" label="Ver todas"  />
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
            height="100px"
            class="bg-grey-1  rounded-borders"
            style="margin-top:10px"
        >
            <!-- Obs: elementos dinâmicos em carrossel não podem ter mesmo nome de váriavel -->
            <q-carousel-slide :name="index" class="column no-wrap" v-for="(slide,index) in qtdCarrousselCategoria" :key="index" style="height:100px;">
                <div class="row fit justify-start items-center  no-wrap" style="height:70px;">
                    <div class="col-3" v-for="(categoria,pos) in categoriasPorSlide[index]" :key="pos">
                        <q-img contain height="70px" @click="$router.push({name:'Fornecedores'})"    class="rounded-borders col-3" :src="categoria['cat_image']" />
                        <div   class="col-3 text-center text-caption text-grey-8">
                            {{categoria['cat_title']}}
                        </div>
                    </div>
                </div>
                 
            </q-carousel-slide>
            
        </q-carousel>
           
        <!-- SUGESTÕES DE FORNECEDORES -->
        <div v-if="ultimosVistos" class="row" style="margin-top:10px">
            <span class="text-h6 text-grey-9 text-weight-bold">Últimos vistos</span>
        </div>
        <q-carousel
            v-if="ultimosVistos"
            style="margin-bottom:60px;margin-top:10px"
            v-model="slidesUltimosVistos"
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
            <q-carousel-slide :name="index" class="column no-wrap overflow-hidden" v-for="(slide,index) in qtdCarrousseisUltimos" :key="index">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" >
                    <div @click="$router.push({name:'Fornecedor',params:{loja:loja}})" class="col-6 row"  v-for="(loja,pos) in ultimosVistos[index]" :key="pos" >
                    <q-img height="120px"  @click="$router.push({name:'Fornecedores'})"  class="rounded-borders col-12" :src="loja['sto_image']" />
                      <div style="padding-top:10px;margin-bottom:10px"  class="col-12 text-center text-caption text-grey-8">
                            {{loja['sto_title']}}
                        </div>
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div><br>
    </div>
</template>
<script>
import { axiosInstance } from 'boot/axios'

export default {
    name: 'PageIndex',
    data(){
        return{
            text:'',
            slides:1,
            //Categorias
            slidesCategorias:1,
            qtdCarrousselCategoria:[],
            categoriasPorSlide:[],
            // Últimos vistos
            slidesUltimosVistos:1,
            ultimosVistos:null,
            qtdCarrousseisUltimos:[]
        }
    },
    computed:{
        categorias(){
            return this.$store.state.EuQueroFesta.categorias
        },
        stores(){
            return this.$store.state.EuQueroFesta.stores
        }
    },
    methods:{
        atualizandoCategorias(){
            if(this.categorias){
                 let qtdCarrousseis = Math.ceil(this.categorias.length/3)
                for(let i = 0; i<qtdCarrousseis;i++){
                    this.qtdCarrousselCategoria.push(i)
                }
        
                let Elementos = 0;
                let obj = []
                this.categorias.forEach(element => {
                    obj.push(element)
                    Elementos +=1
                    if(Elementos === 4){
                        this.categoriasPorSlide.push(obj)
                        obj = [];
                    Elementos =0;
                    }
                });
                if(obj.length > 0){
                    this.categoriasPorSlide.push(obj)
                }
            }
           
        },
        atualizandoUltimosVistos(){
            console.log("ATUALIZANDO ULTIMOS VISTOS");
            let meusUltimosVistos = this.$q.localStorage.getItem('meusUltimosVistos')
            console.log(meusUltimosVistos);
            if(Array.isArray(meusUltimosVistos)){
                if(meusUltimosVistos.length > 0){
                    console.log("ENTROU VERIFICAÇÃO");
                    let qtdCarrousseis = Math.ceil(meusUltimosVistos.length/2)
                    console.log("MEUS CARROUSSEIS:"+qtdCarrousseis);
                    for(let i = 0; i <qtdCarrousseis ;i++){
                        this.qtdCarrousseisUltimos.push(i)
                    }
                    this.ultimosVistos = []
                    let Elementos = 0;
                    let obj = []
                    
                    meusUltimosVistos.forEach(element => {
                        obj.push(element)
                        Elementos +=1
                        if(Elementos === 2){
                            this.ultimosVistos.push(obj)
                            obj = [];
                        Elementos =0;
                        }
                    });
                    if(obj.length > 0){
                        this.ultimosVistos.push(obj)
                    }
                }
            }
            console.log("ULTIOMOSSS");
            console.log(this.ultimosVistos);
        },
        requisitarCategories(){
            return this.$store.dispatch('EuQueroFesta/requisitarCategories')
        },
        requisitarStores(){
            return this.$store.dispatch('EuQueroFesta/requisitarStores')
        }
    },
    watch:{
        categorias:function(val){
            this.atualizandoCategorias()
        },
    },
    created(){
        
    },
    beforeMount(){
        this.atualizandoCategorias()
        this.atualizandoUltimosVistos()
        this.requisitarCategories()
        this.requisitarStores()  
    },
    mounted(){
        this.slidesCategorias = 0
        this.slidesUltimosVistos = 0
        console.log("MOUNTED-HOME");  
     
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
div.q-field__messages.col{
    color: white;
}

</style>