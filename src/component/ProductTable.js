import React from 'react';
import TableHead from "./TableHead";

let ProductTable = (props) => {
    const {products, changeProductModal, deleteProductModal} = props;
    return (
        <table className="table">
            <TableHead headers={['#', 'Name', 'Price']}/>
            <tbody>
            {
                products.map((p, i) => {
                    return <tr key={i} className="tr">
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td><button onClick={changeProductModal.bind(this, i)}>редактировать</button></td>
                        <td><button onClick={deleteProductModal.bind(this, i)}>удалить</button></td>
                    </tr>
                })
            }
            </tbody>
        </table>
    )
};

export default ProductTable;