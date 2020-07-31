import Vue from 'vue'
import {
    Button,
    Table,
    Tabs,
    TabPane,
    Split,
    Dropdown,
    DropdownMenu
} from "view-design";
const viewDesign = {
    Button: Button,
    Table: Table,
    Tabs: Tabs,
    TabPane: TabPane,
    Split: Split,
    Dropdown: Dropdown,
    DropdownMenu: DropdownMenu

};
Object.keys(viewDesign).forEach(element => {
    Vue.component(element, viewDesign[element]);
});