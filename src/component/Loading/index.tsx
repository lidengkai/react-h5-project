import classnames from 'classnames'
import styles from './style.less'
import { LoadingProps } from './interface'
import { Mask, SpinLoading } from 'antd-mobile'

const Loading: FC<LoadingProps> = memo((props) => {
  const { className, style, show, renderToParent } = props

  return (
    <>
      <Mask visible={show} opacity={0.05}
        className={classnames(styles.root, className)}
        style={style}
        getContainer={renderToParent ? null : document.body}
      >
        <div className={styles.icon}>
          <SpinLoading />
        </div>
      </Mask>
    </>
  )
})

export default Loading

declare namespace Loading {
  interface Props extends Required<LoadingProps> {
  }
}
