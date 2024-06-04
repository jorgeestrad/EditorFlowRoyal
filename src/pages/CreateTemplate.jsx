import { useState } from 'react';
import EditorR from '../components/EditorR';
import {useSelector, useDispatch} from 'react-redux';
import {setNewTemplate} from '../reducers/templates/templateSlice';

const CreateTemplate = () => {
   const [nameTemplate, setNameTemplate] = useState('');
   const dispatch = useDispatch();
 
    return (
        <form>
            <input
                type = 'text'
                name = 'txtNameTemplate'
                value={nameTemplate}
                onChange={() => {
                    dispatch(setNewTemplate({idTemplate: 1,nameTemplate: ev.target.value,isNew:true,xmlBase64:''}))
                }}

            >
            </input>
            <EditorR />
      </form>
    );
}

export default CreateTemplate;
