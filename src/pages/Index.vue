
<template>
  <div >
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      animated
      class="rounded-borders"
      swipeable
      :height="alturaTela*0.8+'px'"
    >
      <q-carousel-slide name="slide1" >
          <q-img
            src="~assets/logo_euquero.png"
            :height="alturaTela*0.6+'px'"
            contain
          />
          <div class="row justify-center ">
            <span class="col-xs-12 col-sm-6 text-center" :style="'font-size:'+atributosPagina.tamanhoTitulo">{{atributosPagina.tituloUmApresentacao}}</span>
          </div>
          <div class="row justify-center" style="margin-top:10px">
            <p class="col-xs-12 col-sm-6 text-center" :style="'font-size:'+atributosPagina.tamanhoParagrafo">{{atributosPagina.paragrafoUmApresentacao}}</p>
          </div>
      </q-carousel-slide>
      <q-carousel-slide name="slide2" >
         <q-img
          src="~assets/logo_euquero.png"
          :height="alturaTela*0.5+'px'"
          contain
        />
         <div class="row justify-center">
            <span class="col-xs-12 col-sm6 text-center" :style="'font-size:'+atributosPagina.tamanhoTitulo">{{atributosPagina.tituloDoisApresentacao}}</span>
          </div>
          <div class="row justify-center" style="margin-top:10px">
            <p class="col-xs-12 col-sm-6 text-center" :style="'font-size:'+atributosPagina.tamanhoParagrafo">{{atributosPagina.paragrafoDoisApresentacao}}</p>
          </div>
      </q-carousel-slide>
      <q-carousel-slide name="slide3" >
        <q-img
          src="~assets/logo_euquero.png"
          :height="alturaTela*0.5+'px'"
          contain
        />
        <div class="row justify-center ">
          <span class="col-xs-12 col-sm-6 text-center" :style="'font-size:'+atributosPagina.tamanhoTitulo">{{atributosPagina.tituloTresApresentacao}}</span>
        </div>
        <div class="row justify-center" style="margin-top:10px">
          <p class="col-xs-12 col-sm-6 text-center" :style="'font-size:'+atributosPagina.tamanhoParagrafo">{{atributosPagina.paragrafoTresApresentacao}}</p>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="absolute-bottom bg-white text-positive">
     
      
      <div class="row justify-center">
        <q-btn-group flat>
          <q-btn @click="slide='slide1'" flat :color="corIconesApresentacaoApp" :icon="atributosPagina.iconesCarrousel"  />
          <q-btn @click="slide='slide2'" flat :color="iconeDoisApresentacaoApp?corIconesApresentacaoApp:'grey-7'" :icon="atributosPagina.iconesCarrousel"  />
          <q-btn @click="slide='slide3'" flat :color="iconeTresApresentacaoApp?corIconesApresentacaoApp:'grey-7'" :icon="atributosPagina.iconesCarrousel"  />
        </q-btn-group>
      </div>
      <div class="row justify-center " style="padding:20px">
        <q-btn @click="continuar" text-color="white"  class="col-xs-8 col-sm-3" label="Continuar" rounded no-caps color="pink" />
      </div>
    </div>
  </div>
</template>

<script>
const atributosPagina = {
  backgroundColorTela:'',
  //ÍCONES
  iconesCarrousel:'fas fa-window-minimize',
  corIconesApresentacaoApp:'positive',
  //Títulos
  tituloUmApresentacao:'Bem-Vindo ao Transpop!',
  tituloDoisApresentacao:'O seu voto pode fazer a diferença!',
  tituloTresApresentacao:'Acompanhe todas as proposições!',
  //Parágrafos
  paragrafoUmApresentacao:'No Transparência Popular você fica sabendo o que os nossos políticos estão votando',
  paragrafoDoisApresentacao:'Mostre a Câmara qual o seu voto na proposição a ser votada',
  paragrafoTresApresentacao:' Avalie se os candidatos que votaram dão match com seu voto.',
  
  //Font-size
  tamanhoTitulo:'20px',
  tamanhoParagrafo:'12px'
}
export default {
  name: 'Index',
  data(){
    return{
      atributosPagina:atributosPagina,
      height:'', 
      alturaTela:600,
      mostrarApresentacaoHenvio: true,
      slide: 'slide1',
      iconeDoisApresentacaoApp:false,
      iconeTresApresentacaoApp:false,
      corIconesApresentacaoApp:'pink',
    }
  },
  methods:{
    continuar(){
      console.log(this.slide)
      if(this.slide == 'slide1'){
        this.slide = 'slide2'
        return
      }
      if(this.slide == 'slide2'){
        this.slide = 'slide3'
        return
      }
      if(this.slide == 'slide3')
        this.$router.push({name:'Localizacao'})
    },
    requisitarCategories(){
         console.log("Vai chamar requisitar Categories");
         return this.$store.dispatch('EuQueroFesta/requisitarCategories')
     },
     requisitarBanners(){
         console.log("REQUISITAR BANNERS");
         return this.$store.dispatch('EuQueroFesta/requisitarBanners')
     },
     requisitarStores(){
         return this.$store.dispatch('EuQueroFesta/requisitarStores')
     }
 
  },
  watch:{
    slide:function(valor){
      console.log(valor);
      if(this.slide == 'slide1'){
        this.iconeDoisApresentacaoApp = false;
        this.iconeTresApresentacaoApp = false;
      }
      if(this.slide == 'slide2'){
        this.iconeDoisApresentacaoApp = true;
        this.iconeTresApresentacaoApp = false;
      }
      if(this.slide == 'slide3'){
        this.iconeDoisApresentacaoApp = true;
        this.iconeTresApresentacaoApp = true;
      }
    }
  },
  mounted(){
    this.alturaTela = this.$q.screen.height-50
    this.requisitarStores()
    this.requisitarCategories()
  }
}
</script>

<style>
.shadow-1 {
  box-shadow: 0 0 0 !important;
}
.animated{
  animation-duration:0.8s;
}

</style>