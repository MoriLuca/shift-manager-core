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

        private Services.ImgHandling.Worker _imgWorker;
        public ResocontoLavoroController(Services.ImgHandling.Worker w){
            this._imgWorker = w;
        }

        [HttpGet]
        public JsonResult Get(int? utenteId, int? commessaId)
        {
            if (commessaId.HasValue && utenteId.HasValue){
                using (var context = new core.SHIFT_MANAGERContext())
                {
                    try
                    {
                        var t = context.ResocontoLavoro.Where(w=>w.UtenteId == utenteId && w.CommessaId == commessaId).OrderByDescending(i=>i.DataIntervento).ToList();
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
                // passo il resoconto alla funzione che estrae, salva le immagini
                // se la funzione va  a buon fine, negli scontrini ho dentro la path
                if(_imgWorker.ScontrinoHandler(r)){
                    try
                    {
                        context.ResocontoLavoro.Add(r);
                        return new JsonResult(new {RowEffected=context.SaveChanges()});
                    }
                    catch(Exception ex){
                        Trace.WriteLine("Errore nel salvataggio database del resoconto lavori"+ex.Message);
                        return new JsonResult(new {
                        RowEffected=0,
                        Error = ex.InnerException.InnerException.Message
                        });
                    } 
                }
                else{
                    return new JsonResult(new {
                    RowEffected=0,
                    Error = "Errore nella gestione salvataggio scontrini."
                    });
                }

            }
        }
    }
}