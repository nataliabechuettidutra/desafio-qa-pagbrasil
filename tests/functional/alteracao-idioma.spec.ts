import { test, expect } from '@playwright/test';

test.describe('Alteração de Idioma', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve alterar o idioma de português para inglês', async ({ page }) => {
    // Confirma que o site iniciou em português
    await expect(page).toHaveURL(/\/pt-br\//i);

    // Rola até o rodapé
    await page.locator('body').press('End');

    // Localiza o rodapé
    const rodape = page.locator('#colophon');

    // Localiza a opção de idioma inglês
    const idiomaIngles = rodape.getByRole('link', {
      name: 'En',
      exact: true,
    });

    // Valida que a opção En está disponível
    await expect(idiomaIngles).toBeVisible();

    // Altera o idioma para inglês
    await idiomaIngles.click();

    // Aguarda a navegação e valida que saiu da versão em português
    await expect(page).not.toHaveURL(/\/pt-br\//i);

    // Valida um conteúdo do menu na versão em inglês
    await expect(
      page.getByRole('link', { name: /Our Solutions/i }).first()
    ).toBeVisible();
  });
});