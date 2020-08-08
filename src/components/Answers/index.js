import Answers from './Answers';
import {connect} from "react-redux";

const mapStateToProps = ({ gameData }) => ({
    gameData
});

export default connect(mapStateToProps)(Answers);
