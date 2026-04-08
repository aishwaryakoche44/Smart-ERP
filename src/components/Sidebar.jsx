import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'Admin';

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-blue-950 text-white shadow-lg z-50 overflow-y-auto">

      {/* LOGO / TITLE */}
      <div className="p-4 pb-2">
        <h1 className="text-xl font-bold">Accounting ERP</h1>
      </div>

      {/* SIDEBAR MENU */}
      <div className="px-4 space-y-2">

        {/* HOME */}
        <SidebarItem title="Dashboard" path="/" />

        {/* FINANCIAL ACCOUNTING */}
        {isAdmin && (
          <>
            <Section title="Master Data" />
            <SidebarItem title="Business Partners" path="/business-partners" />
            <SidebarItem title="Chart of Accounts" path="/chart-of-accounts" />
            <SidebarItem title="Fixed Assets" path="/fixed-assets" />
          </>
        )}

        {/* TRANSACTIONS */}
        <Section title="Transactions" />
        <SidebarItem title="Payment Entry" path="/payment-entry" />
        <SidebarItem title="Receipt Entry" path="/receipt-entry" />
        <SidebarItem title="Journal Entry" path="/journal-entry" />
        {isAdmin && <SidebarItem title="Bank Reconciliation" path="/bank-reconciliation" />}

        {/* REPORTS */}
        <Section title="Reports" />
        <SidebarItem title="Cash Book" path="/cash-book" />
        <SidebarItem title="Bank Book" path="/bank-book" />
        <SidebarItem title="Trial Balance" path="/trial-balance" />
        
        {isAdmin && (
          <>
            <SidebarItem title="Financial Statements" path="/financial-statements" />
            <SidebarItem title="General Ledger Report" path="/general-ledger-report" />
          </>
        )}

        {isAdmin && (
          <>
            <Section title="Administration" />
            <SidebarItem title="User Management" path="/users" />
            <SidebarItem title="System Logs" path="/activities" />
          </>
        )}
      </div>
    </div>
  );
}


/* -------------------------------
   SIDEBAR ITEM COMPONENT
--------------------------------*/
function SidebarItem({ title, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block px-3 py-1.5 rounded text-sm cursor-pointer transition-all
        ${isActive ? "bg-blue-700 text-white font-semibold" : "text-blue-100 hover:bg-blue-800"}`
      }
    >
      {title}
    </NavLink>
  );
}


/* ---------------------------------
   SECTION TITLE (SMALL LABELS)
----------------------------------*/
function Section({ title }) {
  return (
    <p className="text-xs mt-3 mb-1 text-blue-400 uppercase">{title}</p>
  );
}