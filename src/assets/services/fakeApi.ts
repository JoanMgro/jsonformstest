import { JsonSchema, Layout } from "@jsonforms/core";

import { jsonFormSchema as jsonSchema,
     jsonFormData as jsonData,
    jsonFormUiSchema as jsonUi } from "../lib/json.str.schemas";


export interface fakeApiResponse{
    schema: JsonSchema,
    uischema: Layout,
    data: object,
}



export const fakeApi = async (id: number) : Promise<fakeApiResponse>  =>{
    
    const response = await new Promise<fakeApiResponse>((resolve, reject) => {
        setTimeout(()=>{
            resolve(
                {
                schema: jsonSchema,
                uischema: jsonUi[id],
                data: jsonData
                })
            reject( new Error('rejected'))}, 250);
        });
    
           
    
    return response;

}
