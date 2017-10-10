import React from 'react';
import DocumentTitle from 'react-document-title'

class DeleteProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteProduct() {
        const {product, deleteProduct, closeModal} = this.props;
        const {id} = product;

        fetch(`api/products/${id}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(res => {
                if (res)
                {
                    deleteProduct(id)
                }
                closeModal()
            });
    }

    cancel() {
        this.props.closeModal();
    }

    render() {
        const {product} = this.props;
         return (
             <div>
                 <DocumentTitle title={`Delete product ${product.name}`} />
                 <div style={{textAlign: 'center'}}>
                     <h3>Вы действительно хотите удалить данный продукт/товар ({product.name})?</h3>
                     <button className={'btn btn-success'} style={{marginRight: '10px'}} onClick={this.deleteProduct.bind(this)}>Да</button>
                     <button className={'btn btn-primary'} onClick={this.cancel.bind(this)}>Нет</button>
                 </div>
             </div>
        );
    }

}

export default DeleteProduct;