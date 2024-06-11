'use client'
import React, { useState } from 'react';
import { add, divide, multiply, substract } from './lib';

export default function CalculatorPage() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState("");

    return (
        <div className="bg-green-300">
            <h1 className="text-green-500 text-6xl">Простий Калькулятор</h1>
            <div>
                <label htmlFor="nom1">Number a:</label>
                <input id="nom1" type="number" value={a} onChange={e => setA(e.target.value)} />
            </div>
            <div>
                <label htmlFor="num2">Number b:</label>
                <input id="nom2" type="number" value={b} onChange={e => setB(e.target.value)} />
            </div>
            <button onClick={() => {
                const aNumeric = parseFloat(a);
                const bNumeric = parseFloat(b);
                setResult(add(aNumeric, bNumeric).toString())
            }}>+</button>
            <button onClick={() => {
                const aNumeric = parseFloat(a);
                const bNumeric = parseFloat(b);
                setResult(substract(aNumeric, bNumeric).toString())
            }}>-</button>
            <button onClick={() => {
                const aNumeric = parseFloat(a);
                const bNumeric = parseFloat(b);
                setResult(multiply(aNumeric, bNumeric).toString())
            }}>*</button>
            <button onClick={() => {
                const aNumeric = parseFloat(a);
                const bNumeric = parseFloat(b);
                setResult(divide(aNumeric, bNumeric).toString())
            }}>/</button>
            <button onClick={() => {
                const aNumeric = parseFloat(a);
                const bNumeric = parseFloat(b);
                setResult((aNumeric / 100 * bNumeric).toString())
            }}>%</button>
            <h1>Результат: {result}</h1>
        </div>
    );
}