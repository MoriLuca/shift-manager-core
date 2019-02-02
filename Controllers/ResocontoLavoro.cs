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

    public class ResocontoLavoroController : ControllerBase
    {

        public ResocontoLavoroController(){}

        [HttpGet]
        public JsonResult Get(int? utenteId, int? commessaId)
        {
            if (commessaId.HasValue && utenteId.HasValue){
                using (var context = new core.SHIFT_MANAGERContext())
                {
                    try
                    {
                        var t = context.ResocontoLavoro.Where(w=>w.UtenteId == utenteId && w.CommessaId == commessaId).ToList();
                        return new JsonResult(t);
                    }
                    catch(Exception ex){
                        throw new NotImplementedException();
                        return null;
                    }
                }
            }
            if (utenteId.HasValue &&  !commessaId.HasValue){
                using (var context = new core.SHIFT_MANAGERContext())
                {
                    try
                    {
                        var t = context.ResocontoLavoro.Where(w=>w.UtenteId == utenteId).ToList();
                        return new JsonResult(t);
                    }
                    catch(Exception ex){
                        throw new NotImplementedException();
                        return null;
                    }
                }
            }
            if (!utenteId.HasValue &&  commessaId.HasValue){
                using (var context = new core.SHIFT_MANAGERContext())
                {
                    try
                    {
                        var t = context.ResocontoLavoro.Where(w=>w.CommessaId == commessaId).ToList();
                        return new JsonResult(t);
                    }
                    catch(Exception ex){
                        throw new NotImplementedException();
                        return null;
                    }
                }
            }
            else return new JsonResult(null);

        }

        [HttpPost]
        public JsonResult Post(ResocontoLavoro r){
            using (var context = new core.SHIFT_MANAGERContext())
            {
                try
                {
                    context.ResocontoLavoro.Add(r);
                    byte[] cont = Convert.FromBase64String(r.Scontrini.FirstOrDefault().Body);
                    return new JsonResult(new {RowEffected=context.SaveChanges()});
                }
                catch(Exception ex){
                    return new JsonResult(new {
                        RowEffected=0,
                        Error = ex.InnerException.InnerException.Message
                        });
                }
            }
        }
    }
}