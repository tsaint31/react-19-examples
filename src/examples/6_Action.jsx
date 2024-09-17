import { useActionState } from "react";

// Fonction asynchrone en charge de l'action à la soumission du formulaire
const increment = async (previousNumber, formData) => {
  return previousNumber + Number(formData.get("number"));
};

const Action = () => {
  const [currentNumber, incrementFormAction] = useActionState(increment, 0);
  return (
    <>
      <h3>USE_ACTION_STATE example</h3>
      <form action={incrementFormAction}>
        <p>{currentNumber}</p>
        <input
          aria-label="input number"
          type="number"
          name="number"
          defaultValue="1"
        />
        <button type="submit">Incrémenter</button>
      </form>
    </>
  );
};

export default Action;
