const {addQueryArgs} = wp.url;
const {apiFetch} = wp;

export default class FetchApi {
  static callMethod(path, parameters = {}) {
    const request = apiFetch({
      path: addQueryArgs('/api/' + path, parameters),
    });

    return request
        .then(response => {
          return response;
        });
  }

  static fetchCategories() {
    return this.callMethod('categories');
  }

  static fetchProducts(categoryId) {
    return this.callMethod('category/' + categoryId);
  }

  static fetchProduct(categoryId, productId) {
    return this.callMethod('category/' + categoryId + '/' + productId);
  }
}