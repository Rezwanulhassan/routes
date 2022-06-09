import loginComponent from "../container/login ";
import CreateContactsComponentact from "../containers/CreateContact ";
import ContactsComponent from "../container/contacts ";
import RegiterComponent from "../containers/Register";




const routes=[
{
    path:"auth/register",
    component:RegisterComponent,
    title:Register
},
{
    path:"/",
    component:loginComponent,
    title:login
},
{
    path:"contacts/create",
    component:CreateContactsComponent,
    title:contacts
},
{
    path:"auth/register",
    component:createContactComponent,
    title:Register
},


]

export default routes;