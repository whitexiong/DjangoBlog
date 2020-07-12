/**
 * 用于markdown的解析
 */

var testEditormdView        //文章解析
var testCommentMarkdown //评论解析
var windowsWidth = 0
var userAgentInfo = navigator.userAgent;  
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
var agentinfo = null;  
  
 for (var i = 0; i < Agents.length; i++) {  
       if (userAgentInfo.indexOf(Agents[i]) > 0) { agentinfo = userAgentInfo; break; }  
   }  
   if(agentinfo){
         windowsWidth = $(window).width()
        $('.hentry').width(windowsWidth) //跳转markdown的宽度
   }else{


        windowsWidth = $(window).width() * (61/100);
        $('.hentry').width(windowsWidth) //跳转markdown的宽度
   } 


testEditormdView = editormd.markdownToHTML("test-editormd-view", {
                    htmlDecode      : "style,script,iframe",  // you can filter tags decode
                    emoji           : true,
                    taskList        : true,
                    tex             : true,  // 默认不解析
                    flowChart       : true,  // 默认不解析
                    sequenceDiagram : true,  // 默认不解析
                });


testCommentMarkdown = editormd.markdownToHTML("testCommentMarkdown", {
                    htmlDecode      : "style,script,iframe",  // you can filter tags decode
                    emoji           : true,
                    taskList        : true,
                    tex             : true,  // 默认不解析
                    flowChart       : true,  // 默认不解析
                    sequenceDiagram : true,  // 默认不解析
                });



