import AuthenticationStore from '@/store/AuthenticationStore'
import UserStore from '@/store/UserStore'
import TableStore from '@/store/TableStore'


function initializeStores() {
    return {
        authenticationStore: new AuthenticationStore(),
        userStore: new UserStore(),
        tableStore: new TableStore()
    };
}

export const stores = initializeStores()
