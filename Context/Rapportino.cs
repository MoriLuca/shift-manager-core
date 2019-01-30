using System;
using System.Collections.Generic;

namespace core
{
    public partial class Rapportino
    {
        public Rapportino()
        {
            ResocontoLavoro = new HashSet<ResocontoLavoro>();
            Scontrini = new HashSet<Scontrini>();
            Utenti2rapportino = new HashSet<Utenti2rapportino>();
        }

        public long RapportinoId { get; set; }
        public string Cliente { get; set; }
        public string Commessa { get; set; }
        public string LavoroEseguito { get; set; }
        public long? FirmaId { get; set; }
        public string Note { get; set; }
        public DateTime TStamp { get; set; }
        public bool? AmINew { get; set; }

        public virtual Firme Firma { get; set; }
        public virtual ICollection<ResocontoLavoro> ResocontoLavoro { get; set; }
        public virtual ICollection<Scontrini> Scontrini { get; set; }
        public virtual ICollection<Utenti2rapportino> Utenti2rapportino { get; set; }
    }
}
