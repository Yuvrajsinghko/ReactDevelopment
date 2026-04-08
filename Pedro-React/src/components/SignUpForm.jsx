const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
            <h2>Email</h2>
            <input type="email" placeholder="Enter name" />
        </label>
      </form>
    </>
  );
};

export default SignUpForm;
