'use strict';

const store = document.getElementById('name');

const firstNameBox = document.getElementById('firstName-box');
const lastNameBox = document.getElementById('lastName-box');
const emailBox = document.getElementById('email-box');
const regnoBox = document.getElementById('regno-box');
const passwordBox = document.getElementById('password-box');
const form = document.querySelector('.form');
const btnLogin = document.querySelector('#btn-login');

// const guest = {
//     name: 'Guest',
//     email: 'unknown',
//     password: 'unknown'
// }
// localStorage.clear()
// localStorage.setItem('accounts',JSON.stringify([{
//     type: 'student',
//     firstName: 'Akash',
//     lastName: 'Raman',
//     email: 'akashramanj.csbs2020@citchennai.net',
//     password: '083020codealgo',
//     regno: 210420244021
// },
// {
//     type: 'student',
//     firstName: 'Sai',
//     lastName: 'Subash',
//     email: 'saisubash.csbs2020@citchennai.net',
//     password: '083020codealgo',
//     regno: 210420244021
// },
// {
//     type: 'teacher',
//     firstName: 'Akshay',
//     lastName: 'Raman',
//     email: 'akshayramanj.csbs2020@citchennai.net',
//     password: '083020codealgo',
// }]))

// class Account {
//     firstName;
//     lastName;
//     email;
//     password;
//     constructor(firstName, lastName, email, password){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//      }
//  }
  
  class Student{
    firstName;
    lastName;
    email;
    password;
    type = 'student';
    regno;
    constructor(firstName,lastName,email,regno,password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.regno = regno;
    }
  }
  
///   class Teacher extends Account {
//     type = 'teacher';
//     constructor(firstName, lastName, email, password) {
//       super(firstName, lastName, email, password);
//     }
//   }
  

class Database {
    #accounts;
    #currentAccount;
    constructor(){
        this._getLocalStorage();
        form.addEventListener('submit', this._checkingByEntering.bind(this));
        btnLogin.addEventListener('click', this._checkingByClicking.bind(this));
    }
    
    _getLocalStorage(){
        this.#currentAccount = JSON.parse(localStorage.getItem('currentAccount'));
        this.#accounts = JSON.parse(localStorage.getItem('accounts'));
        console.log(this.#accounts);
        console.log(this.#currentAccount);
    }

    _checkingByClicking(e){
        e.preventDefault();
        const firstName = firstNameBox.value;
        const lastName = lastNameBox.value;
        const email = emailBox.value;
        const regno = +regnoBox.value;
        const password = passwordBox.value;

        if(!(firstName&&lastName&&email&&regno&&password)){
            alert("Enter every details");
            return ;
        }

        this._setCurrentAccount(firstName,lastName,email,regno,password);
    }

    _checkingByEntering(e){
        e.preventDefault();
        const firstName = firstNameBox.value;
        const lastName = lastNameBox.value;
        const email = emailBox.value;
        const regno = +regnoBox.value;
        const password = passwordBox.value;
        
        if (firstName === document.activeElement){
            lastNameBox.focus();
            return ;
        }
        if (lastName === document.activeElement){
            emailBox.focus();
            return ;
        }
        if (emailBox === document.activeElement){
            regnoBox.focus();
            return ;
        }

        if (regnoBox === document.activeElement){
            passwordBox.focus(); 
            return ;
        }
        
        this._setCurrentAccount(firstName,lastName,email,regno,password);
    }

    _setCurrentAccount(firstName,lastName,email,regno,password){

        if(!(email.includes('@')||(Number.isFinite(regno)&&(regno + '').length === 12))){
            alert('Invalid Email and Regno');
            return;
        }

        if (!email.includes('@')){
            alert('Invalid Email');
            return;
        }

        if (!(Number.isFinite(regno)&&(regno + '').length === 12)){
            alert('Invalid Regno');
            return;
        }

        if(!this.#accounts){
            alert('There is no matching account');
            return ;
        }

        const foundedAccount = this.#accounts.find(
            account => (account.type == 'teacher' && (account.email === email || account.regno === regno))
          );

        if(foundedAccount){
            alert('There is a matching account');
            return ;
        }

        this.#currentAccount = new Student(firstName,lastName,email,regno,password);
        this.#accounts.push(this.#currentAccount)
        localStorage.removeItem('currentAccount')
        localStorage.removeItem('accounts')
        localStorage.setItem('currentAccount',JSON.stringify(this.#currentAccount));
        localStorage.setItem('accounts',JSON.stringify(this.#accounts));
    }
}

const d = new Database();
