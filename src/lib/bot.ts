import { Telegraf } from "telegraf";
import { logger } from "./logger";

export const bot = new Telegraf(process.env.BOT_TOKEN);

export const launch = () => {
  bot.launch();

  logger.info("bot has started to work");
  
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}
