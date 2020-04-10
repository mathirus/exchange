const url = 'https://api.coincap.io/v2'

function getCoins() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

function getCoin(coin){
  return fetch(`${url}/assets/${coin}`)
  .then(res => res.json())
  .then(res => res.data)
}


function getCoinHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}


export default {
  getCoins,
  getCoin,
  getCoinHistory
}