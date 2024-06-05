import EditorR from '../components/EditorR';
import {useSelector, useDispatch} from 'react-redux';
import {setNewTemplate} from '../reducers/templates/templateSlice';

const CreateTemplate = () => {
   const dispatch = useDispatch();
   var ntem = '';

   function handleChange(event) {
    
    ntem = event.target.value;

    dispatch(setNewTemplate(
        {
            idTemplate: '1retttttttrree343',
            nameTemplate:ntem,
            isNew:true,
            xmlBase64:''
        }
    ))
  
  }

  const {nameTemplate} = useSelector(state => state.template);
  const {idTemplate}  = useSelector(state => state.template);
  

  console.log('nombre template :' + nameTemplate);
    return (
        <form>
            <input
                type = 'text'
                name = 'txtNameTemplate'
                onChange={handleChange}
            >
            </input>
            <EditorR  templateData = {{nameTemplate : nameTemplate,idTemplate : idTemplate}}/>
      </form>
    );
}


export default CreateTemplate;
