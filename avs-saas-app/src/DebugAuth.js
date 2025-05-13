import { useEffect } from "react";
//import { currentSession, currentCredentials } from "aws-amplify/auth";
import { fetchAuthSession }  from "aws-amplify/auth";

const DebugAuth = () => {
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const session = await fetchAuthSession();
                console.log("Auth Session:", session);

                // Get the ID token (JWT)
                //const token = session.tokens?.idToken;
                const token = session.tokens?.idToken?.toString(); // Convert to string

                if (!token) throw new Error("No ID token found");

                console.log("JWT Token:", token);

                //const credentials = await currentCredentials();
                //console.log("Cognito Credentials:", credentials);
            } catch (error) {
                console.error("Error fetching auth details:", error);
            }
        };

        checkAuth();
    }, []);

    return null; // No UI needed, just debugging
};

export default DebugAuth;
