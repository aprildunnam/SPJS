(function () {  
    // Create an object that have the context information about the fields that we want to change the rendering of.   
    var nameFiledContext = {};  
    nameFiledContext.Templates = {};  
    nameFiledContext.Templates.Fields = {  
        // Apply the new hyperlink HTML Rendering to the field in your view.  Swap out "<Your Field Name>" for your field name 
        "<Your Field Name>": { "View": nameFiledTemplate }  
    };  
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(nameFiledContext);  
})();  
  
// This function applies the rendering logic 
function nameFiledTemplate(ctx) {  
    var name = ctx.CurrentItem.ID;  //Swap out name variable for whatever field contains your hyperlink name
            
    return "<a target='_blank' href='<Your Hyperlink Here>'>"   
        + name + "</a>";      //Put the url for your hyperlink in the href above
}  
