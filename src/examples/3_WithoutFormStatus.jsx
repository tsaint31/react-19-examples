import { useState } from "react";

const Submit = ({ pending }) => {
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
};

const formAction = async () => {
  // Simulate a delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

const WithoutFormStatus = () => {
  const [pending, setPending] = useState(false);

  return (
    <>
      <h3>WITHOUT USEFORMSTATUS</h3>
      <h3>My form</h3>
      <form
        action={() => {
          setPending(true);
          formAction().then(() => setPending(false));
        }}
      >
        <input
          aria-label="input number"
          type="number"
          name="number"
          defaultValue="1"
        />
        <Submit pending={pending} />
      </form>
    </>
  );
};

export default WithoutFormStatus;
