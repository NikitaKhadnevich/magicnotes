(this.webpackJsonpmagicnotes=this.webpackJsonpmagicnotes||[]).push([[1],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.notesShare.sharedArr}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j})),a.d(t,"d",(function(){return P})),a.d(t,"c",(function(){return B.a})),a.d(t,"e",(function(){return F.a}));var n=a(0),r=a(236),i=a.n(r),o=a(482),s=a(1),c=function(e){var t=e.id,a=e.handleItem,n=e.callToEditNote,r=e.noteList;return Object(s.jsx)(o.a,{"aria-label":"edit",onClick:function(){return a(t,r,n)},children:Object(s.jsx)(i.a,{})})},l=c;c.defaultProps={handleItem:"handleItem",callToEditNote:"callToEditNote",noteList:"noteList",id:"id"};var d=a(237),h=a.n(d),u=function(e){var t=e.id,a=e.noteList,n=e.handleShare;return Object(s.jsx)(o.a,{"aria-label":"edit",onClick:function(){return n(t,a)},children:Object(s.jsx)(h.a,{})})},j=u;u.defaultProps={noteList:"noteList",id:"id",handleShare:"handleShare"};var b=a(457),m=a(238),p=a.n(m),f=function(e){var t=e.id,a=e.handleSaveNote,n=e.updateDescription;return Object(s.jsx)(b.a,{direction:"row",spacing:.5,alignItems:"center",children:Object(s.jsx)(o.a,{id:t,"aria-label":"save",color:"primary",onClick:function(){return a(t,n)},children:Object(s.jsx)(p.a,{})})})};f.defaultProps={handleSaveNote:"handleSaveNote",updateDescription:"updateDescription",id:"id"};var x=f,O=a(239),g=a.n(O),v=function(e){var t=e.index,a=e.handleDelete,n=e.id,r=e.currentState;return Object(s.jsx)(b.a,{direction:"row",spacing:.5,alignItems:"center",children:Object(s.jsx)(o.a,{"aria-label":"delete",color:"primary",onClick:function(){return a(t,r,n)},children:Object(s.jsx)(g.a,{})})})};v.defaultProps={handleDelete:"handleDelete",index:"index",id:"id",currentState:"currentState"};var y=v,S=a(11),w=a(479),N=a(470),C=a(465),A=a(463),E=a(15),T=Object(C.a)(w.a,E.a)({height:"100%",display:"flex",width:"100%",justifyContent:"space-between !important",marginLeft:"-30px !important important"}),I=Object(C.a)(w.a,E.a)({display:"block",maxHeight:"45px"}),D=Object(C.a)(A.a,E.a)({width:"100%"}),k=function(e){var t=e.isChange,a=e.description,r=e.handleSaveNote,i=e.id,o=e.handleDelete,c=e.index,l=e.currentState,d=Object(n.useState)(a),h=Object(S.a)(d,2),u=h[0],j=h[1],b=function(e){e!==u&&e&&j(e)};return Object(s.jsx)(N.a,{in:t,children:t?Object(s.jsxs)(T,{children:[Object(s.jsx)(D,{label:"Note Description",defaultValue:a,multiline:!0,rows:2,variant:"standard",onChange:function(e){return b(e.target.value)}}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(x,{updateDescription:u,handleSaveNote:r,id:i}),Object(s.jsx)(y,{handleDelete:o,index:c,id:i,currentState:l})]})]}):Object(s.jsxs)(I,{children:[Object(s.jsx)(D,{label:"Note Description",defaultValue:a,multiline:!0,rows:2,variant:"standard",onChange:function(e){return b(e.target.value)}}),Object(s.jsxs)(w.a,{children:[Object(s.jsx)(x,{updateDescription:u,handleSaveNote:r,id:i}),Object(s.jsx)(y,{handleDelete:o,index:c,id:i,currentState:l})]})]})})},P=k;k.defaultProps={isChange:"isChange",handleSaveNote:"handleSaveNote",description:"description",id:"id",index:"index",handleDelete:"handleDelete",currentState:"currentState"};var B=a(53),F=a(54)},15:function(e,t,a){"use strict";var n=a(172),r=Object(n.a)({palette:{primary:{main:"#eceff1",light:"#ffffff",dark:"#aebfbe"},secondary:{main:"#212121",light:"#484848",dark:"#000000"}}});t.a=r},162:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r.a}));var n={title:"What am I talking about?",describe:"Nice to see you on this \u2018Waha Note\u2019 page. There is a SPA that contains information about the main characters of the \u2018Warhammer 40k\u2019 universe. It is very good if you know any information about this Universe, and I hope that this resource will be useful to you. So, this minimalistic list of notes consists of two main pages and one additional page. The first page is titled 'Note' and contains basic information such as name, description, and other information about the current person. The second block is called 'share-note' and this page acts as an archive or collection of interesting notes. Each note can be edited, deleted or sent. In the future I am going to add a filter block, more lines for the current person and maybe a few images, also I want to add user validation. Follow the news and may the will of the Emperor be with you."},r=a(54)},192:function(e,t,a){"use strict";var n=a(54);a.d(t,"b",(function(){return n.a}));var r=a(111);a.d(t,"c",(function(){return r.a}));var i=a(53);a.d(t,"a",(function(){return i.a}))},193:function(e,t,a){"use strict";var n=a(53);a.d(t,"a",(function(){return n.a}));var r=a(54);a.d(t,"b",(function(){return r.a}))},282:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(40),i=a.n(r),o=a(462),s=a(24),c=a(74),l=a(230),d=a(15),h=a(11),u=a(461),j=a(68),b=a(19),m=a(465),p=a(452),f=Object(m.a)(p.a,d.a)({minHeight:"100vh",margin:"5px",maxWidth:"100% !important",padding:"0 10px !important",boxSizing:"border-box",boxShadow:"0px 0px 10px ".concat(d.a.palette.primary.dark)}),x=Object(m.a)(p.a,d.a)({boxSizing:"border-box",margin:"0 auto",padding:"0 5px !important",marginTop:"10px",maxWidth:"100% !important",display:"flex",height:"fit-content",flexDirection:"column"}),O=20,g="...",v=[{id:1,title:"Abaddon the Despoiler",description:"Abaddon the Despoiler is the Warmaster of Chaos, former First Captain and now absolute leader of the Black Legion and rumored to be the clone progeny of Warmaster Horus",date:"06.11.2021 18:12:40",isActive:!1,isChange:!1,sharedTime:""},{id:2,title:"Ahzek Ahriman",description:"Ahzek Ahriman, also known as Sorcerer of the Red Cyclops and Ahriman of the Thousand Sons, is an exceptionally powerful Chaos Space Marine sorcerer belonging to the Thousand Sons legion. ",date:"09.11.2021 14:10:12",isActive:!1,isChange:!1,sharedTime:""},{id:3,title:"Fabius Bile",description:"Fabius Bile is a major antagonist in Warhammer 40,000. He is a Chaos Space Marine apothecary and former Lieutenant-Commander of the Emperors Children Traitor Legion who specializes in horrific genetic engineering and illegal cloning",date:"03.10.2021 4:19:12",isActive:!1,isChange:!1,sharedTime:""},{id:4,title:"Lucius the Eternal",description:"Lucius the Eternal is one of the most powerful champions of the Chaos God/Goddess Slaanesh and is also known as The Soulthief, Fulgrims Champion, Blade of Aeons and the Scion of Chemos.",date:"03.09.2021 7:40:14",isActive:!1,isChange:!1,sharedTime:""},{id:5,title:"Kharn the Betrayer",description:'Kharn the Betrayer is a powerful follower of Khorne. He is a formidable opponent on the battlefield for almost anyone who happens to face him (including Greater Daemons) and he and his many followers seek "Blood For The Blood God" via mass slaughter and mayhem.',date:"22.09.2021 10:18:12",isActive:!1,isChange:!1,sharedTime:""},{id:6,title:"Mephiston",description:"Mephiston is the Chief Librarian of the Blood Angels and the only Blood Angel ever to overcome the Black Rage. Before taking the name of Mephiston and the title of Lord of Death, he was originally known as Brother Calistarius",date:"22.10.2021 10:58:54",isActive:!1,isChange:!1,sharedTime:""},{id:7,title:"Gabriel Angelos",description:"Gabriel Angelos is the current Chapter Master of the Blood Ravens Space Marine Chapter and former captain of that Chapters 3rd Company. Angelos was recently responsible for slaying the Chapters former Chapter Master and Chief Librarian, Azariah Kyras, who had become a pawn of Chaos.",date:"2.09.2021 22:28:12",isActive:!1,isChange:!1,sharedTime:""},{id:8,title:"Dante",description:'Commander Dante, sometimes called the "Lord of Angels" and "Bringer of Sanguinius" Light is the current Chapter Master of the Blood Angels Space Marine Chapter, and has been the Chapter Master for 1,100 standard years.Dantes power armour incorporates a highly ornate golden death mask beneath his Iron Halo, called the Death Mask of Sanguinius, which is said to have been worn by and shaped to match the fear-inspiring features of Sanguinius, the Blood Angels primarch, at the moment of his death at the hands of the Arch-traitor Horus.',date:"21.10.2021 12:37:43",isActive:!1,isChange:!1,sharedTime:""},{id:9,title:"Kelbor-Hal",description:'Kelbor-Hal was the Fabricator-General of Mars, the political and spiritual leader of the Mechanicum and the magi of the Cult Mechanicus, during the latter days of the Great Crusade and the Horus Heresy in the early 31st Millennium. When the Heresy began he swore allegiance to the service of the Warmaster Horus and the forces of Chaos, becoming the first leader of what was later termed the "Dark Mechanicum."',date:"16.09.2021 11:11:23",isActive:!1,isChange:!1,sharedTime:""}],y=a(404),S=Object(m.a)(p.a,d.a)({minwidth:"100%",minHeight:"65px",top:"10px",position:"sticky",background:d.a.palette.primary.main,zIndex:2,boxShadow:"0px 0px 10px 5px ".concat(d.a.palette.primary.dark),borderRadius:"7px","& p":{fontSize:"14px",padding:"10px",textAlign:"center"}}),w=a(1),N=function(e){var t=e.aboutData;return Object(w.jsx)(S,{children:Object(w.jsx)(y.a,{variant:"body1",children:t})})};N.defaultProps={aboutData:"aboutData"};var C=N,A=function(e){var t=e.mainNotes,a=Object(n.useState)(),r=Object(h.a)(a,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){!function(){var e=t.filter((function(e){return e.isActive})),a=Object(h.a)(e,1)[0];o(a?a.description:"Select note to display")}()}),[t]),Object(w.jsx)(C,{aboutData:i})};A.defaultProps={mainNotes:"mainNotes"};var E=A,T=a(16),I=a(142),D={sharedArr:[],isShared:!1,urlPath:""},k=Object(I.a)({name:"shared-reducer",initialState:D,reducers:{GET_SHARED_POST:function(e,t){e.sharedArr=[].concat(Object(T.a)(e.sharedArr),[t.payload])},GET_UPDATE_SHARED_POST:function(e,t){e.sharedArr=t.payload}}}),P=k.reducer,B=k.actions,F=B.GET_SHARED_POST,_=B.GET_UPDATE_SHARED_POST,L=a(111),U=a(25),W=function(e,t){var a,n=t;return a=e,n=n.map((function(e){return e.id===a?Object(U.a)(Object(U.a)({},e),{},{isActive:!e.isActive,isChange:!1}):Object(U.a)(Object(U.a)({},e),{},{isActive:!1,isChange:!1})}))},q=function(e,t){var a,n=t;return a=e,n=n.map((function(e){return e.id===a?Object(U.a)(Object(U.a)({},e),{},{isActive:!e.isActive,isChange:!e.isChange}):Object(U.a)(Object(U.a)({},e),{},{isActive:!1,isChange:!1})}))},G=function(e,t,a){var n,r=t;return n=e,r=r.map((function(e){return e.id===n?Object(U.a)(Object(U.a)({},e),{},{description:a,isChange:!1}):Object(U.a)(Object(U.a)({},e),{},{isChange:!1})}))},H=function(e){var t=O,a=g;return e.slice(0,t)+a},R=function(e,t){var a=Object(T.a)(t);return 1!==a.length?a.splice(e,1):a.splice(0),a},M=function(e,t){localStorage.setItem(t,JSON.stringify(e))},z=function(e){var t=localStorage.getItem(e);return JSON.parse(t)},V=function(e,t){var a=t.filter((function(t){return t.id===e})),n=(new Date).toLocaleString(),r=a.map((function(e){return Object(U.a)(Object(U.a)({},e),{},{sharedTime:n})}));return Object(h.a)(r,1)[0]},K=function(e,t){return t.filter((function(t){return t.id!==e}))},Q=a(70),J=a(118),Y=Object(Q.a)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,492))}),{fallback:Object(w.jsx)(J.e,{})}),X=function(e){return Object(w.jsx)(Y,Object(U.a)({},e))},Z="NotesList",$="AuthData",ee="AuthStatus",te=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(v),o=Object(h.a)(i,2),c=o[0],l=o[1],d=Object(s.b)(),u=Object(s.c)(L.a);return Object(n.useEffect)((function(){var e=z(Z);e&&l(e)}),[]),Object(n.useEffect)((function(){r(c),c.length?M(c,Z):M(v,Z)}),[c]),Object(w.jsxs)(x,{children:[Object(w.jsx)(E,{mainNotes:a}),Object(w.jsx)(X,{handleItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,a=arguments.length>2?arguments[2]:void 0,n=a(e,t);l(n)},handleShare:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,a=V(e,t);d(F(a))},handleSaveNote:function(e,t){var a=G(e,c,t);l(a);var n=G(e,u,t);d(_(n))},handleDelete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,a=arguments.length>2?arguments[2]:void 0,n=R(e,t);l(n);var r=K(a,u);d(_(r))},chooseNote:W,sliceDescription:H,callToEditNote:q,noteList:c})]})},ae=a(474),ne=a(459),re=Object(m.a)(ae.a,d.a)({minHeight:"0px !important",maxHeight:"fit-content !important",position:"relative !important",background:"".concat(d.a.palette.primary.dark," !important"),margin:"5px 0px"}),ie=Object(m.a)(ne.a,d.a)({display:"flex",margin:"5px 0px",justifyContent:"center !important",flexWrap:"wrap",gap:"1rem",padding:"0"}),oe=a(240),se=a.n(oe),ce=a(174),le=Object(m.a)(ce.a,d.a)({maxWidth:"140px",justifyContent:"center",display:"flex",minHeight:"0px !important","& *":{height:"fitContent",alignSelf:"center",justifySekf:"center",fontWeight:"400"}}),de=Object(m.a)(ce.a,d.a)({display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"5px","& h6":{margin:"5px 20px"},"& *":{transition:".5s"}}),he=Object(m.a)(j.b,d.a)({textDecoration:"none",color:d.a.palette.secondary.dark,display:"flex",flexDirection:"column",justifyContent:"center","&:hover":{background:d.a.palette.primary.light,borderRadius:"20px",transition:".5s"}}),ue=Object(m.a)(ce.a,d.a)({minWidth:"fit-content",textDecoration:"none",color:d.a.palette.secondary.dark,display:"flex",flexDirection:"column",justifyContent:"center",background:d.a.palette.primary.dark,"& p":{textAlign:"center",margin:"3px 5px"},"& a":{background:"none",borderBottom:"1px solid ".concat(d.a.palette.secondary.main),transition:".3s"},"& a:hover":{borderBottom:"1px solid ".concat(d.a.palette.primary.light),transition:".3s"}}),je=Object(m.a)(ce.a,d.a)({display:"flex",justifyContent:"center",flexDirection:"column","& p":{margin:"5px 15px"},"& a":{background:"none",borderBottom:"1px solid ".concat(d.a.palette.secondary.main),transition:".3s"},"& a:hover":{borderBottom:"1px solid ".concat(d.a.palette.primary.light),transition:".3s"}}),be=function(){return Object(w.jsxs)(le,{children:[Object(w.jsx)(se.a,{}),Object(w.jsx)(y.a,{variant:"h6",children:"Waha Notes"})]})},me=function(e){return e.signAPI.userData},pe=function(e){return e.signAPI.isSignUp},fe=function(e){return e.signAPI.isSignIn},xe=function(e){return e.signAPI.isSignUpError},Oe=function(e){return e.signAPI.isSignInError},ge={notes:"/notes",notFound:"/not-found",sharedNotes:"/shared-notes",about:"/about",signUp:"/signUp",signIn:"/signIn"},ve={userData:"",isSignUp:!1,isSignIn:!1,isSignOut:!0,isSignUpError:!1,isSignInError:!1},ye=Object(I.a)({name:"sign-reducer",initialState:ve,reducers:{SET_AUTH_USER_DATA:function(e,t){e.userData=t.payload},IS_SIGN_UP:function(e,t){e.isSignUp=t.payload},IS_SIGN_IN:function(e,t){e.isSignIn=t.payload},SET_SIGNUP_ERROR:function(e,t){e.isSignUpError=t.payload},SET_SIGNIN_ERROR:function(e,t){e.isSignInError=t.payload},GET_SIGN_OUT:function(e,t){e.isSignOut=t.payload}}}),Se=ye.reducer,we=ye.actions,Ne=we.SET_AUTH_USER_DATA,Ce=we.IS_SIGN_IN,Ae=we.IS_SIGN_UP,Ee=we.SET_SIGNUP_ERROR,Te=we.SET_SIGNIN_ERROR,Ie=we.GET_SIGN_OUT,De=ge.notes,ke=ge.sharedNotes,Pe=ge.about,Be=ge.signUp,Fe=ge.signIn,_e=function(){var e=Object(s.c)(fe);return Object(w.jsxs)(de,{children:[e&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(he,{to:De,"data-path":De,children:Object(w.jsx)(y.a,{variant:"h6",children:"Notes"})}),Object(w.jsx)(he,{to:ke,"data-path":ke,children:Object(w.jsx)(y.a,{variant:"h6",children:"Shared Notes"})})]}),Object(w.jsx)(he,{to:Pe,"data-path":Pe,children:Object(w.jsx)(y.a,{variant:"h6",children:"About"})}),!e&&Object(w.jsxs)(je,{children:[Object(w.jsx)(he,{to:Be,"data-path":Be,children:Object(w.jsx)(y.a,{variant:"body2",children:"Sign Up"})}),Object(w.jsx)(he,{to:Fe,"data-path":Fe,children:Object(w.jsx)(y.a,{variant:"body2",children:"Sign In"})})]})]})},Le=function(){var e=Object(s.c)(fe),t=Object(s.c)(me),a=Object(s.b)();return Object(w.jsx)(w.Fragment,{children:e&&t&&Object(w.jsxs)(ue,{children:[t.map((function(e){return Object(w.jsxs)(ce.a,{children:[Object(w.jsx)(y.a,{variant:"body2",children:"Hello,"}),Object(w.jsxs)(y.a,{variant:"body2",children:[e.firstName," ",e.lastName]})]})})),Object(w.jsx)(he,{to:Pe,"data-path":Pe,onClick:function(){a(Ne([])),a(Ce(!1)),a(Ae(!1)),a(Ie(!0)),M([],$),M(!e,ee)},children:Object(w.jsx)(y.a,{variant:"body2",children:"Sign Out"})})]})})},Ue=function(){return Object(w.jsx)(re,{children:Object(w.jsxs)(ie,{children:[Object(w.jsx)(be,{}),Object(w.jsx)(_e,{}),Object(w.jsx)(Le,{})]})})},We=a(192),qe=Object(Q.a)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,489))}),{fallback:Object(w.jsx)(We.b,{})}),Ge=function(e){return Object(w.jsx)(qe,Object(U.a)({},e))},He=a(162),Re=Object(Q.a)((function(){return a.e(4).then(a.bind(null,490))}),{fallback:Object(w.jsx)(He.a,{})}),Me=function(e){return Object(w.jsx)(Re,Object(U.a)({},e))},ze=a(193),Ve=Object(Q.a)((function(){return a.e(7).then(a.bind(null,491))}),{fallback:Object(w.jsx)(ze.b,{})}),Ke=function(e){return Object(w.jsx)(Ve,Object(U.a)({},e))},Qe=a(141),Je=a(472),Ye=a(463),Xe=a(467),Ze=a(471),$e=a(83),et=a.n($e),tt=a(478),at=a(479),nt=a(473),rt=a(481),it=Object(m.a)(rt.a,d.a)({maxWidth:"420px",margin:"0 auto",paddingBottom:"15px"}),ot=Object(m.a)(at.a,d.a)({display:"flex",flexDirection:"column",alignItems:"center"}),st=Object(m.a)(at.a,d.a)({background:d.a.palette.primary.light,width:"100%",marginBottom:"15px"}),ct=Object(m.a)(Ze.a,d.a)({width:"100%"}),lt=(Object(m.a)(nt.a,d.a)({backgroundColor:d.a.palette.secondary.main,width:"50%",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"5px",color:d.a.palette.primary.light,fontWeight:"400",transition:"all 200ms ease",cursor:"pointer",boxShadow:"0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)",border:"none",marginTop:"15px",margin:"0 auto","&:hover":{backgroundColor:d.a.palette.secondary.light}}),a(44)),dt=a(460),ht=a(464),ut=new Date,jt=lt.b({email:Object(lt.d)("Enter your email").email("Enter a valid email").required("Email is required"),firstName:Object(lt.d)("Enter First Name").min(2,"Must be longer than 2 characters").max(20,"Enter shorter Frist Name").required("First Name is required"),lastName:Object(lt.d)("Enter Last Name").min(2,"Must be longer than 2 characters").max(20,"Enter a valid Last Name").required("Last Name is required"),birthday:Object(lt.a)("Enter Date of Birth").transform((function(e,t){return Object(dt.a)(t)?t:Object(ht.a)(t,"yyyy.mm.dd",new Date)})).max(ut).required("Date of Birth is required"),password:Object(lt.d)("").min(4,"Password must contain at least 4 characters").required("Enter your password"),confirmPassword:Object(lt.d)("Enter your password").required("Confirm your password").oneOf([lt.c("password")],"Password does not match")}),bt=lt.b({email:Object(lt.d)("Enter your email").email("Enter a valid email").required("Email is required"),password:Object(lt.d)("").min(4,"Password must contain at least 4 characters").required("Enter your password")}),mt=a(171),pt=a.n(mt),ft=a(53),xt=(ft.a.getError,ft.a.postError);var Ot="http://localhost:3001/users",gt={email:"",firstName:"",lastName:"",birthday:"",password:"",confirmPassword:""},vt={email:"",password:""},yt=a(54),St=ge.signIn,wt=ge.notes;function Nt(e){var t=e.formik,a=e.hasAlready,n=e.isFetching,r=e.isLoading,i=(e.querryData,e.setFetch,Object(s.c)(xe)),o=t.values,c=o.email,l=o.firstName,h=o.lastName,u=o.birthday,j=(o.password,o.confirmPassword,t.errors),b=t.touched,m=t.handleChange,p=t.isValid,f=t.setFieldTouched,x=t.handleBlur,O=t.handleSubmit,g=function(e,t){m(t),f(e,!0,!1)};return Object(w.jsx)(it,{component:"main",children:r||n?Object(w.jsx)(yt.a,{}):Object(w.jsxs)(ot,{children:[i?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Je.a,{sx:{m:1,bgcolor:"red"},children:Object(w.jsx)(et.a,{})}),Object(w.jsx)(tt.a,{component:"h5",variant:"h5",children:a})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Je.a,{sx:{m:1,bgcolor:d.a.palette.primary.dark},children:Object(w.jsx)(et.a,{})}),Object(w.jsx)(tt.a,{component:"h5",variant:"h5",children:"Sign Up"})]}),Object(w.jsx)(st,{component:"form",noValidate:!0,sx:{mt:3},onSubmit:O,children:Object(w.jsxs)(ct,{container:!0,spacing:2,children:[Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Ye.a,{value:c,id:"email",name:"email",required:!0,variant:"filled",autoFocus:!0,fullWidth:!0,label:"Email Address",autoComplete:"email",error:b.email&&Boolean(j.email),helperText:b.email?j.email:"",onChange:g.bind(null,"email"),onBlur:x})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(Ye.a,{value:l,id:"firstName",name:"firstName",required:!0,fullWidth:!0,label:"First Name",autoComplete:"given-name",error:b.firstName&&Boolean(j.firstName),helperText:b.firstName?j.firstName:"",onChange:g.bind(null,"firstName"),onBlur:x})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(Ye.a,{value:h,id:"lastName",name:"lastName",required:!0,fullWidth:!0,label:"Last Name",autoComplete:"given-name",error:b.lastName&&Boolean(j.lastName),helperText:b.lastName?j.lastName:"",onChange:g.bind(null,"lastName"),onBlur:x})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Ye.a,{value:u,id:"birthday",name:"birthday",required:!0,fullWidth:!0,label:"Date of Birth (yyyy.mm.dd)",error:b.birthday&&Boolean(j.birthday),helperText:b.birthday&&u.length>6?j.birthday:"",onChange:g.bind(null,"birthday"),onBlur:x})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Ye.a,{id:"password",name:"password",required:!0,fullWidth:!0,label:"Password",type:"password",autoComplete:"new-password",error:b.password&&Boolean(j.password),helperText:b.password?j.password:"",onChange:g.bind(null,"password"),onBlur:x})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Ye.a,{id:"confirmPassword",name:"confirmPassword",required:!0,fullWidth:!0,label:"Confirm Password",type:"password",error:b.confirmPassword&&Boolean(j.confirmPassword),helperText:b.confirmPassword?j.confirmPassword:"",onChange:g.bind(null,"confirmPassword"),onBlur:x})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Xe.a,{disabled:!p,type:"submit",fullWidth:!0,color:"secondary",variant:"outlined",children:"Sign Up"})})]})})]})})}var Ct=function(){var e=Object(s.b)(),t=ft.a.hasAlready,a=Object(b.g)(),r=Object(n.useState)(!0),i=Object(h.a)(r,2),o=(i[0],i[1]),l=Object(c.useQuery)("GetUsers",(function(){return fetch(Ot).then((function(e){return e.json()}))})),d=l.isLoading,u=l.error,j=l.data,m=l.isFetching,f=Object(c.useMutation)((function(e){return t=Ot,a=e,pt.a.post(t,a).then((function(e){return e.data})).catch((function(e){return new Error(xt)}));var t,a}),{onSuccess:function(){a(St),e(Ae(!0))}}).mutateAsync,x=Object(Qe.a)({initialValues:gt,validationSchema:jt,onSubmit:function(t,a){var n=j.filter((function(e){return e.email===t.email}));1===n.length&&e(Ee(!0)),n.length<1&&(e(Ee(!1)),f(t),a.resetForm())}});return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(p.a,{children:Object(w.jsx)(Nt,{formik:x,hasAlready:t,setFetch:o,error:u,isLoading:d,isFetching:m,querryData:j})})})},At={authAfterSignUp:"Ok, are You sign Up!Let's auth",welcomeSignIn:"Hello, Let's auth"};function Et(e){var t=e.formik,a=(e.hasAlready,e.isFetching),n=e.isLoading,r=(e.querryData,e.setFetch,Object(s.c)(Oe)),i=Object(s.c)(pe),o=t.values,c=o.email,l=(o.firstName,o.lastName,o.birthday,o.password,o.confirmPassword,t.errors),h=t.touched,u=t.handleChange,j=t.isValid,b=t.setFieldTouched,m=t.handleBlur,p=t.handleSubmit,f=ft.a.userNoExist,x=At.authAfterSignUp,O=At.welcomeSignIn,g=function(e,t){u(t),b(e,!0,!1)};return Object(w.jsx)(it,{component:"main",children:n||a?Object(w.jsx)(yt.a,{}):Object(w.jsxs)(ot,{children:[r&&!i&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Je.a,{sx:{m:1,bgcolor:"red"},children:Object(w.jsx)(et.a,{})}),Object(w.jsx)(tt.a,{component:"h5",variant:"h5",children:f})]}),!r&&!i&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Je.a,{sx:{m:1,bgcolor:d.a.palette.primary.dark},children:Object(w.jsx)(et.a,{})}),Object(w.jsx)(tt.a,{component:"h5",variant:"h5",children:O})]}),!r&&i&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Je.a,{sx:{m:1,bgcolor:"yellow"},children:Object(w.jsx)(et.a,{})}),Object(w.jsx)(tt.a,{component:"h5",variant:"h5",children:x})]}),Object(w.jsx)(st,{component:"form",noValidate:!0,sx:{mt:3},onSubmit:p,children:Object(w.jsxs)(ct,{container:!0,spacing:2,children:[Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Ye.a,{value:c,id:"email",name:"email",required:!0,variant:"filled",autoFocus:!0,fullWidth:!0,label:"Email Address",autoComplete:"email",error:h.email&&Boolean(l.email),helperText:h.email?l.email:"",onChange:g.bind(null,"email"),onBlur:m})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Ye.a,{id:"password",name:"password",required:!0,fullWidth:!0,label:"Password",type:"password",autoComplete:"new-password",error:h.password&&Boolean(l.password),helperText:h.password?l.password:"",onChange:g.bind(null,"password"),onBlur:m})}),Object(w.jsx)(Ze.a,{item:!0,xs:12,children:Object(w.jsx)(Xe.a,{disabled:!j,type:"submit",fullWidth:!0,color:"secondary",variant:"outlined",children:"Sign In"})})]})})]})})}var Tt=function(){var e=Object(s.b)(),t=Object(b.g)(),a=Object(c.useQuery)("GetUsersForAuth",(function(){return fetch(Ot).then((function(e){return e.json()}))})),n=a.isLoading,r=a.error,i=a.data,o=a.isFetching,l=Object(Qe.a)({initialValues:vt,validationSchema:bt,onSubmit:function(a){var n=i.filter((function(e){return e.email===a.email&&e.password===a.password}));n.length<1&&(e(Te(!0)),e(Ce(!1)),e(Ne([]))),1===n.length&&(e(Te(!1)),e(Ce(!0)),e(Ne(n)),M(n,$),M(!0,ee),t(wt))}});return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(p.a,{children:Object(w.jsx)(Et,{formik:l,error:r,isLoading:n,isFetching:o,querryData:i})})})},It=function(e,t){var a=z($),n=z(ee);e(a),t(n)};var Dt=function(e){var t=e.children,a=Object(s.c)(fe),n=ge.notes,r=z(ee);return a||r?Object(w.jsx)(b.a,{to:n}):t};var kt=function(e){var t=e.children,a=Object(s.c)(fe),n=ge.signIn,r=z(ee);return a||r?t:Object(w.jsx)(b.a,{to:n})};var Pt=function(){var e=ge.notes,t=ge.notFound,a=ge.sharedNotes,r=ge.about,i=ge.signUp,o=ge.signIn,c=Object(s.b)(),l=Object(n.useState)([]),d=Object(h.a)(l,2),m=d[0],p=d[1],x=Object(n.useState)(""),O=Object(h.a)(x,2),g=O[0],v=O[1];return Object(n.useEffect)((function(){It(p,v)}),[]),Object(n.useEffect)((function(){c(Ne(m)),c(Ce(g))}),[g,m]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(j.a,{children:Object(w.jsxs)(f,{children:[Object(w.jsx)(Ue,{}),Object(w.jsxs)(b.d,{children:[Object(w.jsx)(b.b,{path:"*",element:Object(w.jsx)(b.a,{replace:!0,to:t})}),Object(w.jsx)(b.b,{path:t,element:Object(w.jsx)(Ke,{})}),Object(w.jsx)(b.b,{path:r,element:Object(w.jsx)(Me,{})}),Object(w.jsx)(b.b,{exact:!0,path:i,element:Object(w.jsx)(Dt,{children:Object(w.jsx)(Ct,{})})}),Object(w.jsx)(b.b,{exact:!0,path:o,element:Object(w.jsx)(Dt,{children:Object(w.jsx)(Tt,{})})}),Object(w.jsx)(b.b,{exact:!0,path:e,element:Object(w.jsx)(kt,{children:Object(w.jsx)(te,{})})}),Object(w.jsx)(b.b,{exact:!0,path:a,element:Object(w.jsx)(kt,{children:Object(w.jsx)(Ge,{})})})]})]})})]})},Bt=a(42),Ft=Object(Bt.b)({notesShare:P,signAPI:Se}),_t={notesShare:D,signAPI:ve},Lt=Bt.c.apply(void 0,[Bt.a.apply(void 0,[])].concat([])),Ut=Object(Bt.d)(Ft,_t,Lt),Wt=document.getElementById("root"),qt=new c.QueryClient;i.a.render(Object(w.jsxs)(c.QueryClientProvider,{client:qt,children:[Object(w.jsx)(s.a,{store:Ut,children:Object(w.jsx)(o.a,{theme:d.a,children:Object(w.jsx)(Pt,{})})}),Object(w.jsx)(l.ReactQueryDevtools,{initialIsOpen:!1})]}),Wt)},53:function(e,t,a){"use strict";t.a={visit404:"Something went wrong - 404",noNotes:"There are no shared Notes",noAddedNotes:"There are no new Notes",hasAlready:"This Email is already use",getError:"The request failed",postError:"The post failed",userNoExist:"User does not exist"}},54:function(e,t,a){"use strict";a(0);var n=a(174),r=a(404),i=(a(282),a(1));t.a=function(){return Object(i.jsxs)(n.a,{className:"center",children:[Object(i.jsx)(r.a,{variant:"h6",children:"Loading..."}),Object(i.jsx)(n.a,{className:"loader"}),Object(i.jsx)(n.a,{})]})}}},[[400,2,3]]]);
//# sourceMappingURL=main.5b71e05f.chunk.js.map