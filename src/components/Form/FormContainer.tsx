/* eslint-disable react/button-has-type */
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
import { IFormValues } from '../../interfaces/IFormValues';
import Card from '../Card/Card';

import './style.scss';

export default function FormContainer() {
  // TODO Fix any type

  const { loading, doTheFetch } = useReiseFradag();

  const postCalculation = async (values) => {
    await doTheFetch(values);
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
          setSubmitting(false);
          postCalculation(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Card>
              <h2>Arbeidsreiser</h2>
              <p>
                Før antall kilometer og antall forekomster for arbeidsreiser
              </p>
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
                            {values.arbeidsreiser.length > 1 && (
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                fjern
                              </button>
                            )}
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
                          Legg til rute
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
            </Card>
            <Card>
              <h2>Besøksreiser</h2>
              <p>Før antall kilometer og antall forekomster for besøksreiser</p>
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
                            {values.besoeksreiser.length > 1 && (
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                Fjern
                              </button>
                            )}
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
                          Legg til rute
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
              <div className="row">
                Her kan du før utgifter for bom, ferge og andre
              </div>
            </Card>
            <div className="button-wrapper">
              <button type="reset" disabled={loading}>
                reset
              </button>
              <button type="submit" disabled={loading}>
                Beregn
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
