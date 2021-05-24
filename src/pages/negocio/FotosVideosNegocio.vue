<template>
    <div >
        <div v-if="!editar" class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">6 de 7</span>
        </div>
        <q-form class="text-grey-7">
            <!-- FOTO PRINCIPAL -->
            <div v-if="mostrarFotoPrincipal" class="row">
                <label>Foto Principal</label>
                <q-uploader
                    url="http://localhost:8080/fotosVideosNegocio"
                    label="Fotos"
                    color="pink"
                    class="col-12"
                    hide-upload-btn
                    max-files="1"
                    auto-upload
                    :factory="addFotoPrincipal"
                />
            </div>
            <!-- FOTO DE CAPA -->
            <div v-if="mostrarFotoCapa" class="row" style="margin-top:8px">
                <label>Foto de capa</label>
                <q-uploader
                    url="http://localhost:8080/fotosVideosNegocio"
                    label="Fotos"
                    color="pink"
                    class="col-12"
                    hide-upload-btn
                    auto-upload
                     max-files="1"
                    :factory="addFotoCapa"
                />
            </div>
            <!-- FOTOS DO NEGÓCIO -->
            <div v-if="mostrarFotosNegocio" class="row" style="margin-top:8px">
                <label>Fotos do Negócio</label> 
                <q-uploader
                    url="http://localhost:8080/fotosVideosNegocio"
                    label="Fotos"
                    multiple
                    color="pink"
                    class="col-12"
                    max-files="10"
                    auto-upload
                    :factory="addFotosNegocio"
                    @removed="removerFoto"
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
            <!-- VIDEO -->
             <div v-if="mostrarLinkVideo"  class="row" style="margin-top:10px">
                <label>Link Video</label>
                <q-input class="col-12" bottom-slots v-model="video" label="Insira o link"  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon color="red" name="fab fa-youtube" />
                    </template>
                </q-input>
            </div>

            <q-footer class="bg-white" >
                <div class="row justify-center" style="padding:8px 0px 8px">
                    <q-btn class="col-6" color="pink" :label="editar?'Editar':'Salvar'" @click="validarInputs" />
                </div>
            </q-footer> 
        </q-form>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return{
        //EDIT
        editar:false,
        idLojaEditar:'',

        model:null,
        fotoPrincipal:'',
        fotoCapa:'',
        fotosNegocio:[],
        video:'',
        items:[1,2,3,4,5],
        fotosNegocio:[],

        mostrarFotoPrincipal:true,
        mostrarFotoCapa:true,
        mostrarFotosNegocio:true,
        mostrarLinkVideo:true,

      }
  },
    computed:{
        
    },
    methods:{
        removerFoto(files){
            let minhasFotos = this.fotosNegocio
            minhasFotos.forEach((foto,index) => {
                if(foto.lastModified== files[0]['lastModified']){
                    this.fotosNegocio.splice(index,1)
                }
            })
        },
        addFotoPrincipal(files){
            this.salvarFotosNegocios({nomeFoto:'fotoPrincipal',imagem:files[0]})
        },
        addFotoCapa(files){
           this.salvarFotosNegocios({nomeFoto:'fotoCapa',imagem:files[0]})
        },
        addFotosNegocio(files){
            this.fotosNegocio.push(files[0])
        },
        validarInputs(){ 
            this.prosseguirCadastroLoja()
        },
        salvarFotosNegocios(dados){
            return this.$store.commit('EuQueroFesta/salvarFotosNegocios',dados)
        },
        inicializarPaginaEdicao(foto){ // Mostra apenas o campo que vai ser editado
            if(foto === "fotoPrincipal"){
                this.mostrarFotoPrincipal = true
                this.mostrarFotoCapa = false
                this.mostrarFotosNegocio = false
                this.mostrarLinkVideo = false
            }
            if(foto === "fotoCapa"){
                this.mostrarFotoPrincipal = false
                this.mostrarFotoCapa = true
                this.mostrarFotosNegocio = false
                this.mostrarLinkVideo = false
            }
            if(foto === "fotosNegocio"){
                this.mostrarFotoPrincipal = false
                this.mostrarFotoCapa = false
                this.mostrarFotosNegocio = true
                this.mostrarLinkVideo = false
            }
            if(foto === "linkVideo"){
                this.mostrarFotoPrincipal = false
                this.mostrarFotoCapa = false
                this.mostrarFotosNegocio = false
                this.mostrarLinkVideo = true
            }
        },
        prosseguirCadastroLoja(){
            console.log("Prosseguir");
            this.salvarFotosNegocios({nomeFoto:'fotosNegocio',imagem:this.fotosNegocio})
            if(!this.editar){
                this.$router.push({name:'DescricaoNegocio'})
            }else{
                this.editarLoja()
            }
        },
        editarLoja(){
            return this.$store.dispatch('EuQueroFesta/editarLoja',{idLojaEditar:this.idLojaEditar, fotoEditada:this.$route.params.fotoEditar})
        },
    },

    mounted(){
        if(this.$route.params.editar){
            console.log(this.$route.params);
            this.editar = true;
            this.idLojaEditar = this.$route.params.negocioAlterar['id'];
            this.inicializarPaginaEdicao(this.$route.params.fotoEditar);
        }else{
            if(this.$q.localStorage.getItem('cadastroNegocio_fotosVideosNegocio')){
                console.log('Pegar as fotos ');
            }
        }
    }
}
</script>

<style>

</style>