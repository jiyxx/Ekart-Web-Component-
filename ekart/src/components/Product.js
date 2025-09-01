import React from "react";

export default function Product(props) {
  const getProductImage = (productName) => {
    // Simple logic to assign different emojis based on product name
    if (productName.toLowerCase().includes('iphone')) return '📱';
    if (productName.toLowerCase().includes('realme')) return '📲';
    if (productName.toLowerCase().includes('laptop')) return '💻';
    if (productName.toLowerCase().includes('watch')) return '⏱️';
    return '📦'; // Default package icon
  };

  return (
    <div className="product-card fade-in-up">
      <div className="row align-items-center">
        {/* Product Image & Info */}
        <div className="col-md-1 col-2 text-center">
          <div style={{
            fontSize: '2rem',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            borderRadius: '10px',
            padding: '8px',
            display: 'inline-block'
          }}>
            {getProductImage(props.product.name)}
          </div>
        </div>
        
        <div className="col-md-5 col-10">
          <h4 className="product-name mb-1" style={{ fontSize: '1.2rem' }}>
            {props.product.name.trim()}
          </h4>
          <span className="product-price" style={{ padding: '4px 12px', fontSize: '0.9rem' }}>
            ₹{props.product.price.toLocaleString()}
          </span>
          {props.product.quantity > 0 && (
            <div className="mt-1">
              <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                Subtotal: ₹{(props.product.quantity * props.product.price).toLocaleString()}
              </small>
            </div>
          )}
        </div>
        
        {/* Quantity Controls */}
        <div className="col-md-4 col-12 mt-md-0 mt-3">
          <div className="quantity-controls justify-content-center">
            <button 
              type="button" 
              className="btn-modern btn-decrement"
              onClick={() => props.decrementQuantity(props.index)}
              disabled={props.product.quantity === 0}
            >
              -
            </button>
            
            <div className="quantity-display">
              {props.product.quantity}
            </div>
            
            <button 
              type="button" 
              className="btn-modern btn-increment"
              onClick={() => props.incrementQuantity(props.index)}
            >
              +
            </button>
          </div>
        </div>
        
        {/* Remove Button */}
        <div className="col-md-3 col-12 mt-md-0 mt-3 text-end">
          <button 
            className="btn-modern btn-remove"
            onClick={() => props.removeItem(props.index)}
            title="Remove item from cart"
          >
            🗑️ Remove
          </button>
        </div>
      </div>
    </div>
  );
}
