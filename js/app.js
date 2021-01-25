// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },


let accounts = getData()

async function getData() {
  let url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  let data = await response.json();
  renderAccountList(data, accountsList)
  return data
}

const accountsList = document.getElementById('accounts-list')




renderAccountList(accounts, accountsList)

function renderAccountList(data, node) {
  node.innerHTML = ''
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      let html = createHTML(element)
      node.insertAdjacentHTML('beforeend', html)
    }
  } else {
    node.insertAdjacentHTML('beforeend', '<h6 class="text-center my-5">Элементов нет :(</h6>')
  }
}
function createHTML(user) {

  return `<li class="accounts-list-account col-5 row">
  <div class="accounts-list-info col-8 row">
      <h1 class="accounts-list-account-name col-9">${user.name},<span>${user.username}</span></h1>
      <h2 class="accounts-list-account-website"><a href="#">website: <span> ${user.website}</span></a></h2>
      <h2 class="accounts-list-account-mail"><a href="#">E-mail:  <span> ${user.email}</span></a></h2>
      <button class="accounts-list-account-more-info col-6">more</button>
  </div>
  <div class="accounts-list-photo col-4">
      <img width="200" height="200"  src="img/person.jpg" alt="person">
  </div>
</li>`
}