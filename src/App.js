import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import CustomerListComponent from './component/CustomerListComponent';
import SearchCustomer from './component/SearchCustomer';
import SortCustomer from './component/SortCustomer';
function App() {
  return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/customerList">CustomerList</Link>
              </li>
              <li>
                <Link to="/customerSearch">CustomerSearch</Link>
              </li>
              <li>
                <Link to="/customerSort">CustomerSort</Link>
              </li>
            </ul>
          </nav>
  
          <hr />
  
        <Routes>
        <Route path="/" render={() => <h1>Home</h1>} />
        <Route path="/customerList" element={<CustomerListComponent />} />
        <Route path="/customerSearch" element={<SearchCustomer />} />
        <Route path="/customerSort" element={<SortCustomer />} />

        </Routes>
        </div>
  );
  };

export default App;
