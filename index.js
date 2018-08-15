routes = {
  '/': homePage,
  //'/portfolio': portfolioPage,
  //'/resume': resumePage,
  //'/contact': contactPage,
};

console.log(window.location.pathname)

const contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname]
