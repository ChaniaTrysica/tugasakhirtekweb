(self.webpackChunkproject=self.webpackChunkproject||[]).push([[82],{5082:(t,e,o)=>{"use strict";o.r(e),o.d(e,{AuthModule:()=>b});var n=o(8583),r=o(7716),i=o(5830),u=o(2305),a=o(3738),c=o(8295),g=o(9983),l=o(3679),d=o(1095),s=o(6627);let p=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.user={},this.hide=!0}ngOnInit(){}login(){this.api.login(this.user.email,this.user.password).subscribe(t=>{localStorage.setItem("appToken",JSON.stringify(t)),this.router.navigate(["maincon/dashboard"])},t=>{alert("Tidak dapat login")})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.s),r.Y36(u.F0))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-login"]],decls:32,vars:10,consts:[[1,"uk-flex","uk-flex-center"],["src","assets/images/logo.png","alt","image","width","350px","height","350px"],[1,"uk-flex","uk-flex-top","uk-flex-center","uk-height-viewport"],[1,"uk-width-1-3@m"],[1,"uk-flex","uk-flex-center","uk-margin-medium-bottom"],[1,"uk-width-1-1"],["matInput","","placeholder","Ex. ricette@email.com","required","",3,"ngModel","ngModelChange"],[1,"uk-width-1-1","uk-margin-large-bottom"],["matInput","","placeholder","Your password","required","",3,"type","ngModel","ngModelChange"],["mat-icon-button","","matSuffix","",3,"click"],[1,"uk-flex","uk-flex-right"],[1,"uk-width-expand"],["mat-button","","routerLink","/register"],["mat-button","","routerLink","/forgot"],["mat-raised-button","","color","primary",3,"click"],[1,"uk-margin-remove-bottom"],["mat-raised-button","","routerLink","/home"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r._UZ(1,"img",1),r.qZA(),r.TgZ(2,"div",2),r.TgZ(3,"mat-card",3),r.TgZ(4,"h3",4),r._uU(5,"LOGIN"),r.qZA(),r.TgZ(6,"mat-card-content"),r.TgZ(7,"mat-form-field",5),r.TgZ(8,"mat-label"),r._uU(9,"Email"),r.qZA(),r.TgZ(10,"input",6),r.NdJ("ngModelChange",function(t){return e.user.email=t}),r.qZA(),r.qZA(),r.TgZ(11,"mat-form-field",7),r.TgZ(12,"mat-label"),r._uU(13,"Password"),r.qZA(),r.TgZ(14,"input",8),r.NdJ("ngModelChange",function(t){return e.user.password=t}),r.qZA(),r.TgZ(15,"button",9),r.NdJ("click",function(){return e.hide=!e.hide}),r.TgZ(16,"mat-icon"),r._uU(17),r.qZA(),r.qZA(),r.qZA(),r.TgZ(18,"div",10),r.TgZ(19,"div",11),r.TgZ(20,"button",12),r._uU(21,"Create Account"),r.qZA(),r.TgZ(22,"button",13),r._uU(23,"Forgot"),r.qZA(),r.qZA(),r.TgZ(24,"button",14),r.NdJ("click",function(){return e.login()}),r.TgZ(25,"p",15),r._uU(26,"LOGIN"),r.qZA(),r.qZA(),r.TgZ(27,"button",16),r.TgZ(28,"p",15),r._uU(29,"HOME"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(30,"footer"),r._uU(31,"\xa9COPYRIGHT RICETTE 2021"),r.qZA()),2&t&&(r.Udp("background-color","rgb(250, 115, 138)"),r.xp6(2),r.Udp("background-color","rgb(250, 115, 138)"),r.xp6(8),r.Q6J("ngModel",e.user.email),r.xp6(4),r.Q6J("type",e.hide?"password":"text")("ngModel",e.user.password),r.xp6(3),r.Oqu(e.hide?"visibility_off":"visibility"),r.xp6(10),r.Udp("background-color","black"))},directives:[a.a8,a.dn,c.KE,c.hX,g.Nt,l.Fj,l.Q7,l.JJ,l.On,d.lW,c.R9,s.Hw,u.rH],styles:["button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f5f5f5}footer[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-weight:700}footer[_ngcontent-%COMP%]{background-color:#d3d3d3;text-align:center;color:#000}"]}),t})();var m=o(7225),h=o(4528),Z=o(9699),f=o(5858);const k=[{path:"",component:p,children:[{path:"login",component:p}]},{path:"register",component:m.y},{path:"forgot",component:Z.v},{path:"maincon",component:f.MainconModule}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,h.M,u.Bz.forChild(k),l.u5]]}),t})()}}]);