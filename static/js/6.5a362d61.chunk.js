(this.webpackJsonpmagicnotes=this.webpackJsonpmagicnotes||[]).push([[6],{235:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(185),r=a(141),o=a(190),c=a(80),d=a(90),l=a(79),s=a(194),p=a(229),h=a(6),j=Object(c.a)(i.a,h.a)({marginTop:"15px !important"}),x=Object(c.a)(s.a,h.a)({display:"flex",justifyContent:"center",alignItems:"center",minHeight:"fit-content",boxSizing:"border-box",borderRadius:"7px",background:h.a.palette.primary.light,outline:"2px solid ".concat(h.a.palette.primary.dark),boxShadow:"0px 0px 10px 6px ".concat(h.a.palette.primary.dark)}),b=Object(c.a)(s.a,h.a)({display:"flex",justifyContent:"center",alignItems:"center",minHeight:"fit-content",boxSizing:"border-box",borderRadius:"7px",background:h.a.palette.primary.main,outline:"2px solid ".concat(h.a.palette.primary.main),boxShadow:"0px 0px 15px 3px ".concat(h.a.palette.primary.main)}),u=Object(c.a)(d.a,h.a)({display:"flex !important",flexDirection:"column",width:"100% !important",margin:"0",alignSelf:"center !important",maxHeight:"fit-content !importnat",overflow:"auto !important",boxShadow:"none !important",outline:"none !important",background:"".concat(h.a.palette.primary.main," !important")}),m=Object(c.a)(r.a,h.a)({display:"flex",justifyContent:"center",width:"100%",margin:"0",textAlign:"center",color:"".concat(h.a.palette.secondary.main," !important")}),O=Object(c.a)(r.a,h.a)({maxHeight:"auto",overflow:"hidden !important",display:"block !important",color:"".concat(h.a.palette.primary.dark," !important")}),g=Object(c.a)(p.a,h.a)({width:"100%",maxHeight:"fit-content",margin:0,marginTop:"5px",background:h.a.palette.primary.light,display:"flex"}),f=Object(c.a)(d.a,h.a)({display:"block",minHeight:"40px !important",justifyContent:"start",position:"static !important",margin:"0",width:"fit-content",boxShadow:"none !important",borderRadius:"0px !important",outline:"none !important",zIndex:"0",textAlign:"start",background:"none"}),v=Object(c.a)(l.a,h.a)({position:"relative",minHeight:"100vh"}),S=a(205),y=a.n(S),N=a(240),w=a(2),D=function(e){var t=e.id,a=e.handleItem,n=e.callToEditNote,i=e.noteList;return Object(w.jsx)(N.a,{"aria-label":"edit",onClick:function(){return a(t,i,n)},children:Object(w.jsx)(y.a,{})})},k=D;D.defaultProps={handleItem:"handleItem",callToEditNote:"callToEditNote",noteList:"noteList",id:"id"};var C=a(206),I=a.n(C),L=function(e){var t=e.id,a=e.noteList,n=e.handleShare;return Object(w.jsx)(N.a,{"aria-label":"edit",onClick:function(){return n(t,a)},children:Object(w.jsx)(I.a,{})})},T=L;L.defaultProps={noteList:"noteList",id:"id",handleShare:"handleShare"};var H=a(207),E=a.n(H),A=function(e){var t=e.id,a=e.handleSaveNote,n=e.updateDescription;return Object(w.jsx)(p.a,{direction:"row",spacing:.5,alignItems:"center",children:Object(w.jsx)(N.a,{id:t,"aria-label":"save",color:"primary",onClick:function(){return a(t,n)},children:Object(w.jsx)(E.a,{})})})};A.defaultProps={handleSaveNote:"handleSaveNote",updateDescription:"updateDescription",id:"id"};var P=A,z=a(208),R=a.n(z),B=function(e){var t=e.index,a=e.handleDelete,n=e.id,i=e.currentState;return Object(w.jsx)(p.a,{direction:"row",spacing:.5,alignItems:"center",children:Object(w.jsx)(N.a,{"aria-label":"delete",color:"primary",onClick:function(){return a(t,i,n)},children:Object(w.jsx)(R.a,{})})})};B.defaultProps={handleDelete:"handleDelete",index:"index",id:"id",currentState:"currentState"};var J=B,V=a(12),q=a(239),F=a(236),G=a(234),K=Object(c.a)(q.a,h.a)({height:"100%",display:"flex",width:"100%",justifyContent:"space-between !important",marginLeft:"-30px !important"}),M=Object(c.a)(q.a,h.a)({display:"block",maxHeight:"45px"}),Q=Object(c.a)(G.a,h.a)({width:"100%"}),U=function(e){var t=e.isChange,a=e.description,i=e.handleSaveNote,r=e.id,o=e.handleDelete,c=e.index,d=e.currentState,l=Object(n.useState)(a),s=Object(V.a)(l,2),p=s[0],h=s[1],j=function(e){e!==p&&e&&h(e)};return Object(w.jsx)(F.a,{in:t,children:t?Object(w.jsxs)(K,{children:[Object(w.jsx)(Q,{style:{width:"100%"},label:"Note Description",defaultValue:a,multiline:!0,rows:2,variant:"standard",onChange:function(e){return j(e.target.value)}}),Object(w.jsxs)(q.a,{children:[Object(w.jsx)(P,{updateDescription:p,handleSaveNote:i,id:r}),Object(w.jsx)(J,{handleDelete:o,index:c,id:r,currentState:d})]})]}):Object(w.jsxs)(M,{children:[Object(w.jsx)(Q,{label:"Note Description",defaultValue:a,multiline:!0,rows:2,variant:"standard",onChange:function(e){return j(e.target.value)}}),Object(w.jsxs)(q.a,{children:[Object(w.jsx)(P,{updateDescription:p,handleSaveNote:i,id:r}),Object(w.jsx)(J,{handleDelete:o,index:c,id:r,currentState:d})]})]})})},W=U;U.defaultProps={isChange:"isChange",handleSaveNote:"handleSaveNote",description:"description",id:"id",index:"index",handleDelete:"handleDelete",currentState:"currentState"};var X=a(56),Y=function(e){var t=e.handleItem,a=e.handleShare,n=e.handleSaveNote,c=e.handleDelete,d=e.chooseNote,l=e.sliceDescription,s=e.callToEditNote,p=e.noteList,h=X.a.noAddedNotes;return Object(w.jsx)(j,{container:!0,spacing:2,children:p.length?p.map((function(e,h){return Object(w.jsxs)(i.a,{item:!0,xs:12,sm:6,md:4,children:[e.isActive?Object(w.jsx)(x,{onClick:function(){return t(e.id,p,d)},sx:{width:"100%",padding:"0px",cursor:"pointer"},children:Object(w.jsxs)(u,{children:[Object(w.jsx)(o.a,{children:Object(w.jsx)(m,{variant:"h6",id:e.title,children:e.title})}),Object(w.jsx)(o.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(w.jsx)(O,{variant:"body2",children:l(e.description)})}),Object(w.jsx)(o.a,{children:Object(w.jsx)(r.a,{variant:"subtitle2",style:{color:"primary.main !important"},children:e.date})})]},"".concat(e.id,"listbox"))},"".concat(e.id,"gridlist")):Object(w.jsx)(b,{onClick:function(){return t(e.id,p,d)},sx:{width:"100%",padding:"0px",cursor:"pointer"},children:Object(w.jsxs)(u,{children:[Object(w.jsx)(o.a,{children:Object(w.jsx)(m,{variant:"h6",id:e.title,children:e.title})}),Object(w.jsx)(o.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(w.jsx)(O,{variant:"body2",children:l(e.description)})}),Object(w.jsx)(o.a,{children:Object(w.jsx)(r.a,{variant:"subtitle2",children:e.date})})]},"".concat(e.id,"listboxNoActive"))},"".concat(e.id,"gridlistNoActive")),Object(w.jsxs)(g,{direction:"row",spacing:-3,alignItems:"flex-start",justifyContent:"flex-start",children:[Object(w.jsxs)(f,{children:[Object(w.jsx)(k,{handleItem:t,callToEditNote:s,noteList:p,id:e.id}),Object(w.jsx)(T,{handleShare:a,noteList:p,id:e.id})]},"".concat(e.id,"edit")),Object(w.jsx)(W,{handleSaveNote:n,handleDelete:c,isChange:e.isChange,description:e.description,id:e.id,index:h,currentState:p},"".concat(e.id,"input"))]},"".concat(e.id,"buttonStack"))]})})):Object(w.jsx)(v,{children:Object(w.jsx)(r.a,{component:"h5",variant:"h5",align:"center",children:h})})})};Y.defaultProps={noteList:"noteList",callToEditNote:"callToEditNote",sliceDescription:"sliceDescription",chooseNote:"chooseNote",handleItem:"handleItem",handleShare:"handleShare",handleSaveNote:"handleSaveNote",handleDelete:"handleDelete"};t.default=Y}}]);
//# sourceMappingURL=6.5a362d61.chunk.js.map