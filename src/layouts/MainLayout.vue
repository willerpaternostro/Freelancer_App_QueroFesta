<template>
  <q-layout view="lHh Lpr lFf"   >
    <q-header v-if="mostrarHeader"  class="bg-white text-black" style="padding-top:10px;padding-bottom:10px">
      <div class="row">
        <div class="col-2">
          <q-btn
            flat
            dense
            round
            icon="keyboard_backspace"
            aria-label="Menu"
            @click="acaoBotaoHeaderEsquerdo"
            
          />
        </div>
        <div class="text-center text-pink-4 text-h5 text-weight-bold col-8">
          <span> {{labelHeader}} </span>
        </div>
        <div class="col-2"></div>
      </div>
    </q-header>
    <!-- ESTÁ LOGADO -->
    <q-drawer
      v-if="logado"
      v-model="drawer"
      show-if-above
      :width="360"
      :breakpoint="400"
      >
      
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        
        <q-list  padding class="rounded-borders  full-width">
        <q-item
          clickable
          v-ripple
          :to="{name:'InicioFornecedor'}"
        >
          <q-item-section avatar>
            <q-icon name="account_circle" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Alterar Contas</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="business" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Meus Negócios</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="shopping_cart" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Meu Plano</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="add_chart" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Cobranças</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
       
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="support_agent" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Fale conosco</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="settings" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Configurações</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="logout" color="grey-9" />
          </q-item-section>

          <q-item-section @click="logout" class="text-h6 text-grey-8">Sair</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
      </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <q-btn @click="drawer = !drawer" class=" absolute-top-right" icon="keyboard_backspace" flat size="17px" />
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </div>
        <div class="absolute-center bg-transparent" style="margin-left:10px">
          <div class="text-h6">Kevas</div>
          <div>kevasevander@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>
    <!-- NÃO ESTÁ LOGADO -->
    <q-drawer 
      v-if="!logado"
      show-if-above
      :width="360"
      :breakpoint="400"
      v-model="drawer"
    >
      <q-list  padding class="rounded-borders  full-width" style="margin-top:150px">
        <q-item
          clickable
          v-ripple
          :to="{name:'InicioFornecedor'}"
        >
          <q-item-section avatar>
            <q-icon name="account_circle" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Sou um Fornecedor</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="settings" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Configurações</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="support_agent" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Fale conosco</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="work" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Trabalhe conosco</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>

      </q-list>
      <q-img  class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <q-btn color="white" @click="drawer = !drawer" class=" absolute-top-right" icon="keyboard_backspace" flat size="17px" />
      </q-img>
    </q-drawer>
    <q-page-container >
      <router-view />
    </q-page-container>
      <q-footer v-show="mostrarFooter" class="">
        <q-tabs
          v-model="tab"
          dense
          class="bg-white text-grey-6"
          align="justify"
          indicator-color="pink"
          active-color="pink"
          narrow-indicator
        >
          <q-tab @click="irHome" name="Home" icon="home" label="Home" no-caps />
          <q-tab @click="irCategorias" name="Categorias" icon="restaurant_menu" label="Categorias" no-caps />
          <q-tab @click="irFavoritos" name="Favoritos" icon="favorite_border" label="Favoritos" no-caps />
          <q-tab @click="drawer = !drawer" name="Mais" icon="more_horiz" label="Mais" no-caps />
        </q-tabs>
    </q-footer>

    <!--DIALOG PAGAMENTO -->
    <q-dialog
     v-model="dialogPagamento"
    >
      <q-card style="width: 300px;" >
        <q-card-section>
          <div class="text-h6 text-primary text-center">Thank You!</div>
          <div class="text-center text-grey-7">Your transaction has been done successful</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-separator />
        </q-card-section>

         <q-card-section class="q-pt-none">
         <div class="row">
             <div class="col-6 text-grey-7 text-h6">Date</div>
             <div class="col-5 offset-1 text-grey-7 text-h6">Time</div>
         </div>
         <div class="row">
             <div class="col-6  text-h6">02, Jan 2020</div>
             <div class="col-5 offset-1  text-h6">14:18 PM</div>
         </div>
        </q-card-section>
        <q-card-section>
            <q-list  >
                <q-item style="">
                    <q-item-section style="max-width:40px" >
                        <q-avatar color="positive" text-color="white"> 1</q-avatar>
                    </q-item-section>

                    <q-item-section style="padding:10px">
                        <q-item-label class="text-h6">Plano A</q-item-label>
                        <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
        <q-card-section>
            <div class="row">
                <div class="col-6 text-grey-7 text-h6">Amount</div>
                <div class="col-6 text-grey-7 text-h6">Completed</div>
            </div>
             <div class="row">
             <div class="col-6  text-h6">304 $</div>
             <div class="col-5 offset-1  text-h6"></div>
         </div>
        </q-card-section>
        <q-card-section >
            <q-list  >
                <q-item style="">
                    <q-item-section style="max-width:40px" >
                        <q-avatar color="positive" text-color="white"> 1</q-avatar>
                    </q-item-section>

                    <q-item-section style="padding:10px">
                        <q-item-label class="text-h6">Credit/Debit Card</q-item-label>
                        <q-item-label caption lines="2">Master Card ending ***0</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
      </q-card>
      <div class="row justify-center bg-grey-5" style="border-radius:50px">
          <q-btn   @click="mudarDialogPagamento(false)" round  text-color="black" icon="close"  />
      </div >
    </q-dialog>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      mostrarBotaoHeaderEsquerdo:false,
      // mostrarBotaoHeaderDireito:false, 
      labelHeader:'',

      drawer: false,
     
   
      height:'600px',
      tab:'Home',

      mostrarFooter:false,
      mostrarHeader:false,

      paginaAtual:'',
      paginaAnterior:'',

    
    }
  },
  computed:{
    dialogPagamento(){
      return this.$store.state.EuQueroFesta.dialogPagamento
    },
    logado(){
      return this.$store.state.EuQueroFesta.logado
    }
  },
  methods:{
    logout(){
      this.mudarLogado(false)
      this.drawer = false
      if(this.paginaAtual != 'Home')
        this.$router.push({name:'Home'})
    },
    mudarDialogPagamento(val){
      this.$store.commit('EuQueroFesta/mudarDialogPagamento',val)
    },
    mudarLogado(val){
      this.$store.commit('EuQueroFesta/mudarLogado',val)
    },
    irMais(){
      this.$router.push({name:'Mais'})
    },
    irHome(){
      this.$router.push({name:'Home'})
    },
    irFavoritos(){
      this.$router.push({name:'Favoritos'})
    },
    irCategorias(){
      this.$router.push({name:'Categorias'})
    },
    inicializarFooter(){
       if(
          this.paginaAtual == 'Home' || this.paginaAtual == 'Categorias'  || this.paginaAtual == 'Favoritos' || 
          this.paginaAtual == 'Fornecedores' 
        ){
        this.mostrarFooter = true 
      }else{
         this.mostrarFooter = false 
      }
    },
    inicializarHeader(){
      console.log("mostrarFooter")
      if(this.paginaAtual == 'Index' || this.paginaAtual == 'Home' || this.paginaAtual == 'Fornecedor'){
        this.mostrarHeader = false
      }else{
        this.mostrarHeader = true;
        this.inicializarLabelHeader()
      }
    },
    acaoBotaoHeaderEsquerdo(){
      if(this.paginaAtual == 'Categorias' || this.paginaAtual == 'Fornecedor' || this.paginaAtual == 'Favoritos'){
        this.$router.push({name:'Home'})
        return
      }
      if(this.paginaAtual == 'InicioFornecedor'){
        this.$router.push({name:'Home'})
        return
      } 
      if(this.paginaAtual == 'LoginFornecedor' || this.paginaAtual == 'CadastroFornecedor'){
        this.$router.push({name:'InicioFornecedor'})
        return
      }
      if(this.paginaAtual == 'PlanosFornecedor'){
        this.$router.push({name:'CadastroFornecedor' })
        return
      }
      if(this.paginaAtual == 'PagamentoFornecedor'){
        this.$router.push({name:'PlanosFornecedor'})
        return
      }

    },
    inicializarLabelHeader(){
      if(
          this.paginaAtual == 'Index' || this.paginaAtual == 'Home' || this.paginaAtual == 'Fornecedor' ||
          this.paginaAtual == 'CadastroFornecedor' || this.paginaAtual == 'LoginFornecedor' || this.paginaAtual == 'InicioFornecedor' ||
          this.paginaAtual == 'PlanosFornecedor'
      ){
        this.labelHeader = ""
      } else {
        if(this.paginaAtual == "Categorias")this.labelHeader = 'Categorias';
        if(this.paginaAtual == "Fornecedores")this.labelHeader = 'Fornecedores'
        if(this.paginaAtual == "Favoritos")this.labelHeader = 'Favoritos'
        if(this.paginaAtual == "PagamentoFornecedor")this.labelHeader = 'Pagamento'
        if(this.paginaAtual == "Mais")this.labelHeader = 'Opções'
      }
    },
  },
  watch:{
    $route: function(atual,anterior){
      console.log("WATCH - $route")

      this.paginaAtual = atual.name
      this.paginaAnterior = anterior.name
      this.tab = this.$route.name

      this.inicializarHeader()
      this.inicializarFooter()
    }
  },
  mounted(){
    console.log(this.$store)
    console.log(this.$store.state.EuQueroFesta)
   this.widthTela = this.$q.screen.width
   this.heightTela = this.$q.screen.height
  }
}
</script>
<style>
.bg-success, .bg-positive {
  background-color: #00c292 !important; 
}

</style>