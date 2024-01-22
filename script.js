window.onclick = function (event) {
    var dropdownClicked = event.target.matches('.resume-button');
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!dropdownClicked && openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }

    if (event.target == modal) {
        modal.style.display = "none";
    }
}

