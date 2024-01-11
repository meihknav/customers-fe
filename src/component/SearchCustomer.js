import React from 'react';
import { useEffect,useState } from 'react';

const SearchCustomer = () => {
  
    const [customerId, setCustomerId] = useState('');
    const [customer, setCustomer] = useState(null);
  
    const handleCustomerIdChange = (event) => {
      setCustomerId(event.target.value);
    };
  
    const handleSearch = () => {
      // Gọi API với customerId
      fetch(`https://localhost:7072/api/Customer/customer/${customerId}`) // Thay thế đường dẫn API thật của bạn
        .then(response => response.json())
        .then(data => setCustomer(data))
        .catch(error => console.error('Error fetching customer:', error));
    };
  
    return (
      <div>
        <h2>Customer Search</h2>
        <label>
          Customer ID:
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
        </label>
        <button onClick={handleSearch}>Search</button>
  
        {customer && (
          <div>
            <h3>Customer Details</h3>
            <p>Customer ID: {customer.customerId}</p>
            <p>CompanyName: {customer.companyName}</p>
            {/* Thêm các trường thông tin khác của customer nếu cần */}
          </div>
        )}
      </div>
    );
};

export default SearchCustomer;