//basic tab function
function openContent(tabpages){
  var page = document.getElementsByClassName('content');
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(tabpages).style.display = 'flex';
}

// closable tab function
function closableTabs(tabpages){
  var page = document.getElementsByClassName('closableContent');
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(tabpages).style.display = 'flex';
}

// active/current tab function

function activeTab(evnt, currPage) {
  var currenttab;
  var pages = document.getElementsByClassName('selectedPage');
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  //for dehighlighting inactive tabs
  currenttab = document.getElementsByClassName('currentTab');
  for(j = 0; j < currenttab.length; j++) {
    currenttab[j].className = currenttab[j].className.replace("green", " ");
  }
  document.getElementById(currPage).style.display = "flex";
  evnt.currentTarget.className += "green"; //this appends the color to active tab
}
