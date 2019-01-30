using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RapportiniController : ControllerBase
    {

        private readonly Services.Db.Users _usersDb;
        private readonly Services.Email.Sender _email;

        public RapportiniController(
            Services.Db.Users userDb,
            Services.Email.Sender email
            ){
            this._usersDb = userDb;
            this._email = email;
        }

        [HttpPost]
        public int Post([FromBody] core.Rapportino rapportino)
        {
            var a = rapportino;
            using (var context = new core.SHIFT_MANAGERContext())
            {
                try
                {
                    context.Rapportino.Add(rapportino);
                    context.SaveChanges();
                }
                catch (System.Exception ex)
                {
                    System.Console.WriteLine(ex);
                }

                var r = context.Rapportino.Include(re=>re.ResocontoLavoro).Include(s=>s.Scontrini).Include(u=>u.Utenti2rapportino).Include(fi=>fi.Firma).FirstOrDefault();

            }
            return 1;
        }

    }
}