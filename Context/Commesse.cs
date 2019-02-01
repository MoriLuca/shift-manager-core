using System;
using System.Collections.Generic;

namespace core
{
    public partial class Commesse
    {
        public Commesse()
        {
            ResocontoLavoro = new HashSet<ResocontoLavoro>();
        }

        public int CommessaId { get; set; }
        public string Nome { get; set; }
        public int? ClienteId { get; set; }

        public virtual Clienti Cliente { get; set; }
        public virtual ICollection<ResocontoLavoro> ResocontoLavoro { get; set; }
    }
}
