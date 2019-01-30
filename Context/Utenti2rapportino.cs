using System;
using System.Collections.Generic;

namespace core
{
    public partial class Utenti2rapportino
    {
        public int UtenteId { get; set; }
        public long RapportinoId { get; set; }

        public virtual Rapportino Rapportino { get; set; }
        public virtual Utenti Utente { get; set; }
    }
}
