"use strict";$(document).ready(function(){$(window).scroll(function(){75<this.scrollY?($("nav").addClass("w-100 fixed-top shadow-sm"),$("nav").css("background","#fff"),$(".nav-item:last-of-type").addClass("bg-btn"),$(".nav-item:last-of-type a").css("color","#fff"),$(".pre-header").css("margin-top","70px")):($("nav").removeClass("w-100 fixed-top shadow-sm"),$("nav").css("background","transparent"),$(".nav-item:last-of-type").removeClass("bg-btn"),$(".nav-item:last-of-type a").css("color","#000"),$(".pre-header").css("margin-top","0px"))}),$(".box_project").on("click",function(){$(".box_project").addClass("active"),$(".box_express").removeClass("active"),$(".box_project button").html("choose me")}),$(".box_express").on("click",function(){$(".box_express").addClass("active"),$(".box_project").removeClass("active"),$(".box_project button").html("get started")}),$(".type_project .box_project button").on("click",function(){$(".over-lay").css("display","block"),$(".contact").css("display","block"),$(".type_project .contact .box_contact .box_plan .m_box_project").addClass("active"),$(".type_project .contact .box_contact .box_plan .m_box_express").removeClass("active")}),$(".type_project .box_express button").on("click",function(){$(".over-lay").css("display","block"),$(".contact").css("display","block"),$(".type_project .contact .box_contact .box_plan .m_box_express").addClass("active"),$(".type_project .contact .box_contact .box_plan .m_box_project").removeClass("active")}),$(".over-lay").on("click",function(){$(".contact").css("display","none"),$(".over-lay").css("display","none")})}),window.onload=function(){for(var l=document.getElementsByClassName("icons_li"),t=function(n){l[n].onclick=function(t){for(var e=document.getElementsByClassName("icons_li"),s=0;s<e.length;s++)e[s].classList.remove("active");for(var o=document.getElementsByClassName("icons_li"),a=0;a<o.length;a++)o[a].firstElementChild.setAttribute("src",o[a].getAttribute("data-src2"));l[n].classList.add("active"),document.getElementById(l[n].getAttribute("data-src")).firstElementChild.setAttribute("src",l[n].getAttribute("data-src"));for(var c=document.getElementsByClassName("views"),i=0;i<c.length;i++)c[i].classList.remove("active");document.getElementById(l[n].getAttribute("data-linkView")).classList.add("active")}},e=0;e<l.length;e++)t(e);for(var i=document.getElementsByClassName("our_li"),s=function(c){i[c].onclick=function(t){for(var e=document.getElementsByClassName("our_li"),s=0;s<e.length;s++)e[s].classList.remove("active");i[c].classList.add("active");for(var o=document.getElementsByClassName("view_2"),a=0;a<o.length;a++)o[a].classList.remove("active");document.getElementById(i[c].getAttribute("data-target")).classList.add("active")}},o=0;o<i.length;o++)s(o)},$(".box-agile-1").click(function(){setTimeout(function(){$(".box-agile-2").removeClass("card-color-active").addClass("card-color-not-active")},100),setTimeout(function(){$(".box-agile-1").addClass("card-color-active").removeClass("card-color-not-active")},100)}),$(".box-agile-2").click(function(){setTimeout(function(){$(".box-agile-2").addClass("card-color-active").removeClass("card-color-not-active")},100),setTimeout(function(){$(".box-agile-1").removeClass("card-color-active").addClass("card-color-not-active")},100)}),$(".sub-card").click(function(){$(this).hasClass("sub")&&($(this).hide("slide",{direction:"right"},150),$(".main-card").hide("slide",{direction:"left"},150),$(this).show("slide",{direction:"right"},150),$(".main-card").show("slide",{direction:"left"},150)),$(this).addClass("color-shadow").removeClass("sub").removeClass("border-main"),$(".main-card").addClass("border-main").addClass("sub2").removeClass("color-shadow")}),$(".main-card").click(function(){$(this).hasClass("sub2")&&($(this).hide("slide",{direction:"left"},150),$(".sub-card").hide("slide",{direction:"right"},150),$(this).show("slide",{direction:"left"},150),$(".sub-card").show("slide",{direction:"right"},150)),$(this).addClass("color-shadow").removeClass("sub2").removeClass("border-main"),$(".sub-card").addClass("border-main").addClass("sub").removeClass("color-shadow")}),$(".team-btn-1").click(function(){setTimeout(function(){$(".team-2").fadeOut(300)},400),setTimeout(function(){$(".team-1").fadeIn(800)},700)}),$(".team-btn-2").click(function(){setTimeout(function(){$(".team-1").fadeOut(300)},400),setTimeout(function(){$(".team-2").fadeIn(800)},700)});