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

