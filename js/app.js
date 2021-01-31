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

let dialog = document.querySelector('dialog');
const openDialog = document.getElementById('openDialog')
const closeDialog = document.getElementById('closeDialog')
const accountsList = document.getElementById('accounts-list')
let accounts = []

getData()

async function getData() {
  let url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  let data = await response.json()
  accounts = data
  renderAccountList(data, accountsList)
}

openDialog.addEventListener('click', event => {
    dialog.show();
  })
  closeDialog.addEventListener('click', event => {
    dialog.close();
  })



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

  return `<li class="accounts-list-account col-5 row" id="${user.id}">
  <div class="accounts-list-info col-8 row">
      <h1 class="accounts-list-account-name col-9">${user.name},<span>${user.username}</span></h1>
      <h2 class="accounts-list-account-website"><a href="#">website: <span> ${user.website}</span></a></h2>
      <h2 class="accounts-list-account-mail"><a href="#">E-mail:  <span> ${user.email}</span></a></h2>
      <button class="accounts-list-account-more-info col-6" id="openDialog">
          more
      </button>
      <dialog class="more-info">
          <div class="container">
           <button class="close-dialog fas fa-times" id="closeDialog"></button>
           <div class="more-info-content row">
              <div class="col-6 row more-info-column">
                  <div class="col-4 row">
                      <div class="col-12 more-info-content-info">name</div>
                  </div>
                  <div class="col-8 row">
                      <div class="col-12 more-info-content-info">${user.name}</div>
                  </div>
               </div>
               <div class="col-6 row more-info-column">
                  <div class="col-4 row">
                      <div class="col-12 more-info-content-info">username</div>
                  </div>
                  <div class="col-8 row">
                      <div class="col-12 more-info-content-info">${user.username}</div>
                  </div>
               </div>
               <div class="col-6 row more-info-column">
                  <div class="col-4 row">
                      <div class="col-12 more-info-content-info">address</div>
                  </div>
                  <div class="col-8 row">
                      <div class="col-12 more-info-content-info">${user.address.street}</div>
                      <div class="col-12 more-info-content-info">${user.address.suite}</div>
                      <div class="col-12 more-info-content-info">${user.address.city}</div>
                      <div class="col-12 more-info-content-info">${user.address.zipcode}</div>
                  </div>
               </div>
               <div class="col-6 row more-info-column">
                  <div class="col-4 row">
                      <div class="col-12 more-info-content-info">phone</div>
                  </div>
                  <div class="col-8 row">
                      <div class="col-12 more-info-content-info">${user.phone}</div>
                  </div>
               </div>
               <div class="col-6 row more-info-column">
                  <div class="col-4 row">
                      <div class="col-12 more-info-content-info">company</div>
                  </div>
                  <div class="col-8 row">
                      <div class="col-12 more-info-content-info">${user.company.name}</div>
                      <div class="col-12 more-info-content-info">${user.company.catchPhrase}</div>
                      <div class="col-12 more-info-content-info">${user.company.bs}</div>
                  </div>
               </div>
               <div class="col-6 row more-info-column">
                  <div class="col-4 row">
                      <div class="col-12 more-info-content-info">website</div>
                  </div>
                  <div class="col-8 row">
                      <div class="col-12 more-info-content-info">${user.website}</div>
                  </div>
               </div>
           </div>
          </div>
      </dialog>
  </div>
  <div class="accounts-list-photo col-4">
      <img width="200" height="200"  src="img/person.jpg" alt="person">
  </div>
</li>`
}