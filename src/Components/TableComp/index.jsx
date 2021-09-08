import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';

const TableComp = () => {
    const [users, setUsers] = useState([]);

    const onSort = (event, sortKey) => {
        const data = [...users];
        data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        console.log(data, 'data');
        setUsers([...data])
    }

    useEffect(() => {
        axios.get("https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users").then((res) => {
            const { data } = res;
            setUsers(data);
        }).catch(err => {
            console.log(err)
        });
    }, []);

    return (
        <div className={styles.wrapper}>
            <h3>User Table</h3>
            <div className={styles.responsive}>
                <table>
                    <thead>
                        <tr>
                            <th data-column="s-no">S.No.</th>
                            <th data-column="id" onClick={e => onSort(e, 'id')}>ID</th>
                            <th data-column="created-at" onClick={e => onSort(e, 'createdAt')}>Created At</th>
                            <th data-column="name" onClick={e => onSort(e, 'name')}>Name</th>
                            <th>Img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item, i) => (<tr>
                                <td>{i + 1}</td>
                                <td>{item?.id}</td>
                                <td>{item?.createdAt}</td>
                                <td>{item?.name}</td>
                                <td>img</td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default TableComp;