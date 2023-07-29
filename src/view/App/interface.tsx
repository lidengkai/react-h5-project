export type Store = {
  /** 加载中 */
  loading: boolean
  /** 用户信息 */
  userInfo: RemoteContainer.UserInfo
}

export type Props = {
  userInfo?: Store['userInfo']
}

export declare namespace ContainerPage {
  type Props = {
    userInfo?: Store['userInfo']
  }
}
