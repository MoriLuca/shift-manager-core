using System.Collections.Generic;

namespace Models.FromNg.Rapportini{
    public class Rapportino
    {
        public string Cliente { get; set; }
        public string Commessa { get; set; }
        public string LavoroEseguito { get; set; }
        public string Note { get; set; }

        public List<string> Scontrini { get;set; }

        public List<int> utenti { get;set; }


    }
}