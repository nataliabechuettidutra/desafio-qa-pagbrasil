import { test, expect } from '@playwright/test';

test.describe('Fale com um especialista', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('deve exibir campo obrigatório nos campos do formulário de e-commerce', async ({
    page,
  }) => {
    // Acessa a página "Fale com um especialista".
    await page
      .getByRole('link', {
        name: 'Fale com um especialista',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL(
      /\/pt-br\/suporte\/?/
    );

    await page.waitForLoadState('load');

    // Fecha o aviso de cookies caso esteja visível.
    const aceitarCookies = page.getByRole(
      'button',
      {
        name: 'Aceitar cookies',
      }
    );

    if (await aceitarCookies.isVisible()) {
      await aceitarCookies.click();
    }

    /*
     * O site utiliza NitroPack para adiar a execução
     * de alguns scripts até ocorrer interação do usuário.
     */
    await page.mouse.move(300, 300);
    await page.mouse.wheel(0, 500);

    // Localiza a opção destinada a e-commerce.
    const cardEcommerce = page
      .locator('li.item-3')
      .filter({
        hasText:
          'Fale com um especialista em pagamentos para e-commerce',
      });

    await expect(cardEcommerce).toBeVisible();

    const blocoEcommerce =
      cardEcommerce.locator('.block');

    /*
     * Aguarda o JavaScript do cartão ser inicializado
     * antes de realizar a seleção.
     */
    await expect
      .poll(
        async () => {
          return blocoEcommerce.evaluate(
            (elemento) => {
              const $ = (window as any).jQuery;

              if (!$ || !$._data) {
                return false;
              }

              const eventos = $._data(
                elemento,
                'events'
              );

              return Boolean(
                eventos &&
                  eventos.click &&
                  eventos.click.length > 0
              );
            }
          );
        },
        {
          timeout: 15000,
          message:
            'Aguardando inicialização do cartão de e-commerce',
        }
      )
      .toBe(true);

    // Seleciona a opção de e-commerce.
    await blocoEcommerce.click();

    await expect(
      blocoEcommerce
    ).toHaveClass(/active/);

    // Acessa o formulário.
    await blocoEcommerce
      .getByRole('link', {
        name: 'Entrar em contato',
      })
      .click();

    const containerFormulario = page.locator(
      '.form[data-id="fale-com-um-especialistaem-pagamentos-parae-commerce"]'
    );

    await expect(
      containerFormulario
    ).toBeVisible({
      timeout: 10000,
    });

    const formulario =
      containerFormulario.locator(
        'form.lead-form-pt-step1'
      );

    await expect(formulario).toBeVisible();

    /*
     * O checkbox real é ocultado visualmente pelo site.
     * O usuário interage com o label correspondente.
     */
    const checkbox = formulario.locator(
      'input[name="autorizacao-checkbox[]"]'
    );

    const labelComunicacoes = formulario
      .locator('label')
      .filter({
        hasText: 'Desejo receber conteúdos',
      });

    await expect(
      labelComunicacoes
    ).toBeVisible();

    await labelComunicacoes.click();

    await expect(checkbox).toBeChecked();

    // Continua sem preencher os campos obrigatórios.
    const continuar = formulario.getByRole(
      'button',
      {
        name: 'Continuar',
      }
    );

    await expect(continuar).toBeVisible();

    await continuar.click();

    /*
     * Valida individualmente os quatro campos
     * solicitados no desafio.
     */
    const campoNome = formulario.locator(
      '[data-name="your-name"]'
    );

    const campoEmpresa = formulario.locator(
      '[data-name="company"]'
    );

    const campoEmail = formulario.locator(
      '[data-name="your-email"]'
    );

    const campoTelefone = formulario.locator(
      '[data-name="phone"]'
    );

    await expect(
      campoNome.locator('.wpcf7-not-valid-tip')
    ).toHaveText('Campo obrigatório');

    await expect(
      campoEmpresa.locator(
        '.wpcf7-not-valid-tip'
      )
    ).toHaveText('Campo obrigatório');

    await expect(
      campoEmail.locator('.wpcf7-not-valid-tip')
    ).toHaveText('Campo obrigatório');

    await expect(
      campoTelefone.locator(
        '.wpcf7-not-valid-tip'
      )
    ).toHaveText('Campo obrigatório');
  });
});