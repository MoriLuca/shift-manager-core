﻿using System;
using System.Collections.Generic;

namespace core
{
    public partial class Clienti
    {
        public Clienti()
        {
            Commesse = new HashSet<Commesse>();
        }

        public int ClienteId { get; set; }
        public string Nome { get; set; }

        public virtual ICollection<Commesse> Commesse { get; set; }
    }
}
