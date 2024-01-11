import React, { useState, useEffect } from 'react';

const SortCustomer= () => {
  const [sortedCustomers, setSortedCustomers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Thêm state để lưu trữ tham số sắp xếp

  const handleSort = () => {
    // Gọi API để sắp xếp danh sách theo customerId và tham số sắp xếp
    fetch(`https://localhost:7072/api/Customer/customer/sort?sortOrder=${sortOrder}`) // Sử dụng tham số sắp xếp từ state
      .then(response => response.json())
      .then(data => setSortedCustomers(data))
      .catch(error => console.error('Error fetching sorted customers:', error));
  };

  useEffect(() => {
    // Gọi API khi component được mount để hiển thị danh sách ban đầu
    fetch('/api/customer') // Thay thế đường dẫn API thật của bạn
      .then(response => response.json())
      .then(data => setSortedCustomers(data))
      .catch(error => console.error('Error fetching initial customers:', error));
  }, []);

  return (
    <div>
      <h2>Sorted Customer List</h2>
      
      <label>
        Sort Order:
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Sắp xếp tăng dần theo customerId</option>
          <option value="desc">Sắp xếp giảm dần theo customerId</option>
        </select>
      </label>
      
      <button onClick={handleSort}>Sort by CustomerId</button>

      <ul>
        {sortedCustomers.map(customer => (
          <li key={customer.customerId}>
            {customer.customerId}: {customer.companyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortCustomer;