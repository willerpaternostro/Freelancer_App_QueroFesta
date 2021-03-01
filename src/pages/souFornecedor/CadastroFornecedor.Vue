<template>
   <div class="row justify-center" style="width:100%; max-width: 100%">
    <div class="col-xs-12 col-sm-11 col-md-6"> 
      <div class=" row justify-center input">  
        <img src="~assets/logo_euquero.png"  style="width:150px;  margin-bottom:0px" />
      </div>
      <div class=" row justify-center">  
          <h3 class="text-h4 text-weight-bold text-grey-7">Create Account</h3>
      </div>
      <q-form>
        <div class="row justify-center input" >
          <q-input 
            color="pink"
            class="campos col-xs-11 col-sm-6" 
            outlined 
            input-class="text-pink"
            v-model="nome" 
            label="Nome do Responsável"  
            style=" padding-bottom:0px "
            />
        </div> 
        <div class="row justify-center input" >
          <q-input 
            color="pink"
            class="campos col-xs-11 col-sm-6" 
            outlined 
            input-class="text-pink"
            v-model="cpf" 
            label="CPF"  
            style=" padding-bottom:0px"
          />
        </div>
        <div class="row justify-center input" >
          <q-input 
            color="pink"
            class="campos col-xs-11 col-sm-6" 
            outlined 
            input-class="text-pink"
            v-model="email" 
            label="Email"  
            style=" padding-bottom:0px "
          />
        </div>
        <div class="row justify-center input" >
          <q-input 
            color="pink"
            class="campos col-xs-11 col-sm-6" 
            outlined 
            input-class="text-pink"
            v-model="telefone" 
            label="Telefone/ Whatsapp"  
            style=" padding-bottom:0px "
          />
        </div>
        <div class="row justify-center input" >
          <q-input 
            color="pink"
            class="campos col-xs-11 col-sm-6" 
            outlined 
            input-class="text-pink"
            v-model="senha" 
            label="Senha"  
            style=" padding-bottom:0px "
          />
        </div>
        <div class="q-gutter-sm input">
          <q-checkbox v-model="right" label="Aceito os termos xxx" color="grey" />
        </div>
      </q-form>
      <div class="row justify-center" style="padding:20px 10px 20px 10px">
        <q-btn 
          :to="{name:'PlanosFornecedor'}"
          rounded
          text-color="white"
          color="pink" class="col-8" no-caps>Cadastrar </q-btn>
      </div> 
      <div class="row justify-center" >
        <div class="col row justify-center">
            <p >Já possui uma conta?<span class="text-orange"> Entre aqui</span></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      nome:'',
      email:'',
      telefone:'',
      cpf:'',
      senha:'',
      right:false
    }
  },
    methods:{
      cadastrar(){
        console.log('Cadastrado!')
      }
    },
    beforeMount(){
    console.log("BEFORE-MOUNTED")
    },
    mounted(){
    console.log("MOUNTED")
  }
}
</script>
<style>
.input{
  padding: 5px;
}
</style>