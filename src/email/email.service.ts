import { transporter } from "src/config/mailer"

export class EmailService{
    constructor(){}

    async sendEmail(sendTo: string){
        
        console.log({sendTo})
        const sendemail =await transporter.sendMail({
            from: '"josef"  <josuelvent@gmail.com>',
            to: sendTo,
            subject: 'hi',
            text: 'thanks for subscribing!!!',
            html: '<b> this is html</b>'
        })
        console.log(sendemail)
    }
}