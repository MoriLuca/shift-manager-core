// using System;
// using System.Security.Cryptography;
// using System.Text;
// using System.Linq;
// using core;
// using System.Collections.Generic;
// using Microsoft.EntityFrameworkCore;

// namespace Services.Lakes {

//     public partial class LakesInfo
//     {
        
//         public List<Models.ToNg.LakesInfo> GetLakes(){
            
//             List<core.LagoBasic> res = null;
//             int result = 0;
//             string errorMessage = "";
//             string errorInnerException = "";
//             //test inserimento nuova persona
            
//             using (var context = new TOOEZContext())
//             {
//                 res = context.LagoBasic
//                     .Include(a=>a.LagoApertura)
//                     .Include(i=>i.LagoInfo)
//                     .ToList();
//             }

//             if (res != null){
//                 List<Models.ToNg.LakesInfo> lakesInfo = new  List<Models.ToNg.LakesInfo>();
//                 foreach (var l in res)
//                 {
//                     lakesInfo.Add(new Models.ToNg.LakesInfo(l));
//                 }
//                 return lakesInfo;
//             }
//             else{
//                 throw new NotImplementedException();
//                 return null;
//             }

//         }
//     }

// }