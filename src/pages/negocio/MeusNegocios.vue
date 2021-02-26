<template>
    <div style="padding:8px">
        <div class="row">
            <q-input class="col" standout bottom-slots v-model="text" label="Find a food recipient" >
                <template v-slot:prepend>
                    <q-icon color="pink" name="search" />
                </template>
                <template v-slot:append>
                    <q-icon color="pink" name="more_horiz" />
                </template>
            </q-input>
        </div>
        <q-card   flat v-for="(item,index) in items" :key="index" class="my-card" style="padding:8px">
            <q-card-section horizontal >
                <q-img
                @click="irInfo"
                style="border-radius:10px"
                height="90px"
                class="col-4"
                src="https://cdn.quasar.dev/img/chicken-salad.jpg"
                />
           
                <q-card-section >
                    <div class="row" @click="irInfo">
                        <span class="text-h6 col-12" >
                            Título Negócio {{index}}
                        </span>
                    </div>
                    <div class="row" style="margin-top:10px">
                        <div @click="irInfo" class="col-10"> 
                            <span class=" text-grey-6" >
                                <q-icon name="room" color="grey-6" />    87 Botsford
                            </span>
                        </div>
                        <div class="col-2">
                             <q-icon size="21px" name="delete" color="grey-7"  @click="excluirNegocio = !excluirNegocio" />
                        </div>
                    </div>
                </q-card-section>
            </q-card-section>
        </q-card>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn :to="{name:'CidadeNegocio'}" round color="yellow-8" icon="add" size="19px" />
        </q-page-sticky>
        <q-dialog
            v-model="excluirNegocio"
        >
            <q-card style="width: 300px; ">
                <q-card-section >
                <div class="text-h5 text-center text-weight-bold" style="padding-top:40px ">
                    Delete this Recipe?</div>
                </q-card-section>

                <q-card-section class=" text-center text-grey-6" style="font-size:18px">
                    Are you shure you want to delete Cafe latte Milkshake?
                </q-card-section>

                <q-card-actions  class="bg-white row justify-center" style="padding-bottom:30px">
                    <q-btn class="col-4" color="grey" text-color="white" label="Cancelar" v-close-popup style="margin-right:30px" />
                    <q-btn class="col-4" color="green" text-color="white" label="OK" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>
</template>
<script>


export default {

  data(){
    return{
        excluirNegocio:false,
        text:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
    irInfo(){
        this.$router.push({name:'InformacaoNegocio'})
    },
  }
}
</script>

<style>
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