import Navbar from './Navbar';
import { connect } from 'react-redux';


const mapStateToProps = (state) =>{
    return {
        state: state.sitebarPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {}
}
const NavbarConteiner = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarConteiner