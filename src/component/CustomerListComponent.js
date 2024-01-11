import React from 'react';
import { useEffect,useState } from 'react';

const CustomerListComponent = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7072/api/Customer'); // Thay thế đường dẫn API thật của bạn
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setCustomers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Gọi hàm fetchData để thực hiện việc gọi API
    fetchData();
  }, []);
  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.customerId}>
            {customer.customerId}: {customer.companyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerListComponent;