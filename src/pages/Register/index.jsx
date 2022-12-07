import FormRegister from "./../../components/FormRegister/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Register = () => {
  return (
    <div>
      <FormRegister />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
