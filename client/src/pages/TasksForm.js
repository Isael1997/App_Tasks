import { Formik, Form, Field } from 'formik'
import { useTasks } from '../context/TaskProvider.js'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useUsers} from '../context/UserProvider.js'


function TasksForm() {
    const { createTask, getTask, updateTask } = useTasks();
    const {token} = useUsers();
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const auth = token;
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                console.log("THe Id: ", params.id)
                const task = await getTask(params.id, auth.token);
                console.log(task);
                setTask({
                    title: task.title,
                    description: task.description,
                });
            }
        }
        loadTask();
    }, [])

    return (
        <div>
            <Formik
                initialValues={task}
                enableReinitialize={true}
                className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        if (params.id) {
                            await updateTask(params.id, values, auth.token);
                        } else {
                            await createTask(values, auth.token);
                        }
                        navigate("/home");
                        setTask({
                            title: "",
                            description: "",
                        });
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
                            {params.id ? "Edit Task" : "New Task"}
                        </h1>
                        {/*Title */}
                        <label className="block">Title</label>
                        <Field
                            name="title"
                            type="text"
                            placeholder="Write a title"
                            className="px-2 py-1 rounded-sm w-full"
                        />

                        {/**Description */}
                        <label className="block">Description</label>
                        <Field
                            name="description"
                            as="textarea"
                            ows="3"
                            placeholder="Write a description"
                            className="px-2 py-1 rounded-sm w-full"
                        />
                        <button type="submit" disabled={actions.isSubmitting}
                            className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
                        >
                            {actions.isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default TasksForm;