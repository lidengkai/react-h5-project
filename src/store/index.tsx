import { configureStore } from '@reduxjs/toolkit'

import app from '@/view/App/flow/reducer'
import home from '@/view/Home/flow/reducer'

export const store = configureStore({
  reducer: {
    [app.name]: app.reducer,
    [home.name]: home.reducer,
  }
})

/** 统一初始化 */
export const resetState = () => {
  store.dispatch(app.actions.init())
  store.dispatch(home.actions.init())
}

export default store
export const { dispatch, getState } = store
