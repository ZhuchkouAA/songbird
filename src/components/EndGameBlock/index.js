import EndGameBlock from './EndGameBlock';
import {connect} from "react-redux";
import {setRound} from "../../redux/actions/creators/game-data";

const mapStateToProps = ({ gameData }) => ({
    gameData
});

const actionCreators = {
    setRound,
};

export default connect(mapStateToProps, actionCreators)(EndGameBlock);
