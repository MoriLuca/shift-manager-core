using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientiController : ControllerBase
    {

        public ClientiController(){}

        [HttpGet]
        public JsonResult Get(string query)
        {
            using (var context = new core.SHIFT_MANAGERContext())
            {
                try
                {
                    var t = context.Clienti.Select(c=> new {c.Nome, c.ClienteId}).ToList();
                    return new JsonResult(t);
                }
                catch(Exception ex){
                    throw new NotImplementedException();
                    return null;
                }
            }
        }

    }
}