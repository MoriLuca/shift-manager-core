using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography;
using System.Security.Cryptography;
using System.Text;


namespace core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {

        private readonly Services.Db.Users _usersDb;
        private readonly Services.Email.Sender _email;

        public EmailController(
            Services.Db.Users userDb,
            Services.Email.Sender email
            ){
            this._usersDb = userDb;
            this._email = email;
        }

        [HttpPost]
        public int Post([FromBody] Models.FromNg.EmailMessageFromNg emailInfo)
        {
            this._email.SendMimeMessageToAdmin(emailInfo);
            return 1;
        }

    }
}