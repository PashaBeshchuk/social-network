import { connect } from "react-redux";
import FindUsersApi from "./FindUsersApi";
import { changeCurrentPage, getUsers, unfollow, follow } from "../../redux/findUsersReduser"
import { compose } from 'redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { reselectGetUsers, selectGetPageSize, selectGetTotalUsersCount, selectGetCurrentPage, selectGetIsFinishLoad, selectGetFollowingInProgres } from "../../redux/selectors";

// const mapStateToProps = (state) => {
//     return {
//         users: state.findUsersPage.users,
//         pageSize: state.findUsersPage.pageSize,
//         totalUsersCount: state.findUsersPage.totalUsersCount,
//         currentPage: state.findUsersPage.currentPage,
//         isFinishLoad: state.findUsersPage.isFinishLoad,
//         followingInProgres: state.findUsersPage.followingInProgres
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: reselectGetUsers(state),
        pageSize: selectGetPageSize(state),
        totalUsersCount: selectGetTotalUsersCount(state),
        currentPage: selectGetCurrentPage(state),
        isFinishLoad: selectGetIsFinishLoad(state),
        followingInProgres: selectGetFollowingInProgres(state)
    }
}
export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, { changeCurrentPage, getUsers, unfollow, follow }),
    
)(FindUsersApi)
