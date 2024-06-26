import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmergencyAlertServiceBase } from "./base/emergencyAlert.service.base";

@Injectable()
export class EmergencyAlertService extends EmergencyAlertServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
