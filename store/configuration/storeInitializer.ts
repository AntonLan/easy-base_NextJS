import AuthenticationStore from '@/store/AuthenticationStore'
import UserStore from '@/store/UserStore'
import ModeStore from '@/store/ModeStore'


function initializeStores() {
    return {
        authenticationStore: new AuthenticationStore(),
        userStore: new UserStore(),
        modeStore: new ModeStore()
    };
}

export const stores = initializeStores()
