import { useState } from "react";

// Fonction asynchrone en charge de l'action à la soumission du formulaire

const ActionSetState = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const incrementFormAction = (formData) => {
    return setCurrentNumber(currentNumber + Number(formData.get("number")));
  };

  return (
    <>
      <h3>WITHOUT USE_ACTION_STATE example</h3>
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

export default ActionSetState;
