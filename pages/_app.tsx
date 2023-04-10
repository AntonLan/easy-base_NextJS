import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'mobx-react'
import { stores } from '@/store/configuration/storeInitializer'
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider {...stores}>
			<ThemeProvider attribute='class'>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}
