import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcularDesconto } from './desconto.js';

test('aplica 20% de desconto', () => {
    const valor = 100;
    const percentual = 20;

    const resultado = calcularDesconto(valor, percentual);

    assert.equal(resultado, 80);
});

test('retorna zero quando o desconto for 100%', () => {
    const resultado = calcularDesconto(100, 100);

    assert.equal(resultado, 0);
});

test('retorna zero quando o valor inicial é zero', () => {
    const resultado = calcularDesconto(0, 20);

    assert.equal(resultado, 0);
});

test('aplica um desconto com percentual decimal', () => {
    const resultado = calcularDesconto(200, 12.5);

    assert.equal(resultado, 175);
});

test('calcula o desconto para um valor com centavos', () => {
    const resultado = calcularDesconto(19.99, 10);

    assert.ok(Math.abs(resultado - 17.991) < 0.0001);
});

test('rejeita um valor inicial negativo', () => {
    assert.throws(() => calcularDesconto(-10, 20), Error);
});

test('rejeita um percentual de desconto negativo', () => {
    assert.throws(() => calcularDesconto(100, -5), Error);
});

test('rejeita um percentual de desconto acima de 100', () => {
    assert.throws(() => calcularDesconto(100, 120), Error);
});