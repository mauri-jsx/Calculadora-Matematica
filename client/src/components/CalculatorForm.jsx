import { useState } from "react";

const CalculatorForm = ({ onCalculate }) => {
  const [functionInput, setFunctionInput] = useState("");
  const [variableInput, setVariableInput] = useState("x");

  const insertToFunction = (value) => {
    setFunctionInput((prev) => prev + value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(functionInput, variableInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Función:
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Ej: -2x^-6"
            value={functionInput}
            onChange={(e) => setFunctionInput(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Variable:
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Ej: x"
            value={variableInput}
            onChange={(e) => setVariableInput(e.target.value)}
          />
        </div>

        {/* Botones de la calculadora */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("+")}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("-")}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("*")}
          >
            *
          </button>
          <button
            type="button"
            className="btn btn-outline bg-slate-500"
            onClick={() => insertToFunction("/")}
          >
            /
          </button>

          {/* Potencia y Raíz */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("x^")}
          >
            x^n
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("sqrt(")}
          >
            √(x)
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("cbrt(")}
          >
            ∛(x)
          </button>

          {/* Funciones trigonométricas */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("sin(")}
          >
            sin
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("cos(")}
          >
            cos
          </button>

          {/* Logaritmos y exponenciales */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("ln")}
          >
            ln
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("exp(")}
          >
            exp
          </button>

          {/* Paréntesis */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction("(")}
          >
            (
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => insertToFunction(")")}
          >
            )
          </button>

          {/* Limpiar el campo */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setFunctionInput("")}
          >
            C
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full bg-green-600 hover:bg-green-800 text-white"
        >
          Calcular Derivada
        </button>
      </form>
    </div>
  );
};

export default CalculatorForm;
