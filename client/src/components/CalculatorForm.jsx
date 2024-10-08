import { useState } from "react";

const CalculatorForm = ({ onCalculate }) => {
  const [functionInput, setFunctionInput] = useState("");
  const [variableInput, setVariableInput] = useState("x");

  const insertToFunction = (value) => {
    setFunctionInput((prev) => prev + value);
  };

  const handleDeleteLast = () => {
    setFunctionInput((prev) => prev.slice(0, -1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(functionInput, variableInput);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Función:
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Ej: -2x^-6"
            value={functionInput}
            onChange={(e) => setFunctionInput(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Variable:
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Ej: x"
            value={variableInput}
            onChange={(e) => setVariableInput(e.target.value)}
          />
        </div>

        {/* Botones de la calculadora */}
        <div className="grid grid-cols-4 gap-3">
          {/* Botones de números */}
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
            <button
              key={num}
              type="button"
              className="p-3 text-xl bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
              onClick={() => insertToFunction(num)}
            >
              {num}
            </button>
          ))}

          {/* Botón de la variable 'x' */}
          <button
            type="button"
            className="p-3 text-xl bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("x")}
          >
            x
          </button>

          {/* Botones de operaciones */}
          <button
            type="button"
            className="p-3 text-xl bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("+")}
          >
            +
          </button>
          <button
            type="button"
            className="p-3 text-xl bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("-")}
          >
            -
          </button>
          <button
            type="button"
            className="p-3 text-xl bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("*")}
          >
            *
          </button>
          <button
            type="button"
            className="p-3 text-xl bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("/")}
          >
            /
          </button>

          {/* Potencia y Raíz */}
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("x^")}
          >
            x^n
          </button>
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("sqrt(")}
          >
            √(x)
          </button>
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("cbrt(")}
          >
            ∛(x)
          </button>

          {/* Funciones trigonométricas */}
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("sin(")}
          >
            sin
          </button>
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("cos(")}
          >
            cos
          </button>

          {/* Logaritmos y exponenciales */}
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("ln")}
          >
            ln
          </button>
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("exp(")}
          >
            exp
          </button>

          {/* Paréntesis */}
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction("(")}
          >
            (
          </button>
          <button
            type="button"
            className="p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition-all"
            onClick={() => insertToFunction(")")}
          >
            )
          </button>

          {/* Eliminar el último caracter */}
          <button
            type="button"
            className="col-span-2 p-3 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition-all"
            onClick={handleDeleteLast}
          >
            ←
          </button>

          {/* Limpiar el campo */}
          <button
            type="button"
            className="col-span-2 p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all"
            onClick={() => setFunctionInput("")}
          >
            C
          </button>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-800 transition-all"
        >
          Calcular Derivada
        </button>
      </form>
    </div>
  );
};

export default CalculatorForm;
