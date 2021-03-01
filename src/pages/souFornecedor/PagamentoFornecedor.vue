<template>
    <div >
        <vue-paycard :value-fields="valueFields" />
        <div class="row justify-center"> 
            <span class="text-caption text-center">
                By adding a debit/credit card, you agree to the
            </span>
        </div>
        <div class="row justify-center"> 
            <q-btn flat no-caps color="primary" >{{'Terms & Condition'}}</q-btn>  
        </div>
        <q-form style="margin-top:10px">
            <div class="row justify-center">
                <q-input class="col-11" v-model="valueFields['cardName']" label="Nome">
                    <template v-slot:prepend>
                    <q-icon name="fas fa-user" />
                    </template>
                </q-input>
            </div><br>
            <div class="row justify-center">
                <q-input class="col-11" v-model="valueFields['cardNumber']" label="Número do cartão">
                    <template v-slot:prepend>
                    <q-icon name="far fa-credit-card"  />
                    </template>
                </q-input>
            </div><br>
            <div class="row " style="padding:16px 16px 40px 16px"> 
                <div class="col-6  row"> 
                    <div class="col-12">
                        <label class="text-weight-bold text-grey-7">Data de Expiração </label>
                    </div>
                    
                    <div class="col-12 row">
                        <q-input class="col-6" v-model="valueFields['cardMonth']" label="Mês">
                            <template v-slot:prepend>
                            <q-icon name="far fa-hourglass" />
                            </template>
                        </q-input>
                        <q-input class="col-6" v-model="valueFields['cardYear']" label="Ano">
                            <template v-slot:prepend>
                            <q-icon name="far fa-hourglass" />
                            </template>
                        </q-input>
                    </div>
                </div>
                <div class="offset-1 col-5 row"> 
                    <div class="col-12 row">
                        <div class="col-12">
                            <label class="text-weight-bold text-grey-7">Verificador</label>
                        </div>
                         
                        <div class="col-12 ">
                            <q-input v-model="valueFields['cardCvv']" label="CVV">
                                <template v-slot:prepend>
                                <q-icon name="far fa-credit-card"  />
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </div><br>
            
        </q-form>
        
    </div>
</template>

<script>
import { VuePaycard } from 'vue-paycard'


export default {
    components: {
        VuePaycard
    },
    name: "Form CreditCard",
    data () {
        return {
            small:false,
            text:'',
            valueFields: {
                cardName: '',
                cardNumber: '',
                cardMonth: '',
                cardYear: '',
                cardCvv: ''
            },
           
        }
    },
    computed:{
      
    },
    methods:{
    
    },
    mounted() {
   
  }
}
</script>
<style>
form.card-inner{
    background: rgb(3, 129, 247) !important;
}
p.card__field-label{
    display: none !important;
}
div.card-item__side.-front{
    box-shadow: none !important;
}
div.q-item.q-item-type.row.no-wrap{
    padding: 0px !important;
}
</style>