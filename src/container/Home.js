import { Header, QuickNav, AlertView, List } from '../components'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../redux/home'
class HomeContainer extends Component {
  constructor () {
    super()
    this.state = {
      isShowAlert: false,
      skip: 2
    }
  }
  componentDidMount () {
    this.props.dispatch(actions.fetchEvents(this.state.skip))
  }
  handleToggleShowAlertView () {
    this.setState({
      isShowAlert: !this.state.isShowAlert 
    })
  }
  render () {
    const HomeInfo = this.props.HomeInfo
    return(
      <div className='view page-view'>
        <Header 
          onClick={this.handleToggleShowAlertView.bind(this)}
        />
        <div className="home-view has-header">
          <QuickNav />
          <List eventsList={HomeInfo.events}/>
        </div>
        <AlertView 
          isShowAlert={this.state.isShowAlert}
          onClick={this.handleToggleShowAlertView.bind(this)}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    HomeInfo: state.HomeInfo
  }
}

export default connect(mapStateToProps)(HomeContainer)