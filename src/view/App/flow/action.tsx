import { Store } from '../interface'
import { dispatch, resetState } from '@/store'
import reducer from './reducer'
import history from '@/history'
import message from '@/component/Message'

const {
  init,
  commit,
} = reducer.actions

export const unmount = async () => {
  resetState()
}

export const initPage = async (userInfo?: Store['userInfo']) => {
  if (userInfo?.id) {
    dispatch(commit({ userInfo }))
  }
}
