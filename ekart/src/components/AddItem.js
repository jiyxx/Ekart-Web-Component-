import React, { Component } from "react";

class AddItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
      errors: {}
    };
  }

  validateForm = () => {
    const errors = {};
    
    if (!this.state.productName.trim()) {
      errors.productName = "Product name is required";
    }
    
    if (!this.state.productPrice || this.state.productPrice <= 0) {
      errors.productPrice = "Price must be greater than 0";
    }
    
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.validateForm()) {
      this.props.addItem(this.state.productName.trim(), Number(this.state.productPrice));
      // Reset form after successful submission
      this.setState({ 
        productName: "", 
        productPrice: 0, 
        errors: {} 
      });
    }
  };

  render() {
    const { productName, productPrice, errors } = this.state;
    
    return (
      <div className="add-item-form slide-in-right">
        <h4 className="mb-4 text-center" style={{
          color: '#2d3748',
          fontWeight: '700',
          fontSize: '1.5rem'
        }}>
          ✨ Add New Product
        </h4>
        
        <form onSubmit={this.handleSubmit}>
          <div className="row align-items-end">
            <div className="col-md-4 col-12 mb-3">
              <label className="form-label-modern" htmlFor="inputName">
                🏷️ Product Name
              </label>
              <input
                className={`form-control-modern ${errors.productName ? 'border-danger' : ''}`}
                id="inputName"
                type="text"
                placeholder="Enter product name..."
                value={productName}
                onChange={(e) => {
                  this.setState({productName: e.target.value});
                  if (errors.productName) {
                    this.setState({ errors: { ...errors, productName: '' } });
                  }
                }}
              />
              {errors.productName && (
                <small className="text-danger mt-1 d-block">{errors.productName}</small>
              )}
            </div>
            
            <div className="col-md-4 col-12 mb-3">
              <label className="form-label-modern" htmlFor="inputPrice">
                💰 Price (₹)
              </label>
              <input 
                className={`form-control-modern ${errors.productPrice ? 'border-danger' : ''}`}
                id="inputPrice" 
                type="number" 
                placeholder="0"
                min="1"
                value={productPrice || ''}
                onChange={(e) => {
                  this.setState({productPrice: Number(e.target.value) || 0});
                  if (errors.productPrice) {
                    this.setState({ errors: { ...errors, productPrice: '' } });
                  }
                }}
              />
              {errors.productPrice && (
                <small className="text-danger mt-1 d-block">{errors.productPrice}</small>
              )}
            </div>
            
            <div className="col-md-4 col-12 mb-3">
              <button 
                className="btn-add w-100" 
                type="submit"
                style={{
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                ➕ Add to Cart
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
