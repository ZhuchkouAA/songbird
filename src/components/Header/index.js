import Header from './Header';
import {connect} from "react-redux";

const mapStateToProps = ({ gameData }) => ({
    gameData
});

export default connect(mapStateToProps)(Header);
