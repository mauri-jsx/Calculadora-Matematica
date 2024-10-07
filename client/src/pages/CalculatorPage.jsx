// src/pages/CalculatorPage.js
import Swal from "sweetalert2";
import CalculatorForm from "../components/CalculatorForm.jsx";
import { calculateDerivative } from "../utils/derivativeUtils.jsx";

const CalculatorPage = () => {
  const handleCalculate = (func, variable) => {
    const { result, error } = calculateDerivative(func, variable);

    if (error) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Resultado",
        text: `La derivada de ${func} con respecto a ${variable} es: ${result}`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Calculadora de Derivadas
        </h1>
        <CalculatorForm onCalculate={handleCalculate} />
      </div>
    </div>
  );
};

export default CalculatorPage;
