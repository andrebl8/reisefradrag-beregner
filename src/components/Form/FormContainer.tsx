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

import useReiseFradag from '../../api/useReisefradrag';
import { useCalculationContext } from '../../context/calculationContext';
import { IFormValues } from '../../interfaces/IFormValues';
import Card from '../Card/Card';

import './style.scss';

export default function FormContainer() {
  // TODO Fix any type

  const { loading, doTheFetch, result } = useReiseFradag();

  const { setCalculation } = useCalculationContext();

  const postCalculation = async (values) => {
    await doTheFetch(values);

    setCalculation(result);
    console.log('sing me to sleep', result);
  };

  return (
    <div className="formContainer">
      <Formik
        initialValues={{
          arbeidsreiser: [{ km: 0, antall: 0 }],
          besoeksreiser: [{ km: 0, antall: 0 }],
          utgifterBomFergeEtc: 0
        }}
        onSubmit={(
          values: IFormValues,
          { setSubmitting }: FormikHelpers<IFormValues>
        ) => {
          console.log(values);
          setSubmitting(false);
          postCalculation(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Card>
              <h2>Arbeidsreiser</h2>
              <FieldArray name="arbeidsreiser">
                {({ remove, push }) => (
                  <div>
                    {values.arbeidsreiser.length > 0 &&
                      values.arbeidsreiser.map((arbeidsreise, index) => (
                        <div
                          className="row"
                          key={`arbeidsreiser-${arbeidsreise[index]}`}
                        >
                          <div className="col">
                            <label htmlFor={`arbeidsreiser.${index}.km`}>
                              km
                            </label>
                            <Field
                              name={`arbeidsreiser.${index}.km`}
                              placeholder="0"
                              type="number"
                            />
                            <ErrorMessage
                              name={`arbeidsreiser.${index}.km`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`arbeidsreiser.${index}.antall`}>
                              antall
                            </label>
                            <Field
                              name={`arbeidsreiser.${index}.antall`}
                              placeholder="0"
                              type="number"
                            />
                            <ErrorMessage
                              name={`arbeidsreiser.${index}.antall`}
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
                    <div className="row">
                      {' '}
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => push({ km: 0, antall: 0 })}
                        >
                          Add route
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
            </Card>

            <Card>
              <h2>Besøksreiser</h2>
              <FieldArray name="besoeksreiser">
                {({ remove, push }) => (
                  <div>
                    {values.besoeksreiser.length > 0 &&
                      values.besoeksreiser.map((besoeksreise, index) => (
                        <div
                          className="row"
                          key={`besoeksreise-${besoeksreise[index]}`}
                        >
                          <div className="col">
                            <label htmlFor={`besoeksreiser.${index}.km`}>
                              km
                            </label>
                            <Field
                              name={`besoeksreiser.${index}.km`}
                              placeholder="0"
                              type="number"
                            />
                            <ErrorMessage
                              name={`besoeksreiser.${index}.km`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`besoeksreiser.${index}.antall`}>
                              antall
                            </label>
                            <Field
                              name={`besoeksreiser.${index}.antall`}
                              placeholder="0"
                              type="number"
                            />
                            <ErrorMessage
                              name={`besoeksreiser.${index}.antall`}
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
                    <div className="row">
                      {' '}
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => push({ km: 0, antall: 0 })}
                        >
                          Add route
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
            </Card>

            <Card>
              <div className="row">
                <div className="col">
                  <label htmlFor="utgifterBomFergeEtc">Diverse utgifter</label>
                  <Field name="utgifterBomFergeEtc" type="number" />
                </div>
              </div>
            </Card>
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
