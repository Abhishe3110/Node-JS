const divEle = document.querySelector('.card-container');


function getDetails(id){
const req = new XMLHttpRequest();
req.open('GET', `https://dummyjson.com/users/${id}`);
req.send();

  req.addEventListener('load', function () {
    const userData = JSON.parse(this.responseText);
    console.log(userData);
    displayUser(userData);
  });
}
function displayUser(userData){
  const card = `
      <div class="user-card">
        <img src="${userData.image}" alt="Profile Image" />
        <h3>${userData.firstName}</h3>
        <h3>${userData.lastName}</h3>
        <p class="email">${userData.email}</p>
        <button class="btn">View Profile</button>
      </div>`;
    divEle.insertAdjacentHTML("beforeend",card);
}
getDetails(4);
getDetails(7);
getDetails(9);
 