import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OfficialService } from "./official.service";
import { OfficialControllerBase } from "./base/official.controller.base";

@swagger.ApiTags("officials")
@common.Controller("officials")
export class OfficialController extends OfficialControllerBase {
  constructor(protected readonly service: OfficialService) {
    super(service);
  }
}
