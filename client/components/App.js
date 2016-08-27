import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreator from '../actions/actioncreater';
import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispach) {
  return bindActionCreators(actionCreator,dispach);
}

const App = connect(mapStateToProps,mapDispachToProps)(Main);
export default App;
