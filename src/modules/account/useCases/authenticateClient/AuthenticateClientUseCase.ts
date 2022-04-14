import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: { username },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "nodejsprisma", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
