import React, { useState } from "react";
import { create, all } from "mathjs";

const math = create(all, {});

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Evaluar la expresión usando mathjs
        let result = math.evaluate(input.replace(/x/g, "*"));
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Borrar todo
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); // Borrar por partes
    } else if (value === "log") {
      setInput(input + "log10("); // log en base 10
    } else if (value === "ln") {
      setInput(input + "ln("); // logaritmo natural
    } else if (value === "√") {
      setInput(input + "sqrt("); // raíz cuadrada
    } else if (value === "sin") {
      setInput(input + "sin(x)"); // seno con x
    } else if (value === "cos") {
      setInput(input + "cos(x)"); // coseno con x
    } else if (value === "tan") {
      setInput(input + "tan(x)"); // tangente con x
    } else if (value === "e^x") {
      setInput(input + "exp("); // e elevado a la x
    } else if (value === "^") {
      setInput(input + "**"); // Potencia
    } else if (value === "Derivar") {
      handleDerivative(); // Calcular la derivada
    } else if (value === "x") {
      setInput(input + "x"); // Añadir x
    } else if (value === "*") {
      setInput(input + "*"); // Añadir multiplicación
    } else {
      setInput(input + value); // Añadir valor al input
    }
  };

  const handleDerivative = () => {
    try {
      const derivativeResult = calculateDerivative(input);
      setInput(derivativeResult);
    } catch {
      setInput("Error");
    }
  };

  const calculateDerivative = (func) => {
    func = func.replace(/X/g, "x"); // Reemplazar X por x
    func = func.trim(); // Asegúrate de que no haya espacios extra

    // Reglas de derivación
    if (/^(\d+)$/.test(func)) return "0"; // Constante
    if (/^(\d+)x$/.test(func)) return func.replace(/(\d+)x/, "$1"); // ax -> a
    if (/^(\d+)x\^(-?\d+)$/.test(func)) {
      const [, a, n] = func.match(/^(\d+)x\^(-?\d+)$/);
      return `${a * n}x^${n - 1}`; // ax^n -> a*n*x^(n-1)
    }
    if (/^(-?\d+)x\^(-?\d+)$/.test(func)) {
      const [, a, n] = func.match(/^(-?\d+)x\^(-?\d+)$/);
      return `${a * n}x^${n - 1}`; // ax^n -> a*n*x^(n-1)
    }
    if (/^x\^(-?\d+)$/.test(func)) {
      const n = parseInt(func.match(/^x\^(-?\d+)$/)[1], 10);
      return `${n}x^${n - 1}`; // x^n -> n*x^(n-1)
    }
    if (/^(-?x)\^(-?\d+)$/.test(func)) {
      const n = parseInt(func.match(/^(-?x)\^(-?\d+)$/)[2], 10);
      return `${n}(${func.match(/^(-?x)/)[1]})^${n - 1}`; // -x^n -> n*(-x)^(n-1)
    }
    if (/^sqrt\(x\)$/.test(func)) return "1/(2*sqrt(x))"; // √x -> 1/(2√x)
    if (/^e\^x$/.test(func)) return "e^x"; // e^x -> e^x
    if (/^ln\(x\)$/.test(func)) return "1/x"; // ln(x) -> 1/x
    if (/^log10\(x\)$/.test(func)) return "1/(x*ln(10))"; // log(x) -> 1/(x*ln(10))
    if (/^sin\(x\)$/.test(func)) return "cos(x)"; // sin(x) -> cos(x)
    if (/^cos\(x\)$/.test(func)) return "-sin(x)"; // cos(x) -> -sin(x)
    if (/^tan\(x\)$/.test(func)) return "1/cos^2(x)"; // tan(x) -> 1/cos^2(x)

    return "Derivada no definida"; // Para funciones no reconocidas
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
        <div className="mb-4 p-4 bg-gray-800 text-white text-right text-3xl rounded-md">
          {input || "0"}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {/* Fila de funciones científicas */}
          {["sin", "cos", "tan", "log", "ln"].map((val) => (
            <button
              key={val}
              className="bg-gray-300 p-3 rounded-md text-lg"
              onClick={() => handleClick(val + "(")}
            >
              {val}(x)
            </button>
          ))}

          {/* Segunda fila */}
          {["(", ")", "√", "^", "e^x"].map((val) => (
            <button
              key={val}
              className="bg-gray-300 p-3 rounded-md text-lg"
              onClick={() => handleClick(val)}
            >
              {val}
            </button>
          ))}

          {/* Tercera fila */}
          {["7", "8", "9", "/", "DEL"].map((val) => (
            <button
              key={val}
              className={`bg-gray-300 p-3 rounded-md text-lg ${
                val === "DEL" ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleClick(val)}
            >
              {val}
            </button>
          ))}

          {/* Cuarta fila */}
          {["4", "5", "6", "x", "C"].map((val) => (
            <button
              key={val}
              className={`bg-gray-300 p-3 rounded-md text-lg ${
                val === "C" ? "bg-red-500" : ""
              }`}
              onClick={() => handleClick(val)}
            >
              {val}
            </button>
          ))}

          {/* Quinta fila */}
          {["1", "2", "3", "-", "Derivar"].map((val) => (
            <button
              key={val}
              className={`bg-gray-300 p-3 rounded-md text-lg ${
                val === "Derivar" ? "bg-blue-500" : ""
              }`}
              onClick={() => handleClick(val)}
            >
              {val}
            </button>
          ))}

          {/* Sexta fila */}
          {["0", ".", "+", "*"].map(
            (
              val // Añadir botón de multiplicación
            ) => (
              <button
                key={val}
                className="bg-gray-300 p-3 rounded-md text-lg"
                onClick={() => handleClick(val)}
              >
                {val}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
