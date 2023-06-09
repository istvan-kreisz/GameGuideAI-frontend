const useEmulator =
	process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_SIMULATOR === 'true'

export { useEmulator }
