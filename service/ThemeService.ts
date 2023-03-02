import {ColorModeEnum} from '@/model/ColorModeEnum'

class ThemeService {
    static checkTheme = () => {
        if (localStorage.theme === ColorModeEnum.DARK ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add(ColorModeEnum.DARK)
        } else {
            document.documentElement.classList.remove(ColorModeEnum.DARK)
        }
    }
}

export default ThemeService
