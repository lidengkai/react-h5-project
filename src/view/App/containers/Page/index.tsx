import classnames from 'classnames'
import styles from './style.less'
import { ContainerPage } from '../../interface'
import { useSelector } from 'react-redux'
import { useUnmount } from 'ahooks'
import {
  unmount,
  initPage,
} from '../../flow/action'
import Loading from '@/component/Loading'
import { Navigate, useRoutes } from 'react-router-dom'

const Home = React.lazy(() => import('@/view/Home'))

const Page: FC<ContainerPage.Props> = memo((props) => {
  useUnmount(unmount)
  const { userInfo } = props
  const loading = useSelector(state => state.app.loading)

  useEffect(() => {
    initPage(userInfo)
  }, [userInfo])

  const node = useRoutes([
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '*',
      element: <Navigate to="home" replace />
    },
  ])

  return (
    <>
      <React.Suspense fallback={null}>{node}</React.Suspense>
      <Loading show={loading} />
    </>
  )
})

export default Page
