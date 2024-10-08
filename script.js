document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Hamburgermenü működése
    menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('hidden');
    });

    const userProfileContainer = document.getElementById('user-profile');
    const newUserButton = document.getElementById('new-user-btn');

    // Function to fetch and display a new user
    function fetchNewUser() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // HTML struktúra a felhasználói profil megjelenítéséhez
            const userProfileHTML = `
                <img src="${user.picture.thumbnail}" alt="Felhasználó képe" class="user-icon">
                <div class="user-info">
                    <p><strong>${user.name.first} ${user.name.last}</strong></p>
                    <p>${user.email}</p>
                    <p>${user.location.country}</p>
                </div>
            `;

            // Az adatok hozzáadása a HTML-hez
            userProfileContainer.innerHTML = userProfileHTML;
        })
        .catch(error => console.error('Hiba történt az API lekérés közben:', error));
    }

    // Az első felhasználó betöltése oldal betöltésekor
    fetchNewUser();

    // Új felhasználó generálása a gomb megnyomásakor
    newUserButton.addEventListener('click', fetchNewUser);
});
