export class RegistrationForm {
  constructor(page) {
    this.page = page;
    this.emailLocator = this.page.locator("css=#email");
    this.nameLocator = this.page.locator("css=#name");
    this.nameHeader = this.page.getByText("Name:");
    this.gederRadioMale = this.page.getByRole("radio").nth(0);
    this.gederRadioFemale = this.page.getByRole("radio").nth(1);
    this.gederRadioOther = this.page.getByRole("radio").nth(2);
  }
  visit = async () => {
    await this.page.goto("/selenium/practice/selenium_automation_practice.php");
  };

  nameField = async (nameValue) => {
    await this.nameLocator.fill(nameValue);
  };
  emailField = async (emailValue) => {
    await this.emailLocator.fill(emailValue);
    console.log(
      "Inner text value is:-  " + (await this.nameHeader.innerText())
    );
  };
  genderRadio = async (genderValue) => {
    switch (genderValue.toUpperCase()) {
      case "MALE":
        await this.gederRadioMale.click();
        break;
      case "FEMALE":
        await this.gederRadioFemale.click();
        break;
      default:
        await this.gederRadioOther.click();
        break;
    }
  };
}
