import { Formik, Form, Field } from 'formik'
import { CreateTaskRequest } from '../api/Tasks.api.js'

function TasksForm() {
    return (
        <div>
            <Formik
                initialValues={{ title: "", description: "" }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        const response = await CreateTaskRequest(values);
                        console.log(response);

                        actions.resetForm({
                            values: {
                                // the type of `values` inferred to be Blog
                                title: '',
                                description: '',
                            },
                            // you can also set the other form states here
                        });
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