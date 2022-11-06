import { Formik, Form, Field } from 'formik'
import { CreateTaskRequest } from '../api/Tasks.api.js'

function TasksForm() {
    return (
        <div>
            <Formik
                initialValues={{ title: "", description: "" }}
                onSubmit={async (values) => {
                    console.log(values);
                    try {
                        const response = await CreateTaskRequest(values);
                        console.log(response);
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
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
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default TasksForm;