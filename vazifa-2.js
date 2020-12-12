//shart operatoriga oid masalalar

//1

// let num = -6;
// if (num > 0) console.log(num + 1);
// else {console.log(num);}

//2

// let num = 56;
// if (num % 2 == 0) {
//     console.log(num + 1);
// }
// else {console.log(num - 2);}

//3

// let num = 0;
// if(num > 0) {
//     console.log(num + 1);
// }
// else if (num < 0) {
//     console.log(num - 2);
// }
// else {console.log(10)}

//4

// let num1 = -7;
// let num2 = -9;
// let num3 = -12;
// if(num1 > 0 && num2 > 0 & num3 > 0) {
//     console.log('3 ta musbat son');
// }else if (num1 > 0 || num2 > 0 || num3 > 0) {
//     console.log('2 ta musbat son bor');
// }else {console.log('musbat son yoq');}

//5 
// let num1 = 8;
// let num2 = -23;
// let num3 = -75;
// let musbat = 0;
// if (num1 > 0) {
//     musbat += 1;
// }if (num2 > 0) {
//     musbat += 1;
// } if (num3 > 0) {
//     musbat += 1;
// }
// if (musbat !== 0) {
//     console.log('sonlardan ' + musbat + 'tasi musbat ' + (3 - musbat + 'tasi manfiy'))
// } else {
//     console.log('sonlarni hammasi manfiy');
// }


//6
// let num1 = 45;
// let num2 = 21;
// if (num1 > num2) {
//     console.log(num1,'katta num2 dan');
// }
// else if (num1 < num2) {
//     console.log(num2,'katta num1 dan');
// }else {
//     console.log("no to'gri raqam");
// }

//7
// let num1 = 82;
// let num2 = 43;
// if (num1 > num2) {
//     console.log(num1);
// }else if (num2 < num1) {
//     console.log(num2);
// }

//8
// let son1 = 34;
// let son2 = 67;
// if (son1 > son2) {
//     console.log(son1);
// }else {
//     console.log(son2);
// }

//9

// let A = 9;
// let B = 28;
// if (B > A) {
//     console.log(B,' son katta');
// } else  {
//     console.log(A,'son katta')
// }

//10

// let A = 32;
// let B = 12;
// if (A !== B) {
//     console.log(A + B);
// } else if(A === B) {
//     console.log(A,B + 0);
// } else {
//     console.log('nomalum')
// }

//12

// let A = 20;
// let B = 30;
// let C = 40;
// if (A > B < C) {
//     console.log(B);
// } if (B > A < C) {
//     console.log(A);
// } else if (B > C < A) {
//     console.log(C);
// } else {console.log('nomalum')}


// tanlash operatorlari

//1
// let kun1 = 1;
// let kun2 = 2;
// let kun3 = 3
// let kun4 = 4;
// let kun5 = 5;
// let kun6 = 6;
// let kun7 = 7;
// switch (7) {
//     case kun1:
//         console.log('Dushanba');
//         break;
//     case kun2:
//         console.log('Seshanba');
//         break;
//     case kun3:
//         console.log('Chorshanba');    
//         break;
//     case kun4:
//         console.log('Payshanba');
//         break;
//     case kun5:
//         console.log('Juma');
//         break;
//     case kun6:
//         console.log('Shanba');
//         break;
//     case kun7:
//         console.log('Yakshanba');
//         break;       
//     default :
//         console.log('nomalum soz')                 
// } 

// 2
// let K = 5;
// let K1 = 1;
// let K2 = 2;
// let K3 = 3;
// let K4 = 4;
// let K5 = 5;
// switch (K) {
//     case K1:
//         console.log('Yomon');
//         break;
//     case K2:
//         console.log('Qoniqarsz');
//         break;
//     case K3:
//         console.log('Qoniqarli');
//         break;
//     case K4:
//         console.log('Yaxshi');
//         break;
//     case K5:
//         console.log('Alo')
//         break;
//     default :
//         console.log('nomalum');                       
// }

//3 
// let oy = Math.floor(Math.random() * 12 + 1);
// switch(oy) {
//     case 1:
//     case 2:    
//         console.log('Qish')
//         break;
//     case 3:
//     case 4:
//     case 5:        
//         console.log('Bahor')
//         break;
//     case 6:
//     case 7:
//     case 8:        
//         console.log('Yoz');
//         break;
//     case 9:
//     case 10:
//     case 11:        
//         console.log('Kuz');
//         break;
//     case 12:
//         console.log('Qish');    
//     default:
//         console.log('nomalum')                
// }

// //4  
// let numberOfDays = Math.floor(Math.random() * 11 + 1);
// switch (numberOfDays) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('Bu oyda 31 kun mavjud');
//         break;
//     case 2:
//         console.log('Bu oyda 28 yoki 29 kun mavjud');
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('Bu oyda 30 kun mavjud');
//         break;
//     default:
//         console.log('Xatolik');                                                   
// }


//5
//  let A = 34;
//  let B = 23;
//  let amal = Math.floor(Math.random() * 4 + 1);   
// switch(amal) {
//     case 1:
//         console.log(A + B);
//          break;
//     case 2:
//         console.log(A - B);
//         break;
//     case 3:
//         console.log(A / B);
//         break;
//     case 4:
//         console.log(A * B);
//         break;
//     default:
//         console.log('nomalum');               
// }

