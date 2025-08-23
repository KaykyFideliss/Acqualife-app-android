document.addEventListener('deviceready', onDeviceReady, false);

var app = new Framework7({
  el: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  theme: 'ios',

  view: {
    iosSwipeBack: false,
    pushState: true,
    animate: false
  },

  panel: { swipe: true },

  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },

  routes: [
    { path: '/home/', url: 'home.html' },
    { path: '/sobre/', url: 'sobre.html' },
    { path: '/user/', url: 'user.html' }
  ],
});

// 🔹 Cria view principal UMA VEZ SÓ
var mainView = app.views.create('.view-main', { url: '/home/' });

// EVENTOS GLOBAIS
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

// 🔹 Evento certo é routeChanged
app.on('routeChanged', function (route) {
  var currentRoute = route.url;
  console.log('Rota atual:', currentRoute);

  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });

  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) targetEl.classList.add('active');
});

function onDeviceReady() {
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
