// INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);

var app = new Framework7({
  el: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  theme: 'ios',

  
  // Força sem animação
  view: {
    iosSwipeBack: false, // desativa swipe-back para não dar efeito
    pushState: true,
    animate: false // <- desativa animação global
  },

  panel: {
    swipe: true,
  },

  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },

  routes: [
    { path: '/home/', url: 'home.html' },
    { path: '/sobre/', url: 'Sobre.html' },
    { path: '/user/', url: 'user.html' }
  ],
});



// Para testes no navegador
var mainView = app.views.create('.view-main', { url: '/splash/' });

// EVENTOS GLOBAIS PARA TODAS AS PÁGINAS
app.on('pageBeforeIn', function (page) {
  console.log('Entrando na página:', page.name);
});

app.on('pageAfterIn', function (page) {
  console.log('Página exibida:', page.name);
});

app.on('pageInit', function (page) {
  console.log('Página inicializada:', page.name);
});

app.on('pageBeforeRemove', function (page) {
  console.log('Removendo página:', page.name);
});

// EVENTO DE MUDANÇA DE ROTA (para destacar o botão ativo, por exemplo)
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log('Rota atual:', currentRoute);

  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });

  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) targetEl.classList.add('active');
});

function onDeviceReady() {
  // Criar view principal
  var mainView = app.views.create('.view-main', { url: '/splash/' });

  // BOTÃO VOLTAR NATIVO ANDROID
  document.addEventListener(
    'backbutton',
    function (e) {
      if (mainView.router.currentRoute.path === '/home/') {
        e.preventDefault();
        app.dialog.confirm('Deseja sair do aplicativo?', function () {
          navigator.app.exitApp();
        });
      } else {
        e.preventDefault();
        mainView.router.back({ force: true });
      }
    },
    false
  );
}


