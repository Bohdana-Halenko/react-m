import React from "react";
import { Alert } from "./Alert";

const App = () => {
    return (
      <>
        <Alert variant="info">Please update your email!</Alert>
        <Alert variant="error">Error!</Alert>
        <Alert variant="success">Success!</Alert>
        <Alert variant="warning">Warning!</Alert>
      </>
    );
}


export default App;