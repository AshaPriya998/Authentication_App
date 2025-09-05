import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome, {user.first_name || user.username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="user-details">
        <h2>Your Profile Details</h2>
        <div className="detail-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="detail-item">
          <strong>Username:</strong> {user.username}
        </div>
        {user.first_name && (
          <div className="detail-item">
            <strong>First Name:</strong> {user.first_name}
          </div>
        )}
        {user.last_name && (
          <div className="detail-item">
            <strong>Last Name:</strong> {user.last_name}
          </div>
        )}
        {user.phone_number && (
          <div className="detail-item">
            <strong>Phone:</strong> {user.phone_number}
          </div>
        )}
        <div className="detail-item">
          <strong>Member since:</strong> {new Date(user.date_joined).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Home;