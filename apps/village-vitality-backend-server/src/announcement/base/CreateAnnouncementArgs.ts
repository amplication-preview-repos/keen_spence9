/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnnouncementCreateInput } from "./AnnouncementCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAnnouncementArgs {
  @ApiProperty({
    required: true,
    type: () => AnnouncementCreateInput,
  })
  @ValidateNested()
  @Type(() => AnnouncementCreateInput)
  @Field(() => AnnouncementCreateInput, { nullable: false })
  data!: AnnouncementCreateInput;
}

export { CreateAnnouncementArgs as CreateAnnouncementArgs };