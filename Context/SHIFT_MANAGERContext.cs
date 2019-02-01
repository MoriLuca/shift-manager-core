using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace core
{
    public partial class SHIFT_MANAGERContext : DbContext
    {
        public SHIFT_MANAGERContext()
        {
        }

        public SHIFT_MANAGERContext(DbContextOptions<SHIFT_MANAGERContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Clienti> Clienti { get; set; }
        public virtual DbSet<Commesse> Commesse { get; set; }
        public virtual DbSet<Dbg> Dbg { get; set; }
        public virtual DbSet<Firme> Firme { get; set; }
        public virtual DbSet<Rapportini> Rapportini { get; set; }
        public virtual DbSet<Rapportino> Rapportino { get; set; }
        public virtual DbSet<ResocontoLavoro> ResocontoLavoro { get; set; }
        public virtual DbSet<Scontrini> Scontrini { get; set; }
        public virtual DbSet<Utenti> Utenti { get; set; }
        public virtual DbSet<Utenti2rapportino> Utenti2rapportino { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("Server=localhost;Database=SHIFT_MANAGER;User=luca;Password=0000;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clienti>(entity =>
            {
                entity.HasKey(e => e.ClienteId)
                    .HasName("PRIMARY");

                entity.ToTable("CLIENTI");

                entity.HasIndex(e => e.Nome)
                    .HasName("NOME")
                    .IsUnique();

                entity.Property(e => e.ClienteId)
                    .HasColumnName("CLIENTE_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .HasColumnType("varchar(50)");
            });

            modelBuilder.Entity<Commesse>(entity =>
            {
                entity.HasKey(e => e.CommessaId)
                    .HasName("PRIMARY");

                entity.ToTable("COMMESSE");

                entity.HasIndex(e => e.ClienteId)
                    .HasName("CLIENTE_ID");

                entity.HasIndex(e => new { e.CommessaId, e.Nome })
                    .HasName("COMMESSA_ID")
                    .IsUnique();

                entity.Property(e => e.CommessaId)
                    .HasColumnName("COMMESSA_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ClienteId)
                    .HasColumnName("CLIENTE_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .HasColumnType("varchar(50)");

                entity.HasOne(d => d.Cliente)
                    .WithMany(p => p.Commesse)
                    .HasForeignKey(d => d.ClienteId)
                    .HasConstraintName("COMMESSE_ibfk_1");
            });

            modelBuilder.Entity<Dbg>(entity =>
            {
                entity.ToTable("DBG");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DateTime)
                    .HasColumnName("DATE_TIME")
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("'CURRENT_TIMESTAMP'")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Info)
                    .HasColumnName("INFO")
                    .HasColumnType("text");

                entity.Property(e => e.InnerException)
                    .HasColumnName("INNER_EXCEPTION")
                    .HasColumnType("text");

                entity.Property(e => e.Message)
                    .HasColumnName("MESSAGE")
                    .HasColumnType("text");

                entity.Property(e => e.Object)
                    .HasColumnName("OBJECT")
                    .HasColumnType("varchar(30)");

                entity.Property(e => e.State)
                    .HasColumnName("STATE")
                    .HasColumnType("tinyint(1)");
            });

            modelBuilder.Entity<Firme>(entity =>
            {
                entity.HasKey(e => e.FirmaId)
                    .HasName("PRIMARY");

                entity.ToTable("FIRME");

                entity.Property(e => e.FirmaId)
                    .HasColumnName("FIRMA_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Body)
                    .HasColumnName("BODY")
                    .HasColumnType("text");
            });

            modelBuilder.Entity<Rapportini>(entity =>
            {
                entity.HasKey(e => e.RapportinoId)
                    .HasName("PRIMARY");

                entity.ToTable("RAPPORTINI");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AmINew)
                    .HasColumnName("AM_I_NEW")
                    .HasColumnType("bit(1)")
                    .HasDefaultValueSql("'b\\'1\\''");

                entity.Property(e => e.Path)
                    .HasColumnName("PATH")
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.TStamp)
                    .HasColumnName("T_STAMP")
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("'CURRENT_TIMESTAMP'");
            });

            modelBuilder.Entity<Rapportino>(entity =>
            {
                entity.ToTable("RAPPORTINO");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AmINew)
                    .HasColumnName("AM_I_NEW")
                    .HasColumnType("bit(1)")
                    .HasDefaultValueSql("'b\\'1\\''");

                entity.Property(e => e.Path)
                    .HasColumnName("PATH")
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.TStamp)
                    .HasColumnName("T_STAMP")
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("'CURRENT_TIMESTAMP'");
            });

            modelBuilder.Entity<ResocontoLavoro>(entity =>
            {
                entity.HasKey(e => e.ResocontoId)
                    .HasName("PRIMARY");

                entity.ToTable("RESOCONTO_LAVORO");

                entity.HasIndex(e => e.CommessaId)
                    .HasName("COMMESSA_ID");

                entity.HasIndex(e => e.RapportinoId)
                    .HasName("RAPPORTINO_ID");

                entity.HasIndex(e => e.UtenteId)
                    .HasName("UTENTE_ID");

                entity.Property(e => e.ResocontoId)
                    .HasColumnName("RESOCONTO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.CommessaId)
                    .HasColumnName("COMMESSA_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DataIntervento)
                    .HasColumnName("DATA_INTERVENTO")
                    .HasColumnType("date");

                entity.Property(e => e.Info)
                    .HasColumnName("INFO")
                    .HasColumnType("text");

                entity.Property(e => e.Km).HasColumnName("KM");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Spese).HasColumnName("SPESE");

                entity.Property(e => e.TipologiaLavoro)
                    .HasColumnName("TIPOLOGIA_LAVORO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TotaleLavoro).HasColumnName("TOTALE_LAVORO");

                entity.Property(e => e.TotaleViaggio).HasColumnName("TOTALE_VIAGGIO");

                entity.Property(e => e.UtenteId)
                    .HasColumnName("UTENTE_ID")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Commessa)
                    .WithMany(p => p.ResocontoLavoro)
                    .HasForeignKey(d => d.CommessaId)
                    .HasConstraintName("RESOCONTO_LAVORO_ibfk_3");

                entity.HasOne(d => d.Rapportino)
                    .WithMany(p => p.ResocontoLavoro)
                    .HasForeignKey(d => d.RapportinoId)
                    .HasConstraintName("RESOCONTO_LAVORO_ibfk_1");

                entity.HasOne(d => d.Utente)
                    .WithMany(p => p.ResocontoLavoro)
                    .HasForeignKey(d => d.UtenteId)
                    .HasConstraintName("RESOCONTO_LAVORO_ibfk_2");
            });

            modelBuilder.Entity<Scontrini>(entity =>
            {
                entity.HasKey(e => e.ScontrinoId)
                    .HasName("PRIMARY");

                entity.ToTable("SCONTRINI");

                entity.HasIndex(e => e.ResocontoId)
                    .HasName("RESOCONTO_ID");

                entity.Property(e => e.ScontrinoId)
                    .HasColumnName("SCONTRINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Body)
                    .HasColumnName("BODY")
                    .HasColumnType("text");

                entity.Property(e => e.ResocontoId)
                    .HasColumnName("RESOCONTO_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Resoconto)
                    .WithMany(p => p.Scontrini)
                    .HasForeignKey(d => d.ResocontoId)
                    .HasConstraintName("SCONTRINI_ibfk_1");
            });

            modelBuilder.Entity<Utenti>(entity =>
            {
                entity.HasKey(e => e.UtenteId)
                    .HasName("PRIMARY");

                entity.ToTable("UTENTI");

                entity.HasIndex(e => new { e.Nome, e.Cognome })
                    .HasName("NOME")
                    .IsUnique();

                entity.Property(e => e.UtenteId)
                    .HasColumnName("UTENTE_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Cognome)
                    .IsRequired()
                    .HasColumnName("COGNOME")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.Role)
                    .HasColumnName("ROLE")
                    .HasColumnType("int(11)")
                    .HasDefaultValueSql("'0'");
            });

            modelBuilder.Entity<Utenti2rapportino>(entity =>
            {
                entity.HasKey(e => new { e.UtenteId, e.RapportinoId })
                    .HasName("PRIMARY");

                entity.ToTable("UTENTI2RAPPORTINO");

                entity.HasIndex(e => e.RapportinoId)
                    .HasName("RAPPORTINO_ID");

                entity.Property(e => e.UtenteId)
                    .HasColumnName("UTENTE_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Rapportino)
                    .WithMany(p => p.Utenti2rapportino)
                    .HasForeignKey(d => d.RapportinoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("UTENTI2RAPPORTINO_ibfk_2");

                entity.HasOne(d => d.Utente)
                    .WithMany(p => p.Utenti2rapportino)
                    .HasForeignKey(d => d.UtenteId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("UTENTI2RAPPORTINO_ibfk_1");
            });
        }
    }
}
