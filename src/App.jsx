import "./App.css";
import UsersSetState from "./examples/1_UsersSetState";
import Users from "./examples/2_Users";
import Action from "./examples/6_Action";
import FormStatus from "./examples/4_FormStatus";
import FormState from "./examples/FormState";
import WithoutFormStatus from "./examples/3_WithoutFormStatus";
import ActionSetState from "./examples/5_ActionSetState";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          {/* OLD SCHOOL */}
          <UsersSetState />
          {/* NEW HOOK */}
          {/* <Users /> */}

          {/* OLD SCHOOL */}
          {/* <WithoutFormStatus /> */}
          {/* NEW HOOK */}
          {/* <FormStatus /> */}

          {/* OLD SCHOOL */}
          {/* <ActionSetState /> */}
          {/* NEW HOOK */}
          {/* <Action /> */}
        </Suspense>
      </div>
    </>
  );
}

export default App;
