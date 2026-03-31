import "../App.css";
const Dashboard = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  if (!user) {
    return <div className="text-white">No user data found</div>;
  }
  return (
    <div>
      <h1 className="text-white">Welcome, {user.username}</h1>
    </div>
  );
};

export default Dashboard;
