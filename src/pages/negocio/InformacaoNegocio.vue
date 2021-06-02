<template>
    <div >
        <q-list>
            <!-- TITULO -->
            <q-item>
                <q-item-section >
                <q-item-label class="text-h6 text-grey-7">Título</q-item-label>
                <q-item-label class="text-grey-9"   lines="2">{{meuNegocio['sto_title']?meuNegocio['sto_title']:'Não informado'}}</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon @click="$router.push({name:'NomeNegocio', params:{editar:'editar',negocioAlterar:meuNegocio}})" size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
             <!-- DESCRIÇÃO -->
             <q-item>
                <q-item-section >
                <q-item-label class="text-h6 text-grey-7">Descrição</q-item-label>
                <q-item-label class="text-grey-9"   lines="2">{{meuNegocio['sto_description']?meuNegocio['sto_description']:'Não informado'}}</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon  @click="$router.push({name:'DescricaoNegocio', params:{editar:'editar',negocioAlterar:meuNegocio}})" size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
             <!-- CONTATO -->
            <q-item >
                <q-item-section>
                <q-item-label  class="text-h6 text-grey-7">Contato</q-item-label>
                <q-item-label v-if="meuNegocio['sto_address']"   class="text-grey-9"  lines="2" style="margin-top:10px">
                    <q-icon name="fas fa-map-marker-alt" />
                    {{meuNegocio['sto_address']?meuNegocio['sto_address']:''}}
                </q-item-label>
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
                    <q-icon  @click="$router.push({name:'ContatoNegocio', params:{editar:'editar',negocioAlterar:meuNegocio}})" size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
        </q-list>
             <!-- REDES SOCIAIS -->
        <q-list >
            <q-item >
                <q-item-section>
                <q-item-label class="text-h6 text-grey-7">Redes Sociais</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-icon  @click="$router.push({name:'RedesSociaisNegocio', params:{editar:'editar',negocioAlterar:meuNegocio}})" size="15px" name="fas fa-pen" color="grey-9" />
                </q-item-section>
            </q-item>
             <q-item  clickable v-ripple v-for="(redeSocial) in redesSociais" :key="redeSocial.nome">
                <q-item-section avatar>
                <q-btn round size="12px" :color="redeSocial.corIcone" text-color="white" :icon="redeSocial.icone" />
                </q-item-section>
                <q-item-section>{{redeSocial.link}}</q-item-section>
            </q-item>
        </q-list>
         <!-- FOTOS  -->
        <div class="row" style="padding-left:16px; margin-top:20px">
            <div v-if="fotoPrincipal" class="col-6 row text-grey-7">
                <span class="col-10">Foto Principal</span> 
                 <q-icon  @click="$router.push({name:'FotosVideosNegocio', params:{editar:'editar',negocioAlterar:meuNegocio,fotoEditar:'fotoPrincipal'}})"  size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;" />
            </div>
           <div v-if="fotoCapa" class="col-6 row text-grey-7" >
               <span class="col-10" style="padding-left:4px">Foto de Capa </span>
                <q-icon class="col-2"  @click="$router.push({name:'FotosVideosNegocio', params:{editar:'editar',negocioAlterar:meuNegocio,fotoEditar:'fotoCapa'}})" size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;"  />
            </div>
       </div>
        <div class="row" style="padding:2px 2px 2px 16px">
            <div v-if="fotoPrincipal" class="col-6">
                  <q-img
                    :src="fotoPrincipal"
                    spinner-color="white"
                    style="height: 100px; "
                    />
            </div>
            <div v-if="fotoCapa" class="col-6"  style="padding:2px 2px 2px 4px">
                <q-img
                    :src="fotoCapa"
                    spinner-color="white"
                    style="height: 100px;"
                    />
            </div>
        </div>

        <!-- Fotos do negócio    -->
        <div v-if="fotosDoNegocio">
        <div class="row" style="padding:16px 0px 0px 16px">
            <div class="col-6 text-grey-7">
                <span>Foto do Negócio</span> 
                <q-icon  @click="$router.push({name:'FotosVideosNegocio', params:{editar:'editar',negocioAlterar:meuNegocio,fotoEditar:'fotosNegocio'}})" class="col-1" size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;padding-left:16px" />
            </div>  
        </div>
         <div class="row" style="padding-left:16px">
            <div v-for="(foto, index) in fotosDoNegocio" :key="index" class="col-6" style="padding:2px">
                <q-img
                 @click="verFotosNegocio(index)"  
                :src="foto"
                spinner-color="white"
                height="100px"
                />
            </div>
        </div>
        </div>
        <!-- Video Apresentação  -->
        <div v-if="meuNegocio['sto_video']" class="row" >
            <div class="col-12 text-grey-7" style="padding:16px 0px 0px 16px">
                <span>Video de apresentação</span> 
                <q-icon  @click="$router.push({name:'FotosVideosNegocio', params:{editar:'editar',negocioAlterar:meuNegocio,fotoEditar:'linkVideo'}})" class="col-1" size="15px" name="fas fa-pen" color="grey-9" style="padding-bottom:8px;padding-left:16px" />
            </div>  
            <div class="col-12" style="padding:0px 16px 0px 16px">
                <q-video
                    :ratio="16/9"
                    :src="meuNegocio['sto_video']?meuNegocio['sto_video']:''"
                />
            </div>
        </div>
        <!-- Estatísticas -->
        <div  v-if="false"  >
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
        </div>
        <div style="margin:10px 0px 4px 0px">
         <q-btn style="margin-top:10px" @click="publicarNegocio" :label="statusNegocio == '1'?'Publicado':'Não Publicado'" no-caps class="full-width" :color="statusNegocio=='1'?'positive':'red'" />
        </div>
        <!-- DIALOG FOTOS DO NEGÓCIO -->
        <q-dialog
            v-model="dialogImagens"
            full-width
        >
           
            <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            class="bg-black "
            
            >
            <q-carousel-slide    v-for="(foto,index) in fotosDoNegocio" :key="index" :name="index"  >
                <q-img contain class="full-height" :src="foto" /> 
            </q-carousel-slide>
            </q-carousel>
            
        </q-dialog>
    </div>
