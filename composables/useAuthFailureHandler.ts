export function useAuthFailureHandler() {
    const userSession = useUserSession();

    return () => {
        userSession.clear();

        window.location.href = '/login';
    }
};