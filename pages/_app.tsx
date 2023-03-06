import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'mobx-react'
import { stores } from '@/store/configuration/storeInitializer'


export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider {...stores}>
			<Component {...pageProps} />
		</Provider>
	)
}
