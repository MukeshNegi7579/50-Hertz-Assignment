import styles from './style.module.css';
import { connect } from "react-redux"
import {
    toggleSidebar,
} from "../../redux/Sidebar/actions"

const Header = (props) => {
    const { toggleSidebar } = props;
    return (
        <div className={styles.header}>
            <span onClick={() => toggleSidebar()}>Toggle Sidebar</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)