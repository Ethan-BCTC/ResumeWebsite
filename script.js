// Updated JS
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.resume-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
