"use strict";$(".web-btn33").click(function(){$(".web2").fadeIn(200),$(".mob2").fadeOut(200),$(".desk2").fadeOut(200)}),$(".mob-btn44").click(function(){$(".mob2").fadeIn(200),$(".web2").fadeOut(200),$(".desk2").fadeOut(200)}),$(".desk-btn55").click(function(){$(".desk2").fadeIn(200),$(".mob2").fadeOut(200),$(".web2").fadeOut(200)});var c=1;function success(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Edit Done Succefully"})}function accept(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Request Accepted successfully"})}function Canceled(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Request Refused successfully"})}function complain(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Compain Sent successfully"})}function success2(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:5500}).fire({type:"success",title:"4SOFT has received your request successfully and we will answer soon"})}function success3(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3e3}).fire({type:"success",title:"Updated successfully"})}function goUP(){window.scrollTo(0,0)}$(".cat-drop").mouseup(function(){1==c?($(".drop").fadeIn(300),c=2):2==c&&($(".drop").fadeOut(300),c=1)}),$(".pay11").click(function(){$(this).addClass("active-box"),$(".btn1").addClass("active-btn"),$(this).removeClass("non-active-box"),$(".btn1").removeClass("non-active-btn"),$(".pay22").addClass("non-active-box"),$(".btn2").addClass("non-active-btn"),$(this).css({opacity:1}),$(".pay22").css({opacity:.6})}),$(".pay22").click(function(){$(this).addClass("active-box"),$(".btn2").addClass("active-btn"),$(this).removeClass("non-active-box"),$(".btn2").removeClass("non-active-btn"),$(this).css({opacity:1}),$(".pay11").addClass("non-active-box"),$(".btn1").addClass("non-active-btn"),$(this).css({opacity:1}),$(".pay11").css({opacity:.6})}),$(".moreBox").slice(0,2).show(),0!=$(".blogBox:hidden").length&&$("#loadMore").show(),$("#loadMore").on("click",function(e){e.preventDefault(),$(".moreBox:hidden").slice(0,3).slideDown(),0==$(".moreBox:hidden").length&&$("#loadMore").fadeOut("slow")}),$(".moreBox2").slice(0,2).show(),0!=$(".blogBox2:hidden").length&&$("#loadMore2").show(),$("#loadMore2").on("click",function(e){e.preventDefault(),$(".moreBox2:hidden").slice(0,3).slideDown(),0==$(".moreBox2:hidden").length&&$("#loadMore2").fadeOut("slow")}),$(".moreBox3").slice(0,2).show(),0!=$(".blogBox3:hidden").length&&$("#loadMore3").show(),$("#loadMore3").on("click",function(e){e.preventDefault(),$(".moreBox3:hidden").slice(0,3).slideDown(),0==$(".moreBox3:hidden").length&&$("#loadMore3").fadeOut("slow")}),$(".web-btn").click(function(){$(".web").fadeIn(),$(".mobile").fadeOut(),$(".desktop").fadeOut()}),$(".mob-btn").click(function(){$(".mobile").fadeIn(),$(".web").fadeOut(),$(".desktop").fadeOut()}),$(".desk-btn").click(function(){$(".desktop").fadeIn(),$(".mobile").fadeOut(),$(".wen").fadeOut()}),$(".plus-appear").click(function(){$(this).parent().parent().children("ul").fadeIn(),$(".plus-appear").fadeOut(),$(".minus-dis").fadeIn()}),$(".minus-dis").click(function(){$(this).parent().parent().children("ul").fadeOut(300),$(".minus-dis").fadeOut(),$(".plus-appear").fadeIn()}),$(window).on("scroll",function(){100<=$(window).scrollTop()?$(".nav-scroll").css({backgroundColor:"#FFF",boxShadow:"4px 4px 3px #F5F5F5"}):$(".nav-scroll").css({backgroundColor:"#FFF",boxShadow:"none"})}),$("#modal1").on("hidden.bs.modal",function(e){$("#modal1 iframe").attr("src",$("#modal1 iframe").attr("src"))}),$(window).on("scroll",function(){300<=$(window).scrollTop()?$("#goUPButton").slideDown(700):$("#goUPButton").slideUp(700)}),$(document).ready(function(){$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},1200,function(){window.location.hash=t})}})});var real=document.getElementById("real-life"),btn=document.getElementById("choose-btn-pc"),customTxt=document.getElementById("customTxt"),srcBtn=document.getElementById("src-btn"),fileBtn=document.getElementById("file-btn"),customTxt2=document.getElementById("customTxt2");btn.addEventListener("click",function(){real.click()}),real.addEventListener("change",function(){real.value?customTxt.innerHTML=real.value:customTxt.innerHTML="No File Chosen yet !"}),srcBtn.addEventListener("click",function(){fileBtn.click()}),fileBtn.addEventListener("change",function(){fileBtn.value?customTxt2.innerHTML=fileBtn.value:customTxt2.innerHTML="No File Chosen yet !"});