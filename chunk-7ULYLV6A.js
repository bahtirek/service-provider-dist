import{h as p,p as u}from"./chunk-YKD7L7GY.js";import{G as o,N as h,T as n,ta as r,z as a}from"./chunk-BWQSIJDM.js";var l={production:!1,apiUrl:"http://73.57.80.184:3000/api",socketUrl:"http://73.57.80.184:3000"};var x=(()=>{let t=class t{constructor(){this.url=l.apiUrl,this.http=n(p),this.router=n(u),this.state=r({}),this.isLoggedIn=r(!1),this.user=r({}),this.getUser()}login(e){return this.http.post(this.url+"/auth/login",e).pipe(o())}refreshToken(){let e=this.user()?.accessToken;return console.log(e),this.http.post(this.url+"/auth/refresh",{accessToken:e}).pipe(a(1))}registration(e){return this.http.post(this.url+"/users/user",e).pipe(o())}logout(e){window.sessionStorage.removeItem("user"),this.state.update(s=>null),this.isLoggedIn.set(!1),e&&this.router.navigate([e])}setUser(e){window.sessionStorage.setItem("user",JSON.stringify(e)),this.user.update(()=>e),this.isLoggedIn.set(!0)}getUser(){if(window.sessionStorage.getItem("user")==null)return;let e=JSON.parse(window.sessionStorage.getItem("user"));console.log(e),this.isTokenExpired()?this.refreshTokenIfExpired():(this.user.update(()=>e),this.isLoggedIn.set(!0))}refreshTokenIfExpired(){this.isTokenExpired()&&this.refreshToken().subscribe({next:e=>{this.setUser(e)},error:e=>{this.isLoggedIn.set(!1),this.logout("login")}})}isTokenExpired(){let e=this.user()?.accessToken;if(!e)return!1;let s=JSON.parse(window.atob(e.split(".")[1])),c=Math.floor(Date.now()/1e3);return!(s.exp-c>10)}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{x as a};
