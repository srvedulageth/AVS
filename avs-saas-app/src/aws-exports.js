const awsExports = {
    Auth: {
	Cognito: {
          userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
          userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
          loginWith: {
	     oauth: {
                domain: import.meta.env.VITE_COGNITO_AUTHENTICATION_DOMAIN,
                scopes: ['openid','email','phone','profile','aws.cognito.signin.user.admin'],
                redirectSignIn: ['https://example.com/'],
                redirectSignOut: ['https://example.com/'],
                responseType: 'code',
	     }
	  },  // ✅ Ensure loginWith exists
          identityPoolId: import.meta.env.VITE_COGNITO_IDENTITY_POOL_ID,
	},
        region: import.meta.env.VITE_COGNITO_REGION,
        authFlowType: 'USER_PASSWORD_AUTH',
        oauth: {
            domain: '',
            scope: [],
            redirectSignIn: '',
            redirectSignOut: '',
            responseType: ''
        }
    },
    Storage: {
	S3: {
            bucket: import.meta.env.VITE_S3_BUCKET_NAME,
            region: import.meta.env.VITE_COGNITO_REGION,
	}
    },
};

export default awsExports;
