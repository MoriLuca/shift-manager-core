using System;
using System.Security.Cryptography;
using System.Text;
using core;

namespace Services.Db {

    public partial class Users
    {
        private string HashString(string word){
            string hashPass;
            using(var sha256 = SHA256.Create())  
            {  
                // Send a sample text to hash.  
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(word));  
                // Get the hashed string.  
                hashPass = BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();    
            } 
            return hashPass;
        } 
    }

}