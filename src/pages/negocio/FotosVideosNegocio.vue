<template>
    <div style="padding:8px">
        <q-form class="text-grey-7">
            <div class="row">
                <label>Foto Principal</label>
                    <q-file filled bottom-slots v-model="model" label="Label" counter>
                        <template v-slot:prepend>
                        <q-icon name="cloud_upload" @click.stop />
                        </template>
                        <template v-slot:append>
                        <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
                        </template>
                    </q-file>
            </div>
            <div class="row">
                <label>Foto de Fundo</label>
                <q-file filled bottom-slots v-model="model" label="Label" counter>
                        <template v-slot:prepend>
                        <q-icon name="cloud_upload" @click.stop />
                        </template>
                        <template v-slot:append>
                        <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
                        </template>
                    </q-file>
            </div>
            <div class="row">
                <label>Fotos do Negócio</label>
                    <q-uploader
                        url="http://localhost:8080/upload"
                        label="Fotos"
                        multiple
                        color="pink-6"
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
            <div class="row" style="padding-bottom:60px">
                <label>Video</label>
                 <q-uploader
               
                    url="http://localhost:8080/upload"
                    label="Video"
                    multiple
                    color="pink-6"
                    class="col-12"
                    
                />
            </div>
        </q-form>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        model:null,
        facebook:'',
        instagram:'',
        linkedin:'',
        youtube:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
   irContatoNegocio(){
       this.$router.push({name:'RedesSociaisNegocio'})
   }
  }
}
</script>

<style>

</style>