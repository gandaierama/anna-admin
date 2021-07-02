import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },



//////////////
  {
    title: 'Financeiro',
    icon: { name: 'home' },
    children: [
      {
        title: 'Pedidos',
        link: { href: '/financeiro/pedidos' },
      },
      {
        title: 'Busca de pedidos',
        link: { href: '/financeiro/busca' },
      },
      {
        title: 'Categoria de despesas',
        link: { href: '/financeiro/categorias-despesa' },
      },
      {
        title: 'Sub-Categoria de despesas',
        link: { href: '/financeiro/subcategorias-despesa' },
      },
      {
        title: 'Despesas',
        link: { href: '/financeiro/despesas' },
      },

      {
        title: 'PromoCode',
        link: { href: '/financeiro/promocode' },
      },
      {
        title: 'Categorias de crédito',
        link: { href: '/financeiro/categorias-credito' },
      },
      {
        title: 'Sub-Categorias de crédito',
        link: { href: '/financeiro/subcategorias-credito' },
      },
      {
        title: 'Créditos',
        link: { href: '/financeiro/creditos' },
      },
    ]
  },
/////////////

//////////////
  {
    title: 'Relacionamento',
    icon: { name: 'email-outline' },
    children: [
      {
        title: 'Mensagens',
        link: { href: '/relacionemento/mensagens' },
      },
    ]
  },

/////////////


//////////////
  {
    title: 'Conteudo',
    icon: { name: 'text' },
    children: [
      
        {
        title: 'Páginas fixas',
        link: { href: '/conteudo/cms' },
        },
        {
        title: 'Banners',
        link: { href: '/conteudo/banners' },
        },
        {
        title: 'Categorias de Blog',
        link: { href: '/conteudo/categorias-blog' },
        },
        {
        title: 'Blog',
        link: { href: '/conteudo/blog' },
        },
      ]
    },

    {
      title: 'Cadastro Site',
      icon: { name: 'browser-outline' },
      children: [
        {
          title: 'Parceiros',
          link: { href: '/cadastro/parceiros' },
        },
        {
          title: 'Clientes',
          link: { href: '/cadastro/clieentes' },
        },
        {
        title: 'Categorias',
        link: { href: '/cadastro/categorias' },
        },
        {
        title: 'Sub-Categorias',
        link: { href: '/cadastro/sub-categorias' },
        },
        {
        title: 'Atributos',
        link: { href: '/cadastro/atributos' },
        },
        {
        title: 'Fabricantes',
        link: { href: '/cadastro/fabricantes' },
        },
        {
        title: 'Produtos',
        link: { href: '/cadastro/produtos' },
        },
        {
        title: 'Alteracoes em Lote - INFO',
        link: { href: '/cadastro/lote-info' },
        },
        {
        title: 'Alteracoes em Lote - VALORES',
        link: { href: '/cadastro/lote-valores' },
        },
        {
        title: 'Alteracoes em Lote - SEO',
        link: { href: '/cadastro/lote-seo' },
        },
        {
        title: 'Exportar Produtos',
        link: { href: '/cadastro/produtos' },
        },
        {
        title: 'Exportar Clientes',
        link: { href: '/cadastro/exportar' },
        }
      ]
    },

  {
    title: 'Cadastro Admin',
    icon: { name: 'edit' },
    children: [
      {
        title: 'Usuários',
        link: { href: '/cadastro-admin/usuarios' },
      },
      {
        title: 'Grupo de usuários',
        link: { href: '/cadastro-admin/grupos' },
      },
      {
        title: 'Log de acoes',
        link: { href: '/cadastro-admin/log' },
      }
    ]
  },

/////////////


//////////////
  {
    title: 'Configuração',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Configuracoes básicas',
        link: { href: '/configuracaoes/basicas' },
      },
      {
        title: 'Configuracoes avancadas',
        link: { href: '/configuracaoes/avancadas' },
      },
      {
        title: 'Redirecionamentos',
        link: { href: '/configuracaoes/redirecionamentos' },
      },
    ]
  },
/////////////


//////////////
  {
    title: 'Relatórios',
    icon: { name: 'list' },
    children: [
       {
        title: 'Relatório Venda',
        link: { href: '/relatorios/venda' },
      },
      {
        title: 'Balancete',
        link: { href: '/relatorios/balancete' },
      },
      {
        title: 'Controle de Estoque',
        link: { href: '/relatorios/estoque' },
      },
    ]
  },
   

/////////////

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Extra Components',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Accordion',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'Actions',
        link: { href: '/extra-components/actions' },
      },
      {
        title: 'Alert',
        link: { href: '/extra-components/alert' },
      },
      {
        title: 'List',
        link: { href: '/extra-components/list' },
      },
      {
        title: 'Spinner',
        link: { href: '/extra-components/spinner' },
      },
      {
        title: 'Progress Bar',
        link: { href: '/extra-components/progress' },
      },
      {
        title: 'Tabs',
        link: { href: '/extra-components/tabs' },
      },
      {
        title: 'Chat',
        link: { href: '/extra-components/chat' },
      },
      {
        title: 'Cards',
        link: { href: '/extra-components/cards' },
      },
      {
        title: 'Flip Card',
        link: { href: '/extra-components/flip-card' },
      },
      {
        title: 'Reveal Card',
        link: { href: '/extra-components/reveal-card' },
      },
    ],
  },
  {
    title: 'Forms',
    icon: { name: 'edit-2-outline' },
    children: [
      {
        title: 'Inputs',
        link: { href: '/forms/inputs' },
      },
      {
        title: 'Layout',
        link: { href: '/forms/form-layout' },
      },
      {
        title: 'Buttons',
        link: { href: '/forms/buttons' },
      },
      {
        title: 'Select',
        link: { href: '/forms/select' },
      },
    ],
  },
  {
    title: 'UI Features',
    icon: { name: 'keypad-outline' },
    children: [
      {
        title: 'Grid',
        link: { href: '/ui-features/grid' },
      },
      {
        title: 'Animated Searches',
        link: { href: '/ui-features/search' },
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Popover',
        link: { href: '/modal-overlays/popover' },
      },
      {
        title: 'Tooltip',
        link: { href: '/modal-overlays/tooltip' },
      },
      {
        title: 'Toastr',
        link: { href: '/modal-overlays/toastr' },
      },
    ],
  },
  {
    title: 'Editors',
    icon: { name: 'text-outline' },
    children: [
      {
        title: 'TinyMCE',
        link: { href: '/editors/tinymce' },
      },
      {
        title: 'CKEditor',
        link: { href: '/editors/ckeditor' },
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { href: '/auth/login' },
      },
      {
        title: 'Register',
        link: { href: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { href: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { href: '/auth/reset-password' },
      },
    ],
  },
];

export default items;
