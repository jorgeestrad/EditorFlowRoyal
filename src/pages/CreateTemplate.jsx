import { useState } from 'react';
import EditorR from '../components/EditorR';

const CreateTemplate = () => {
   const [nameTemplate, setNameTemplate] = useState('');
 
    return (
        <form>
            <input
                type = 'text'
                name = 'txtNameTemplate'
                value={nameTemplate}
                onChange={ev => setNameTemplate(ev.target.value)}
            >
            </input>
            <p>Resultado : {nameTemplate}</p>
            <EditorR 
                templateName = {nameTemplate}
            />
      </form>
    );
}

export default CreateTemplate;
