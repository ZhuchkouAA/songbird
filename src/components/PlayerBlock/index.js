import {connect} from "react-redux";

import PlayerBlock from './PlayerBlock';

const mapStateToProps = ({ gameData }) => ({
    gameData
});

export default connect(mapStateToProps)(PlayerBlock);
