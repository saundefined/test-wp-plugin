import React from 'react';
import FetchApi from './FetchApi';

export default class Product extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 0,
      productId: 0,
      hasError: false,
      data: {},
    };
  }

  componentDidMount() {
    const categoryId = this.props.categoryId;
    const productId = this.props.productId;

    this.setState({
      categoryId: categoryId,
      productId: productId,
    }, () => this.fetchProduct(categoryId, productId));
  }

  fetchProduct(categoryId, productId) {
    FetchApi.fetchProduct(categoryId, productId)
        .then((response) => {
          this.setState({data: response.data.body});
        })
        .catch(() => {
          this.setState({hasError: true});
        });
  }

  render() {
    return <div>
      {!!this.state.data.name &&
      <h2>{this.state.data.name}</h2>
      }
      {!!this.state.data.price &&
      <p>Стоимость – {this.state.data.price} руб.</p>
      }
    </div>;
  }
}