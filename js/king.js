document.querySelector('[data-action="dosomething"]')
  .addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('[data-target="dosomething"]').style.display = 'block';;
  }, false);
