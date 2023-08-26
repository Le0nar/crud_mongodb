import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Verification, VerificationSchema,  } from "./schemas/verification.schema";
import {VerificationsController} from './verifications.controller'
import { VerificationsRepository } from "./verifications.repository";
import { UsersService } from "./verifications.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Verification.name, schema: VerificationSchema }])],
    controllers: [VerificationsController],
    providers: [VerificationsRepository, UsersService]
})
export class VerificationsModule {}