<template>
    <div >
        <q-card flat class="my-card">
            <q-img height="250px" src="~assets/fornecedor_fundo.png" >
                <div class="absolute-top-left">
                    <q-btn :to="{name:'Fornecedores'}" flat icon="arrow_back_ios"  />
                </div>
                <div class="absolute-top-right">
                    <q-btn round color="pink" icon="share" style="margin-right:10px" />
                    <q-btn round color="pink" icon="far fa-star" />
                </div>
                <div class="absolute-bottom-right ">
                    <q-badge  transparent align="middle" color="grey-7">
                        <q-icon size="21px" name="insert_photo" /> <span style="margin-left:5px">3</span>
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
                        <img src="~assets/fornecedor_logo.png" >
                    </q-avatar>
                </q-btn>

            </q-card-section>
        </q-card>
        <div style="padding:16px">
            <div class="row" style="margin-top:30px">
                <div class="col-1">
                    <q-icon size="21px"  color="pink" name="verified" /> 
                </div>
                <div class="col">
                     <span  class="text-pink text-h6">Preferred Merchants </span>
                </div>
            </div>
            <div class="row" style="margin-top:8px;margin-bottom:8px">
                <span class="col text-h5 text-weight-bold">McDonald's - Hoang Dao Thuy</span>
            </div>
            <div class="row">
                <span class="col  text-grey-6">Fast Food</span>
            </div>
            <div class="row justify-end">
                    <q-rating
                    class="offset-6 col"
                        v-model="estrelas"
                        max="5"
                        size="19px"
                        color="yellow-8"
                        icon="star_border"
                        icon-selected="star"
                        icon-half="star_half" />
                        <span class="text-pink col-1 "  style="padding-left:5px">{{estrelas}}</span>
                        <span class="text-grey-7 col-1 text-weight-bold" >(500+)</span>
            </div>
            <q-list >
                <q-item v-for="(item,index) in items" :key="index" clickable v-ripple>
                    <q-item-section avatar>
                    <q-icon color="pink" name="bluetooth" />
                    </q-item-section>
                    <q-item-section class="text-grey-6">Icon as avatar</q-item-section>
                </q-item>
            </q-list>
            <div class="row justify-end">
                <div class="col-6 row justify-end">
                    <q-btn round style="margin-right:10px" size="10px" color="blue-10" icon="fab fa-facebook" />
                    <q-btn round style="margin-right:10px" size="10px" color="blue" icon="fab fa-twitter" />
                    <q-btn round style="margin-right:10px" size="10px" color="pink" icon="fab fa-instagram" />
                    <q-btn round style="margin-right:10px" size="10px" color="red-8" icon="fab fa-youtube" />
                </div>
            </div>
            <div class="row" style="margin-top:8px;margin-bottom:8px">
                <span class="col text-h5  text-grey-8">Informações</span>
            </div>
            <div class="row" style="margin-top:8px;margin-bottom:8px">
                <p class="col text-grey-7">{{informacoes}}</p>
            </div>
            <div class="row">
                <q-video
                class="col"
                src="https://www.youtube.com/embed/T-J7xFezJW8"
                />
                
            </div>

        </div>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        estrelas: 4.5,
        items:[1,2,3,4],
        informacoes:"klakljfças  mlaksmç am çm çlms lasçmçasmmç çamsklnfklfnaçfmaççmlçm ç   m çasmlçm lçm"
      }
  },
  methods:{
  
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