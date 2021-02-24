<template>
  <div class=" " :style="'height:'+height+'px'" >
    <q-carousel
      v-show="mostrarApresentacaoHenvio"
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      animated
      padding
      class="text-grey-7 shadow-1 rounded-borders"
      swipeable
      navigation 
      :height="(height/2)+'px'"
    >
      
      <q-carousel-slide name="slide1" >
        <q-img
        src="~assets/logo_euquero.png"
        :height="(height/3)+'px'"
        contain
        />
        
      </q-carousel-slide>
      <q-carousel-slide name="slide2" >
        <q-img
          src="~assets/logo_euquero.png"
          :height="(height/3)+'px'"
          contain
        />
      </q-carousel-slide>
      <q-carousel-slide name="slide3" >
        <q-img
          src="~assets/logo_euquero.png"
          :height="(height/3)+'px'"
          contain
        />
      </q-carousel-slide>
    </q-carousel>
    <div class="row justify-center">
      <q-btn-group flat>
        <q-btn flat :color="slide=='slide1'?'pink':'grey-5'" icon="fas fa-window-minimize" />
        <q-btn flat :color="slide=='slide2'?'pink':'grey-5'" icon="fas fa-window-minimize" />
        <q-btn flat :color="slide=='slide3'?'pink':'grey-5'" icon="fas fa-window-minimize" />
      </q-btn-group>
    </div>
    <div class="absolute-bottom">
      <div class="row justify-center" style="padding:10px">
      <q-btn :to="{name:'LoginFornecedor'}" class="col-8" label="Entrar" rounded no-caps color="pink" />
      </div>
      <div class="row justify-center" style="padding:10px 10px 20px">
        <q-btn :to="{name:'CadastroFornecedor'}" class="col-8" label="Cadastre-se" rounded no-caps color="blue-6" />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PageIndex',
  data(){
    return{
      botoesSlides:'slide1',
      height:600,
      mostrarApresentacaoHenvio: true,
      slide: 'slide1',
      }
  },
  methods:{

   passarPag(){
    this.$q.localStorage.set('network','henvio')
     this.$q.localStorage.set('passarPag',true)
     this.$q.localStorage.set('mostrarApresentacaoHenvio',false)
     this.$router.push({name:'Login'})
   },

    confirmSlides(){
      this.mostrarApresentacaoHenvio = false
      this.$q.localStorage.set('mostrarApresentacaoHenvio',this.mostrarApresentacaoHenvio)
    },
   

    
  },

  mounted(){
    this.height = this.$q.screen.height  -50
    this.height = this.height.toString()

  }
}
</script>

<style>
.shadow-1 {
  box-shadow: 0 0 0 !important;
}
div.q-carousel__slide{
  padding:0px !important;
}

</style>