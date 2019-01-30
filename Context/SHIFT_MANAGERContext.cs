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

        public virtual DbSet<Dbg> Dbg { get; set; }
        public virtual DbSet<Firme> Firme { get; set; }
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

            modelBuilder.Entity<Rapportino>(entity =>
            {
                entity.ToTable("RAPPORTINO");

                entity.HasIndex(e => e.FirmaId)
                    .HasName("FIRMA_ID");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.AmINew)
                    .HasColumnName("AM_I_NEW")
                    .HasColumnType("bit(1)")
                    .HasDefaultValueSql("'b\\'1\\''");

                entity.Property(e => e.Cliente)
                    .HasColumnName("CLIENTE")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.Commessa)
                    .HasColumnName("COMMESSA")
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.FirmaId)
                    .HasColumnName("FIRMA_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.LavoroEseguito)
                    .HasColumnName("LAVORO_ESEGUITO")
                    .HasColumnType("text");

                entity.Property(e => e.Note)
                    .HasColumnName("NOTE")
                    .HasColumnType("text");

                entity.Property(e => e.TStamp)
                    .HasColumnName("T_STAMP")
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("'CURRENT_TIMESTAMP'");

                entity.HasOne(d => d.Firma)
                    .WithMany(p => p.Rapportino)
                    .HasForeignKey(d => d.FirmaId)
                    .HasConstraintName("RAPPORTINO_ibfk_1");
            });

            modelBuilder.Entity<ResocontoLavoro>(entity =>
            {
                entity.HasKey(e => e.ResocontoId)
                    .HasName("PRIMARY");

                entity.ToTable("RESOCONTO_LAVORO");

                entity.HasIndex(e => e.IdUtenteKm)
                    .HasName("ID_UTENTE_KM");

                entity.HasIndex(e => e.IdUtenteSpese)
                    .HasName("ID_UTENTE_SPESE");

                entity.HasIndex(e => e.RapportinoId)
                    .HasName("RAPPORTINO_ID");

                entity.Property(e => e.ResocontoId)
                    .HasColumnName("RESOCONTO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.DataIntervento)
                    .HasColumnName("DATA_INTERVENTO")
                    .HasColumnType("date");

                entity.Property(e => e.IdUtenteKm)
                    .HasColumnName("ID_UTENTE_KM")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IdUtenteSpese)
                    .HasColumnName("ID_UTENTE_SPESE")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Km).HasColumnName("KM");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Spese).HasColumnName("SPESE");

                entity.Property(e => e.TotaleLavoro).HasColumnName("TOTALE_LAVORO");

                entity.Property(e => e.TotaleViaggio).HasColumnName("TOTALE_VIAGGIO");

                entity.HasOne(d => d.IdUtenteKmNavigation)
                    .WithMany(p => p.ResocontoLavoroIdUtenteKmNavigation)
                    .HasForeignKey(d => d.IdUtenteKm)
                    .HasConstraintName("RESOCONTO_LAVORO_ibfk_3");

                entity.HasOne(d => d.IdUtenteSpeseNavigation)
                    .WithMany(p => p.ResocontoLavoroIdUtenteSpeseNavigation)
                    .HasForeignKey(d => d.IdUtenteSpese)
                    .HasConstraintName("RESOCONTO_LAVORO_ibfk_2");

                entity.HasOne(d => d.Rapportino)
                    .WithMany(p => p.ResocontoLavoro)
                    .HasForeignKey(d => d.RapportinoId)
                    .HasConstraintName("RESOCONTO_LAVORO_ibfk_1");
            });

            modelBuilder.Entity<Scontrini>(entity =>
            {
                entity.HasKey(e => e.ScontrinoId)
                    .HasName("PRIMARY");

                entity.ToTable("SCONTRINI");

                entity.HasIndex(e => e.RapportinoId)
                    .HasName("RAPPORTINO_ID");

                entity.Property(e => e.ScontrinoId)
                    .HasColumnName("SCONTRINO_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Body)
                    .HasColumnName("BODY")
                    .HasColumnType("text");

                entity.Property(e => e.RapportinoId)
                    .HasColumnName("RAPPORTINO_ID")
                    .HasColumnType("bigint(20)");

                entity.HasOne(d => d.Rapportino)
                    .WithMany(p => p.Scontrini)
                    .HasForeignKey(d => d.RapportinoId)
                    .HasConstraintName("SCONTRINI_ibfk_1");
            });

            modelBuilder.Entity<Utenti>(entity =>
            {
                entity.HasKey(e => e.UtenteId)
                    .HasName("PRIMARY");

                entity.ToTable("UTENTI");

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
