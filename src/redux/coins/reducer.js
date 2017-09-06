import { makeReducer } from '../helpers'
import { ON_TICK } from './actions'

export const defaultState = {}

export const getOrderedCoinsSelector = (coins) => {
  return Object.values(coins).sort((a, b) => a.rank > b.rank)
}

export default makeReducer(defaultState, {
  [ON_TICK]: (state, payload) => {
    return payload.reduce((acc, coin) => {
      acc[coin.id] = formatCoin(coin)
      return acc
    }, { ...state })
  }
})

const formatCoin = (coin) => {
  const { 
    id,
    name,
    symbol,
    rank,
    price_usd,
    market_cap_usd,
    available_supply,
    total_supply,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    last_updated
  } = coin

  return {
    id,
    name,
    symbol,
    rank: parseInt(rank, 10),
    priceUsd: parseFloat(price_usd),
    volumeUsd24hr: parseFloat(coin['24h_volume_usd']),
    marketCapUsd: parseFloat(market_cap_usd),
    availableSupply: parseFloat(available_supply),
    totalSupply: parseFloat(total_supply),
    percentChange1hr: parseFloat(percent_change_1h),
    percentChange24hr: parseFloat(percent_change_24h),
    percentChange7: parseFloat(percent_change_7d),
    lastUpdated: new Date(parseInt(last_updated, 10) * 1000)
  }
}