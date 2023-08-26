import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type VerificationDocument = Verification & Document

@Schema()
export class Verification {
  @Prop()
  date: number;

  @Prop()
  isEmployeePresent: boolean;
}

export const VerificationSchema = SchemaFactory.createForClass(Verification)