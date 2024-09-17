import { useFormStatus } from "react-dom";

function Submit() {
  const {pending} = useFormStatus();
  return <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>;
}

const formAction = async () => {
  // Simulate a delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

const FormStatus = () => {
  return (
   <>
    <h3>WITH USEFORMSTATUS</h3>
    <h3>My form</h3>
    <form action={formAction}>
      <input
        aria-label="input number"
        type="number"
        name="number"
        defaultValue="1"
      />  
      <Submit />
    </form>
   </>
  );
};

export default FormStatus;
