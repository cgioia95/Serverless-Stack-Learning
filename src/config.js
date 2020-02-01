const dev = {
  STRIPE_KEY: "pk_test_VTVM2ErNFAdIlYMwvUD8KlCu00gGQFCmI5",

  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-d1hdhugm2b2u"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://spbje2mce2.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_gn6zSt4NO",
    APP_CLIENT_ID: "3gbeltj5l9rkc2hue7rhadfebv",
    IDENTITY_POOL_ID: "us-east-2:d62d7a43-c7a1-4671-8102-af5b9129dc0f"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_VTVM2ErNFAdIlYMwvUD8KlCu00gGQFCmI5",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1s9l4ja99yz5s"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://6yxskmmsnk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_5469Q7CpW",
    APP_CLIENT_ID: "7glok3n344dsgjsig576t0h357",
    IDENTITY_POOL_ID: "us-east-2:d62d7a43-c7a1-4671-8102-af5b9129dc0f"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
