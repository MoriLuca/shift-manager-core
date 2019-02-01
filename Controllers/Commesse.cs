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
    public class CommesseController : ControllerBase
    {

        public CommesseController(){}

        [HttpGet]
        public JsonResult Get(int clienteId)
        {
            using (var context = new core.SHIFT_MANAGERContext())
            {
                try
                {
                    var t = context.Commesse.Where(w=>w.ClienteId == clienteId).Select(c=> new {c.Nome}).ToList();
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