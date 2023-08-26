import { Injectable } from "@nestjs/common";
import { Verification } from "./schemas/verification.schema";
import { VerificationsRepository } from "./verifications.repository";
import { recognizeFace } from "src/utils/recognize-face.utils";

@Injectable()
export class UsersService {
    constructor(private readonly verificationRepository: VerificationsRepository) {}

    async getVerifications(): Promise<Verification[]> {
        return this.verificationRepository.find({});
    }

    handleUpload(file: Express.Multer.File) {
        const isFaceRecognized = recognizeFace(file);   

        return this.verificationRepository.create({
            date: Date.now(),
            isEmployeePresent: isFaceRecognized,
        })
      }
}