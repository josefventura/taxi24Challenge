
import { Module } from "@nestjs/common";
import { emailController } from "./email.controller";
import { EmailService } from "./email.service";



@Module({
    controllers: [emailController],
    providers: [ EmailService]
})

export class EmailModule{}