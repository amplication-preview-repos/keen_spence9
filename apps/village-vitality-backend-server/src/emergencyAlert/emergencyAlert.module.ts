import { Module } from "@nestjs/common";
import { EmergencyAlertModuleBase } from "./base/emergencyAlert.module.base";
import { EmergencyAlertService } from "./emergencyAlert.service";
import { EmergencyAlertController } from "./emergencyAlert.controller";
import { EmergencyAlertResolver } from "./emergencyAlert.resolver";

@Module({
  imports: [EmergencyAlertModuleBase],
  controllers: [EmergencyAlertController],
  providers: [EmergencyAlertService, EmergencyAlertResolver],
  exports: [EmergencyAlertService],
})
export class EmergencyAlertModule {}
