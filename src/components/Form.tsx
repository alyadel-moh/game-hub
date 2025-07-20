import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm, type FieldValues } from "react-hook-form";
const schema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters " }),
  age: z
    .number({ invalid_type_error: "age feild is required" })
    .min(18, { message: "age must be at least 18" }),
});
type formdata = z.infer<typeof schema>; // infers input types (name and age) based on schema
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // is valid for disabelling submit buttton and formsate used for displaying error messages
  } = useForm<formdata>({ resolver: zodResolver(schema) }); // manage form state errors validations submissionhandling i mean it builds and validate form
  const onSubmit = (data: FieldValues) => console.log(data);
  // handle Submit validates data then call my logic (onsubmit)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {
          <input
            {...register("name")} //.....spreading properties for input element instead of setting it manually
            type="text"
            id="name"
            className="form-control"
          /> /* register takes input to form system and linkes it to the validation  */
        }
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="age"
            className="form-control"
          /> /* register takes input and linkes it to the validation  */
        }
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
