import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUsers } from '../context/UserProvider';

function SignUp() {
    const { users, register } = useUsers();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
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
                    console.log(values.firstname)
                    try {
                        await register(values)
                        navigate("/home")
                        setUser({
                            firstname: "",
                            lastname: "",
                            email: "",
                            username: "",
                            password: ""
                        })
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
                            Sign Up
                        </h1>
                        {/*Name */}
                        <label className="block">Name</label>
                        <Field
                            //vn is el values of names
                            name="firstname"
                            type="text"
                            placeholder="name"
                            className="px-2 py-1 rounded-sm w-full"
                        />

                        {/*Last Name */}
                        <label className="block">Last Name</label>
                        <Field
                            name="lastname"
                            type="text"
                            placeholder="last name"
                            className="px-2 py-1 rounded-sm w-full"
                        />

                        {/*Email */}
                        <label className="block">Email</label>
                        <Field
                            name="email"
                            type="email"
                            placeholder="email"
                            className="px-2 py-1 rounded-sm w-full"
                        />

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
                            {actions.isSubmitting ? "Saving..": "Register"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp;