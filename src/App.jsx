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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BankReconciliation from "./pages/BankReconciliation";
import ChartOfAccounts from "./pages/ChartOfAccount";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* FIXED SIDEBAR */}
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
          <Sidebar />
        </div>

        {/* MAIN CONTENT SHIFTED BY SIDEBAR */}
        <div className="ml-64 pt-16">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ledger" element={<Ledger />} />
            <Route path="/accounts-payable" element={<AccountsPayable />} />
            <Route path="/accounts-receivable" element={<AccountsReceivable />} />
            <Route path="/fixed-assets" element={<FixedAssets />} />
            <Route path="/bank-accounts" element={<BankAccounts />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/worklist" element={<WorklistPage />} />
            <Route path="/cash-management" element={<CashManagement />} />
            <Route path="/payment-entry" element={<PaymentEntry />} />
            <Route path="/receipt-entry" element={<ReceiptEntry />} />
            <Route path="/journal-entry" element={<JournalEntry />} />
            <Route path="/bank-reconciliation" element={<BankReconciliation />} />
            <Route path="/financial-statements" element={<FinancialStatements />} />
            <Route path="/general-ledger-report" element={<GeneralLedgerReport />} />
            <Route path="/cash-book" element={<CashBook />} />
            <Route path="/bank-book" element={<BankBook />} />
            <Route path="/trial-balance" element={<TrialBalance/>} />
            <Route path="/business-partners" element={<BusinessPartners />} />
            <Route path="/chart-of-accounts" element={<ChartOfAccounts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;