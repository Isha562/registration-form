import { useState } from "react";
import RegistrationForm from "./Components/RegistrationForm";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <RegistrationForm />
      <Toaster/>
    </>
  );
}

export default App;
