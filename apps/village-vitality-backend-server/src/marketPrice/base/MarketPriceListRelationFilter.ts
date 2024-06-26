/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MarketPriceWhereInput } from "./MarketPriceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MarketPriceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MarketPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => MarketPriceWhereInput)
  @IsOptional()
  @Field(() => MarketPriceWhereInput, {
    nullable: true,
  })
  every?: MarketPriceWhereInput;

  @ApiProperty({
    required: false,
    type: () => MarketPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => MarketPriceWhereInput)
  @IsOptional()
  @Field(() => MarketPriceWhereInput, {
    nullable: true,
  })
  some?: MarketPriceWhereInput;

  @ApiProperty({
    required: false,
    type: () => MarketPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => MarketPriceWhereInput)
  @IsOptional()
  @Field(() => MarketPriceWhereInput, {
    nullable: true,
  })
  none?: MarketPriceWhereInput;
}
export { MarketPriceListRelationFilter as MarketPriceListRelationFilter };