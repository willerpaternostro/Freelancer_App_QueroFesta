const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name:'Index' },
      { path: 'localizacao', component: () => import('pages/Localizacao.vue'), name:'Localizacao' },
      { path: 'home', component: () => import('pages/Home.vue'), name:'Home' },
      { path: 'favoritos', component: () => import('pages/Favoritos.vue'), name:'Favoritos' },
      { path: 'categorias', component: () => import('pages/Categorias.vue'), name:'Categorias' },
      { path: 'fornecedores', component: () => import('pages/Fornecedores.vue'), name:'Fornecedores' },
      { path: 'fornecedor', component: () => import('pages/Fornecedor.vue'), name:'Fornecedor' },
      { path: 'mais', component: () => import('pages/Mais.vue'), name:'Mais' },
      //SOU FORNECEDOR CallCenterFornecedor
      { path: 'callCenter', component: () => import('pages/souFornecedor/CallCenterFornecedor.vue'), name:'CallCenterFornecedor' },
      { path: 'cobrancaDetalhes', component: () => import('pages/souFornecedor/CobrancaDetalhes.vue'), name:'CobrancaDetalhes' },
      { path: 'cobrancasFornecedor', component: () => import('pages/souFornecedor/CobrancasFornecedor.vue'), name:'CobrancasFornecedor' },
      { path: 'inicioFornecedor', component: () => import('pages/souFornecedor/InicioFornecedor.vue'), name:'InicioFornecedor' },
      { path: 'loginFornecedor', component: () => import('pages/souFornecedor/LoginFornecedor.vue'), name:'LoginFornecedor' },
      { path: 'cadastroFornecedor', component: () => import('pages/souFornecedor/CadastroFornecedor.vue'), name:'CadastroFornecedor' },
      { path: 'planosFornecedor', component: () => import('pages/souFornecedor/PlanosFornecedor.vue'), name:'PlanosFornecedor' },
      { path: 'pagamentoFornecedor', component: () => import('pages/souFornecedor/PagamentoFornecedor.vue'), name:'PagamentoFornecedor' },
      { path: 'editProfile', component: () => import('pages/souFornecedor/EditProfile.vue'), name:'EditProfile' }, 
      { path: 'configuracoesFornecedor', component: () => import('pages/souFornecedor/ConfiguracoesFornecedor.vue'), name:'ConfiguracoesFornecedor' }, 
      //NEGÓCIOS
      { path: 'meusNegocios', component: () => import('pages/negocio/MeusNegocios.vue'), name:'MeusNegocios' },
      { path: 'informacaoNegocio', component: () => import('pages/negocio/InformacaoNegocio.vue'), name:'InformacaoNegocio' },
      { path: 'cidadeNegocio', component: () => import('pages/negocio/CidadeNegocio.vue'), name:'CidadeNegocio' },
      { path: 'categoriaNegocio', component: () => import('pages/negocio/CategoriaNegocio.vue'), name:'CategoriaNegocio' },
      { path: 'nomeNegocio', component: () => import('pages/negocio/NomeNegocio.vue'), name:'NomeNegocio' },
      { path: 'contatoNegocio', component: () => import('pages/negocio/ContatoNegocio.vue'), name:'ContatoNegocio' },
      { path: 'fotosVideosNegocio', component: () => import('pages/negocio/FotosVideosNegocio.vue'), name:'FotosVideosNegocio' },
      { path: 'redesSociaisNegocio', component: () => import('pages/negocio/RedesSociaisNegocio.vue'), name:'RedesSociaisNegocio' },
      { path: 'descricaoNegocio', component: () => import('pages/negocio/DescricaoNegocio.vue'), name:'DescricaoNegocio' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
