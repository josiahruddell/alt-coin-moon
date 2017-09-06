
let _instance = null
export default class Sdk {

  static get instance () {
    if (!_instance) {
      _instance = new Sdk()
    }
    return _instance
  }

  constructor (server) {
    this.server = server || `https://api.coinmarketcap.com/v1`
  }

  ticker = {
    get: async (limit=10) => {
      return this.fetch(`ticker/?limit=${limit}`)
    }
  }

  async fetch (endpoint, options = {}) {
    const fetchOptions = {
      contentType: 'application/json',
      ...options
    }
    try {
      const res = await fetch(`${this.server}/${endpoint}`, fetchOptions)
      return await res.json()
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
