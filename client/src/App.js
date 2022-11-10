import { Route, Routes, Navigate } from 'react-router-dom'

//Navigation
import NavBar from './components/Navbar';

//Pages Takes
import TasksForm from './pages/TasksForm';
import TasksPage from './pages/TasksPage';

//Pages SignIn and SignUp
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'

//Pages Not Found
import NotFound from './pages/NotFound';

//Conexion con the api of Backend
import { TaskContextProvider } from './context/TaskProvider.js'

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <NavBar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path='/' element={<Navigate replace to="/signin"/>}/>
            <Route path="/Home" element={<TasksPage />} />
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
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
