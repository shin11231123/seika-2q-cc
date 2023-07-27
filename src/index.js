// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });

    
  const swiperTitle = document.getElementById("swiper-title");

    swiper.on('slideChange', function () {

      swiperTitle.textContent = "Slide " + (swiper.realIndex + 1);

	
    });

  
   
    
    

   

import JustValidate from "just-validate";
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
	errorMessage:"必須入力項目です"
    },
    {
      rule: 'minLength',
      value: 3,
	errorMessage:"3文字以上で入力してください"
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
	errorMessage:"必須入力項目です"
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
	errorMessage:"必須入力項目です"
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
	errorMessage:"必須入力項目です"
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField('#basic_address', [
	{
	  rule: 'required',
	  errorMessage:"必須入力項目です"
	},
	{
	  rule: 'number',
	},
	{
	  rule: 'minNumber',
	  value: 18,
	},
	{
	  rule: 'maxNumber',
	  value: 150,
	},
   ]);
   
   onSuccess(onSuccess)

   function onSuccess(event){
	let formData = new FormData(event.Target);
	console.log(formData.get("username"))
	console.log(formData.get("emall"))
      console.log(formData.get("password"))
	console.log(formData.get("age"))
	console.log(formData.get("address"))
   }
  

      