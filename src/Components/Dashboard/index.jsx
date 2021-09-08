import Sidebar from "../Sidebar";
import Content from "../Content";
import styles from './style.module.css'

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <Content />
        </div>
    )
}

export default Dashboard;