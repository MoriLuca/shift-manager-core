using System.Collections.Generic;
using MailKit;
using MailKit.Net.Smtp;
using MimeKit;
using Models.Email;
using Models.FromNg;

namespace Services.Email
{

    public static class AdminInfo{
        public static string Name {get;} = "Luca Mori";
        public static string Email {get;} = "Luca.Mori@hotmail.it";
        public static string Telefono {get;} = "327 213 9328";
    }
    public class Sender { 
    //instanza mime message


        public int SendMimeMessageToAdmin(EmailMessageFromNg fromNgInfo){
            var mex = new MimeMessage();
            //from
            mex.From.Add(new MailboxAddress(fromNgInfo.fromEmail,fromNgInfo.fromEmail));
            //to
            mex.To.Add(new MailboxAddress("2EzFish","mori.luca@hotmail.it"));
            //header, body
            mex.Subject = fromNgInfo.subject;
            mex.Body = new TextPart("plain"){
                Text = fromNgInfo.body +
                    "\n\nInviata da : " + fromNgInfo.fromName + " " + fromNgInfo.fromSurname +
                    "\nEmail : " + fromNgInfo.fromEmail+ 
                    "\nNumero di telefono : " + fromNgInfo.fromTelephone
            };

            //configutrazione e invio email
            using(var client = new SmtpClient()){
                client.Connect(SmtpConfiguration.SmtpServer,SmtpConfiguration.Port ,false);
                client.Authenticate(SmtpConfiguration.Username,SmtpConfiguration.Password);
                client.Send(mex);
                client.Disconnect(true);
            };
            return 1;
        }


        public int SendMimeMessageRegistrationSuccess(NewUserToRegister user){
            
            var mex = new MimeMessage();
            //from
            mex.From.Add(new MailboxAddress(AdminInfo.Name,AdminInfo.Email));
            //to
            mex.To.Add(new MailboxAddress( user.Name, user.Email ));
            //header, body
            mex.Subject = "2EzFish : Iscrizione Avvenuta con Successo";
            mex.Body = new TextPart("plain"){
                Text = $"Benvenuto {user.Name},\nIl nostro team ti ringrazia per l'iscrizione."+
                    $"\nTi ricordiamo che ti sei iscritto al nostro portale utilizzando la seguente email {user.Email}"+
                    $"\nRimaniamo a tua disposizione, contattaci per qualsiasi informazione, richiesta o nuova idea."+
                    "\n\nInviata da : " + AdminInfo.Name + " " + "2EzFish.com" +
                    "\nEmail : " + AdminInfo.Email +
                    "\nTelefono : " + AdminInfo.Telefono
            };

            //configutrazione e invio email
            using(var client = new SmtpClient()){
                client.Connect(SmtpConfiguration.SmtpServer,SmtpConfiguration.Port ,false);
                client.Authenticate(SmtpConfiguration.Username,SmtpConfiguration.Password);
                client.Send(mex);
                client.Disconnect(true);
            };
            return 1;
        }

        
    }
    
}