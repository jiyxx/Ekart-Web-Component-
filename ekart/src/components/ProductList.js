import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    <div>
      {props.productList.length > 0 ? (
        <div>
          <h3 className="mb-4" style={{
            color: '#2d3748',
            fontWeight: '700',
            textAlign: 'center',
            fontSize: '1.8rem'
          }}>
            🛍️ Your Shopping Cart ({props.productList.length} items)
          </h3>
          {props.productList.map((product, i) => {
            return (
              <Product  
                product={product} 
                key={i} 
                incrementQuantity={props.incrementQuantity} 
                index={i} 
                decrementQuantity={props.decrementQuantity} 
                removeItem={props.removeItem}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-cart">
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛍️</div>
          <h1>Your cart is empty</h1>
          <p style={{ color: '#718096', fontSize: '1.1rem', marginTop: '10px' }}>
            Add some products to get started!
          </p>
        </div>
      )}
    </div>
  );
}
