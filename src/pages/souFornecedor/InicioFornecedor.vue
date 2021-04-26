<template>
  <div class="" :style="'height:'+height+'px'" >
    <q-header class="bg-white text-pink" style="padding-top:8px" >
      <div class="row"> 
        <div class="col-1"><q-btn :to="{name:'Mais'}" text-color="black" icon="keyboard_backspace" flat /> </div>
        <div class="col text-h5 text-pink text-weight-bold text-center">Vamos começar a festa!</div>
      </div>
    </q-header>
     <div class="row justify-center">
            <q-img width="90%" src="~assets/logo_euquero.png"  />
      </div>
    
        <div class="row justify-center" style="padding:10px; margin-top:150px">
          <q-btn :to="{name:'LoginFornecedor'}" class="col-8" label="Entrar" rounded no-caps color="pink" />
        </div>
        <div class="row justify-center" style="padding:10px 10px 20px">
          <q-btn :to="{name:'CadastroFornecedor'}" class="col-8" label="Cadastre-se" rounded no-caps color="blue-6" />
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