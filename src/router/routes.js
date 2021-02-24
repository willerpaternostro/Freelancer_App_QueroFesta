
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name:'Index' },
      { path: 'home', component: () => import('pages/Home.vue'), name:'Home' },
      { path: 'favoritos', component: () => import('pages/Favoritos.vue'), name:'Favoritos' },
      { path: 'categorias', component: () => import('pages/Categorias.vue'), name:'Categorias' },
      { path: 'fornecedores', component: () => import('pages/Fornecedores.vue'), name:'Fornecedores' },
      { path: 'fornecedor', component: () => import('pages/Fornecedor.vue'), name:'Fornecedor' },
      { path: 'inicioFornecedor', component: () => import('pages/souFornecedor/InicioFornecedor.vue'), name:'InicioFornecedor' },
      { path: 'loginFornecedor', component: () => import('pages/souFornecedor/LoginFornecedor.vue'), name:'LoginFornecedor' },
      { path: 'cadastroFornecedor', component: () => import('pages/souFornecedor/CadastroFornecedor.vue'), name:'CadastroFornecedor' },
      { path: 'planosFornecedor', component: () => import('pages/souFornecedor/PlanosFornecedor.vue'), name:'PlanosFornecedor' },
      { path: 'pagamentoFornecedor', component: () => import('pages/souFornecedor/PagamentoFornecedor.vue'), name:'PagamentoFornecedor' }
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
