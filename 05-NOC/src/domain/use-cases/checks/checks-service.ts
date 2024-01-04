interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceUseCase {
  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on service ${url}`);
      }
      console.log(`${url} is ok`);

      return true;
    } catch (error) {
      console.error(`${error}`);

      return false;
    }
  }
}