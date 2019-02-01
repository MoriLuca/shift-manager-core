using System;
using System.Collections.Generic;

namespace core
{
    public partial class Scontrini
    {
        public long ScontrinoId { get; set; }
        public long? ResocontoId { get; set; }
        public string Body { get; set; }

        public virtual ResocontoLavoro Resoconto { get; set; }
    }
}
