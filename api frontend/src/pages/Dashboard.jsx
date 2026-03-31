import "../App.css";

const Dashboard = () => {
  // 1. Get and Parse the data
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // 2. The Guard Clause (Prevents the crash)
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        <h2 className="text-white">Redirecting to login...</h2>
      </div>
    );
  }

  // 3. The Safe Render
  return (
    <div className="p-8 bg-slate-950 min-h-screen">
      {/* Use optional chaining (?.) as a double-safety measure */}
      <h1 className="text-white text-3xl font-bold">
        Welcome, {user?.username || "Guest"}
      </h1>
      <p className="text-slate-400 mt-2">Email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
