import { Button, Table } from "view-design";
const viewDesign = {
 Button: Button,
 Table: Table
};
Object.keys(viewDesign).forEach(element => {
 Vue.component(element, viewDesign[element]);
});