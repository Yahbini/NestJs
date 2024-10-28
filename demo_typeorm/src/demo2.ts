import { appDataSource } from "./data_source";

// npx tsx demo1.ts
appDataSource.initialize().then(() => {
    console.log("success");
    
}).catch((e) => {
    console.log(e);
    
})