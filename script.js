document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://randomuser.me/api/?results=3';
  const apiDataDiv = document.getElementById('api-data');

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let users = data.results;
      let userHTML = '';

      users.forEach(user => {
        userHTML += `
          <div class="user">
            <img src="${user.picture.large}" alt="User Picture">
            <p><strong>Név:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
          </div>
        `;
      });

      apiDataDiv.innerHTML = userHTML;
    })
    .catch(error => console.error('Error fetching data:', error));
});
