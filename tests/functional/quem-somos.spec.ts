import { test, expect } from '@playwright/test';

test.describe('Quem Somos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve validar os elementos da página Quem somos', async ({ page }) => {
    await page
      .getByRole('link', { name: 'Sobre ' })
      .click();

    await page
      .locator('#menu-item-48975')
      .getByRole('link', { name: 'Quem somos' })
      .click();

    await expect(page).toHaveURL(/\/pt-br\/sobre-nos\/?/i);

    await expect(
      page.getByRole('link', { name: 'Search' })
    ).toBeVisible();

    // Pausa para visualizar a página Quem Somos.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(2000);
    }

    const tituloTimeline = page.getByText('A linha do tempo');

    await expect(tituloTimeline).toBeVisible();

    const timeline = tituloTimeline.locator('xpath=../..');

    await expect(timeline).toHaveClass(/row/);

    // Leva a timeline para uma posição visível na tela.
    await tituloTimeline.scrollIntoViewIfNeeded();

    // Pausa para visualizar a timeline.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(3000);
    }

    // Vai para o rodapé.
    await page.locator('body').press('End');

    const seloGPTW = page.locator(
      'a[href="/pt-br/nossas-certificacoes/"]'
    );

    await expect(seloGPTW).toBeVisible();

    const rodape = page.locator('#colophon');

    await expect(
      rodape
        .getByRole('listitem')
        .filter({ hasText: /^Porto Alegre$/ })
    ).toBeVisible();

    await expect(
      rodape
        .getByRole('listitem')
        .filter({ hasText: /^São Paulo$/ })
    ).toBeVisible();

    await expect(
      rodape
        .getByRole('listitem')
        .filter({ hasText: /^Barcelona$/ })
    ).toBeVisible();

    await expect(
      rodape
        .getByRole('listitem')
        .filter({ hasText: /^Singapura$/ })
    ).toBeVisible();

    // Pausa para visualizar GPTW e as cidades no rodapé.
    if (process.env.DEMO === 'true') {
      await page.waitForTimeout(4000);
    }
  });
});