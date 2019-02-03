using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using core;
using Microsoft.EntityFrameworkCore;

namespace Services.ImgHandling
{

    public class Worker{


        public bool ScontrinoHandler (ResocontoLavoro resoconto){

            foreach (Scontrini s in resoconto.Scontrini)
            {
                
                string img64 = s.Body;
                byte[] blob;
                //se è arrivato un body vuoto, ovvero quando viene aggiunto uno scontrino ma non viene
                //selezionato nessun file
                if (img64.Trim() == "") continue;

                try
                {
                    img64 = img64.Substring(img64.IndexOf(",") + 1);
                    blob = Convert.FromBase64String(img64);
                }
                catch (System.Exception ex)
                {
                    Trace.WriteLine("errore lettura e conversione immagine :"+ex.Message);
                    return false;
                }
                
                using (var context = new core.SHIFT_MANAGERContext())
                {
                    try
                    {
                        //create path
                    string nomeCommessa = context.Commesse
                                .Where(c=>c.CommessaId == resoconto.CommessaId)
                                .First().Nome ;
                    string nomeCliente = context.Commesse.Include(co=>co.Cliente)
                                .Where(c=>c.CommessaId == resoconto.CommessaId)
                                .First().Cliente.Nome;
                    var nomeUtente = context.Utenti.Where(u=>u.UtenteId == resoconto.UtenteId)
                                .Select(n=>new{ n.Nome, n.Cognome}).First();
                    
                    int anno = resoconto.DataIntervento.Year;
                    string mese = resoconto.DataIntervento.ToString("MMMM");
                    int giorno = resoconto.DataIntervento.Day;
                    string nomeGiorno = resoconto.DataIntervento.DayOfWeek.ToString();
                    

                    int numeroScontrino = 1;
                    string ext = ".jpg";
                    string path = @"/home/luca/scontrini/";
                    path += $@"{nomeCliente}/{nomeCommessa}/{anno}/{mese}/";
                    string fileName = $@"[{giorno}]{nomeUtente.Nome}_{nomeUtente.Cognome}";
                    //ricerca file esistenti per lo stesso giorno

                    if (!System.IO.Directory.Exists(path)){
                        System.IO.Directory.CreateDirectory(path);
                    }
                    else{
                        numeroScontrino += System.IO.Directory.GetFiles(path).Count(n=>n.Contains(fileName));
                    }

                    fileName += $"#{numeroScontrino}";

                    string fullPath = path + fileName + ext;
                    System.IO.File.WriteAllBytes(fullPath,blob);

                    //se la scrittura è ok, salvo nel database solamente la path
                    s.Body = fullPath;
                    }
                    catch (System.Exception ex)
                    {
                        Trace.WriteLine("errore formulazione path e salvataggio immagini :"+ex.Message);
                        return false;
                    }
                    
                }
            }
            //return true vuol dire operazione finita, senza errori,
            //quindi array vuoto ritornerà true
            return true;
            
        }
    }

}