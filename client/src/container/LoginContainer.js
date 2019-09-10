import { connect } from 'react-redux';
import LoginComponent from '../component/LoginComponent';

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(LoginComponent)