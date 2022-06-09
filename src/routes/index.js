import loginComponent from "../container/login ";
import ContactsComponent from "../container/contacts ";
import RegisterComponent from "../containers/Register";
import CreateContactComponent from"../containers/CreateContact";


const routes=[
{
    path:"auth/register",
    component: RegisterComponent,
    title:"Register",
},
{
    path:"/auth/login",
    component:loginComponent,
    title:"login",
},
{
    path:"/",
    component:ContactsComponent,
    title:"contacts",
},
{
    path:"/contacts/create",
    component:CreateContactComponent,
    title:"CreateContact",
},


];

export default routes;