import { test, expect } from '@playwright/test';

test.describe('Quem Somos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve validar os elementos da página Quem somos', async ({ page }) => {
    // Abre o menu Sobre
    await page
      .getByRole('link', { name: 'Sobre ' })
      .click();

    // Acessa Quem somos pelo item de menu correto
    await page
      .locator('#menu-item-48975')
      .getByRole('link', { name: 'Quem somos' })
      .click();

    // Valida a página acessada
    await expect(page).toHaveURL(/\/pt-br\/sobre-nos\/?/i);

    // Valida a lupa no cabeçalho
    await expect(
      page.getByRole('link', { name: 'Search' })
    ).toBeVisible();

    // Localiza e valida o título da timeline
    const tituloTimeline = page.getByText('A linha do tempo');

    await expect(tituloTimeline).toBeVisible();

    // Valida a classe do bloco da timeline
    // Estrutura encontrada:
    // STRONG -> H5 -> DIV class="row"
    const timeline = tituloTimeline.locator('xpath=../..');

    await expect(timeline).toHaveClass(/row/);

    // Rola até o rodapé
    await page.locator('body').press('End');

    // Valida o selo GPTW
    const seloGPTW = page.locator(
      'a[href="/pt-br/nossas-certificacoes/"]'
    );

    await expect(seloGPTW).toBeVisible();

    // Localiza o rodapé
    const rodape = page.locator('#colophon');

    // Valida as cidades exibidas no rodapé
    await expect(
      rodape.getByRole('listitem').filter({ hasText: /^Porto Alegre$/ })
    ).toBeVisible();

    await expect(
      rodape.getByRole('listitem').filter({ hasText: /^São Paulo$/ })
    ).toBeVisible();

    await expect(
      rodape.getByRole('listitem').filter({ hasText: /^Barcelona$/ })
    ).toBeVisible();

    await expect(
      rodape.getByRole('listitem').filter({ hasText: /^Singapura$/ })
    ).toBeVisible();
  });
});