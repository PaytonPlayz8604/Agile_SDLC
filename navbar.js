fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

console.log("Navigation bar has loaded. Hi Mr. French! :)")
