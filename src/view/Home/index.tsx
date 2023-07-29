import classnames from 'classnames'
import styles from './style.less'
import { Props } from './interface'
import { useSelector } from 'react-redux'
import { useUnmount } from 'ahooks'
import {
  unmount,
  initPage,
} from './flow/action'
import Loading from '@/component/Loading'

const Home: FC<Props> = memo(() => {
  useUnmount(unmount)
  const loading = useSelector(state => state.home.loading)
  const username = useSelector(state => state.app.userInfo.username)

  useEffect(() => {
    initPage()
  }, [])

  return (
    <>
      子应用
      <div>{username}</div>
      <Loading show={loading} />
    </>
  )
})

export default Home
