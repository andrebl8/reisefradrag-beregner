/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FieldArray,
  ErrorMessage
} from 'formik';
import React from 'react';

interface IRouteObject {
  km: number;
  amountofDays: number;
}

interface IFormValues {
  workroutes: Array<IRouteObject>;
  visitRoutes: Array<IRouteObject>;
  expenditure: number;
}

export default function FormContainer() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          workroutes: [{ km: 0, amountofDays: 0 }],
          visitRoutes: [{ km: 0, amountofDays: 0 }],
          expenditure: 0
        }}
        onSubmit={(
          values: IFormValues,
          { setSubmitting }: FormikHelpers<IFormValues>
        ) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="workroutes">
              {({ remove, push }) => (
                <div>
                  {values.workroutes.length > 0 &&
                    values.workroutes.map((workroute, index) => (
                      <div className="row">
                        <div className="col">
                          <label htmlFor={`workroutes.${index}.km`}>km</label>
                          <Field
                            name={`workroutes.${index}.km`}
                            placeholder="0"
                            type="number"
                          />
                          <ErrorMessage
                            name={`workroutes.${index}.km`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <label htmlFor={`workroutes.${index}.amountofDays`}>
                            amountofDays
                          </label>
                          <Field
                            name={`workroutes.${index}.amountofDays`}
                            placeholder="0"
                            type="number"
                          />
                          <ErrorMessage
                            name={`workroutes.${index}.amountofDays`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => push({ km: 0, amountofDays: 0 })}
                  >
                    Add Friend
                  </button>
                </div>
              )}
            </FieldArray>

            {/*
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          */}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
