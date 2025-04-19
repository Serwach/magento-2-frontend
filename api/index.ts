import axios from 'axios'

const API = axios.create({
  baseURL: 'https://magento.test/rest/V1',
  headers: {
    Authorization: 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
})

export async function getProducts() {
  try {
    const res = await API.get('/products', {
      params: {
        'searchCriteria[currentPage]': 1,
        'searchCriteria[pageSize]': 20,
      },
    })
    const items = res.data.items
    return items.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price
    }))
  } catch (err) {
    console.error('Error fetching products:', err)
    return []
  }
}