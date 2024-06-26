import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketPriceServiceBase } from "./base/marketPrice.service.base";

@Injectable()
export class MarketPriceService extends MarketPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
