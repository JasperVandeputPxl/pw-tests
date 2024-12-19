const { test, expect } = require("@playwright/test");

const CALCULATOR_APP_IP = "44.201.84.212";

test("Check if the Add button is present", async ({ page }) => {
  // Go to target page
  await page.goto(`http://${CALCULATOR_APP_IP}/`);

  // Get the button with text 'Add'
  const addButton = await page.locator('button', { hasText: 'Add' });

  // Assert that the button is visible
  await expect(addButton).toBeVisible();
});

test("Check if the subtract logic works", async ({page}) => {
  // Go to target page
  await page.goto(`http://${CALCULATOR_APP_IP}/`);

  // Get the button with text 'Subtract'
  const subtractButton = await page.locator('button', { hasText: 'Subtract' });

  // Fill the two input fields
  await page.locator('id=number1').fill('7');
  await page.locator('id=number2').fill('3');

  // Assert that the button is visible
  await expect(subtractButton).toBeVisible();

  // Click the button
  await subtractButton.click();

  // assert that the result is '4'
  const resultField = await page.locator('id=result');
  await expect(resultField).toHaveText("The result is: 4");
});
