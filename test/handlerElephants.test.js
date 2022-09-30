const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('testa se a função retorna undefined se não passar parametro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('testa se a função retorna um erro se não for passado uma string por parâmentro', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testa se a função retorna o parametro pedido para os itens do objeto', () => {
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });
  it('testa se a função retorna null', () => {
    expect(handlerElephants('apelido')).toBeNull();
  });
  it('testa se a função retorna corretamente se passar o paramentro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa se a função retorna corretamente se passar o paramentro names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('testa se a função retorna corretamente se passar o paramentro averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
