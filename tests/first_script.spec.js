import { test, expect } from "@playwright/test";
// const { test, expect } = require("@playwright/test");
test("Open google page", async ({ page }) => {
  //Navigate to page
  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php"
  );
  await expect(page).toHaveTitle(
    "Selenium Practice - Student Registration Form"
  );

  const registrationName = page.locator("css=#name");
  expect(registrationName.isVisible).toBeTruthy;
  await registrationName.fill("Rajinikanth");
  await expect(registrationName).toHaveText("Rajinikanth");
});
