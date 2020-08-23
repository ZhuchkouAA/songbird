import InfoBlock from './InfoBlock';
import {connect} from "react-redux";

const mapStateToProps = ({ gameData }) => ({
    gameData
});

export default connect(mapStateToProps)(InfoBlock);
