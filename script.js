function cityInf(evt, contentId) { 

  document.getElementById("tab1-content").style.display = "none";
  document.getElementById("tab2-content").style.display = "none";
  document.getElementById("tab3-content").style.display = "none";

  
  document.getElementById("tab1-button").classList.remove("active");
  document.getElementById("tab2-button").classList.remove("active");
  document.getElementById("tab3-button").classList.remove("active");

  document.getElementById(contentId).style.display = "block";

  
  evt.currentTarget.classList.add("active");
}