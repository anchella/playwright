const { test, expect } = require("@playwright/test");
const { RegistrationForm } = require("../page-object/RegistrationForm");
test.only("Register page for login", async ({ page }) => {
  //Create object for a class
  const registrationForm = new RegistrationForm(page);

  await registrationForm.visit();
  await expect(page).toHaveTitle(
    "Selenium Practice - Student Registration Form"
  );
  await registrationForm.nameField("Rajinikanth");
  await registrationForm.emailField("test@test.com");
  // console.log()
  await registrationForm.genderRadio("Male");
  // await page.pause();
});
