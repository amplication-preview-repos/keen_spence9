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
import { EmergencyAlertWhereUniqueInput } from "./EmergencyAlertWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmergencyAlertUpdateInput } from "./EmergencyAlertUpdateInput";

@ArgsType()
class UpdateEmergencyAlertArgs {
  @ApiProperty({
    required: true,
    type: () => EmergencyAlertWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmergencyAlertWhereUniqueInput)
  @Field(() => EmergencyAlertWhereUniqueInput, { nullable: false })
  where!: EmergencyAlertWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmergencyAlertUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmergencyAlertUpdateInput)
  @Field(() => EmergencyAlertUpdateInput, { nullable: false })
  data!: EmergencyAlertUpdateInput;
}

export { UpdateEmergencyAlertArgs as UpdateEmergencyAlertArgs };