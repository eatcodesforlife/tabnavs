//basic tab function
function openContent(tabpages){
  var page = document.getElementsByClassName('content');
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(tabpages).style.display = 'flex';
}

function closableTabs(tabpages){
  var page = document.getElementsByClassName('closableContent');
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(tabpages).style.display = 'flex';
}
