document.querySelector('a[href="#kontakt"]').addEventListener('click', function(e) {
  e.preventDefault(); // Zabrání výchozímu chování (nepřidá # do URL)
  
  const target = document.getElementById('kontakt');
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth' // Zařídí plynulé posunutí
    });
  }
});