import {connect} from "react-redux";
import Pagination from './Pagination';

const mapStateToProps = ({ gameData }) => ({
    gameData
});

export default connect(mapStateToProps)(Pagination);
