// App.js
import  { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { TodoContext, TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(TodoContext);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default App;