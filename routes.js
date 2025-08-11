// routes.js
// Redirect /watermill-v2 to /watermill-v2/
(function() {
  var path = window.location.pathname;
  if (path === '/watermill-v2') {
    window.location.replace('/watermill-v2/');
  }
})();
