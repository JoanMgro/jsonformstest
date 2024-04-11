
export const jsonFormSchema= 
        {
            "type": "object",
            "properties": {
                "firstName": {
                    "type": "string",
                    "description": "Please enter your name",
                },
                "lastName": {
                "type": "string",
                "description": "Please enter your Lastname",
                },
                "sex": {
                    "type": "string",
                    "enum": ["Male", "Female", "Alien"],
                },
                "age": {
                    "type": "integer",
                    "description": "Please enter your age",
                },
                "year": {
                    "type": "integer",
                },
            }
        }
  

            
export const jsonFormUiSchema = 
    [
        {
        "type": "HorizontalLayout",
        "elements": 
        [
            {
            "type": "Control",
            "scope": '#/properties/firstName',
            },
            {
            "type": "Control",
            "scope": '#/properties/lastName',
            },
        ],
        },
        {
            "type": "HorizontalLayout",
            "elements": 
            [
                {
                "type": "Control",
                "scope": '#/properties/firstName',
                },
                {
                "type": "Control",
                "scope": '#/properties/lastName',
                },
                {
                "type": "Control",
                "scope": '#/properties/sex',
                "options": {
                    "format": "radio"
                }
                },
            ],
            },
            {
                "type": "HorizontalLayout",
                "elements": 
                [
                    {
                    "type": "Control",
                    "scope": '#/properties/firstName',
                    },
                    {
                    "type": "Control",
                    "scope": '#/properties/lastName',
                    },
                    {
                    "type": "Control",
                    "scope": '#/properties/sex',
                    "options": {
                        "format": "radio",
                    }
                    },
                    {
                        "type": "Control",
                        "scope": "#/properties/age",
                    },
                    {
                        "type": "Control",
                        "scope": "#/properties/year",
                        "options": {
                            "readOnly": true,
                        }
                    },
                ],
                },
]


export const jsonFormData =
{
        "firstName": "Jhon",
        "lastName": "Doe",
        "sex": "Male",
        "age": 0,        
}


