using System;
using System.Collections.Generic;

namespace core
{
    public partial class Rapportini
    {
        public long RapportinoId { get; set; }
        public string Path { get; set; }
        public DateTime TStamp { get; set; }
        public bool? AmINew { get; set; }
    }
}
