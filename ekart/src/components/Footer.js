import React from 'react';

export default function Footer(props) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="position-fixed bottom-0 w-100 modern-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-6 mb-md-0 mb-2">
            <button 
              className="btn-modern btn-reset w-100" 
              onClick={() => props.resetQuantity()}
              title="Clear all items from cart"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              🗑️ Reset Cart
            </button>
          </div>
          
          <div className="col-md-6 col-12 mb-md-0 mb-2">
            <div className="total-amount">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span>💰</span>
                <span>Total: {formatCurrency(props.totalAmount)}</span>
              </div>
              {props.totalAmount > 0 && (
                <small style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  Including all taxes
                </small>
              )}
            </div>
          </div>
          
          <div className="col-md-3 col-6">
            <button 
              className="btn-modern btn-pay w-100"
              disabled={props.totalAmount === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: props.totalAmount === 0 ? 0.6 : 1,
                cursor: props.totalAmount === 0 ? 'not-allowed' : 'pointer'
              }}
              title={props.totalAmount === 0 ? "Add items to cart first" : "Proceed to payment"}
            >
              💳 Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
