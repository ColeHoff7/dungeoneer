const secrets = {
    //dbUri: "mongodb+srv://dev:dungeoneer@dungeoneer-5jsmy.gcp.mongodb.net/dungeoneer_dev"
    dbUri: "localhost:27017/dungeoneer_dev"
};

export const getSecret = key => secrets[key];