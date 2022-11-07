import { Formik, Form, Field } from 'formik'
import { CreateTaskRequest } from '../api/Tasks.api.js'
import {useTasks} from '../context/TaskProvider.js'


function TasksForm() {
    const {createTask} = useTasks();
    return (
        <div>
            <Formik
                initialValues={{ title: "", description: "" }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        createTask(values)
                        actions.resetForm()
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {(actions) => (
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
        </div>
    )
}

export default TasksForm;