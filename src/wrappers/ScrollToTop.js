import React from './node_modules/react'
import {withRouter} from './node_modules/react-router-dom'

//Wrapper that simpily scrolls to the top of the page when a Link is clicked
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
