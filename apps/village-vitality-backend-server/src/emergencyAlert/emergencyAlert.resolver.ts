import * as graphql from "@nestjs/graphql";
import { EmergencyAlertResolverBase } from "./base/emergencyAlert.resolver.base";
import { EmergencyAlert } from "./base/EmergencyAlert";
import { EmergencyAlertService } from "./emergencyAlert.service";

@graphql.Resolver(() => EmergencyAlert)
export class EmergencyAlertResolver extends EmergencyAlertResolverBase {
  constructor(protected readonly service: EmergencyAlertService) {
    super(service);
  }
}
