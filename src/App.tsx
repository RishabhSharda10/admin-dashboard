import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from './components/Loader';
const Coupon = lazy(() => import("./pages/admin/app/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/app/stopwatch"));
const Toss = lazy(() => import("./pages/admin/app/toss"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));

const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Products = lazy(() => import("./pages/admin/Product"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />

            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route path="/admin/transaction/:id" element={<TransactionManagement />} />

          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App