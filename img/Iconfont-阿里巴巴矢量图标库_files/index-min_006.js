KISSY.add("components/custom_helper/index",function(a,b,c,d,e,f,g,h){var i={},j=[],k=a.all;f.get("_i_f_d_n")&&(j=h.parse(f.get("_i_f_d_n")));var l=function(){l.superclass.constructor.apply(this,arguments)};return a.extend(l,d,{}),i.ApiVersion="v2",i.showDialog=function(b){var d={width:500,duration:.25,zIndex:9999,easing:"easeOut",closable:!0,mask:{effect:"fade"},align:{node:!1,points:["cc","cc"],offset:[0,0]},elStyle:{position:6==a.UA.ie?"absolute":"fixed"}},e=a.merge(d,b);return 8==a.UA.ie&&i.dialog&&i.dialog.destroy(),i.dialog=new c(e),i.dialog.on("show",function(){i.dialog.center(),a.one("body").css("overflow","hidden")}),i.dialog.on("hide",function(){8==a.UA.ie||i.dialog.destroy(),a.one("body").css("overflow","auto")}),e.closable&&k(document).on("keydown",i.hideDialogHandle),i.dialog.show(),i.dialog},i.hideDialogHandle=function(a){27===a.keyCode&&i.hideDialog()},i.checkCarEmpty=function(){return 0==j.length?(k("#J_user_car").addClass("car_empty"),!0):(k("#J_user_car").removeClass("car_empty"),!1)},i.info=function(a){i.dialog&&i.hideDialog();var b='<div id="J_dialog_alert"><h2 class="h2" style="margin:0">提示</h2>'+a+'<div style="margin-top:15px"></div></div>';i.showDialog({tmpl:b,width:300,elCls:"alert-dialog"})},i.alert=function(a,b){i.dialog&&i.hideDialog();var c='<div id="J_dialog_alert"><h2 class="h2" style="margin:0">提示</h2>'+a+'<div style="margin-top:15px"><a class="btn btn-orange btn-medium">确定</a></div></div>';i.showDialog({tmpl:c,width:300,elCls:"alert-dialog"}),k("#J_dialog_alert .btn").on("click",function(){i.hideDialog(),b&&b.call(null)})},i.confirm=function(a,b){i.dialog&&i.hideDialog();var c='<div id="J_dialog_confirm"><h2 class="h2" style="margin:0">警告</h2>'+a+'<div style="margin-top:15px"><a id="btn_ok" class="btn btn-orange btn-medium mr-10">确定</a><a id="btn_reset" class="btn btn-medium">取消</a></div></div>';i.showDialog({tmpl:c,width:300,elCls:"alert-dialog"}),k("#J_dialog_confirm #btn_ok").on("click",function(){i.hideDialog(),b&&b.call(null)}),k("#J_dialog_confirm #btn_reset").on("click",function(){i.hideDialog()})},i.showBrixDialog=function(b,c){b.tmpl='<div id="J_dialog_content"></div>';var d={data:{},container:"#J_dialog_content"},e=a.merge(d,c);i.showDialog(b);var f=new l(e);return i.dialog.getContentBrix=function(){return f},i.dialog},i.showDownloadDialog=function(a){return i.dialog=i.showDialog({width:593,height:580,elCls:"med-dialog",tmpl:'<div class="download_dialog" bx-name="album_dialog_download" bx-path="components/album_dialog_download/"></div>',data:a}),i.dialog},i.showEditiconDialog=function(a){return i.dialog=i.showDialog({width:590,height:580,elCls:"med-dialog",tmpl:'<div class="edit_dialog" bx-name="album_dialog_edit" bx-path="components/album_dialog_edit/"></div>',data:a}),i.dialog},i.hideDialog=function(a){i.dialog&&(i.dialog.on("hide",function(){a&&a()}),i.dialog&&i.dialog.hide(),k(document).detach("keydown",i.hideDialogHandle))},i.addAnim=function(b,c){{var d=b.offset(),e=c.offset(),f=a.one('<div class="iconfont_'+b.attr("data-rid")+' anim_select">'+b.html()+"</div>"),g=k("#J_fonts_count").html();k("#J_user_car")}g=parseInt(g,10),f.css({position:"absolute",top:d.top-10,left:d.left+15,"z-index":"99","font-size":"96px",color:"#f40"}),a.one("body").append(f),f.animate({left:e.left,top:e.top,"font-size":"20px"},.7,"backOut",function(){f.remove()}),i.addShoppingCar(b)},i.addShoppingCar=function(b){var c=parseInt(b.attr("data-iconid"))||-1,d=parseInt(b.attr("data-pid"))||-1,e=c+"|"+d;if(!a.inArray(e,j)){var g=!1;a.each(j,function(a,b){new RegExp(c,"g").test(a)&&(j[b]=e,g=!0)}),!g&&j.push(e),f.set("_i_f_d_n",h.stringify(j),"","","/"),i.renderer(j),i.renderShopSelected()}},i.removeAnim=function(b,c){var d=c.offset(),e=b.attr("data-rid"),f=a.one('<div class="iconfont_'+e+' anim_select">'+b.html()+"</div>"),g=k("#J_fonts_count").html();g=parseInt(g,10),f.css({position:"absolute",top:d.top,left:d.left,"z-index":"99","font-size":"20px",color:"#f40"}),a.one("body").append(f),f.animate({left:d.left-30,top:d.top-50,"font-size":"96px",opacity:0},.7,"backOut",function(){f.remove()}),i.removeShoppingCar(b)},i.removeShoppingCar=function(b){var c=b.attr("data-iconid")||-1,d=b.attr("data-pid")||-1,e=c+"|"+d;if(a.inArray(e,j)){var g=a.indexOf(e,j);j.splice(g,1),f.set("_i_f_d_n",h.stringify(j),"","","/"),i.renderer(j),i.renderShopSelected()}},i.removeShoppingCarList=function(b){b.all(".delete").each(function(){var b=this.attr("data-iconid")||-1,c=this.attr("data-pid")||-1,d=b+"|"+c;if(a.inArray(d,j)){var e=a.indexOf(d,j);j.splice(e,1)}}),f.set("_i_f_d_n",h.stringify(j),"","","/"),i.renderer(j),i.renderShopSelected()},i.renderer=function(b){var c=[],d=0,e='<li class="J_car_font_{{id}}"><span class="iconfont src_iconfont"><svg version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="58" height="58" viewBox="0 0 58 58" enable-background="new 0 0 58.636 58.678" xml:space="preserve" data-tags="pic" style="margin-left:2px;margin-top:2px;"><path id="J_icon_svg" d="{{svg}}" transform="translate(16, 24) scale(1, -1) scale(0.025,0.025)"></path></svg><i class="iconfont delete" data-iconid="{{id}}" data-pid="{{project_id}}">&#356</i></span><p class="code">{{name}}</p></li>',f=function(b){a.each(b,function(a){d++,c.push(new g(e).render(a))}),k("#J_fonts_selected_list").html(c.join("")),k("#J_fonts_count").html(d)};if(i.checkCarEmpty())return k("#J_fonts_selected_list").html(""),void k("#J_fonts_count").html(0);var h={ids:b.join(",")};a.io({url:"/icons/getIcons",type:"post",data:h,dataType:"json",headers:{"X-CSRF-Token":k('meta[name="csrf-token"]').attr("content")},success:function(b){if(b.success){var c=[];for(var d in b.result)c.push(b.result[d].id+"|"+b.result[d].project_id);i.updateCart(c),f(b.result)}else a.log(b.message)},error:function(){a.log("请求购物车发生错误！")}})},i.renderer(j),i.renderShopSelected=function(){k(".icon.selected").removeClass("selected"),k(".shopcar").removeClass("selected"),a.each(j,function(a){var b=a.split("|")[0],c=a.split("|")[1],d=k(".font_"+b);d.length>0&&(d.all(".icon[data-iconid='"+b+"']").addClass("selected"),-1==c&&d.all(".shopcar").addClass("selected"))})},i.renderShopSelected(),i.downloadIconsZip=function(){var b=[];a.each(j,function(a){b.push(a)}),b.length>0&&window.open("/projects/download?ids="+b.join(","))},i.saveToCdn=function(){var b={val:j.join(","),name:a.one("#J_font_project_name").val(),font_project_id:a.one("#J_font_project_id").val()};return""===b.name.replace(/\s/gi,"")?void i.alert("储存名不能为空"):0===b.val.length?void i.alert("先选择icon"):(i.info("正在生成，请稍后。。。。"),void a.io({url:"/projects/",type:"post",data:b,dataType:"json",headers:{"X-CSRF-Token":k('meta[name="csrf-token"]').attr("content")},success:function(a){a.success?(f.set("_i_f_d_n","[]","","","/"),location.href="/showProject?pid="+a.pid):i.alert(a.message)},error:function(){i.alert("请求发生错误！")}}))},i.addLike=function(b,c){if(0!=k("#J_avatar").length){var d=k("#J_avatar").offset(),e=k(c.parent().siblings(".icon")[0]),f=e.attr("data-rid"),g=a.one('<div class="iconfont_'+f+' anim_select">'+e.html()+"</div>");g.css({position:"absolute",left:d.left-30,top:d.top-50,"font-size":"96px","z-index":"99",color:"#f40"}),a.one("body").append(g),g.animate({top:d.top,left:d.left,"font-size":"20px",opacity:0},.7,"backOut",function(){g.remove()}),a.io({url:"/icons/"+b+"/addLike",type:"get",async:!1,dataType:"json",success:function(a){if(a.isok){var c=k(".font_"+b);c.length>0&&c.all(".like").addClass("selected")}else i.alert(a.info)}})}},i.removeLike=function(b){a.io({url:"/icons/"+b+"/removeLike",type:"get",async:!1,dataType:"json",success:function(a){if(a.isok){var c=k(".font_"+b);c.length>0&&c.all(".like").removeClass("selected")}else i.alert(a.info)}})},i.updateCart=function(a){j=a,f.set("_i_f_d_n",h.stringify(j),"","","/")},i.animBtn=function(){k(".ibtn-move").each(function(a){if(e.ie){var b=a.attr("data-uid"),c=a.children("span").html(),d='<span class="ibtn-ie"><em class="iconfont">&#'+b+"</em>"+c+"</span>";0==a.all(".ibtn-ie").length&&a.html(d);var f=a.children(".ibtn-ie");a.on("mouseenter",function(){f.stop().animate({marginTop:"0"},.2,"easeOutStrong")}).on("mouseleave",function(){f.stop().animate({marginTop:"-36px"},.2,"easeOutStrong")})}else if(a.attr("data-cls")){var g="ibtn-new "+a.attr("data-cls");a.addClass(g)}})},i.animBtn(),i.ApiErrorFn=function(b,c,d){try{var e=h.parse(d.responseText)}catch(f){var e={msg:"请求错误，请重试！"}}i.hideDialog(function(){a.later(function(){i.alert(e.msg)},300)})},i.SvgTemplate='<div data-width="{{width * scale}}" data-height="{{size}}" class="svg-box" style="width: {{width * scale}}px; height: {{size}}px; margin: 0 auto;"><svg width="{{width * scale}}" height="{{height * scale}}" viewBox="0 0 {{width * scale}} {{height * scale}}"><g class="transform-group"><g transform="scale({{scale}}, {{scale}})"><path d="{{svg}}" fill="{{color}}"></path></g></g></svg></div>',i.renderSvg=function(b){var c=this,d={size:32,color:"#737383"};b=a.merge(d,b);var e=b.size,f=e/b.height;b.max_width&&(f=e/b.max_width<f?e/b.max_width:f);var h=b.prototype_svg.split("|").join(""),j={svg:h,width:b.width,height:b.height,scale:f,size:e,color:b.color,icon_ascent:i.icon_ascent};return new g(c.SvgTemplate).render(j)},i.icon_ascent=896,i},{requires:["brix/core/pagelet","brix/gallery/dialog/index","brix/core/brick","ua","cookie","xtemplate","json"]});