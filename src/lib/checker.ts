import puppeteer from "puppeteer";

import { logger } from "./logger";
import { bot } from "./bot";
import { NO_TERMIN, SCREENSHOT_SOURCE, TERMIN_LINK } from "../constants";

export class Checker {
  async hasTermin() {
    try {
      logger.info("looking for a termin...");

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.setViewport({ width: 1080, height: 1024 });

      await page.goto(
        TERMIN_LINK
      );

      await page.click("#buttonfunktionseinheit-3");

      await page.waitForSelector("#span-cnc-794");

      await page.click("#span-cnc-794");
      await page.click("#WeiterButton");

      await page.goto(
        "https://termine-reservieren.de/termine/lramuenchen/auslaenderbehoerde/suggest?cnc-794=1&loc=56"
      );

      const value = await page
        .$("#inhalt > div.row > h2")
        .then((el) => el?.evaluate((e) => e.textContent));

      if (value !== NO_TERMIN) {
        await page.screenshot({
          path: SCREENSHOT_SOURCE,
          fullPage: true,
        });

        await bot.telegram.sendPhoto(
          process.env.MY_ID,
          {
            source: SCREENSHOT_SOURCE,
          },
          {
            caption:
              (await page
                .$("#inhalt > div.row")
                .then((el) => el?.evaluate((e) => e.textContent))) ||
              "empty text",
          }
        );

        await bot.telegram.sendMessage(process.env.MY_ID, TERMIN_LINK);
      } else {
        logger.info("nothing to see here :(");
      }

      await browser.close();
    } catch (err) {
      logger.error(err);

      let message;

      if (err instanceof Error) {
        message = err.message;
      } else {
        message = (err as any).toString();
      }

      bot.telegram.sendMessage(process.env.MY_ID, message);
    }
  }

  async isAlive() {
    await bot.telegram.sendMessage(process.env.MY_ID, "I am alive!", {
      disable_notification: true,
    });
  }
}
