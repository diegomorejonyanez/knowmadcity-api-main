(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228bf7"],{db03:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{title:e.title,items:e.items}}),r("div",{staticClass:"clearfix mb-3"},[r("b-button",{staticClass:"float-right btn-info",attrs:{left:""},on:{click:function(t){e.$bvModal.show("modal"),e.editMode=!1,e.ver=!1,e.resete(),e.url_perfil=null}}},[e._v("Crear Colaborador")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"}),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Show "),r("b-form-select",{attrs:{size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}}),e._v(" entries ")],1)])]),r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Search: "),r("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])])]),r("div",{staticClass:"table-responsive mb-0"},[r("b-table",{attrs:{items:e.perfil,fields:e.fields,responsive:"sm","per-page":e.perPage,"current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,"filter-included-fields":e.filterOn},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(cargo)",fn:function(t){return[e._v(" "+e._s(t.item.user.cargo.nombre)+" ")]}},{key:"cell(actions)",fn:function(t){return[r("b-dropdown",{attrs:{size:"sm"},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Action "),r("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[r("b-dropdown-item-button",{on:{click:function(r){e.editMode=!0,e.ver=!1,e.setear(t.item.id)}}},[e._v(" Editar ")]),r("b-dropdown-item-button",{on:{click:function(r){return e.eliminarperfil(t.item.id,t.item.user_id)}}},[e._v(" Eliminar ")]),r("b-dropdown-item-button",{on:{click:function(r){e.editMode=!1,e.ver=!0,e.setear(t.item.id)}}},[e._v(" Ver ")])],1)]}}])})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[r("ul",{staticClass:"pagination pagination-rounded mb-0"},[r("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])])])]),r("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Gestion de Colaboradores de proceso","hide-footer":""}},[r("ValidationObserver",{ref:"form"},[r("b-row",{staticClass:"justify-content-center mb-3"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"row justify-content-center mb-3",attrs:{id:"preview mb-2"}},[r("img",{staticStyle:{float:"center!importan","border-radius":"100%"},attrs:{width:"200px",height:"200px",src:e.url_perfil}})]),r("b-form-file",{attrs:{placeholder:"Seleccione su foto...","drop-placeholder":"Drop file here..."},on:{change:e.onFileChangePerfil},model:{value:e.foto,callback:function(t){e.foto=t},expression:"foto"}})],1)]),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Nombre y Apellido "+e._s(e.form.nombre_apellido))]),r("ValidationProvider",{attrs:{name:"nombre y apellido",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nombre,expression:"form.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.nombre},on:{input:function(t){t.target.composing||e.$set(e.form,"nombre",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Numero de cedula")]),r("ValidationProvider",{attrs:{name:"numero de cedula",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.cedula,expression:"form.cedula"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.cedula},on:{input:function(t){t.target.composing||e.$set(e.form,"cedula",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Telefono")]),r("ValidationProvider",{attrs:{name:"telefono",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.telefono,expression:"form.telefono"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.telefono},on:{input:function(t){t.target.composing||e.$set(e.form,"telefono",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Celular personal")]),r("ValidationProvider",{attrs:{name:"celular",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.celular_personal,expression:"form.celular_personal"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.celular_personal},on:{input:function(t){t.target.composing||e.$set(e.form,"celular_personal",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Celular corporativo")]),r("ValidationProvider",{attrs:{name:"celular",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.celular_corporativo,expression:"form.celular_corporativo"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.celular_corporativo},on:{input:function(t){t.target.composing||e.$set(e.form,"celular_corporativo",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Correo electronico")]),r("ValidationProvider",{attrs:{name:"correo",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:" ",disabled:e.ver},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Estado")]),r("ValidationProvider",{attrs:{name:"estado",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],staticClass:"form-control ",attrs:{name:"entidad_id",disabled:e.ver},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"status",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"activo"}},[e._v("Activo")]),r("option",{attrs:{value:"inactivo"}},[e._v("Inactivo")])]),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)]),e.editMode||e.ver?e._e():r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Contraseña")]),r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}],null,!1,79420064)})],1)]),e.editMode?r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Contraseña")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})])]):e._e()],1)],1),e.ver||e.editMode?e._e():r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Guardar")]),!e.ver&&e.editMode?r("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Editar")]):e._e()],1)],1)},a=[],i=r("1da1"),s=r("5530"),l=r("ade3"),n=(r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("92c3")),c=r.n(n),d=r("2f62"),u=r("7bb1"),f=r("5658"),m=r("2579"),p={components:{vueDropzone:c.a,Layout:f["a"],PageHeader:m["a"],ValidationProvider:u["b"],ValidationObserver:u["a"]},data:function(){var e;return e={title:"Administracion",items:[{text:"Gestión usuarios"},{text:"Colaboradores",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_perfil:"",modal:!0,foto:null,perfil:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["nombre","cedula","cargo","telefono","actions"]},Object(l["a"])(e,"perfil",[]),Object(l["a"])(e,"editMode",!1),Object(l["a"])(e,"form",{id:"",nombre:"",cedula:"",telefono:"",celular_personal:"",celular_corporativo:"",email:"",nombre_usuario:"",status:""}),e},methods:Object(s["a"])(Object(s["a"])({onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}},Object(d["b"])(["guardarUsuario"])),{},{switchLoc:function(){var e=this;this.editMode?this.$refs.form.validate().then((function(t){t&&e.editarperfil()})):this.$refs.form.validate().then((function(t){t&&e.agregarperfil()}))},agregarperfil:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a in r=new FormData,o=e.form,o)r.append(a,o[a]);return e.foto&&r.append("filename",e.foto),t.next=6,e.axios.post("api/perfil",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status)for(var r in e.$swal("Agregado exito!","","success"),e.listarperfil(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),o)e.form[r]=""})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 6:case"end":return t.stop()}}),t)})))()},editarperfil:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a in r=new FormData,o=e.form,o)r.append(a,o[a]);return e.foto&&r.append("filename",e.foto),t.next=6,e.axios.put("api/perfil",r).then((function(t){if(200==t.status)for(var r in e.$swal("Editado con exito","","success"),e.listarperfil(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),o)e.form[r]=""})).catch((function(t){e.$swal("ocurrio un problema","","warning")}));case 6:case"end":return t.stop()}}),t)})))()},eliminarperfils:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=new FormData,a.append("id",e),a.append("user_id",t),o.next=5,r.axios.post("api/perfil/delete",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(r.$swal("Eliminado con exito!","","success"),r.listarperfil())})).catch((function(e){console.log(e.response.data.menssage),r.$swal(e.response.data)}));case 5:case"end":return o.stop()}}),o)})))()},eliminarperfil:function(e,t){var r=this;this.$swal({title:"Desea borrar este lider?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(o){o.isConfirmed&&r.eliminarperfils(e,t)}))},resete:function(){var e=this.form;for(var t in e)this.form[t]="";this.form.cliente_id=this.cliente.id,this.form.tipo="Colaborador"},setear:function(e){for(var t=0;t<this.perfil.length;t++)if(this.perfil[t].id===e)return this.form.id=this.perfil[t].id,this.form.nombre=this.perfil[t].nombre,this.form.cedula=this.perfil[t].cedula,this.form.telefono=this.perfil[t].telefono,this.form.celular_personal=this.perfil[t].celular_personal,this.form.celular_corporativo=this.perfil[t].celular_corporativo,this.form.email=this.perfil[t].email,this.form.nombre_usuario=this.perfil[t].nombre_usuario,this.form.status=this.perfil[t].user.status,this.form.user_id=this.perfil[t].user_id,this.url_perfil=this.perfil[t].user.imagen,console.log(this.url_perfil),void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarperfil:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new FormData,r.append("cliente_id",e.cliente.id),r.append("tipo","Colaborador"),t.next=5,e.axios.post("api/perfil/listar",r).then((function(t){e.perfil=t.data.rows})).catch((function(e){console.log("error"+e)}));case 5:case"end":return t.stop()}}),t)})))()},setEmail:function(){this.form.username=this.form.email,console.log("holas")},onFileChange:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)},onFileChangePerfil:function(e){var t=e.target.files[0];this.url_perfil=URL.createObjectURL(t)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})}}),watch:{cliente:function(){this.listarperfil(),this.title=this.cliente.nombre_prestador}},created:function(){this.form.cliente_id=this.cliente.id,this.form.tipo="Colaborador",this.listarperfil(),this.session()},computed:Object(s["a"])(Object(s["a"])({},Object(d["d"])(["usuarioDB","cliente"])),{},{rows:function(){return this.perfil.length}})},v=p,b=r("2877"),h=Object(b["a"])(v,o,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d228bf7.af9862a9.js.map