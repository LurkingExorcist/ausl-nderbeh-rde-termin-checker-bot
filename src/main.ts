import * as dotenv from "dotenv";
dotenv.config();

import { Checker } from "./lib";
import { ALIVE_CHECK_INTERVAL, TERMIN_CHECK_INTERVAL } from "./constants";

const checker = new Checker();

checker.isAlive();
checker.hasTermin();

setInterval(checker.isAlive, ALIVE_CHECK_INTERVAL);
setInterval(checker.hasTermin, TERMIN_CHECK_INTERVAL);