//6
// let uzunlik = Math.floor(Math.random() * 100 + 1);
// let birlik = Math.floor(Math.random() * 5 + 1);
// switch (birlik) {
//     case 1:
//         console.log(uzunlik / 10 + 'metr');
//         break;
//     case 2:
//         console.log(1000 / uzunlik + 'metr');
//         break;
//     case 3:
//         console.log(uzunlik* 1 + 'metr');
//         break;
//     case 4:
//         console.log(uzunlik / 1000 + 'metr');
//         break;
//     case 5:
//         console.log(uzunlik / 100 + 'metr');
//         break;
//     default :
//         console.log('nomalum');                     
// }

//7
// let ogirlik = Math.floor(Math.random() * 100 + 1);
// let birlik = Math.floor(Math.random() * 5 + 1);
// switch (birlik) {
//     case 1:
//         console.log(ogirlik + 'kilogram teng' + (ogirlik * 1) + 'kilogramgaga');
//         break;
//     case 2:
//         console.log( ogirlik + 'milligram teng' + (ogirlik / 1000000) + 'kilogramga');
//         break;
//     case 3:
//         console.log(ogirlik + 'gram teng' + (ogirlik / 1000) + 'kilogramga');
//         break;
//     case 4:
//         console.log(ogirlik + 'tonna teng' + (1000 / ogirlik) + 'kilogramga');
//         break;
//     case 5:
//         console.log(ogirlik + 'sentner teng' + (ogirlik / 10000) + 'kilogram');
//         break;
//     default :
//         console.log('nomalum');               
        
// }


//8 ????
// let day = Math.floor(Math.random() * 30 + 1);
// let month = Math.floor(Math.random() * 12 + 1);
// let year = 365
// switch (day,month) {
//     case day:
//         console.log(year / 12 + 'kun');
//         break;
//     case month:
//         console.log(year / 30 + 'oy')
//         break;
//     default:
//         console.log('nomalum');        
// }

//9 ???

// let day = Math.floor(Math.random() * 30 + 1);
// let month = Math.floor(Math.random() * 12 + 1);
// let yangiSana = 1
// switch (day,month) {
//     case day:
//         console.log(365 / 12 + yangiSana);
//         break;
//     case month:
//         console.log(365 / 30 * 1);
//         break;
//     default:
//         console.log('nomalum');        
// }




//10

// let command = 3;
// let tomon = 2;
// switch (tomon) {
//     case 1:
//         if (command === 1) {
//             console.log('Robotnig oxirgi xolati garbga yonalgan');
//         }
//         if (commnad === 0) {
//             console.log('Robotning oxirgi xolati shimolga');  
//         }
//         if (command === 2) {
//             console.log('Robotnig oxirgi xolati sharqga')
//         }  break;
//     case 2:
//         if (command === 1) {
//             console.log('Robotning oxirgi xolati sharga yonalgam');
//         } 
//         if (command === 0) {
//             console.log('Robotning oxirgi xolati janubga');
//         }
//         if(command === 2) {
//             console.log('Robotning oxirgi xolati garbga');
//         } break;
//     case 3:
//         if (command === 1) {
//             console.log('Robotning oxirig xolati shimol');
//         }
//         if (command === 0) {
//             console.log('Robotning oxirgi xolati sharq');
//         }
//         if (command === 2) {
//             console.log('Robotnig oxirgi xolati janubga');
//         } break;
//     case 4:
//         if (command === 1) {
//             console.log('Roboting oxirgi xolati janub');
//         }        
//         if (command === 0) {
//             console.log('Robotning oxirgi xolati garbga');
//         }
//         if (command === 2) {
//             console.log('Robotning oxirgi xolati shimolga');
//         } break
//     default :
//             console.log('nomaulum')    
// }

// 11 ???????????????????????

//12
// let R = Math.floor(Math.random() * 50 + 1);
// let element = Math.floor(Math.random() * 4 + 1);
// switch (element) {
//     case 1:
//         console.log('radius= ' + R * 1);
//         break;
//     case 2:
//         console.log('diamter= ' + 2 * R);
//         break; 
//     case 3:
//         console.log('uzunlik = ' + 2 * Math.PI * R)
//         break;
//     case 4:
//         console.log('yuza= ' + Math.PI * Math.pow(R,2));
//         break;
//     default :
//         console.log('nomalum')               
// }

//13
// let a = Math.floor(Math.random() * 100 + 1);
// let element = Math.floor(Math.random() * 3 + 1);
// switch (element) {
//     case 1:
//         console.log('c= ' + a * Math.sqrt(2));
//         break;
//     case 2:
//         console.log('balandlik' + (a * Math.sqrt(2) / 2));
//         break;
//     case 3:
//         console.log('S=' + (a * Math.sqrt(2) * a * Math.sqrt(2) / 2) / 2);
//         break;
//     default:
//         console.log('nomalum');            
// }
 

//14
// let a = Math.floor(Math.random() * 50 + 1);
// let element = Math.floor(Math.random() * 3 + 1);
// switch (element) {
//     case 1:
//         console.log('tomoni= '+ a * a);
//         break;
//     case 2:
//         console.log('R1= ' + a * Math.sqrt(3 / 6));
//         break;
//     case 3:
//         console.log('R2= ' + a * Math.sqrt(3 / 6) * 2 );
//         break;
//     case 4:
//         console.log('S= ' + Math.pow(a,2) * Math.sqrt(3 / 4));    
//     default:
//         console.log('nomalum');            
// }
 
