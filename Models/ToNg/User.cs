namespace Models.ToNg {
    
    public class User{
        public int BasicId { get; set; }
        public string Email {get;set;}
        public string Name {get;set;}
        public string Surname {get;set;}
        public string Nickname {get;set;}
        public bool? ShowPrivateName {get;set;}

    }
}