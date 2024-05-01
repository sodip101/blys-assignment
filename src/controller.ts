import { Request, Response } from "express";

import { codeChecker } from "./utils";

const Controller = {
  testLive: (req: Request, res: Response) => {
    res.send({ message: "Hello there." });
  },
  verifyCode: (req: Request, res: Response) => {
    try {
      const requestCode = req.body?.otpCode as string;
      const isCodeValid = codeChecker(requestCode);

      if (isCodeValid) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    } catch (error) {
      res.status(500).send({ error: { message: "Internal server error" } });
    }
  },
};

export { Controller };
