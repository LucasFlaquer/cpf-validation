import { valida_cpf } from "./CPFValidation"


describe('it should validate CPF', () => {
  it('validate CPF', () => {
    expect(valida_cpf(null)).toBe(false);
    expect(valida_cpf('0000000')).toBe(false);
    expect(valida_cpf('12312312322222')).toBe(false);
    expect(valida_cpf('11111111111')).toBe(false);
    expect(valida_cpf('22222222222')).toBe(false);
    expect(valida_cpf('33333333333')).toBe(false);
    expect(valida_cpf('44444444444')).toBe(false);
    expect(valida_cpf('55555555555')).toBe(false);
    expect(valida_cpf('66666666666')).toBe(false);
    expect(valida_cpf('77777777777')).toBe(false);
    
    expect(valida_cpf('42831345898')).toBe(true);
    expect(valida_cpf('428.313.458-98')).toBe(true);
    expect(valida_cpf('840.769.600-50')).toBe(true);

  })
})