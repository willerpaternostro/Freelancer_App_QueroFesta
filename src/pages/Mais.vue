 <template>
    <div >
      <!-- ESTÁ LOGADO -->
      <div v-if="statusLogado" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <div>
        <q-list  padding class="rounded-borders  full-width">
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'LoginFornecedor'})"
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
          @click="$router.push({name:'MeusNegocios'})"
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
          @click="$router.push({name:'Home'})"
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
          @click="$router.push({name:'CobrancasFornecedor'})"
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
          @click="$router.push({name:'CallCenterFornecedor'})"
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
          @click="$router.push({name:'ConfiguracoesFornecedor'})"
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
          @click="logout"
        >
          <q-item-section avatar>
            <q-icon name="logout" color="grey-9" />
          </q-item-section>

          <q-item-section  class="text-h6 text-grey-8">Sair</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
      </q-list>
      </div>

      <q-img class="absolute-top " src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <q-btn :to="{name:'Home'}" text-color="white" class=" absolute-top-right" icon="keyboard_backspace" flat size="17px" />
        <div class="absolute-bottom bg-transparent">
          <q-avatar @click="$router.push({name:'EditProfile'})"  size="80px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </div>
        <div class="absolute-center bg-transparent" style="margin-left:10px">
          <div class="text-h6">Kevas</div>
          <div>kevasevander@gmail.com</div>
        </div>
      </q-img>
    </div>
    <!-- NÃO ESTÁ LOGADO -->
      <div  v-if="!statusLogado" >
        <q-btn :to="{name:'Home'}" class=" absolute-top-left" flat icon="keyboard_backspace" label="Voltar" no-caps  size="17px" /><br>
    
        <q-list   class="rounded-borders"   style="margin-top:20px">
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'InicioFornecedor'})"
          style="background-color:#FECC00;padding:10px"
        
        >
          <q-item-section avatar>
           <q-icon color="white" name="fas fa-plus" />
          </q-item-section>

          <q-item-section class="text-h6 text-white">FORNECEDOR</q-item-section>

          <q-item-section avatar>
            <q-icon color="white" name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'ConfiguracoesFornecedor'})"
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
          @click="$router.push({name:'CallCenterFornecedor'})"
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
          @click="$router.push({name:'CallCenterFornecedor'})"
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
  computed:{
     statusLogado(){
      return this.$store.state.EuQueroFesta.statusLogado
    }
  },
  methods:{
    irCategoriaNegocio(){
      this.$router.push({name:'Home'})
    },
    logout(){
      this.mudarStatusLogado(false)
      this.drawer = false
      if(this.paginaAtual != 'Home')
        this.$router.push({name:'Home'})
    },
     mudarStatusLogado(val){
      this.$store.commit('EuQueroFesta/mudarStatusLogado',val)
    },
  }
}
</script>

<style>

</style>