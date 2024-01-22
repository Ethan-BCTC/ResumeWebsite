// Updated JS
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i] !== dropdown) {
            dropdowns[i].classList.remove('show');
        }
    }
    
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.resume-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Get the modal
var modal = document.getElementById("instamodal");

// Get the button that opens the modal
var btn = document.getElementById("instabtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}