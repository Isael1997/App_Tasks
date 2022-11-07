import { Formik, Form, Field } from 'formik'
import { useTasks } from '../context/TaskProvider.js'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function TasksForm() {
    const { createTask, getTask, updateTask } = useTasks();
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id);
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
            <h1>
                {params.id ? "Edit Task" : "New Task"}
            </h1>
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        if (params.id) {
                            await updateTask(params.id, values);
                        } else {
                            await createTask(values);
                        }
                        navigate("/");
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
                    <Form>
                        {/*Title */}
                        <label>title</label>
                        <Field
                            name="title"
                            type="text"
                            placeholder="Write a title"
                        />

                        {/**Description */}
                        <label>description</label>
                        <Field
                            name="description"
                            as="textarea"
                            ows="3"
                            placeholder="Write a description"
                        />
                        <button type="submit" disabled={actions.isSubmitting}>
                            {actions.isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}

            </Formik>
        </div >
    )
}

export default TasksForm;