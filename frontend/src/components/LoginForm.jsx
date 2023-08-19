export default function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.user.value);
    console.log(e.target.pass.value);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="user" id="user" />
          <input type="password" name="pass" id="pass" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
