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
//     public class GetLakesInfo : ControllerBase
//     {

//         private readonly Services.Db.Users _usersDb;
//         private readonly Services.Lakes.LakesInfo _lakesInfo;

//         public GetLakesInfo(
//             Services.Db.Users userDb,
//             Services.Lakes.LakesInfo lakesInfo
//             ){
//             this._usersDb = userDb;
//             this._lakesInfo = lakesInfo;
//         }

//         [HttpGet]
//         public JsonResult Get ()
//         {
//             return new JsonResult(_lakesInfo.GetLakes());
//         }

//     }
// }
