
import { Form } from "./assets/components/Form";
import { SchemaSelector } from "./assets/components/SchemaSelector";

import { useJsonForms } from "./assets/hooks/useJsonForms";
// import { jsonFormUiSchema as objUi,
//       jsonFormSchema as objSchema,
//       jsonFormData as objData } from "./assets/lib/json.schemas";





export const App = () => {
  // const [schemas, setSchemas] = useState<fakeApiResponse|null>();
  // const [data, setData] = useState();
  const {data, onInputsChange, schema, uiSchema, onChangeUiSchema, middleware} = useJsonForms();


  // const onChange = (value: string) =>{
 
  // fakeApi(value).then(resp => setSchemas({...resp})); 
  // fakeApi(value).then(resp => console.log(resp.schema));   
    
  // }
 
 
  return (
    <div className="flex">
      
      

      <Form 
      schema={schema}
      uischema={uiSchema}
      data={data}
      middleware={middleware}
      onInputsChange={onInputsChange}
      />

    <div className="mt-5">
      <SchemaSelector onOptionChange={onChangeUiSchema}/> 
     
    </div>
      
      
      
    </div>
  )
}
