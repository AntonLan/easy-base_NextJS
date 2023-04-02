import AuthenticationStore from '@/store/AuthenticationStore'
import UserStore from '@/store/UserStore'


function initializeStores() {
    return {
        authenticationStore: new AuthenticationStore(),
        userStore: new UserStore(),
    };
}

export const stores = initializeStores()
