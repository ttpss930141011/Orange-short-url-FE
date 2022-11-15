import { connect } from 'react-redux'
import './index.less'

const LayoutFooter = (props: any) => {
  const { themeConfig } = props
  return (
    <>
      {!themeConfig.footer && (
        <div className="footer">
          <a href="http://www.spicyboy.cn/" target="_blank" rel="noreferrer">
            2022 © Orange-short-url By ttpss930141011.
          </a>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => state.global
export default connect(mapStateToProps)(LayoutFooter)
