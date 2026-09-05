function setLang(lang){
  document.body.classList.remove('lang-it','lang-en');
  document.body.classList.add('lang-' + lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle button').forEach(function(b){
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
  });
  try{ localStorage.setItem('sb-site-lang', lang); }catch(e){}
}
(function(){
  var saved = null;
  try{ saved = localStorage.getItem('sb-site-lang'); }catch(e){}
  if(saved === 'it' || saved === 'en'){ setLang(saved); }
})();
