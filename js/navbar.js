document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

function includeHTML() {
    my_header = document.getElementById("my_header");
    html_file_name = my_header.getAttribute("include_html_perso");
    console.log(html_file_name);
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4) {
            if (this.status == 200) {my_header.innerHTML = this.responseText;}
            if (this.status == 404) {my_header.innerHTML = "Page not found.";}
        }
    }
    xhttp.open("GET", html_file_name, true);
    xhttp.send();
    return;
}
 