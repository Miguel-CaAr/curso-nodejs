import { CronJob } from "cron";
import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/checks-service";

export class Server {
  public static start() {
    console.log("server started...");

    CronService.createJob("*/5 * * * * *", () => {
      new CheckService().execute("https://google.com");
    });
  }
}
