routes = {
  '/': homePage,
  //'/portfolio': portfolioPage,
  //'/resume': resumePage,
  //'/contact': contactPage,
};

console.log(window.location.pathname);

const contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];

let onNavItemClick = (pathName) => {
  window.history.pushState(
    {},
    pathName,
    window.location.origin + pathName
  );
  contentDiv.innerHTML = routes[pathName];
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
};
