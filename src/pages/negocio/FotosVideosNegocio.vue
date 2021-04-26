<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">6 de 7</span>
        </div>
        <q-form class="text-grey-7">
            <div class="row">
                 <label>Foto Principal</label>
                    <q-uploader
                        url="http://localhost:8080/upload"
                        label="Fotos"
                        color="pink"
                        class="col-12"
                        hide-upload-btn
                      
                    />
            </div>
            <div class="row" style="margin-top:8px">
                 <label>Foto de capa</label>
                    <q-uploader
                        url="http://localhost:8080/upload"
                        label="Fotos"
                        color="pink"
                        class="col-12"
                        hide-upload-btn
                      
                    />
            </div>
        
            <div class="row" style="margin-top:8px">
                <label>Fotos do Negócio</label> 
                    <q-uploader
                        url="http://localhost:8080/upload"
                        label="Fotos"
                        multiple
                        color="pink"
                        class="col-12"
                      
                    >
                <template v-slot:list="scope">
                    <q-list separator>

                    <q-item v-for="file in scope.files" :key="file.name">
                        <q-item-section>
                        <q-item-label class="full-width ellipsis">
                            {{ file.name }}
                        </q-item-label>

                        <q-item-label caption>
                            Status: {{ file.__status }}
                        </q-item-label>

                        <q-item-label caption>
                            {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                        </q-item-label>
                        </q-item-section>

                        <q-item-section
                        v-if="file.__img"
                        thumbnail
                        
                        >
                        <img :src="file.__img.src">
                        </q-item-section>

                        <q-item-section top side>
                        <q-btn
                            
                            size="12px"
                            flat
                            dense
                            round
                            icon="delete"
                            @click="scope.removeFile(file)"
                        />
                        </q-item-section>
                    </q-item>

                    </q-list>
                </template>
                </q-uploader>
            </div>
            <div class="row" style="margin-top:8px;padding-bottom:60px">
                <label>Video</label>
                 <q-uploader
               
                    url="http://localhost:8080/upload"
                    label="Video"
                    multiple
                    color="pink"
                    class="col-12"
                    
                />
            </div>
            <q-footer class="bg-white" >
            <div class="row justify-center" style="padding:8px 0px 8px">
                <q-btn class="col-6" color="pink" label="Salvar" @click="validarInputs" />
            </div>
        </q-footer> 
        </q-form>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        model:null,
        fotoPrincipal:'',
        fotoCapa:'',
        fotosNegocio:[],
        video:[],
        items:[1,2,3,4,5]
      }
  },
    methods:{
    validarInputs(){
        this.prosseguirCadastroLoja()
    },
    prosseguirCadastroLoja(){
        let fotosVideo = { fotoPrincipal:this.fotoPrincipal, fotoCapa:this.fotoCapa, fotosNegocio:this.fotosNegocio, video:this.video}
        this.$q.localStorage.set('cadastroNegocio_fotosVideosNegocio',fotosVideo)
        this.$router.push({name:'DescricaoNegocio'})
    },
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_fotosVideosNegocio')){
          this.nomeNegocio = this.$q.localStorage.getItem('cadastroNegocio_fotosVideosNegocio')
      }
  }
}
</script>

<style>

</style>