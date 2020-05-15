class Bank{
  
    constructor (owner , balance, ){
       this.owner= owner;
       this.balance=balance;
      
     }
    
       AfficheSolde (){
                   console.log("j'ai "+" "+ this.balance +"€"+ " "+"sur mon compte");
     }
     
     deposit(depot){
     this.balance += depot;
     console.log("je viens de déposer" + " "+ depot + "€");
     console.log("mon nouveau solde est de " + this.balance + "€");
         
         
       
     }
       
     retrait(depot){
         console.log("je veux retirer " +" " + depot + "€")
         if (depot > this.balance){
             console.log("le montant du retrait est plus grand que votre solde");
         } 
         else{
            this.balance-= depot;
            console.log("il me reste " + " " + this.balance +"€");
           

         }
         
           
         

         
     }
   }
     
   
    
   const newAccount = new Bank ("rici", 100);
   const Depot1 = new Bank (500);
   
   newAccount.AfficheSolde();
   newAccount.deposit(500);
   newAccount.retrait(100);
   