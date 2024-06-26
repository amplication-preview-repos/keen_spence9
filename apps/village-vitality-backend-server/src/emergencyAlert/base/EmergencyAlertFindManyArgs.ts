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
import { EmergencyAlertWhereInput } from "./EmergencyAlertWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmergencyAlertOrderByInput } from "./EmergencyAlertOrderByInput";

@ArgsType()
class EmergencyAlertFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmergencyAlertWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmergencyAlertWhereInput, { nullable: true })
  @Type(() => EmergencyAlertWhereInput)
  where?: EmergencyAlertWhereInput;

  @ApiProperty({
    required: false,
    type: [EmergencyAlertOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmergencyAlertOrderByInput], { nullable: true })
  @Type(() => EmergencyAlertOrderByInput)
  orderBy?: Array<EmergencyAlertOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmergencyAlertFindManyArgs as EmergencyAlertFindManyArgs };