import classnames from 'classnames'
import styles from './style.less'
import { Props } from './interface'
import { Provider } from 'react-redux'
import store from '@/store'
import Page from './containers/Page'

const App: FC<Props> = memo((props) => {
  return (
    <Provider store={store}>
      <Page {...props} />
    </Provider>
  )
})

export default App
