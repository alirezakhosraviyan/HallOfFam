import { connect } from 'react-redux';
import HallOfFamList from "../../hallOfFamList/screen/hallOfFamComp";
import { loadHallOfFams } from '../../../redux/hallOfFamList/actions/hallOfFamAction';


const mapStateToProps = ({ hallOfFam }) => {
  return ({ status : hallOfFam.status, hallOfFams : hallOfFam.hallOfFams })
};

export default connect(
    mapStateToProps,
    { loadHallOfFams },
)(HallOfFamList);
