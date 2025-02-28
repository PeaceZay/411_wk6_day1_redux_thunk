import { connect, Connect } from "react-redux";
import state from "../redux/state";
import Import from "../components/Import";
import { fetchMakes, deleteMake } from "../redux/actions";

const mapStateToProps = () => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchMakes: ()=> dispatch(fetchMakes()),
        deleteMake: (index) => dispatch(deleteMake(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)