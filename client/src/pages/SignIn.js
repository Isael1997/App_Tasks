import { Formik, Form, Field } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useUsers } from '../context/UserProvider'
import {Authlogin} from '../auth/auth.login.js'
import TasksPage from './TasksPage.js';

function SignIn() {
    const { users, login, token } = useUsers();
    const navigate = useNavigate();

    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
                onSubmit={async (values, actions) => {
                    console.log(values);
                    console.log(values.username, values.password)
                    try {
                        const re = await login(values.username, values.password)
                        console.log("entraste")
                        console.log("Response: ", re)
                        const auth = Authlogin(re)
                        console.log("auth: ", auth)
                        actions.resetForm()
                        navigate('/home')
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                {(actions, values) => (
                    <Form
                        className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
                    >
                        <h1 className="text-xl font-bold uppercase text-center">
                            Sign In
                        </h1>
                        {/*Username */}
                        <label className="block">Username</label>
                        <Field
                            name="username"
                            type="text"
                            placeholder="username or email"
                            className="px-2 py-1 rounded-sm w-full"
                        />

                        {/*Password */}
                        <label className="block">password</label>
                        <Field
                            name="password"
                            type="password"
                            placeholder="password"
                            className="px-2 py-1 rounded-sm w-full"
                        />
                        <button type="submit" disabled={actions.isSubmitting}
                            className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
                        >
                            Login
                        </button>
                        <Link to='/signup' className="block bg-purple-500 px-2 py-1 text-white w-full rounded-md">Sign Up</Link>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default SignIn;