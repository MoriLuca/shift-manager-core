// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Cryptography;
// using System.Security.Cryptography;
// using System.Text;

// namespace core.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class RegistrationController : ControllerBase
//     {

//         private readonly Services.Db.Users _usersDb;
//         private readonly Services.Email.Sender _email;

//         public RegistrationController(
//             Services.Db.Users userDb,
//             Services.Email.Sender email
//             ){
//             this._usersDb = userDb;
//             this._email = email;
//         }
        
//         // POST api/values
//         [HttpPost]
//         public int Post([FromBody] Models.FromNg.NewUserToRegister user)
//         {
//             int state = this._usersDb.RegisterNewPerson(user);
            
//             if (state == 1)
//                 return this._email.SendMimeMessageRegistrationSuccess(user);
//             else
//                 return state;
//         }

//     }
// }