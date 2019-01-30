using System;
using System.Collections.Generic;

namespace core
{
    public partial class Firme
    {
        public Firme()
        {
            Rapportino = new HashSet<Rapportino>();
        }

        public long FirmaId { get; set; }
        public string Body { get; set; }

        public virtual ICollection<Rapportino> Rapportino { get; set; }
    }
}
