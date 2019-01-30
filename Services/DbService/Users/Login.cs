// using System;
// using System.Security.Cryptography;
// using System.Text;
// using System.Linq;
// using core;

// namespace Services.Db {

//     public partial class Users: IUsers
//     {
        
//         /*return values is encoded in the user basicId
//             basicId = >= 0 | OK
//             basicId = > -1 | Email non registrata
//             basicId = > -2 | Email trovata ma password sbagliata
//          */
//         public Models.ToNg.User Login(Models.FromNg.LoginCredential credential){
            
//              credential.Email = credential.Email.Trim().ToLower();
//             credential.Password = HashString(credential.Password);
//             int result = 0;
//             string errorMessage = "";
//             string errorInnerException = "";
//             //test inserimento nuova persona
            
//             using (var context = new TOOEZContext())
//             {
//                 bool exists = context.PeopleBasic.Any(p=>p.Email == credential.Email);

//                 //email trovata
//                 if (exists){
                    
//                     PeopleBasic basic = context.PeopleBasic.FirstOrDefault(p=>p.Email == credential.Email);
//                     PeopleInfo info = context.PeopleInfo.FirstOrDefault(p=>p.BasicId == basic.BasicId);
//                     Models.ToNg.User user = new Models.ToNg.User(){
//                         BasicId = basic.BasicId,
//                         Email = basic.Email,
//                         Name = info.Name,
//                         Surname = info.Surname,
//                         Nickname = info.Nickname,
//                         ShowPrivateName = info.ShowPrivateName,
//                     };

//                     //email e password corretti
//                     if (basic.Password == credential.Password){
//                          Dbg dbg = new Dbg(){
//                             DateTime = DateTime.Now,
//                             State = 1,
//                             Object = "LoginService",
//                             Info = $"Accesso effettuato con email [ {basic.Email} ]",
//                         };
//                         context.Dbg.Add(dbg);
//                         context.SaveChanges();
//                         return user;
//                     }

//                     //email trovata ma password sbagliata
//                     else{
//                         Dbg dbg = new Dbg(){
//                             DateTime = DateTime.Now,
//                             State = 0,
//                             Object = "LoginService",
//                             Info = $"Tentata registrazione con email [ {credential.Email} ] trovata ma password sbagliata.",
//                         };
//                         context.Dbg.Add(dbg);
//                         context.SaveChanges();
//                         return new Models.ToNg.User(){
//                             BasicId = -2
//                         };
//                     }
//                 }
                
//                 //email non trovata
//                 else{
//                     Dbg dbg = new Dbg(){
//                         DateTime = DateTime.Now,
//                         State = 0,
//                         Object = "LoginService",
//                         Info = $"Tentata registrazione con email non registrata [ {credential.Email} ]",
//                     };
//                     context.Dbg.Add(dbg);
//                     context.SaveChanges();
//                     return new Models.ToNg.User(){
//                         BasicId = -1
//                     };
//                 }
                
//             }

//         }
//     }

// }