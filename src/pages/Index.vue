<template>
  <div class="">
    <q-carousel 
      v-show="mostrarApresentacaoHenvio"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      animated
      class="text-grey-7 shadow-1 rounded-borders"
      swipeable
      :style="'max-height:'+height+'px'" 
    >
      <q-carousel-slide name="slide1" >
        <q-img
        src="~assets/logo_euquero.png"
        contain
        height="250px"
        />
        
      </q-carousel-slide>
      <q-carousel-slide name="slide2" >
        <q-img
          height="250px"
          src="~assets/logo_euquero.png"
          contain
        />
      </q-carousel-slide>
      <q-carousel-slide name="slide3" >
        <q-img
          height="250px"
          src="~assets/logo_euquero.png"
          contain
        />
      </q-carousel-slide>
    </q-carousel>
    <div v-show="mostrarApresentacaoHenvio" class="absolute-bottom">
    <div class="row ">
      <span class="col-12 text-center text-h5">Apresentação</span>
    </div>
    <div class="row justify-center" style="margin-top:10px">
      <p class="col-10 text-center text-grey-7">Aqui é para colocar um texto sobre o aplicativo de festas, pode colocar qualquer coisa</p>
    </div>
    <div class="row justify-center">
      <q-btn-group flat>
        <q-btn flat :color="slide =='slide1'?'pink':'grey-5'"  icon="fas fa-window-minimize" />
        <q-btn flat :color="slide =='slide2'?'pink':'grey-5'" icon="fas fa-window-minimize" />
        <q-btn flat :color="slide =='slide3'?'pink':'grey-5'" icon="fas fa-window-minimize" />
      </q-btn-group>
    </div>
    <div class="row justify-center " style="padding:20px">
     <q-btn @click="continuar" class="col-8" label="Continuar" rounded no-caps color="pink" />
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  data(){
    return{
      height:'',
      mostrarApresentacaoHenvio: true,
      slide: 'slide1',
      }
  },
  methods:{
     inicializacaoLocalStorage(){
      this.$q.localStorage.set('primeiraVezApp',false)
      this.$q.localStorage.set('meusUltimosVistos',[])
      this.$q.localStorage.set('meusFavoritos',[])
    },

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
      if(this.slide == 'slide3'){
        this.$q.localStorage.set('primeiraVezApp',true)
        this.$router.push({name:'Localizacao'})
      }
    },
    requisitarCategories(){
      return this.$store.dispatch('EuQueroFesta/requisitarCategories')
    },
    requisitarBanners(){
      return this.$store.dispatch('EuQueroFesta/requisitarBanners')
    },
    requisitarStores(){
      return this.$store.dispatch('EuQueroFesta/requisitarStores')
    }
 
  },
  created(){
     if(!this.$q.localStorage.getItem('primeiraVezApp')){
      this.inicializacaoLocalStorage()
    }
    if(this.$q.localStorage.getItem('primeiraVezApp')){
      this.$router.push({name:'Home'})
    }
  },
  beforeMount(){
    this.height = this.$q.screen.height-50
    this.height = parseInt(this.height/2)
    this.height = this.height.toString()

    console.log("BeforeMount-Index");
   
  },

  mounted(){
    console.log("MOUNTED-INDEX")
    if(!this.$q.localStorage.getItem('primeiraVezApp')){
      this.requisitarStores()
      this.requisitarCategories()
    }
    
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