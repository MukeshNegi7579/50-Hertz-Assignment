import { Link } from "react-router-dom";
import styles from './style.module.css';
import { connect } from "react-redux"
import {
    toggleSidebar,
} from "../../redux/Sidebar/actions"
const Sidebar = (props) => {
    const { collapse } = props;
    return (
        <div className={collapse ? styles.collapseSidebar : styles.sidebar}>
            {!collapse && (
                <>
                    <div className={styles.logo}><span>LOGO</span></div>
                    <div className={styles.linkWrapper}>
                        <Link to={`/employee-form`}>Employee Form</Link>
                        <Link to={`/user-table`}>Table View</Link>
                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        collapse: state.sidebar.collapse,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)