import React from 'react';
import {Button, Placeholder, SelectControl} from '@wordpress/components';
import FetchApi from './FetchApi';

export default class Block extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 0,
      categories: [],
      productId: 0,
      products: [],
      isProductsLoaded: false,
      isCategoriesLoaded: false,
      isButtonBusy: false,
      hasError: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();

    if (this.props.categoryId > 0) {
      this.fetchProducts(this.props.categoryId);
    }

    this.setState({
      categoryId: this.props.categoryId,
      productId: this.props.productId,
    });
  }

  fetchCategories() {
    this.setState({isCategoriesLoaded: false}, () => {
      FetchApi.fetchCategories()
          .then((response) => {
            this.setState({
              categories: response,
              isCategoriesLoaded: true,
              hasError: false,
            });
          })
          .catch(() => {
            this.setState({hasError: true});
          });
    });
  }

  fetchProducts(categoryId) {
    this.setState({isProductsLoaded: false}, () => {
      FetchApi.fetchProducts(categoryId)
          .then((response) => {
            this.setState({
              products: response,
              isProductsLoaded: true,
              hasError: false,
            });
          })
          .catch(() => {
            this.setState({hasError: true});
          });
    });
  }

  sync(categoryId, productId) {
    this.setState({isButtonBusy: true}, () => {
      FetchApi.sync(categoryId, productId)
          .then(() => this.setState({isButtonBusy: false}));
    });
  }

  render() {
    return <div>
      <Placeholder
          icon='wordpress-alt'
          label='Awesome API'
      >
        {!this.state.hasError ? (
            <div>
              {this.state.isCategoriesLoaded &&
              <SelectControl
                  label='Выберите категорию'
                  value={this.state.categoryId}
                  options={this.state.categories}
                  onChange={(categoryId) => {
                    this.setState({categoryId: categoryId});
                    this.props.onCategoryChanged(categoryId);
                    if (categoryId > 0) {
                      this.fetchProducts(categoryId);
                    }
                  }}
              />
              }

              {this.state.categoryId > 0 && this.state.isProductsLoaded &&
              <SelectControl
                  label='Выберите продукт'
                  value={this.state.productId}
                  options={this.state.products}
                  onChange={(productId) => {
                    this.setState({productId: productId});
                    this.props.onProductChanged(productId);
                  }}
              />
              }

              {this.state.categoryId > 0 && this.state.isCategoriesLoaded &&
              this.state.productId > 0 && this.state.isProductsLoaded &&
              <div>
                {this.state.isButtonBusy ? (
                    <p>Синхронизируем...</p>
                ) : (
                    <Button
                        onClick={() => this.sync(this.state.categoryId,
                            this.state.productId)}
                        isPrimary={true}
                        isLarge={true}
                    >Синхронизировать</Button>
                )}
              </div>
              }
            </div>
        ) : (
            <p>
              При запросе к API произошла ошибка.
              Проверьте <a href="/wp-admin/admin.php?page=api/api.php">
              настройки подключения
            </a>
            </p>
        )}
      </Placeholder>
    </div>;
  }
}