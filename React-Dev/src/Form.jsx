import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function submitForm(data) {
    console.log(data);
  }
  console.log("Form Rendered");

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name:</label>
          <input
            id="first"
            {...register("name", { required: "Name can't be empty" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age:</label>
          <input
            id="second"
            {...register("age", {
              min: {
                value: 10,
                message: "Minimum value should be greater than 10",
              },
              max: {
                value: 90,
                message: "Minimum value should be less than 90",
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password:</label>
          <input id="third" {...register("password")} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
