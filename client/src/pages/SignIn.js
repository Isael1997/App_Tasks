import { Formik, Form, Field } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'


function SignIn() {
    return (
        <div>
            <Formik
                initialValues={{
                    username:"",
                    password: ""
                }}
                className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
                onSubmit={async (values, actions) => {
                    console.log(values);
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
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default SignIn;