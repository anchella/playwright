import { test, expect } from "@playwright/test";
// const { test, expect } = require("@playwright/test");
test("Open google page", async ({ page }) => {
  //Navigate to page
  // await page.goto(
  //   "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php"
  // );
  // await expect(page).toHaveTitle(
  //   "Selenium Practice - Student Registration Form"
  // );

  await page.goto("https://www.google.com/");
  // const googleSearch = page.getByRole("textarea", { class: "gLFyf" });
  // await googleSearch.click();
  // await page.getByRole("")
  await page.pause();
});
