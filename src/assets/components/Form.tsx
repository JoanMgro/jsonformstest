import { JsonFormsCore, JsonSchema, Layout, Middleware } from "@jsonforms/core"
import { materialCells, materialRenderers } from "@jsonforms/material-renderers"
import { JsonForms } from "@jsonforms/react"




interface Props{
  schema: JsonSchema,
  uischema: Layout,
  data: object,
  onInputsChange: (value: Pick<JsonFormsCore, "data" | "errors">) => void,
  middleware: Middleware,
  
}

export const Form = ({schema, uischema, data, onInputsChange, middleware}: Props) => {
  


  return (
    <div className="w-3/4">

      <JsonForms 
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          middleware={middleware}
          cells={materialCells}
          onChange={({data, errors})=> {
            // console.log(data);
            onInputsChange({data, errors});

          }}
          
          />

    </div>
   
  )
}
