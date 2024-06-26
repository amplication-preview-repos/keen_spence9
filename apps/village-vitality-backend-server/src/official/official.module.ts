import { Module } from "@nestjs/common";
import { OfficialModuleBase } from "./base/official.module.base";
import { OfficialService } from "./official.service";
import { OfficialController } from "./official.controller";
import { OfficialResolver } from "./official.resolver";

@Module({
  imports: [OfficialModuleBase],
  controllers: [OfficialController],
  providers: [OfficialService, OfficialResolver],
  exports: [OfficialService],
})
export class OfficialModule {}
