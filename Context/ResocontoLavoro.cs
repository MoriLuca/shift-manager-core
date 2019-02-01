using System;
using System.Collections.Generic;

namespace core
{
    public partial class ResocontoLavoro
    {
        public long ResocontoId { get; set; }
        public long? RapportinoId { get; set; }
        public int? UtenteId { get; set; }
        public int? ClienteId { get; set; }
        public int? CommessaId { get; set; }
        public DateTime DataIntervento { get; set; }
        public float? TotaleLavoro { get; set; }
        public float? TotaleViaggio { get; set; }
        public float? Spese { get; set; }
        public float? Km { get; set; }
        public int? TipologiaLavoro { get; set; }

        public virtual Clienti Cliente { get; set; }
        public virtual Commesse Commessa { get; set; }
        public virtual Rapportino Rapportino { get; set; }
        public virtual Utenti Utente { get; set; }
    }
}
