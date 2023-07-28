import "./Formic.css";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import { getDishes, setDishesInfo } from "../localstorage";

const FormikForm = () => {
  let initialValues = {
    name: "",
    ingredients: "",
    stepsToCook: "",
    ingredientsImage: "",
  };

  let onSubmit = (value) => {
    let _getDishes = getDishes() || [];

    setDishesInfo([..._getDishes, value]);
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name Field is required."),
    stepsToCook: yup.string().required("Steps To Cook is required."),
    ingredientsImage: yup.string().required("Ingredients image is required."),
    ingredients: yup.string().required("ingredients is required."),
  });

  return (
    <div className="formicform">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                className="gap"
                name="name"
                label="Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("name", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                className="gap"
                name="ingredientsImage"
                label="Ingredients Image"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("ingredientsImage", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikTextArea
                className="gap"
                name="ingredients"
                label="Ingredients"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("ingredients", e.target.value);
                }}
                required={true}
              ></FormikTextArea>

              <FormikTextArea
                className="gap"
                name="stepsToCook"
                label="Steps To Cook"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("stepsToCook", e.target.value);
                }}
                required={true}
              ></FormikTextArea>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
