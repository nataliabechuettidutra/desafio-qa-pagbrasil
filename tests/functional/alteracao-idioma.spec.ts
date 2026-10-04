import { test, expect } from '@playwright/test';

test.describe('Alteração de Idioma', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve alterar o idioma de português para inglês', async ({ page }) => {
    await expect(page).toHaveURL(/\/pt-br\//i);

    // Pausa para visualizar o site ainda em português.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(2000);
    }

    await page.locator('body').press('End');

    const rodape = page.locator('#colophon');

    const idiomaIngles = rodape.getByRole('link', {
      name: 'En',
      exact: true,
    });

    await expect(idiomaIngles).toBeVisible();

    // Pausa para visualizar a opção "En" no rodapé.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(2000);
    }

    await idiomaIngles.click();

    await expect(page).not.toHaveURL(/\/pt-br\//i);

    await expect(
      page.getByRole('link', { name: /Our Solutions/i }).first()
    ).toBeVisible();

    // Pausa para visualizar o site já alterado para inglês.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(3000);
    }
  });
});