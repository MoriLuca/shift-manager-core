using System;
using System.Collections.Generic;

namespace core
{
    public partial class Dbg
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public string Object { get; set; }
        public sbyte? State { get; set; }
        public string Info { get; set; }
        public string Message { get; set; }
        public string InnerException { get; set; }
    }
}
