import classnames from 'classnames'
import styles from './style.less'
import { MessageProps } from './interface'
import { Toast } from 'antd-mobile'
import {
  CheckCircleFill,
  CloseCircleFill,
  ExclamationCircleFill,
  InformationCircleFill,
} from 'antd-mobile-icons'

const Message: FC<MessageProps> = memo((props) => {
  const { type, children } = props

  const icon = useMemo(() => {
    switch (type) {
      case 'info': {
        return <InformationCircleFill className={classnames(styles.icon, styles.info)} />
      }
      case 'success': {
        return <CheckCircleFill className={classnames(styles.icon, styles.success)} />
      }
      case 'error': {
        return <ExclamationCircleFill className={classnames(styles.icon, styles.warn)} />
      }
      case 'warn': {
        return <CloseCircleFill className={classnames(styles.icon, styles.error)} />
      }
      default: {
        return null
      }
    }
  }, [type])

  return (
    <>
      <div className={styles.line}>
        {icon}
        <div className={styles.text}>{children}</div>
      </div>
    </>
  )
})

const message = {
  info: (node: ReactNode) => {
    Toast.show({
      maskClassName: styles.root,
      content: <Message type="info">{node}</Message>,
      position: 'bottom'
    })
  },
  success: (node: ReactNode) => {
    Toast.show({
      maskClassName: styles.root,
      content: <Message type="success">{node}</Message>,
      position: 'bottom'
    })
  },
  error: (node: ReactNode) => {
    Toast.show({
      maskClassName: styles.root,
      content: <Message type="error">{node}</Message>,
      position: 'bottom'
    })
  },
  warn: (node: ReactNode) => {
    Toast.show({
      maskClassName: styles.root,
      content: <Message type="warn">{node}</Message>,
      position: 'bottom'
    })
  }
}

export default message
