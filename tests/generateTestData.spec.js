const { test } = require("@playwright/test");
const fs = require("fs/promises");

const ROBOT_POSITIONS = [
  "input_r_r1",
  "input_r_r2",
  "input_r_r3",
  "input_r_b1",
  "input_r_b2",
  "input_r_b3",
];

const lowMedHigh = ["Low", "Medium", "High"];
const chargingPadLevel = ["None", "Docked", "Engaged"];
const dockingTime = ["0-5", "5-15", "15-30", "30-more", "NA"];
const speeds = ["Slow", "Medium", "Fast"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomTrueFalse = () => {
  return !!getRandomInt(2);
};

const getRandomLowMedHigh = () => {
  return lowMedHigh[getRandomInt(3)];
};

const getRandomChargingPadState = () => {
  return chargingPadLevel[getRandomInt(3)];
};

const getRandomDockingTime = () => {
  return dockingTime[getRandomInt(5)];
};

const getRandomSpeed = () => {
  return speeds[getRandomInt(3)];
};

test("Create 2023 Event Test Data", async ({ page }) => {
  test.setTimeout(600 * 100);
  const outputStrings = [];
  await page.goto("file:///C:/Source/personal/ScoutingPASS/index.html");
  for (var matchNum = 1; matchNum <= 50; matchNum++) {
    for (var i = 0; i < ROBOT_POSITIONS.length; i++) {
      await page.locator("#input_s").click();
      await page.locator("#input_s").fill("JK");
      await page.locator("#input_m").click();
      await page.locator("#input_m").fill(matchNum.toString());
      await page.locator(`#${ROBOT_POSITIONS[i]}`).check();
      await page.getByText("No canvas support").click({
        position: {
          x: 261,
          y: 70,
        },
      });
      const exitsCommunity = getRandomTrueFalse();
      if (exitsCommunity) await page.locator("#input_ae").check();
      const autoScored = getRandomInt(4);
      for (var go = 0; go < autoScored; go++) {
        await page
          .getByRole("row", { name: "Auton Objects Scored - +" })
          .getByRole("button", { name: "+" })
          .click();
      }
      if (getRandomTrueFalse()) await page.locator("#input_aco").check();
      if (getRandomTrueFalse()) await page.locator("#input_acu").check();
      await page.locator(`#input_al_${getRandomLowMedHigh()}`).check();
      await page.locator(`#input_ac_${getRandomChargingPadState()}`).check();
      const teleopScored = getRandomInt(11);
      for (var go = 0; go < teleopScored; go++) {
        await page
          .getByRole("row", { name: "Teleop Objects Scored - +" })
          .getByRole("button", { name: "+" })
          .click();
      }
      if (getRandomTrueFalse()) await page.locator("#input_tco").check();
      if (getRandomTrueFalse()) await page.locator("#input_tcu").check();
      if (getRandomTrueFalse()) await page.locator("#input_tpg").check();
      if (getRandomTrueFalse()) await page.locator("#input_tpc").check();
      if (getRandomTrueFalse()) await page.locator("#input_tps").check();
      await page.locator(`#input_tl_${getRandomLowMedHigh()}`).check();
      if (getRandomTrueFalse()) await page.locator("#input_er").check();
      await page.locator(`#input_ec_${getRandomChargingPadState()}`).check();
      const dockingtime = getRandomDockingTime();
      await page.locator(`#input_et_${dockingtime}`).check();
      await page.locator(`#input_ps_${getRandomSpeed()}`).check();
      await page.locator(`#input_pm_${getRandomLowMedHigh()}`).check();
      await page.locator(`#input_pdrs_${getRandomLowMedHigh()}`).check();
      await page.locator(`#input_pdes_${getRandomLowMedHigh()}`).check();
      await page.locator(`#input_pdet_${getRandomLowMedHigh()}`).check();
      await page.locator("#nextButton2").click();
      await page.getByRole("button", { name: "Display Data" }).click();
      outputStrings.push(await page.locator("#data").textContent());
      await page.getByRole("button", { name: "Clear Form" }).click();
    }
  }
  await fs.writeFile(
    "C:\\Source\\personal\\ScoutingPASS\\tests\\output.txt",
    outputStrings.join("\n")
  );
});
