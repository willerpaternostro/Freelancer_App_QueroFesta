<template>
    <div >
        <q-card flat class="my-card">
            <q-img height="250px" :src="loja['sto_cover']" >
                <div class="absolute-top-left">
                    <q-btn :to="{name:'Fornecedores'}" flat icon="arrow_back_ios"  />
                </div>
                <div class="absolute-top-right">
                    <q-btn round color="pink" icon="share" style="margin-right:10px" />
                    <q-btn round color="pink" icon="far fa-heart" flat />
                </div>
                <div class="absolute-bottom-right ">
                    <q-badge  transparent align="middle" color="grey-7">
                        <q-icon @click="dialogImagens = !dialogImagens" size="21px" name="insert_photo" /> <span style="margin-left:5px">{{imagensNegocio.length}}</span>
                     </q-badge>
                </div>
            </q-img>
            <q-card-section>
                <q-btn
                fab
                flat
                color="red"
                class="absolute"
                style="top: 0; left: 12px; transform: translateY(-60%);"
                >
                    <q-avatar size="70px">
                        <q-img height="70px" :src="loja['sto_image']" />
                    </q-avatar>
                </q-btn>

            </q-card-section>
        </q-card>
        <div style="padding-left:6px">
            <div class="row" style="margin-top:16px;margin-bottom:8px">
                <span class="col text-h5 text-weight-bold text-grey-8">{{loja['sto_title']}}</span>
            </div>
            <div class="row">
                <span class="col  text-grey-6">{{loja['sto_categories']?loja['sto_categories']:'Categoria'}}</span>
            </div>
            <div class="row justify-end">
                <div class="col-6"> 
                     <q-rating
                        v-model="estrelas"
                        max="5"
                        size="19px"
                        color="yellow-8"
                        icon="star_border"
                        icon-selected="star"
                        icon-half="star_half" />
                        <span class="text-pink col-1 "  style="padding-left:5px">{{estrelas+' '}}</span>
                        <span class="text-grey-7 col-1 text-weight-bold" >(500+)</span>
                </div>  
            </div>
                <div class="row  text-grey-7" style="padding:6px">
                    <div class="col-12 text-capitalize " style="padding:6px">
                        <q-icon size="18px" name="fas fa-map-marker-alt" color="grey-9" />
                        <span style="margin-left:10px">{{loja['sto_address'] +', '+loja['sto_adnumber']+', '+loja['sto_city']}}</span> 
                    </div>
                    <div class="col-12" style="padding:6px">
                        <q-icon size="18px" name="fas fa-phone-alt" color="grey-9" />
                        <span class="text-primary" style="margin-left:10px">{{loja['sto_phone']}}</span> 
                    </div>
                    <div class="col-12" style="padding:6px">
                        <q-icon size="18px" name="fab fa-whatsapp" color="green" />
                        <span class="text-primary" style="margin-left:10px">{{loja['sto_celphone']}}</span> 
                    </div>
                    <div class="col-12" style="padding:6px">
                        <q-icon size="18px" name="fas fa-globe" color="grey-9" />
                        <span class="text-primary" style="margin-left:10px">{{loja['sto_website']}}</span> 
                    </div>
                
                </div>
         
            <div class="row ">
                <div class="col-12 row justify-end" >
                    <q-btn  
                        v-for="(redeSocial) in redesSociais" :key="redeSocial.nome" 
                        round style="margin-right:10px" size="14px" 
                        :color="redeSocial.corIcone"  
                        :icon="redeSocial.icone" 
                    />
                </div>
            </div>
            <div class="row" style="margin-top:8px;margin-bottom:8px">
                <span class="col text-h6  text-grey-8">Informações</span>
            </div>
            <div class="row" style="margin-top:8px;margin-bottom:8px">
                <p class="col text-grey-7">{{loja['sto_description']}}</p>
            </div>
            <div class="row text-h6 text-grey-8" >
                <div class="col-6">
                    <span>Fotos do Negócio</span> 
                </div>  
            </div>
         <div class="row" >
            <div v-for="(foto, index) in imagensNegocio" :key="index" class="col-4" style="padding:2px">
                <q-img
                @click="verFotosNegocio(index)"
                :src="foto"
                spinner-color="white"
                style="height: 70px;  "
                />
            </div>
        </div>
        <div class="row text-h6 text-grey-8" style="margin-top:20px">
                <div class="col-6">
                    <span>Video</span> 
                </div>  
            </div>
            <div class="row" style="margin-bottom:20px;">
                <q-video
                class="col"
                :src="loja['sto_video']"
                />
            </div>

        </div>
        <q-dialog v-model="dialogImagens" full-width>
            <q-carousel
                animated
                v-model="slide"
                arrows
                navigation
                infinite
                class="bg-black"
            >
             <q-carousel-slide    v-for="(foto,index) in imagensNegocio" :key="index" :name="index"  >
                <q-img contain class="full-height" :src="foto" /> 
            </q-carousel-slide>
            </q-carousel>
            
        </q-dialog>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        dialogImagens:false,
        text:'',
        slide:1,
        estrelas: 4.5,
        redesSociais:[],
        informacoes:"",
        loja:'',
        imagensNegocio:[]
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
                    this.redesSociais.push(redeSocial)
                }else{
                    console.log("Rede "+ prop + ' não informada');
                } 
            }
       },
         verFotosNegocio(index){
          console.log("VER FOTOS");
          this.dialogImagens = true;
          this.slide = index
      }
  },
    beforeMount(){
          if(this.$route.params.loja){
            this.loja = this.$route.params.loja
         
            let redesSociais = this.loja['sto_social_data']
            if(typeof redesSociais === 'string'){
                redesSociais = JSON.parse(redesSociais)
            }
            this.verificarRedesSociais(redesSociais)

            let imagensNegocio = JSON.parse(this.loja['sto_photos_data'])
            this.imagensNegocio = imagensNegocio['photos']
            console.log(this.imagensNegocio);
      }
    },
    mounted(){
      
  }
}
</script>

<style>
div.absolute-top-left{
    padding:8px !important;
}
div.absolute-top-right{
    padding:8px !important;
}
.q-img__content > div {
    background: rgba(0,0,0,0);
}
input#f_2fac663e-5f38-4461-89e1-55c43f7fa20f.q-field__native.q-placeholder{
    color: orange !important;
    font-size: 18px;
}
div.q-card__section.q-card__section--vert{
    padding-top: 0px !important;
    padding-right: 0px !important;
}
</style>