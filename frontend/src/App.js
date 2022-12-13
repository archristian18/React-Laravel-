import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import { AddAccount } from './views/Account/AddAccount';
import { ViewAccount } from './views/Account/ViewAccount';
import { CreateCustomer } from './views/Customer/CreateCustomer';
import { ViewCustomer } from './views/Customer/ViewCustomer';
import { AddLoad } from './views/Customer/AddLoad';
import { TableList } from './components/TableList';

function App() {
  
    return (
      <div className="App">
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<TableList />} />
            <Route path='/Account/Add' element={<AddAccount />} />
            <Route path='/Account/View' element={<ViewAccount />} />
            <Route path='/Customer/Create' element={<CreateCustomer />} />
            <Route path='/Customer/View' element={<ViewCustomer />} />
            <Route path='/Customer/Load/Add' element={<AddLoad />} />
          </Route>
      </Routes>
  </div>
    );
}

export default App;
