const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const isOpen = 'The zoo is open';
  it('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se ao passar uma função vazia retorna a tabela de horarios', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('testa se o dia passado como parametro é Capitalizado e testado', () => {
    expect(getOpeningHours('sUnday', '10:00-aM')).toBe(isOpen);
  });
  it('testa se ao passar como segundo paramentro algo que nao seja as horas ou de 0 a 12 retorna um erro', () => {
    expect(() => getOpeningHours('Monday', 'nove:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '16:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('testa se ao passar como segundo paramentro algo que nao seja os minutos ou de 0 a 59 retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '09:ten-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '09:100-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('testa se ao passar como primeiro paramentro algo que nao seja o dia retorna um erro', () => {
    expect(() => getOpeningHours('february')).toThrow('The day must be valid. Example: Monday');
  });
  it('testa se ao passar como segundo paramentro algo que nao seja am ou pm retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '09:10-rr')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('testa se esta aberto e funcionando o zoologico ou fechado', () => {
    expect(getOpeningHours('sunday', '12:00-pm')).toBe(isOpen);
  });
  it('testa se segunda o zoologico abre', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('testa o horario de terça', () => {
    expect(getOpeningHours('tuesday', '09:00-AM')).toBe(isOpen);
  });
  it('testa o horario de quarta', () => {
    expect(getOpeningHours('wednesday', '09:00-pm')).toBe('The zoo is closed');
  });
});
