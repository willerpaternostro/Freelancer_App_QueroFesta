<template>
  <div>
    <div class="row"> 
        <div class="col-6 self-center"> 
            <label>Valor</label> 
        </div>
        <div class="col-6 row justify-end" >
            <span class="text-h4 text-primary"> R$ 5,00</span>
        </div>
    </div>
    <div class="row"> 
        <label class="col-12">Descrição</label>
        <span class="col-12 text-h6">Cobrança Hadron Web</span>
    </div>
    <div class="row"> 
        <label class="col-6 self-center">Código</label>
        <span class="col-6 row justify-end text-h6">#120304120</span>
    </div>
    <div class="row"> 
        <q-list  padding class="rounded-borders  full-width">
           <q-item
          clickable
          v-ripple
          :to="{name:'CallCenterFornecedor'}"
        >
          <q-item-section class="text-h6 text-blue">Ver Cliente</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator />
     <div class="row"> 
        <label class="col-12">Informações da cobrança</label>
    </div>
     <div class="row"> 
        <label class="col-3">Código</label>
        <span class="col-9 row justify-end ">
        <q-icon name="fas fa-barcode" class="self-center" />
            Boleto Bancário
        </span>
    </div>
     <div class="row"> 
        <label class="col-3">Status</label>
        <span class="col-9 row justify-end ">
        <q-icon color="red" name="fas fa-exclamation-triangle" class="self-center" />
            Pagamento atrasado
        </span>
    </div>
    <div class="row"> 
        <label class="col-3">Status de envio</label>
        <span class="col-9 row justify-end ">
        <q-icon size="19px" color="green" name="show_chart" class="self-start bg-green-3" />
           Visualizado
        </span>
    </div>
   
     <div class="row"> 
        <label class="col-6">Emitido em</label>
        <span class="col-6 row justify-end ">02/07/2020</span>
    </div>
    <div class="row"> 
        <label class="col-6">Vencimento em</label>
        <span class="col-6 row justify-end ">03/07/2020</span>
    </div>
    <q-separator />
    <div class="row">
        <label class="col-12">Opções da cobrança</label>
    </div>
      <div class="row">
        <div class="self-center col-1">
            <q-icon name="fas fa-barcode"  />
        </div>
        <span class="text-h6 text-primary">Ver boleto </span>
    </div>
    <div class="row">
        <div class="self-center col-1">
            <q-icon name="fas fa-file-download"  />
        </div>
        <span class="text-h6 text-primary">Arquivar </span>
    </div>

  </div>
</template>

<script>


export default {
  name: 'PageIndex',
  data(){
    return{
       
        height:600,
       
      }
  },
  methods:{
 
  },

  mounted(){
    console.log(this)
    this.height = this.$q.screen.height-50
    this.height = this.height.toString()
  }
}
</script>

<style>


</style>