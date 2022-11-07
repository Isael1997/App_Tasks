import { Route, Routes } from 'react-router-dom'

//Navigation
import NavBar from './components/Navbar';

//Pages
import TasksForm from './pages/TasksForm';
import TasksPage from './pages/TasksPage';
import NotFound from './pages/NotFound';

import { TaskContextProvider } from './context/TaskProvider.js'

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <NavBar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
