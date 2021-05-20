<template>
    <div >
        <q-list>
            <!-- TITULO -->
            <q-item>
                <q-item-section >
                <q-item-label class="text-h6 text-grey-7">Título</q-item-label>
                <q-item-label class="text-grey-9"   lines="2">{{meuNegocio.sto_title?meuNegocio.sto_title:'Não informado'}}</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
             <!-- DESCRIÇÃO -->
             <q-item>
                <q-item-section >
                <q-item-label class="text-h6 text-grey-7">Descrição</q-item-label>
                <q-item-label class="text-grey-9"   lines="2">{{meuNegocio.sto_description?meuNegocio.sto_description:'Não informado'}}</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
             <!-- CONTATO -->
            <q-item>
                <q-item-section>
                <q-item-label class="text-h6 text-grey-7">Contato</q-item-label>
                <q-item-label v-if="meuNegocio['sto_phone']"   class="text-grey-9"  lines="2" style="margin-top:10px">
                    <q-icon name="fas fa-phone-alt" />
                    {{meuNegocio['sto_phone']?meuNegocio['sto_phone']:''}}
                </q-item-label>
                <q-item-label v-if="meuNegocio['sto_celphone']" class="text-grey-9"  lines="2" style="margin-top:10px">
                    <q-icon size="18px"  name="fab fa-whatsapp" color="positive" />
                    {{meuNegocio['sto_celphone']?meuNegocio['sto_celphone']:''}}
                </q-item-label>
                <q-item-label v-if="meuNegocio['sto_website']" class="text-grey-9"  lines="2">
                    <q-icon name="far fa-window-maximize"  />
                    <q-btn type="a" :href="meuNegocio['sto_website']" target="blank" no-caps size="12px" flat :label="meuNegocio['sto_website']"/>
                </q-item-label>
               
                </q-item-section>
                <q-item-section side top >
                    <q-icon size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
        </q-list>
             <!-- REDES SOCIAIS -->
        <q-list >
            <q-item>
                <q-item-section>
                <q-item-label class="text-h6 text-grey-7">Redes Sociais</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
             <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar size="30px" color="blue" text-color="white" icon="fab fa-facebook" />
                </q-item-section>
                <q-item-section>htpps://facebook.com/loja</q-item-section>
            </q-item>
             <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar size="30px"  color="pink" text-color="white" icon="fab fa-instagram" />
                </q-item-section>
                <q-item-section>htpps://instagram.com/loja</q-item-section>
            </q-item>
             <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar size="30px"  color="red" text-color="white" icon="fab fa-youtube" />
                </q-item-section>
                <q-item-section>htpps://youtube.com/loja</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar size="30px"  color="info" text-color="white" icon="fab fa-twitter" />
                </q-item-section>
                <q-item-section>htpps://twitter.com/loja</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar size="30px"  color="black" text-color="white" icon="fab fa-tiktok" />
                </q-item-section>
                <q-item-section>htpps://tiktok.com/loja</q-item-section>
            </q-item>

          
        </q-list>
         <!-- FOTOS  -->
        <div class="row" style="padding-left:16px; margin-top:20px">
            <div class="col-5 text-grey-7">Foto Principal </div>
            <q-icon class="col-1" size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;" />
            <div class="offset-1 col-4 text-grey-7">Foto de Capa</div>
            <q-icon class="col-1" size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;"  />
        </div>
        <div class="row" style="padding-left:16px">
            <div class="col-6">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    spinner-color="white"
                    style="height: 70px; max-width: 150px"
                    />
            </div>
            <div class="offset-1 col-5">
                <q-img
                    src="https://placeimg.com/500/300/nature"
                    spinner-color="white"
                    style="height: 70px; max-width: 150px"
                    />
            </div>
        </div>
        <div class="row" style="padding:16px 0px 0px 16px">
            <div class="col-6 text-grey-7">Foto do Negócio <q-icon class="col-1" size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;padding-left:16px" /></div>
            
        </div>
         <div class="row" style="padding-left:16px">
            <div v-for="(foto, index) in fotosDoNegocio" :key="index" class="col-3">
                <q-img
                :src="foto"
                spinner-color="white"
                style="height: 70px; max-width: 90px"
                />
            </div>
          
        </div>
        <div  >
            <q-list class="rounded-borders" style="padding:16px 0px 0px 0px">
                <q-expansion-item
                    dense
                    dense-toggle
                    expand-separator
                    icon="perm_identity"
                    label="Ver Estatísticas"
                    header-class="text-blue text-h6"
                >
                    <q-card>
                    <q-card-section>
                        Table?
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
            <q-btn style="margin-top:10px" @click="statusBotao = !statusBotao" :label="statusBotao?'Publicado':'Não Publicado'" no-caps class="full-width" :color="statusBotao?'positive':'red'" />
        </div>
    </div>
</template>
<script>


export default {

  data(){
    return{
        items:[1,2,3,4,5],
        meuNegocio:'',
        fotosDoNegocio:[],
        statusBotao:false
      }
  },
  methods:{
      
  
  },
  beforeMount(){
      console.log(this.$route);
       if(this.$route.params.meuNegocio){
        console.log(this.$route.params.meuNegocio);
          this.meuNegocio = this.$route.params.meuNegocio 
          if(this.meuNegocio.sto_photos_data){
              let fotosDoMeuNegocio = this.meuNegocio.sto_photos_data;
              if(typeof this.meuNegocio.sto_photos_data === 'string'){
                  console.log("ENTROU TYPEOF == STING");
                  fotosDoMeuNegocio = JSON.parse(this.meuNegocio.sto_photos_data)
              }

              fotosDoMeuNegocio = fotosDoMeuNegocio.photos

              fotosDoMeuNegocio.forEach(element => {
                 
                  this.fotosDoNegocio.push(element)
              });
          }
      }
  },
  mounted(){
     
  }
}
</script>

<style>

</style>