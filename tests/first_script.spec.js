import { test, expect } from "@playwright/test";
// const { test, expect } = require("@playwright/test");
test("Open google page", async ({ page }) => {
  //Navigate to page
  await page.goto("/selenium/practice/selenium_automation_practice.php");
  await expect(page).toHaveTitle(
    "Selenium Practice - Student Registration Form"
  );

  const registrationName = page.locator("css=#name");
  const registrationEmail = page.locator("css=#email");

  expect(registrationName.isVisible).toBeTruthy;
  await registrationName.fill("Rajinikanth");

  await registrationEmail.waitFor();
  await registrationEmail.fill("test@gmail.com");

  // await page.pause();
  // await expect(registrationName).toHaveText("Rajinikanth");
});
