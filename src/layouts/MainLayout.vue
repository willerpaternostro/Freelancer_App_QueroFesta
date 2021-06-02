<template>
  <q-layout view="lHh Lpr lFf"   >
    <q-header v-if="header"  class="bg-white text-black" style="padding-top:10px;padding-bottom:10px">
      <div class="row">
        <div class="col-2">
          <q-btn
            flat
            dense
            round
            icon="keyboard_backspace"
            aria-label="Menu"
            @click="acaoBotaoHeaderEsquerdo"
            v-show="botaoHeaderEsquerdo"
          />
        </div>
        <div class="text-center text-pink-4 text-h5 text-weight-bold col-8">
          <span> {{labelHeader}} </span>
        </div>
        <div class="col-2"></div>
      </div>
    </q-header>
 
    <q-page-container class="">
      <router-view  />
    </q-page-container>

    <footer v-show="footer" :class="!teclado?'fixed-bottom':''">
        <q-tabs
          v-if="tabFooter"
          v-model="tab"
          dense
          class="bg-white text-grey-6"
          align="justify"
          indicator-color="pink"
          active-color="pink"
          narrow-indicator
        >
          <q-tab @click="$router.push({name:'Home'})" name="Home" icon="home" label="Home" no-caps />
          <q-tab @click="$router.push({name:'Categorias'})" name="Categorias" icon="restaurant_menu" label="Categorias" no-caps />
          <q-tab @click="$router.push({name:'Favoritos'})" name="Favoritos" icon="favorite_border" label="Favoritos" no-caps />
          <q-tab @click="$router.push({name:'Mais'})" name="Mais" icon="more_horiz" label="Mais" no-caps />
        </q-tabs>
        <div v-if="botaoFooter"  style="padding:10px 0px 20px" class="row justify-center bg-white">
            <q-btn @click="acaoBotaoFooter"  class="col-8" :label="labelFooter" rounded no-caps color="pink" />
        </div>
    </footer>

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
          <q-btn size="21px"  @click="mudarDialogPagamento(false)" round  text-color="black" icon="close"  />
      </div >
    </q-dialog>
  </q-layout>
</template>

