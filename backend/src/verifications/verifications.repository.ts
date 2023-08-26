import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Verification, VerificationDocument } from "./schemas/verification.schema";

@Injectable()
export class VerificationsRepository {
    constructor(
        @InjectModel(Verification.name) 
        private verificationModel: Model<VerificationDocument>
    ) {}

    async findOne(verificationFilterQuery: FilterQuery<Verification>): Promise<Verification> {
        return this.verificationModel.findOne(verificationFilterQuery);
    }

    async find(verificationsFilterQuery: FilterQuery<Verification>): Promise<Verification[]> {
        return this.verificationModel.find(verificationsFilterQuery)
    }

    async create(verification: Verification): Promise<Verification> {
        const newUser = new this.verificationModel(verification);
        return newUser.save()
    }

    async findOneAndUpdate(verificationFilterQuery: FilterQuery<Verification>, verification: Partial<Verification>): Promise<Verification> {
        return this.verificationModel.findOneAndUpdate(verificationFilterQuery, verification, { new: true });
    }
}