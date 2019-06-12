// basic tab function

let myPage = document.querySelectorAll(".content");
let tabs = document.querySelectorAll(".btn");

// add event lister to each tab
// for (i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", clickTab);
// }

tabs.forEach(tab => tab.addEventListener("click", clickTab)); //use querySelector to use this

function clickTab(e) {
  let tabID = e.currentTarget.id;
  let pageID = tabID.replace("t", "c");

  // hide pages
  myPage.forEach(page => page.classList.remove("active"));

  let displayedPage = document.querySelector("#" + pageID);
  displayedPage.classList.add("active");
}

// closable tab function
function closableTabs(tabpages) {
  var page = document.getElementsByClassName("closableContent");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(tabpages).style.display = "flex";
}

// active/current tab function

function activeTab(evnt, highlighted) {
  document
    .querySelectorAll(".selectedPage")
    .forEach(page => (page.style.display = "none"));

  //for dehighlighting inactive tabs
  let currenttab = document.getElementsByClassName("currentTab");
  for (j = 0; j < currenttab.length; j++) {
    currenttab[j].className = currenttab[j].className.replace("activetab", "");
  }
  document.getElementById(highlighted).style.display = "flex";
  evnt.currentTarget.className += "activetab"; //this appends the color to active tab
}