<script>
import { Plugins, KeyboardInfo } from '@capacitor/core';
const { Device } = Plugins;
//const { PushNotifications } = Plugins;
const { Keyboard } = Plugins;
export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false,
      height:'600px',
    
    //FOOTER
      footer:false,
      tabFooter:false,
      botaoFooter:false ,
      tab:'Home',
      labelFooter:'',

    //HEADER
      header:false,
      botaoHeaderEsquerdo:false,
      labelHeader:'',

      paginaAtual:'Index',
      paginaAnterior:'',

      teclado:false
    }
  },
  computed:{
    dialogPagamento(){
      return this.$store.state.EuQueroFesta.dialogPagamento
    },
    statusLogado(){
      return this.$store.state.EuQueroFesta.statusLogado
    }
  },

  methods:{
    //HEADER
    inicializarHeader(){
      if(this.paginaAtual == "Index"){
        this.header = false;
        this.labelHeader = "";
        this.botaoHeaderEsquerdo = false
        return
      } 
      if(this.paginaAtual == "Localizacao"){
        this.header = true;
        this.botaoHeaderEsquerdo = false
        this.labelHeader = "Qual a sua Localização?";
        return
      } 
      if(this.paginaAtual == "Home"){
        this.header = false;
        this.botaoHeaderEsquerdo = false
        this.labelHeader = "";  
        return
      }
      if(this.paginaAtual == "Mais"){
        this.header = false;
        this.botaoHeaderEsquerdo = false
        this.labelHeader = ""; 
        return
      }    
      if(this.paginaAtual == "Categorias"){
        this.header = true;
        this.botaoHeaderEsquerdo = true
        this.labelHeader = "Categorias"; 
        return
      } 
      if(this.paginaAtual == "Favoritos"){
        this.header = true;
        this.botaoHeaderEsquerdo = true
        this.labelHeader = "Favoritos"; 
        return
      } 
      if(this.paginaAtual == "Fornecedores"){
        this.header = true;
        this.botaoHeaderEsquerdo = true
        this.labelHeader = "Fornecedores"; 
        return
      }
      if(this.paginaAtual == "Fornecedor"){
        this.header = false;
        this.labelHeader = "";
        this.botaoHeaderEsquerdo = false
        return
      }

      //SOU FORNECEDOR  
      if(this.paginaAtual == "CadastroFornecedor"){
        this.header = true;
        this.labelHeader = "Cadastro";
        this.botaoHeaderEsquerdo = true
        return;
      }
      if(this.paginaAtual == "CallCenterFornecedor"){
        this.header = true;
        this.labelHeader = "Call Center";
        this.botaoHeaderEsquerdo = true
        return
      }
      if(this.paginaAtual == "CobrancaDetalhes"){
        this.header = true;
        this.botaoHeaderEsquerdo = true
        this.labelHeader = "Cobranças"; 
        return
      }
      if(this.paginaAtual == "CobrancasFornecedor"){
        this.header = true;
        this.labelHeader = "Cobranças";
        this.botaoHeaderEsquerdo = true;
        return
      }
      if(this.paginaAtual == "ConfiguracoesFornecedor"){
        this.header = true;
        this.labelHeader = "Configurações";
        this.botaoHeaderEsquerdo = true
        return
      }
      if(this.paginaAtual == "EditProfile"){
        this.header = true;
        this.labelHeader = "Edit Profile";
        this.botaoHeaderEsquerdo = true
        return
      }
      if(this.paginaAtual == "LoginFornecedor"){
        this.header = true;
        this.labelHeader = "Login";
        this.botaoHeaderEsquerdo = true
        return
      }
      if(this.paginaAtual == "InicioFornecedor"){
        this.header = false;
        this.labelHeader = "";
        this.botaoHeaderEsquerdo = false
        return
      }
      if(this.paginaAtual == "PagamentoFornecedor"){
        this.header = true;
        this.labelHeader = "Pagamento";
        this.botaoHeaderEsquerdo = true
        return
      }
      if(this.paginaAtual == "PlanosFornecedor"){
        this.header = true;
        this.labelHeader = "";
        this.botaoHeaderEsquerdo = true
        return
      }
     
      //NEGÓCIOS
      if(this.paginaAtual == "MeusNegocios"){
        this.header = true;
        this.labelHeader = "Meus Negócios";
        this.botaoHeaderEsquerdo = true
        return
      } 
      if(this.paginaAtual == "InformacaoNegocio"){
        this.header = true;
        this.labelHeader = "Meu Negócio";
        this.botaoHeaderEsquerdo = true
        return
      } 
      if(this.paginaAtual == "CidadeNegocio"){
        this.header = true;
        this.labelHeader = "Cidade do Negócio";
        this.botaoHeaderEsquerdo = true
        return
      }  
      if(this.paginaAtual == "CategoriaNegocio"){
        this.header = true;
        this.labelHeader = "Categoria do Negócio";
        this.botaoHeaderEsquerdo = true
        return
      }  
      if(this.paginaAtual == "NomeNegocio"){
        this.header = true;
        this.labelHeader = "Nome do Negócio";
        this.botaoHeaderEsquerdo = true
        return
      }  
      if(this.paginaAtual == "ContatoNegocio"){
        this.header = true;
        this.labelHeader = "Contato";
        this.botaoHeaderEsquerdo = true
        return
      } 
      if(this.paginaAtual == "RedesSociaisNegocio"){
        this.header = true;
        this.labelHeader = "Redes Sociais";
        this.botaoHeaderEsquerdo = true
        return
      } 
      if(this.paginaAtual == "FotosVideosNegocio"){
        this.header = true;
        this.labelHeader = "Fotos e Videos";
        this.botaoHeaderEsquerdo = true
        return
      }  
      if(this.paginaAtual == "DescricaoNegocio"){
        this.header = true;
        this.labelHeader = "Descrição do Negócio";
        this.botaoHeaderEsquerdo = true
        return
      } 
    },
    acaoBotaoHeaderEsquerdo(){
      if(this.paginaAtual == 'Categorias'){this.botaoVoltar(); return;}
      if(this.paginaAtual == 'Fornecedor'){this.botaoVoltar(); return;}
      if(this.paginaAtual == 'Favoritos'){this.botaoVoltar(); return}
      if(this.paginaAtual == 'InicioFornecedor'){this.botaoVoltar(); return}
      if(this.paginaAtual == 'LoginFornecedor'){this.botaoVoltar(); return}
      if(this.paginaAtual == 'CadastroFornecedor'){this.botaoVoltar(); return}
      if(this.paginaAtual == 'PlanosFornecedor'){this.botaoVoltar(); return}
      if(this.paginaAtual == 'PagamentoFornecedor'){this.botaoVoltar(); return}
      
      //NEGÓCIOS
      if(this.paginaAtual == "MeusNegocios"){this.botaoVoltar(); return}
      if(this.paginaAtual == "InformacaoNegocio"){this.botaoVoltar(); return}
      if(this.paginaAtual == "CidadeNegocio"){this.botaoVoltar(); return} 
      if(this.paginaAtual == "CategoriaNegocio"){this.botaoVoltar(); return}
      if(this.paginaAtual == "NomeNegocio"){this.botaoVoltar(); return}  
      if(this.paginaAtual == "ContatoNegocio"){this.botaoVoltar(); return}
      if(this.paginaAtual == "RedesSociaisNegocio"){this.botaoVoltar(); return}
      if(this.paginaAtual == "FotosVideosNegocio"){this.botaoVoltar(); return} 
      if(this.paginaAtual == "DescricaoNegocio"){this.botaoVoltar(); return}
      if(this.paginaAtual == "Fornecedores"){this.botaoVoltar(); return}
      if(this.paginaAtual == "CobrancaDetalhes"){this.botaoVoltar(); return}
      if(this.paginaAtual == "CobrancasFornecedor"){this.botaoVoltar(); return}
      this.botaoVoltar()
    },
    //FOOTER
    inicializarFooter(){
      if(this.paginaAtual == "Index"){this.footer = false; return} 
      if(this.paginaAtual == "Localizacao"){this.footer = false; return} 
      if(this.paginaAtual == "Fornecedor"){this.footer = false; return}
      if(this.paginaAtual == "Home"){
        this.footer = true; 
        this.botaoFooter = false;
        this.tabFooter = true;
        this.labelFooter = ''; 
        return
      }   
      if(this.paginaAtual == "Categorias"){
        this.footer = true;
        this.botaoFooter = false;
        this.tabFooter = true;
        this.labelFooter = ''
        return;
      } 
      if(this.paginaAtual == "Favoritos"){
        this.footer = true; 
        this.botaoFooter = false;
        this.tabFooter = true;
        this.labelFooter = ''
        return;
      } 
      if(this.paginaAtual == "Fornecedores"){
        this.footer = true; 
        this.botaoFooter = false;
        this.tabFooter = true;
        this.labelFooter = ''
        return;
      }
      if(this.paginaAtual == "Mais"){
        this.footer = false; 
        this.botaoFooter = false;
        this.tabFooter = true;
        this.labelFooter = ''
        return;
      }
      
      //SOU FORNECEDOR  
      if(this.paginaAtual == "CadastroFornecedor"){this.footer = false; return}
      if(this.paginaAtual == "CallCenterFornecedor"){this.footer = false; return}
      if(this.paginaAtual == "CobrancaDetalhes"){this.footer = false; return}
      if(this.paginaAtual == "CobrancasFornecedor"){this.footer = false; return}
      if(this.paginaAtual == "ConfiguracoesFornecedor"){this.footer = false; return}
      if(this.paginaAtual == "LoginFornecedor"){this.footer = false; return}
      if(this.paginaAtual == "InicioFornecedor"){this.footer = false; return}

      if(this.paginaAtual == "EditProfile"){
        this.footer = true;
        this.botaoFooter = true;
        this.tabFooter = false;
        this.labelFooter="Salvar" 
        return
      }
      
      if(this.paginaAtual == "PagamentoFornecedor"){
        this.footer = true;
        this.botaoFooter = true;
        this.tabFooter = false;
        this.labelFooter="Continuar" 
        return;
      }
      if(this.paginaAtual == "PlanosFornecedor"){
        this.footer = true; 
        this.botaoFooter = true;
        this.tabFooter = false;
        this.labelFooter = "Continuar"
        return
      }
      //NEGÓCIOS
      if(this.paginaAtual == "MeusNegocios"){this.footer = false; return} 
      if(this.paginaAtual == "InformacaoNegocio"){this.footer = false; return} 
      if(this.paginaAtual == "CidadeNegocio"){this.footer = false; return}  
      if(this.paginaAtual == "CategoriaNegocio"){this.footer = false; return}  
      if(this.paginaAtual == "NomeNegocio"){this.footer = false; return}
      if(this.paginaAtual == "ContatoNegocio"){this.footer = false; return}
      if(this.paginaAtual == "RedesSociaisNegocio"){this.footer = false; return}
      if(this.paginaAtual == "FotosVideosNegocio"){this.footer = false; return}
      if(this.paginaAtual == "DescricaoNegocio"){this.footer = false; return}
    },
    acaoBotaoFooter(){
      //SOU FORNECEDOR  
      if(this.paginaAtual == "EditProfile"){this.botaoFooter = true; return}
      if(this.paginaAtual == "PagamentoFornecedor"){
        this.mudarDialogPagamento(true)
        this.mudarStatusLogado(true)
        this.$router.push({name:'CidadeNegocio'})
      }
      if(this.paginaAtual == "PlanosFornecedor"){
        this.$router.push({name:'PagamentoFornecedor'}) 
        return
      }
      //NEGÓCIOS
      if(this.paginaAtual == "NomeNegocio"){
        this.$router.push({name:'ContatoNegocio'}); 
        return;
      }  
      if(this.paginaAtual == "ContatoNegocio"){
        this.$router.push({name:'FotosVideosNegocio'});  
        return
      } 
      if(this.paginaAtual == "RedesSociaisNegocio"){
        this.$router.push({name:'DescricaoNegocio'});
        return
      } 
      if(this.paginaAtual == "FotosVideosNegocio"){
        this.$router.push({name:'RedesSociaisNegocio'});
        return
      }  
      if(this.paginaAtual == "DescricaoNegocio"){
        this.$router.push({name:'MeusNegocios'});
        return
      } 
    },

   
    //AÇÕES
    logout(){
      this.mudarStatusLogado(false)
      this.drawer = false
      if(this.paginaAtual != 'Home')
        this.$router.push({name:'Home'})
    },
    mudarDialogPagamento(val){
      this.$store.commit('EuQueroFesta/mudarDialogPagamento',val)
    },
    mudarStatusLogado(val){
      this.$store.commit('EuQueroFesta/mudarStatusLogado',val)
    },
    async obterInformacoesDispositivo(info){
      info = await Device.getInfo()
      console.log(info)
      this.$q.localStorage.set('plataforma', info.platform)
      if(info.uuid){
        this.$q.localStorage.set('_capuid', info.uuid)
      }
    },
    botaoVoltar(){
      if(this.paginaAtual == 'Categorias' || this.paginaAtual == 'Fornecedor' || this.paginaAtual == 'Favoritos'){
        this.$router.push({name:'Home'})
        return
      }
      if(this.paginaAtual == 'InicioFornecedor'){
        this.$router.push({name:'Home'})
        return
      } 
      
      if(this.paginaAtual == 'LoginFornecedor' || this.paginaAtual == 'CadastroFornecedor'){
        if(!this.statusLogado){
          this.$router.push({name:'InicioFornecedor'})
        }else{
          this.$router.push({name:'Mais'})
        }
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
      //NEGÓCIOS
      if(this.paginaAtual == "MeusNegocios"){
         this.$router.push({name:'Home'})
        return
      } 
      if(this.paginaAtual == "InformacaoNegocio"){
        this.$router.push({name:'MeusNegocios'})
        return
      } 
      if(this.paginaAtual == "CidadeNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
          let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
          this.$router.push({name:'MeusNegocios'})
          return
        }
        
      }  
      if(this.paginaAtual == "CategoriaNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
           let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
          this.$router.push({name:'CidadeNegocio'})
          return
        }
      }  
      if(this.paginaAtual == "NomeNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
           let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
          this.$router.push({name:'CategoriaNegocio'})
          return
        }
      }  
      if(this.paginaAtual == "ContatoNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
           let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
          this.$router.push({name:'NomeNegocio'})
          return
        } 
      }
      if(this.paginaAtual == "RedesSociaisNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
           let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
          this.$router.push({name:'ContatoNegocio'})
          return
        } 
      }
      if(this.paginaAtual == "FotosVideosNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
           let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
          this.$router.push({name:'RedesSociaisNegocio'})
          return
        }
      }  
      if(this.paginaAtual == "DescricaoNegocio"){
        if(this.paginaAnterior === 'InformacaoNegocio'){
           let ultimaLojaVista = this.$q.localStorage.getItem('ultimaLojaVista')
          this.$router.push({name:'InformacaoNegocio',params:{meuNegocio:ultimaLojaVista}})
          return
        }else{
        this.$router.push({name:'FotosVideosNegocio'})
        return
        } 
      }
      //FORNECEDOR
      if(this.paginaAtual == "Fornecedores"){
        this.$router.push({name:'Home'})
        return
      }
      if(this.paginaAtual == "CobrancaDetalhes"){
        this.$router.push({name:'CobrancasFornecedor'})
        return
      }
      if(this.paginaAtual == "CobrancasFornecedor"){
        this.$router.push({name:'Mais'})
        return
      }
     
      this.$router.push({name:this.paginaAnterior})
    },
  
    
  },
  watch:{
    $route: function(atual,anterior){
      this.paginaAtual = atual.name
      this.paginaAnterior = anterior.name
      this.$q.localStorage.set('paginaAtual',this.paginaAtual)
      this.$q.localStorage.set('paginaAnterior',this.paginaAnterior)
      this.tab = this.$route.name

      this.inicializarHeader()
      this.inicializarFooter()
    }
  },
  mounted(){
    const ctx = this
    this.widthTela = this.$q.screen.width
    this.heightTela = this.$q.screen.height
   
    window.addEventListener('keyboardWillShow', (e) => {
       ctx.teclado = true
    });
    window.addEventListener('keyboardWillHide', () => {
        ctx.teclado = false
    });

    if(this.paginaAtual == 'Index'){
      this.obterInformacoesDispositivo()
    }
  }
}
</script>
<style>
.bg-success, .bg-positive {
  background-color: #00c292 !important; 
}

</style>