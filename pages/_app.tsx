import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster, resolveValue } from 'react-hot-toast'
import { Inter, Karla } from 'next/font/google'
import { ColorModeScript, ColorModeProvider } from '@chakra-ui/color-mode'
import { AuthContext, AuthContextProvider } from 'context/AuthContext'
import ProtectedRoute from '@/components/Auth/ProtectedRoute'
import { useRouter } from 'next/router'
import { UserDataContext, UserDataContextProvider } from 'context/UserDataContext'
import { useUserDataListener } from '@/hooks/firestore/useUserDataListener'

const inter = Inter({
	weight: ['300', '500', '600', '700'],
	subsets: ['latin'],
	display: 'block',
	variable: '--font-inter',
})

const karla = Karla({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
	display: 'block',
	variable: '--font-karla',
})

const noAuthRequired = ['/', '/sign-in', '/pagelist', '/thanks', '/404', '/updates-and-faq']

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	const {
		selectedConversationId,
		setSelectedConversationId,
		conversations,
		setConversations,
		messages,
		setMessages,
	} = UserDataContextProvider()

	const { user, login, loginWithGoogle, signup, logout, resetPassword } = AuthContextProvider()

	useUserDataListener(
		user,
		selectedConversationId,
		setSelectedConversationId,
		setConversations,
		setMessages
	)

	return (
		<AuthContext.Provider value={{ user, login, loginWithGoogle, signup, logout, resetPassword }}>
			<UserDataContext.Provider
				value={{
					selectedConversationId,
					setSelectedConversationId,
					conversations,
					setConversations,
					messages,
					setMessages,
				}}
			>
				{/* move to another file */}
				<main className={`${karla.variable} ${inter.variable} font-sans`}>
					<style jsx global>{`
						html {
							font-family: ${karla.style.fontFamily};
						}
						#headlessui-portal-root {
							font-family: ${inter.style.fontFamily};
						}
					`}</style>
					<ColorModeProvider>
						<ColorModeScript
							initialColorMode="system"
							key="chakra-ui-no-flash"
							storageKey="chakra-ui-color-mode"
						/>

						{noAuthRequired.includes(router.pathname) ? (
							<Component {...pageProps} />
						) : (
							<ProtectedRoute>
								<Component {...pageProps} />
							</ProtectedRoute>
						)}

						<Toaster
							containerStyle={{
								bottom: 40,
								left: 20,
								right: 20,
							}}
							position="bottom-center"
							gutter={10}
							toastOptions={{
								duration: 2000,
							}}
						>
							{(t) => (
								<div
									style={{
										opacity: t.visible ? 1 : 0,
										transform: t.visible ? 'translatey(0)' : 'translatey(0.75rem)',
										transition: 'all .2s',
									}}
								>
									{resolveValue(t.message, t)}
								</div>
							)}
						</Toaster>
					</ColorModeProvider>
				</main>
			</UserDataContext.Provider>
		</AuthContext.Provider>
	)
}
