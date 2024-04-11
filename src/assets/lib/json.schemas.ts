export const jsonFormSchema= 
        {
            type: 'object',
            properties: {
                firstName: {
                    type: 'string',
                    description: 'Please enter your name',
                },
                lastName: {
                type: 'string',
                description: 'Please enter your Lastname',
                },
                sex:{
                    type: 'string',
                    description: 'Please enter your Sex',
                },
            }        
        
        };

export const jsonFormUiSchema = [
    {
        type: 'HorizontalLayout',
        elements: [
            {
            type: 'Control',
            scope: '#/properties/firstName',
            },
            {
            type: 'Control',
            scope: '#/properties/lastName',
            },
        ],
    },
    {
        type: 'HorizontalLayout',
        elements: [
            {
            type: 'Control',
            scope: '#/properties/firstName',
            },
            {
            type: 'Control',
            scope: '#/properties/lastName',
            },
            {
                type: 'Control',
                scope: '#/properties/sex',
            },
        ],
    },

];

export const jsonFormData = 
    {
        firstName: 'Jhon',
        lastName: 'Doe',
        sex: 'male',      
    }