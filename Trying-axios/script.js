  function fetchUser() {
      document.getElementById('fetch-result').innerText = 'Loading...';

      axios.get('https://randomuser.me/api/')
        .then(response => {
          const user = response.data.results[0];
          console.log(user);
          console.log(response.data)
          const html = `<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                        <strong>Email:</strong> ${user.email}<br>
                        <img src="${user.picture.medium}" alt="User Picture">`;
          document.getElementById('fetch-result').innerHTML = html;
        })
        .catch(error => {
          document.getElementById('fetch-result').innerText = 'Error: ' + error.message;
        });
    }