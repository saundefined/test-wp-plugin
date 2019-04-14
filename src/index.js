import {registerBlockType} from '@wordpress/blocks';
import Block from './Block';

registerBlockType('api/fetch-data', {
  title: 'Awesome API',
  icon: 'universal-access-alt',
  category: 'embed',
  supports: {html: false},

  attributes: {
    categoryId: {
      type: 'number',
      default: 0,
    },
    productId: {
      type: 'number',
      default: 0,
    },
  },

  edit({attributes, setAttributes}) {
    return <Block
        categoryId={attributes.categoryId}
        productId={attributes.productId}
        onCategoryChanged={(categoryId) =>
            setAttributes({categoryId: parseInt(categoryId)})}
        onProductChanged={(productId) =>
            setAttributes({productId: parseInt(productId)})}
    />;
  },

  save({attributes}) {
    return null;
  },
});