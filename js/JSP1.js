





$(".formbox").click(function() 

{


  alert("Thank You, we look forward to giving you a quote.");
  
});


var lastImg = 1; //Set initial thumbnail and previewdocument.getElementbyId(0).src =
document.getElementById(lastImg).src;
document.getElementById(lastImg).className = "thumb selected";

function preview(img)  {
document.getElementById(lastImg).className = "thumb normal";
img.className = "thumb selected";
document.getElementById(0).src= img.src;
lastImg = img.id}
