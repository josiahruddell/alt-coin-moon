import { onTick } from './actions'
import Sdk from '../../net'

export const getTicker = () => async (dispatch, getState) => {
  try {
    const data = await Sdk.instance.ticker.get()
    dispatch(onTick(data))
  } catch (e) {
    console.error(e)
  }
}
