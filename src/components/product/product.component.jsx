import React, { Component } from 'react'
import './product.styles.css';

export default class Product extends Component {

    constructor(props){
        super(props);
        this.viewProductDetailsHandler = this.viewProductDetailsHandler.bind(this);
    }

    viewProductDetailsHandler(evt){
        evt.preventDefault();
        this.props.productDetails(this.props);
    }

    render() {
        const product = this.props.product;
        return (
            <div className='product-item border main-container'>
                <p className="display-9 mt-3 text-light text-center font-weight-bold border" style={{width: '100%', height: '100px'}}>{product.title}</p>
                <img className="img-thumbnail" alt={`product ${product.image}`} src={`${product.image}`} />
                <p className="display-12 mt-3">{product.category}</p>
                <a href="#" className="btn btn-secondary btn-lg active my-3" role="button" aria-pressed="true" onClick={this.viewProductDetailsHandler}>View Details</a>
            </div>
        )
    }
}
