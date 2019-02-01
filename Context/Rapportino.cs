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
        public string Path { get; set; }
        public DateTime TStamp { get; set; }
        public bool? AmINew { get; set; }

        public virtual ICollection<ResocontoLavoro> ResocontoLavoro { get; set; }
        public virtual ICollection<Scontrini> Scontrini { get; set; }
        public virtual ICollection<Utenti2rapportino> Utenti2rapportino { get; set; }
    }
}