</template>
<script>


export default {

  data(){
    return{
        items:[1,2,3,4,5],
        meuNegocio:'',
        fotosDoNegocio:[],
        fotoPrincipal:'',
        fotoCapa:'',
        redesSociais:[],
        dialogImagens:false,
        slide:1,
        statusNegocio:''
      }
  },
    computed:{
        stores(){
            return this.$store.state.EuQueroFesta.stores
        }
    },
    watch:{
        stores:function(val){
            console.log("SOTER");
            let pos = val.findIndex(element => {element['id'] === this.meuNegocio['id']})
            if(pos > 0){
                this.meuNegocio = val[pos]
            }
        }
    },
  methods:{
      verificarRedesSociais(redesSociais){
              for(var prop in redesSociais){
                  let icone = '';
                  let corIcone = '';
                  let link = '';
                  let nome = '';
                  let verificador = false;
                    if(prop === 'facebook'){
                        if(redesSociais[prop]){
                            verificador = true
                            icone = 'fab fa-facebook'
                            corIcone = 'blue'
                            link = redesSociais[prop]
                            nome = prop
                        }
                    }
                    if(prop === 'instagram'){
                        if(redesSociais[prop]){
                            verificador = true
                            icone = 'fab fa-instagram'
                            corIcone = 'pink'
                            link = redesSociais[prop]
                            nome = prop
                        }
                       
                    }
                    if(prop === 'youtube'){
                        if(redesSociais[prop]){
                            verificador = true
                            icone = 'fab fa-youtube'
                            corIcone = 'red'
                            link = redesSociais[prop]
                            nome = prop
                        }
                    }
                    if(prop === 'twitter'){
                        if(redesSociais[prop]){
                            verificador = true
                            icone = 'fab fa-twitter'
                            corIcone = 'info'
                            link = redesSociais[prop]
                            nome = prop
                        }
                       
                    }
                    if(prop === 'tiktok'){
                        if(redesSociais[prop]){
                            verificador = true
                            icone = 'fab fa-tiktok'
                            corIcone = 'black'
                            link = redesSociais[prop]
                            nome = prop
                        }
                    }
                    if(prop === 'linkedin'){
                        if(redesSociais[prop]){
                            verificador = true
                            icone = 'fab fa-linkedin'
                            corIcone = 'info'
                            link = redesSociais[prop]
                            nome = prop
                        }
                    }
                    
                    if(verificador){
                        let redeSocial = { icone:icone, link:link, nome:nome, corIcone:corIcone}
                        this.redesSociais.push(redeSocial )
                    }else{
                        console.log("Rede "+ prop + ' não informada');
                    } 
                }
      },
      verFotosNegocio(index){
          console.log("VER FOTOS");
          this.dialogImagens = true;
          this.slide = index
      },
      publicarNegocio(){
          let statusAtual = this.statusNegocio 
             console.log(statusAtual);
            if(statusAtual == null){
                statusAtual = '1'
            }else{
                  if(statusAtual == '0'){
                statusAtual = '1'
            }else{
                statusAtual = '0'
            }
            }
          this.statusNegocio  = statusAtual
        console.log(statusAtual);
          return this.$store.dispatch('EuQueroFesta/editarLoja',{idLojaEditar:this.meuNegocio['id'], statusAtual:statusAtual}) 
      },
     

  },
  beforeMount(){
       if(this.$route.params.meuNegocio){
           console.log(this.$route.params.meuNegocio);
          this.meuNegocio = this.$route.params.meuNegocio 
          this.statusNegocio = this.meuNegocio['sto_status']
          //FOTOS DO NEGÓCIO
          if(this.meuNegocio.sto_photos_data){
              console.log("TEM FOTO");
              let fotosDoMeuNegocio = this.meuNegocio.sto_photos_data;
              if(typeof this.meuNegocio.sto_photos_data === 'string'){
                  fotosDoMeuNegocio = JSON.parse(this.meuNegocio.sto_photos_data)
              }
              console.log("FOTOO");
              console.log(fotosDoMeuNegocio);
              fotosDoMeuNegocio = fotosDoMeuNegocio.photos
              fotosDoMeuNegocio.forEach(element => {
                  this.fotosDoNegocio.push(element)
              });
          }
          //FOTO PRINCIPAL
          if(this.meuNegocio.sto_image){
            this.fotoPrincipal =  this.meuNegocio.sto_image
          }
          //FOTO DE CAPA
          if(this.meuNegocio.sto_cover){
            this.fotoCapa =  this.meuNegocio.sto_cover
          }
          //REDES SOCIAIS
          if(this.meuNegocio.sto_social_data){
              let redesSociais = this.meuNegocio.sto_social_data
              if(typeof redesSociais === 'string'){
                  redesSociais = JSON.parse(redesSociais)
              }
              this.verificarRedesSociais(redesSociais)
          }
      }
  },
  mounted(){
     
  },
  beforeDestroy(){
      this.$q.localStorage.set('ultimaLojaVista',this.meuNegocio)
  }
}
</script>

<style>

</style>