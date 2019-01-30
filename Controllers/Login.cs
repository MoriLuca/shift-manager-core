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
//     public class LoginController : ControllerBase
//     {

//         private readonly Services.Db.Users _usersDb;

//         public LoginController(Services.Db.Users userDb){
//             this._usersDb = userDb;
//         }

//         // POST api/values
//         [HttpPost]
//         public JsonResult Post([FromBody] Models.FromNg.LoginCredential cred)
//         {
//             return new JsonResult(this._usersDb.Login(cred));
//         }

//     }
// }