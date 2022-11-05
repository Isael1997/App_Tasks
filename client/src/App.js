import { Route, Routes } from 'react-router-dom'

import TasksForm from './pages/TasksForm';
import TasksPage from './pages/TasksPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
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
