// src/utils/derivativeUtils.js
import { derivative } from 'mathjs';

export const calculateDerivative = (func, variable) => {
    try {
        const result = derivative(func, variable).toString();
        return { result, error: null };
    } catch {
        return { result: null, error: 'Error al calcular la derivada. Verifica la función ingresada.' };
    }
};
