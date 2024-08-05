// @ts-check
const { test, expect } = require("@playwright/test");

test.skip("Google home page", async ({ page }) => {
  await page.goto("https://google.com/");

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  // const getStarted = page.getByRole("link", { name: "Get started" });
  // await page.pause();
  // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  // await getStarted.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);

  //Pause the page
  // await page.pause();
});
test.skip("facebook homepage", async ({ page }) => {
  await page.goto("https://facebook.com/");

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  // const getStarted = page.getByRole("link", { name: "Get started" });
  // await page.pause();
  // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  // await getStarted.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);

  //Pause the page
  // await page.pause();
});
