import React from 'react';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Customer from './Components/Customer/Customer';
import Master from './Components/Master/Master';
import Goldsmith from './Components/Goldsmith/Goldsmith';
import Casting from './Components/LotProcess/Casting';
import Filing from './Components/LotProcess/Filing';
import Setting from './Components/LotProcess/Setting';
import Buffing from './Components/LotProcess/Buffing';
import MasterCustomer from './Components/Master/MasterCustomer';
import MasterFiling from './Components/Master/MasterFiling';
import MasterSetting from './Components/Master/MasterSetting';
import MasterBuffing from './Components/Master/MasterBuffing';
import MasterGoldsmith from './Components/Master/MasterCasting';
import MasterAddItems from './Components/Master/MasterAddItems';
import MasterPurchaseStock from './Components/Master/MasterPurchaseStock';
import MasterAddSupplier from './Components/Master/MasterAddSupplier';
import CustomerTranscation from './Components/Customer/CustomerTranscation';
import Stock from './Components/LotProcess/Stock';
import FilingLot from './Components/LotProcess/FilingLot';
import SettingReport from './Components/LotProcess/SettingReport';
import BuffingLot from './Components/LotProcess/BuffingLot';
import BuffingReport from './Components/LotProcess/BuffingReport';
import SettingLot from './Components/LotProcess/SettingLot';
import MasterJewelStock from './Components/Master/MasterJewelStock';
import Billing from './Components/Billing/Billing';
import Report from './Components/Report/Report';
import MasterAddTouch from './Components/Master/MasterAddTouch';
import SalesReport from './Components/Report/SalesReport';
import CustomerReport from './Components/Report/CustomerReport';
import StockReport from './Components/Report/StockReport';
import ReceiptReport from './Components/Report/ReceiptReport';
import CastingMeltingReports from './Components/Report/CastingMeltingReports';
import SettingReports from './Components/Report/SettingReports';
import FilingReports from './Components/Report/FilingReports';
import BuffingReports from './Components/Report/BuffingReports';
import FilingLotDetails from './Components/LotProcess/FilingLotDetails';


const App = () => {
  return (
    <BrowserRouter> 
    <Routes> 
    <Route path='/' element={<Login/>} />
    <Route path='/navbar' element={<Navbar/>} />
    <Route path='/customer' element={<Customer/>}/>
    <Route path='/customertranscation' element={<CustomerTranscation/>}/>
    <Route path='/master' element={<Master/>} />
    <Route path='/goldsmith' element={<Goldsmith/>} />
    <Route path='/casting' element={<Casting/>} />
    <Route path='/filing' element={<Filing/>}/>
    <Route path='/setting' element={<Setting/>}/>
    <Route path='/buffing' element={<Buffing/>}/> 
    <Route path='/mastercustomer' element={<MasterCustomer/>} />
    <Route path='/masterfiling' element={<MasterFiling/>} />
    <Route path='/mastersetting' element={<MasterSetting/>} />
    <Route path='/masterbuffing' element={<MasterBuffing/>} />
    <Route path='/mastercasting' element={<MasterGoldsmith/>}/>
    <Route path='/masteritems' element={<MasterAddItems/>} />
    <Route path='/mastertouch' element={<MasterAddTouch />} />
    <Route path='/masterpurchasestock' element={<MasterPurchaseStock/>} />
    <Route path='/mastersupplier' element={<MasterAddSupplier />} />
    <Route path='/stock' element={<Stock/>} />
    <Route path='/filingLotDetails/:id/:name' element={<FilingLotDetails/>}/> 
    <Route path='/filinglot/:id/:name' element={<FilingLot/>}/> 
    <Route path='/settinglot' element={< SettingLot />}/> 
    <Route path='/settingreport' element={<SettingReport/>}/>
    <Route path='/buffinglot' element={<BuffingLot/>}/>
    <Route path='/buffingreport' element={<BuffingReport/>}/>
    <Route path='/masterjewel' element={< MasterJewelStock />} />
    <Route path='/billing' element={<Billing />}/>
    <Route path='/report' element={< Report/>}/>
    <Route path='/castingMeltingrreports'  element={< CastingMeltingReports/>}/>
    <Route path='/settingreports' element={< SettingReports />}/>
    <Route path='/filingreports' element={< FilingReports />}/>
    <Route path='/buffingreports' element={< BuffingReports  />}/>

    <Route path='/customerreport' element={< CustomerReport/>}/>
    <Route path='/salesreport' element={<SalesReport />}/>
    <Route path='/stockreport' element={< StockReport/>}/>
    <Route path='/receiptreport' element={< ReceiptReport/>}/>

   </Routes>
    </BrowserRouter>
   
  )
}

export default App





