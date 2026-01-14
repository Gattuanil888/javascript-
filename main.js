//    let firstname = "prasad";
//    let age = 20;
//    let marriage = false;

//      if(!marriage){

//         console.log(firstname +" is a elegible to marriage");
//      }
//      else{
//             console.log( firstname +" not elegible to marriage");
//      }

    //  let ans =0;

    //  for( let i=0;i<=1000;i++){
    //       ans += i;
    //  }
    //  console.log(ans);

    //    const allusers = [{ // array of objects
           
    //          firstname: "prasad",
    //          age : 20 ,
    //    } ,{
    //        firstname:"venu",
    //        age:19
            
    //    },{
    //         firstname:"rakesh",
    //         age: 20,
    //    }]

    //    for( let i=0;i<allusers.length;i++){
           
    //     if(allusers[i]["age"] == 20){
             
    //         console.log(allusers[i]["firstname"]);
    //     }
    //    }

    // function calculate( a , b ,finalairthmetic){
              
    //     const ans = finalairthmetic( a ,b);
    //       return ans;
    // }

    //     function sum( a , b){
               
    //         return a + b;
    //     }

    //     const value = calculate( 1 ,2 , sum);
    //       console.log(value);

 
         
        // function fun(){  promisis
               
        //     let v = new Promise( function(reslove){

        //         setTimeout( reslove , 3000)
        //     })
        //     return v;
        // }

        // const val = fun();
           
        // val.then( function(){
        //      console.log("hii iam learning");
        // })

        //callbacks

        //    function add(n){
               
        //     return n + n;
        //    }

        //    function square(n){
        //       return n *n;
        //    }
             

        //    function calling( a , b , fun){
                
        //     let val1 = fun(a);
        //     let val2 = fun(b);
               
        //     return val1 + val2;
                
        //    }




        //    let ans = calling( 1 , 2, square);
        //      console.log(ans);

        //map, filter,arrow functions

        // map

        // const arr = [ 1, 2,3,4,5];
          
         
        // const ans = arr.filter(function(i){
               
        //     return i % 2 ==0;

        // });
        // console.log(ans);


        // const sum = ( a, b)=>{
              
        //     return a +b;
        // }

        // app.get("/", ( request , Response)=>{
                 
        // })

        // const ans = sum( 1,2);
        // console.log(ans);

        //  const arr = ["prasad","sai","rakesh"];

        //     const ans = arr.filter( function(n){
                   
        //         if( n.endsWith("d")){
                      
        //             return true;
        //         }
        //         else{
        //              return false;
        //         }
        //     })
        //     console.log(ans);

                function login(){
                       
                     return new Promise((resolve, reject) => {
                            
                        let success = false;

                         setTimeout(() => {
                             
                            if(success){
                                  
                                resolve("Login successfull");
                            }
                            else{
                                  resolve(" Failed rrequest");
                            }
                             
                         }, 2000);
                     })
                }


                async  function fun() {
                          
                    try{
                      let ans = await login();
                      console.log(ans);
                    }
                    catch(error){
                          console.log(error)
                    }
                }
                fun();

