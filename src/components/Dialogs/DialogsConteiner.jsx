import { addMessageCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (massage) => {
            dispatch(addMessageCreator(massage))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
