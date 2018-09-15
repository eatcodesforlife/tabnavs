function openContent(pages){
  var page = document.getElementsByClassName('content');
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(pages).style.display = 'flex';
}
