import { test, expect } from '@playwright/test';

test.describe('Validação de Status Code', () => {
  test('deve retornar status 200 na página inicial da PagBrasil', async ({
    request,
  }) => {
    const response = await request.get(
      'https://www.pagbrasil.com/pt-br/'
    );

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });

  test('deve retornar status 200 na página de suporte', async ({
    request,
  }) => {
    const response = await request.get(
      'https://www.pagbrasil.com/pt-br/suporte/'
    );

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
});