using System;
using System.Collections.Generic;

namespace core
{
    public partial class Utenti
    {
        public Utenti()
        {
            ResocontoLavoro = new HashSet<ResocontoLavoro>();
            Utenti2rapportino = new HashSet<Utenti2rapportino>();
        }

        public int UtenteId { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public int? Role { get; set; }

        public virtual ICollection<ResocontoLavoro> ResocontoLavoro { get; set; }
        public virtual ICollection<Utenti2rapportino> Utenti2rapportino { get; set; }
    }
}
