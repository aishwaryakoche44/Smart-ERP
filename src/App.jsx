import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import ActivitiesPage from "./pages/ActivitiesPage";
import WorklistPage from "./pages/WorklistPage";
import BankAccounts from "./pages/bank-accounts";
import Ledger from "./pages/Ledger";
import AccountsPayable from "./pages/AccountsPayable";
import AccountsReceivable from "./pages/AccountsReceivable";
import FixedAssets from "./pages/FixedAssets";
import BusinessPartners from "./pages/BusinessPartners";
import TrialBalance from "./pages/TrialBalance";
import CashManagement from "./pages/CashManagement";
import PaymentEntry from "./pages/PaymentEntry";
import ReceiptEntry from "./pages/ReceiptEntry";
import JournalEntry from "./pages/JournalEntry";
import FinancialStatements from "./pages/FinancialStatements";
import GeneralLedgerReport from "./pages/GeneralLedgerReport";
import CashBook from "./pages/CashBook";
import BankBook from "./pages/BankBook";
import BankReconciliation from "./pages/BankReconciliation";
import ChartOfAccounts from "./pages/ChartOfAccount";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Unauthorized from "./pages/Unauthorized";
import AccountSettings from "./pages/AccountSettings";   // ✅ NEW

import ProtectedRoute from "./routes/ProtectedRoute";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// --------------------------
// LAYOUT HANDLING COMPONENT
// --------------------------
const AppContent = () => {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/signup"];

  const showLayout = !hideLayoutRoutes.includes(location.pathname);

  return (
    <div className={showLayout ? "ml-64 pt-16" : ""}>
      {showLayout && (
        <>
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
            <Sidebar />
          </div>
          <Header />
        </>
      )}

      <Routes>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ NEW — ACCOUNT SETTINGS */}
        <Route
          path="/account-settings"
          element={
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />

        {/* Accountant + Admin Routes */}
        <Route path="/payment-entry" element={<ProtectedRoute><PaymentEntry /></ProtectedRoute>} />
        <Route path="/receipt-entry" element={<ProtectedRoute><ReceiptEntry /></ProtectedRoute>} />
        <Route path="/journal-entry" element={<ProtectedRoute><JournalEntry /></ProtectedRoute>} />
        <Route path="/cash-book" element={<ProtectedRoute><CashBook /></ProtectedRoute>} />
        <Route path="/bank-book" element={<ProtectedRoute><BankBook /></ProtectedRoute>} />
        <Route path="/trial-balance" element={<ProtectedRoute><TrialBalance /></ProtectedRoute>} />

        {/* Admin Only */}
        <Route path="/ledger" element={<ProtectedRoute allowedRoles={["Admin"]}><Ledger /></ProtectedRoute>} />
        <Route path="/business-partners" element={<ProtectedRoute allowedRoles={["Admin"]}><BusinessPartners /></ProtectedRoute>} />
        <Route path="/chart-of-accounts" element={<ProtectedRoute allowedRoles={["Admin"]}><ChartOfAccounts /></ProtectedRoute>} />
        <Route path="/fixed-assets" element={<ProtectedRoute allowedRoles={["Admin"]}><FixedAssets /></ProtectedRoute>} />
        <Route path="/financial-statements" element={<ProtectedRoute allowedRoles={["Admin"]}><FinancialStatements /></ProtectedRoute>} />

      </Routes>
    </div>
  );
};

// ----------------------
// WRAPPER APP FUNCTION
// ----------------------
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;