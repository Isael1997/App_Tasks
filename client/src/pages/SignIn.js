import { Formik, Form, Field } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUsers } from '../context/UserProvider'


function SignIn() {
    const { users, login } = useUsers();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    return (
        <div>
            <Formik
                initialValues={user}
                enableReinitialize={true}
                className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
                onSubmit={async (values, actions) => {
                    console.log(values);

                    const [response] = await login(values)


                    navigate('/home')
                    setUser({
                        username: "",
                        password: "",
                    })
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
                        <Link to='/signup' className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">Sign Up</Link>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default SignIn;