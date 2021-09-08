import styles from './style.module.css';
import Header from "../Header";
import { Switch, Route, Redirect } from "react-router-dom";
import FormValidation from "../FormValidation";
import TableComp from "../TableComp";

const Content = () => {
    return (
        <div className={styles.content}>
            <Header />
            <div style={{ paddingTop: "56px", margin: "24px" }}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/employee-form" />
                    </Route>
                    <Route path={`/employee-form`}>
                        <FormValidation />
                    </Route>
                    <Route path={`/user-table`}>
                        <TableComp />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Content;