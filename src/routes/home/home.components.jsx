import React, { Component } from "react";
import axios from "axios";
import './home.styles.css';
import Product from "../../components/product/product.component";
import SearchBox from "../../components/search-box/search-box.component";
import 'bootstrap';
import Navigation from "../navigation/navigation.component";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      searchField:'',
      filteredProducts: []
    };
    this.viewProductDetails = this.viewProductDetails.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount(){
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        this.setState({ productsList: response.data });
        this.setState({filteredProducts:this.state.productsList});
    });
  }

  viewProductDetails(productProp){
    console.log('Selected Post', productProp);
    const productId = productProp.product.id;
    this.props.history.push(`/product-details/${productId}`);
  }

  onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    console.log('searchFieldString', searchFieldString);

    const searchFilteredProducts = this.state.productsList.filter((product) => {
      return product.title.toLocaleLowerCase().includes(this.state.searchField);
    });
    console.log(searchFilteredProducts);
    this.setState({searchField:searchFieldString})
    this.setState({filteredProducts:searchFilteredProducts})
  };

  render() {
    return (
      <div className='App'>
      <h1 className='app-title'>Shoppers Stop</h1>
      <Navigation />
      <SearchBox
        className='product-search-box mt-5'
        onChangeHandler={this.onSearchChange}
        placeholder='Search Product'
      />
      <div className='products-list container'>
          {this.state.filteredProducts.map((product) => {
            return <Product key={product.id} product={product} productDetails={this.viewProductDetails} />
          })}
      </div>
    </div>
    );
  }
}
