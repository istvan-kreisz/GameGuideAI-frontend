import { Infer, create, string, type } from 'superstruct'

const AuthError = type({
	code: string(),
})

type AuthError = Infer<typeof AuthError>

const getErrorMessage = (error: any) => {
	if (error) {
		try {
			const authError = create(error, AuthError)
			const errorParts = authError.code.split('/')
			if (errorParts.length === 2 && errorParts[0] === 'auth') {
				return errorParts[1]
			} else {
				return authError.code
			}
		} catch {
			if (typeof error === 'string') {
				return error
			}
		}
	}
	return undefined
}

export { getErrorMessage }
