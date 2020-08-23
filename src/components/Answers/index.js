import Answers from './Answers';
import {connect} from "react-redux";
import {setActiveBirdInfoId, setPointsData, setTrueAnswer} from "../../redux/actions/creators/game-data";

const mapStateToProps = ({ gameData }) => ({
    gameData
});

const actionCreators = {
    setTrueAnswer,
    setActiveBirdInfoId,
    setPointsData,
};

export default connect(mapStateToProps, actionCreators)(Answers);
