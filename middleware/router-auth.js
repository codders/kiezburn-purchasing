export default function ({ store, redirect, route }) {
  store.state.user != null && route.name == 'login' ? redirect('/purchasing') : ''
  store.state.user == null && isUserRoute(route) ? redirect('/login') : ''
}

function isUserRoute(route) {
  if (route.matched.some(record => (record.path == '/purchasing' || record.path == '/profile'))) {
    return true;
  }
}
