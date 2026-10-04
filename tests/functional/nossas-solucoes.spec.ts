import { test, expect } from '@playwright/test';

test.describe('Nossas Soluções', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve exibir as soluções esperadas e não exibir soluções descontinuadas', async ({
    page,
  }) => {
    await page
      .getByRole('link', { name: 'Nossas soluções ' })
      .click();

    await expect(
      page
        .getByRole('link', { name: 'Gateway', exact: true })
        .filter({ visible: true })
    ).toBeVisible();

    await expect(
      page
        .getByRole('link', {
          name: 'Pix Automático',
          exact: true,
        })
        .filter({ visible: true })
    ).toBeVisible();

    await expect(
      page
        .getByRole('link', {
          name: 'PagBrasil.JS',
          exact: true,
        })
        .filter({ visible: true })
    ).toBeVisible();

    await expect(
      page
        .getByRole('link', {
          name: 'PagBrasil Checkout',
          exact: true,
        })
        .filter({ visible: true })
    ).toBeVisible();

    await expect(
      page.getByText('PEC Flash', { exact: true })
    ).toHaveCount(0);

    await expect(
      page.getByText('Transferência Bancária', {
        exact: true,
      })
    ).toHaveCount(0);

    // Pausa somente durante a apresentação assistida.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(3000);
    }
  });
});