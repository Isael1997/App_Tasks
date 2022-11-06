import { Route, Routes } from 'react-router-dom'

//Navigation
import NavBar from './components/Navbar';

//Pages
import TasksForm from './pages/TasksForm';
import TasksPage from './pages/TasksPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="/edit/:id" element={<TasksForm />} />
        <Route path="*" element={<NotFound />} />      
      </Routes>
    </div>
  );
}

export default App;
