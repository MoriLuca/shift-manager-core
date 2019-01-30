using System;
using System.Collections.Generic;

namespace core
{
    public partial class Scontrini
    {
        public long ScontrinoId { get; set; }
        public long? RapportinoId { get; set; }
        public string Body { get; set; }

        public virtual Rapportino Rapportino { get; set; }
    }
}
