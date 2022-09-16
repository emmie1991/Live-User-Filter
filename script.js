const result = document.getElementById('result')
const filter = document.getElementById('filter') /*input*/
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))


async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const {results} = await res.json() // data.results

  // clear const.result, loading... goes away
  result.innerHTML = ''

  results.forEach(user => {
    // create a list item for each of these users
    const li = document.createElement('li')

    // list item array starts being empty, and push one user in
    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `
    result.appendChild(li) 
  })
  
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    /**/
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
      item.classList.remove('hide')
    }else{
      item.classList.add('hide')
    }
  })
}

