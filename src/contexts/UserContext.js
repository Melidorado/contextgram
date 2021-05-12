import { createContext } from 'react';

const user = createContext({
    saveLoggin: (bool) => console.log(bool),
    loggin: false
}
)

export default user;