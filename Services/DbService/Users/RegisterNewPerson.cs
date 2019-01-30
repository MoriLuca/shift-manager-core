// using System;
// using System.Security.Cryptography;
// using System.Text;
// using core;
// using System.Linq;
// using Microsoft.EntityFrameworkCore;

// namespace Services.Db {

//     public partial class Users: IUsers
//     {
        
//         /* 
//         return 1  | registrazione ok
//         return -1 | email gia esistente
//         return -2 | nickname gia esistente
//         return -3 | errore salvataggio credenziale email e password
//         return -4 | errore salvataggio info
//         */
//         public int RegisterNewPerson(Models.FromNg.NewUserToRegister _user){
            
//             _user.Email = _user.Email.Trim().ToLower();
//             _user.Password = HashString(_user.Password);
//             int result = 0;
//             string errorMessage = "";
//             string errorInnerException = "";
            

//             using (var context = new TOOEZContext())
//             {
//                 #region controllo email e nickname - dati unici
//                 // email gia esistente
//                 if (context.PeopleBasic.Any(b=>b.Email == _user.Email)){
//                     Dbg dbg = new Dbg(){
//                         DateTime = DateTime.Now,
//                         State = 0,
//                         Object = "Registration Controller",
//                         Info = $"Controllo Primario fallito, email {_user.Email} già essitente.",
//                         Message = errorMessage,
//                         InnerException = errorInnerException
//                     };
//                     context.Dbg.Add(dbg);
//                     context.SaveChanges();
//                     return -1;
//                 } 
//                 // nickname gia esistente
//                 if (context.PeopleInfo.Any(b=>b.Nickname.Trim().ToLower() == _user.Nickname.Trim().ToLower())){
//                     Dbg dbg = new Dbg(){
//                         DateTime = DateTime.Now,
//                         State = 0,
//                         Object = "Registration Controller",
//                         Info = $"Controllo Primario fallito, nickname {_user.Nickname} già essitente.",
//                         Message = errorMessage,
//                         InnerException = errorInnerException
//                     };
//                     context.Dbg.Add(dbg);
//                     context.SaveChanges();
//                     return -2;
//                 }
//                 #endregion

//                 #region people_basic
//                 PeopleBasic basic = new PeopleBasic(){
//                     Email = _user.Email,
//                     Password = _user.Password
//                 };
//                 context.PeopleBasic.Add(basic);
//                 //context save changes
//                 try
//                 {
                   
//                     result = context.SaveChanges();
//                     if (result == 1){
//                         Dbg dbg = new Dbg(){
//                         DateTime = DateTime.Now,
//                         State = 1,
//                         Object = "Registration Controller",
//                         Info = $"Registrazione Base riuscita per utente {basic.Email}",
//                         Message = errorMessage,
//                         InnerException = errorInnerException
//                         };
//                         context.Dbg.Add(dbg);
//                         context.SaveChanges();
//                     }
                    
//                 }
//                 catch(Exception ex){
//                     context.Entry(basic).State =EntityState.Detached; 
//                     int i = ex.InnerException.HResult;
//                     errorMessage = ex.Message;
//                     errorInnerException = ex.InnerException.Message;
//                     Dbg dbg = new Dbg(){
//                         DateTime = DateTime.Now,
//                         State = 0,
//                         Object = "Registration Controller",
//                         Info = $"Registrazione Base fallita per utente {basic.Email}",
//                         Message = errorMessage,
//                         InnerException = errorInnerException
//                     };
//                     context.Dbg.Add(dbg);
//                     context.SaveChanges();
//                     result = -3;
//                 }
//                 #endregion
                
//                 #region people_info
//                 //se la registrazione di basic è andata a buon fine
//                 if (result == 1){

//                     PeopleInfo info = new PeopleInfo(){
//                         BasicId = basic.BasicId,
//                         Name = _user.Name,
//                         Surname = _user.Surname,
//                         Nickname = _user.Nickname,
//                         ShowPrivateName = _user.ShowPrivateName
//                     };
//                     context.PeopleInfo.Add(info);
//                     //context save changes
//                     try
//                     {
                    
//                         result = context.SaveChanges();
//                         if (result == 1){
//                             Dbg dbg = new Dbg(){
//                             DateTime = DateTime.Now,
//                             State = 1,
//                             Object = "Registration Controller",
//                             Info = $"Registrazione Info riuscita per utente {basic.Email}",
//                             Message = errorMessage,
//                             InnerException = errorInnerException
//                             };
//                             context.Dbg.Add(dbg);
//                             context.SaveChanges();
//                         }
                        
//                     }
//                     catch(Exception ex){
//                         context.Entry(info).State =EntityState.Detached;
//                         int i = ex.InnerException.HResult;
//                         errorMessage = ex.Message;
//                         errorInnerException = ex.InnerException.Message;
//                         Dbg dbg = new Dbg(){
//                             DateTime = DateTime.Now,
//                             State = 0,
//                             Object = "Registration Controller",
//                             Info = $"Registrazione Info fallita per utente {basic.Email}",
//                             Message = errorMessage,
//                             InnerException = errorInnerException
//                         };
//                         context.Dbg.Add(dbg);
//                         context.SaveChanges();
//                         result = -4;
//                     }
//                 }
//                 #endregion
//             }

//             return result;
//         }
//     }

// }