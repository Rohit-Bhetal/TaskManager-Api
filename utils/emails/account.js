const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SEND_GRID_API);

const sendWelcomeEmailMessage = async (email,name) =>{
    try{
        await sgMail.send({
            to:email,
            from:'budgetasis@gmail.com',
            subject:'Thank you for Joining the Platform',

            text:`Welcome to the app,${name}.Let me know how you get along with the App.`
        });
    }catch(error){
        console.error(error);
    }
}

const sendCancelationEmailMessage = async (email,name) =>{
    try{
        await sgMail.send({
            to:email,
            from:'budgetasis@gmail.com',
            subject:'Sorry to see you go!',
            text:`Goodbye, ${name}.I'd hope to see you back soon.`
        });
    }catch(error){
        console.error(error);
    }
}

module.exports = {sendWelcomeEmailMessage,sendCancelationEmailMessage}