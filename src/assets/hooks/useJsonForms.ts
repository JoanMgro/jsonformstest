import { JsonFormsCore, Layout } from "@jsonforms/core";
import { useState } from "react"

import { jsonFormUiSchema as jsonUi,
    jsonFormSchema as jsonSchema,
    jsonFormData as jsonData } from "../lib/json.str.schemas";
import { fakeApi } from "../services/fakeApi";
import { useJsonMiddleware } from "./useJsonMiddleware";


export const useJsonForms = () => {

 const [schema, setSchemas] = useState(jsonSchema);
 const [uiSchema, setUiSchemas] = useState<Layout>(jsonUi[0]);
 const [data, setData] = useState(jsonData);
 const {middleware} = useJsonMiddleware();




 const onInputsChange = (value: Pick<JsonFormsCore, "data" | "errors">) =>{

    console.log(value.data);
    setData(value.data);

  }
  const onChangeSchema = () => {
    setSchemas(schema);
  }

  const onChangeUiSchema = (id: number) => {
    fakeApi(id).then(resp => setUiSchemas(resp.uischema));
    onChangeSchema();
    

    // setUiSchemas(jsonUi[0]);
  }




  return {
    data,
    schema,
    uiSchema,
    onInputsChange,
    onChangeUiSchema,
    middleware,
  }
}