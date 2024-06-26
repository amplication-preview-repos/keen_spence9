import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmergencyAlertService } from "./emergencyAlert.service";
import { EmergencyAlertControllerBase } from "./base/emergencyAlert.controller.base";

@swagger.ApiTags("emergencyAlerts")
@common.Controller("emergencyAlerts")
export class EmergencyAlertController extends EmergencyAlertControllerBase {
  constructor(protected readonly service: EmergencyAlertService) {
    super(service);
  }
}
