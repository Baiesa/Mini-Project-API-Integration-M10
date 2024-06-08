// Add your JavaScript code here
document.getElementById("searchButton").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() === "") {
        alert("Please enter a Pokémon name or ID.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            // Display Pokémon information
            document.getElementById("pokemonInfo").innerHTML = `
                <h2 class="text-center">${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" class="mx-auto d-block mb-3" alt="${data.name}">
                <p><strong>Height:</strong> ${data.height / 10} m</p>
                <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
                <p><strong>Type:</strong> ${data.types.map(type => type.type.name).join(", ")}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching Pokémon data:", error);
            alert("Pokémon not found. Please enter a valid Pokémon name or ID.");
        });
});