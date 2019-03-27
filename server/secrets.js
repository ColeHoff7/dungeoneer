const secrets = {
    dbUri: "mongodb+srv://dev:dungeoneer@dungeoneer-5jsmy.gcp.mongodb.net/test"
};

export const getSecret = key => secrets[key];