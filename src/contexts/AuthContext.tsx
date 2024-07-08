import {
    useState,
    useContext,
    ReactNode,
    createContext,
    useLayoutEffect,
} from "react";

interface AuthContextType {
    isAuthorized: boolean | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that manages authentication state and provides context
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useLayoutEffect(() => {
        setIsAuthorized(false);
    }, []);

    // Provide AuthContext with current authentication state and methods
    return (
        <AuthContext.Provider value={{ isAuthorized }}>
            {children} {/* Render children components */}
        </AuthContext.Provider>
    );
};

// Custom hook to conveniently access authentication context
export const useAuth = () => {
    const context = useContext(AuthContext); // Get authentication context
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider"); // Throw error if context is undefined
    }
    return context; // Return authentication context
};
