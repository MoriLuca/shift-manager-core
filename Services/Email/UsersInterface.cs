namespace Services.Db{
    public interface IUsers
    {
        int RegisterNewPerson(Models.FromNg.NewUserToRegister _user);
    }
}
