interface RunOption {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {
  static run(options: RunOption) {
    console.log("Server run...");
    console.log({ options });
  }
}
