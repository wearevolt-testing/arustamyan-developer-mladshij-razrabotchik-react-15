import React from 'react';
import TableHead from "./TableHead";

let CustomerTable = (props) => {
    const {customers, changeCustomerModal, deleteCustomerModal} = props;
    return (
        <table className="table">
            <TableHead headers={['#', 'Name', 'Address', 'Phone']}/>
            <tbody>
            {
                customers.map((c, i) => {
                    return <tr key={i} className="tr">
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.address}</td>
                        <td>{c.phone}</td>
                        <td><button onClick={changeCustomerModal.bind(this, i)}>редактировать</button></td>
                        <td><button onClick={deleteCustomerModal.bind(this, i)}>удалить</button></td>
                    </tr>
                })
            }
            </tbody>
        </table>
    )
};

export default CustomerTable;