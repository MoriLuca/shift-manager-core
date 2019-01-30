using System;
using System.Collections.Generic;

namespace core
{
    public partial class ResocontoLavoro
    {
        public long ResocontoId { get; set; }
        public long? RapportinoId { get; set; }
        public DateTime DataIntervento { get; set; }
        public float? TotaleLavoro { get; set; }
        public float? TotaleViaggio { get; set; }
        public float? Spese { get; set; }
        public int? IdUtenteSpese { get; set; }
        public float? Km { get; set; }
        public int? IdUtenteKm { get; set; }

        public virtual Utenti IdUtenteKmNavigation { get; set; }
        public virtual Utenti IdUtenteSpeseNavigation { get; set; }
        public virtual Rapportino Rapportino { get; set; }
    }
}
