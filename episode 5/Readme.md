# Best Practices
1. Name your components file starting with capital letter. Header.js
2. Never keep your hardcoded data into your components file, use different folder named utils.
for eg. Keep your static/hardcoded data in constants file inside utils folder

# There are two types of export and imports in react
1. default export-
export default <name of variable>
import <name of variable> from <path>

eg: export default Header
import Header from "./Header"

2. names export
export const <name of variable>
import {name of variable} from "path";

eg: export const Header;
import {Header} from './Header'

# React Hooks
Hooks are normal Javascript utility functions
useState() - Superpowerful state variable
useEffect()

# Reconciliation algorithm (React fiber)
https://github.com/acdlite/react-fiber-architecture