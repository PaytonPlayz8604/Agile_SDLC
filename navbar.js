fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

console.log("Welcome, this website provides information about the SDLC model named Agile. Also, hello Mr. French!")
