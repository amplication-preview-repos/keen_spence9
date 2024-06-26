import * as graphql from "@nestjs/graphql";
import { OfficialResolverBase } from "./base/official.resolver.base";
import { Official } from "./base/Official";
import { OfficialService } from "./official.service";

@graphql.Resolver(() => Official)
export class OfficialResolver extends OfficialResolverBase {
  constructor(protected readonly service: OfficialService) {
    super(service);
  }
}
