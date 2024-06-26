import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OfficialServiceBase } from "./base/official.service.base";

@Injectable()
export class OfficialService extends OfficialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
