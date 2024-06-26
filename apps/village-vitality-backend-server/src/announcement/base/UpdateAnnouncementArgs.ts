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
import { AnnouncementWhereUniqueInput } from "./AnnouncementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AnnouncementUpdateInput } from "./AnnouncementUpdateInput";

@ArgsType()
class UpdateAnnouncementArgs {
  @ApiProperty({
    required: true,
    type: () => AnnouncementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnnouncementWhereUniqueInput)
  @Field(() => AnnouncementWhereUniqueInput, { nullable: false })
  where!: AnnouncementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AnnouncementUpdateInput,
  })
  @ValidateNested()
  @Type(() => AnnouncementUpdateInput)
  @Field(() => AnnouncementUpdateInput, { nullable: false })
  data!: AnnouncementUpdateInput;
}

export { UpdateAnnouncementArgs as UpdateAnnouncementArgs };