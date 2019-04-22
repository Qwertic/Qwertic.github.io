// This is where it all goes :)
// This is where it all goes :)


const initUpdateNavbarOnScroll = () => {
  const lavlinks = document.querySelectorAll('.l');
  const navbar = document.querySelector('.navbar');
  if (navbar && lavlinks) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-fff');
        lavlinks.forEach(function(link){
            link.classList.add('tab-underlined-color');
});
      } else {
        navbar.classList.remove('navbar-fff');
        lavlinks.forEach(function(link){
            link.classList.remove('tab-underlined-color');
});
      }
    });
  }
}
initUpdateNavbarOnScroll();
