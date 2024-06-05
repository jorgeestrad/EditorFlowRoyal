/* eslint-disable react/prop-types */
import { Component } from 'react';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-richedit/dist/dx.richedit.css';
import { create, createOptions, ViewType, RichEditUnit, DocumentFormat, RibbonTab, RibbonButtonItem } from 'devexpress-richedit';

class EditorR extends Component {
   
  constructor(props){
    super(props);
    this.state = {
    };
  }

    rich = null;
      
    componentDidMount() {
     
     if (this.rich) return;
       
     // the createOptions() method creates an object that contains RichEdit options initialized with default values
     const options = createOptions();
         
     console.log(options);  
    
     var documentAsBase64 = this.props.templateData.xmlBase64;

     var ribbonTabHome = options.ribbon.getTab(0);
     var ribbomItem = ribbonTabHome.getItem(412);
     ribbomItem.text = 'Nuevo';
      
     var newTab = new RibbonTab();
     newTab.id = "myNewtTab";
     newTab.title = "Opciones";
       
     options.ribbon.insertTab(newTab, 0);
     
     var itemButtonNew = new RibbonButtonItem("insertText", "Insertar texto/QR",
                          { icon: "email", showText: true, beginGroup: true });
      
    
    newTab.items = [itemButtonNew];
    
    options.bookmarks.visibility = true;
    options.bookmarks.color = '#ff0000';
    
    options.confirmOnLosingChanges.enabled = true;
    options.confirmOnLosingChanges.message = 'Are you sure you want to perform the action? All unsaved document data will be lost.';
    
    options.fields.updateFieldsBeforePrint = true;
    options.fields.updateFieldsOnPaste = true;
    
    options.mailMerge.activeRecord = 0;
    options.mailMerge.viewMergedData = true;
    options.mailMerge.dataSource = [
          { Name: 'Indy', age: 32 },
          { Name: 'Andy', age: 28 },
    ];
    
    // events
    options.events.activeSubDocumentChanged = () => { };
    options.events.autoCorrect = () => { };
    options.events.calculateDocumentVariable = () => { };
    options.events.characterPropertiesChanged = () => { };
    options.events.contentInserted = () => { };
    options.events.contentRemoved = () => { };
    options.events.documentChanged = () => { };
    options.events.documentFormatted = () => { };
    options.events.documentLoaded = () => {
    if (this.props.templateData.isTemplate)
    {
      if (!this.props.templateData.isNew)
        {
          documentAsBase64 = ""
        }
    }
    else{
      documentAsBase64 = ""
    }
      

    };
    options.events.gotFocus = () => { };
    options.events.hyperlinkClick = () => { };
    options.events.keyDown = () => { };
    options.events.keyUp = () => { };
    options.events.paragraphPropertiesChanged = () => { };
    options.events.lostFocus = () => { };
    options.events.pointerDown = () => { };
    options.events.pointerUp = () => { };
    options.events.saving = (s,e) => {
        if (this.props.templateData.isTemplate)
        {
          if (this.props.templateData.isNew) {
            fetch('http://localhost:8080/api/createTemplate', {
              method: 'POST',
                    body: JSON.stringify({
                      // eslint-disable-next-line react/prop-types
                      idDoc: this.props.templateData.idTemplate,
                      xmlDoc: e.base64,
                      templateName: this.props.templateData.nameTemplate
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  });
          }else{
            fetch('http://localhost:8080/updateTemplate', {
              method: 'PUT',
                    body: JSON.stringify({
                      // eslint-disable-next-line react/prop-types
                      idDoc: this.props.templateData.idTemplate,
                      xmlDoc: e.base64,
                      templateName: this.props.templateData.nameTemplate
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
             });
          }
        }
    };
    options.events.saved = () => { };
    options.events.selectionChanged = () => { };    
    options.events.customCommandExecuted = (s, e) => {
    switch (e.commandName) {
            case 'insertEmailSignature':
                s.document.insertParagraph(s.document.length);
                s.document.insertText(s.document.length, '_________');
                s.document.insertParagraph(s.document.length);
                s.document.insertText(s.document.length, 'Best regards,');
                s.document.insertParagraph(s.document.length);
                s.document.insertText(s.document.length, 'John Smith');
                s.document.insertParagraph(s.document.length);
                s.document.insertText(s.document.length, 'john@example.com');
                s.document.insertParagraph(s.document.length);
                s.document.insertText(s.document.length, '+1 (818) 844-0000');
                break;
               
             case 'insertText':
                var subDocument = this.rich.selection.activeSubDocument;
                var position = this.rich.selection.active;
                subDocument.insertText(position, 'El cielo es azul y mi equipo ......');
                break;
            
             default:
            }
        };
    
        options.unit = RichEditUnit.Inch;
    
        options.view.viewType = ViewType.PrintLayout;
        options.view.simpleViewSettings.paddings = {
            left: 15,
            top: 15,
            right: 15,
            bottom: 15,
        };
      
        options.readOnly = false;
        options.width = '1400px';
        options.height = '900px';
    
       
        this.rich = create(document.getElementById("richEdit"), options);
    
      
      

      this.rich.openDocument(documentAsBase64,'DocumentName', DocumentFormat.OpenXml);
    }

  render() {
    
    return (
      <div>
         <div id="richEdit"></div>
       </div>
    );
  }
}

export default EditorR;
