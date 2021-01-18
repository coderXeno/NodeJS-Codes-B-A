// Validating nested objects
const Joi=require('joi');

const arrayOfStrings=['property1','property2','property3'];
const arrayOfObjects=[{example: 'example1'},{example: 'example2'}];

const userInput={ personalInfo:{
                                    streetAdress: 'YXJ7189',
                                    city: 'Calcutta'
                                    state: 'West Bengal'
                                    pin: '700000'
                                    },
                                    // preferences: arrayOfString}; (execute this if consoling the string array is our target)
                                    preferences: arrayOfObjects};

const personalInfoSchema= Joi.object().keys({ //Creating a schema
    streetAdress: Joi.string().trim().required(),
    city:Joi.string().trim().required(),
    state:Joi.string().trim().length(2).required() //Specifying the details
});

// const preferencesSchema=Joi.array().items(Joi.string());
const preferencesSchema=Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}));
const schema=Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

Joi.valiate(userInput,schema,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})