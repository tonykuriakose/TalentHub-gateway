import { config } from "dotenv";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
config();


const app = express();



const userServerUrl = "http://localhost:3001";
const notificationServerUrl = "http://localhost:3003";
const jobServerUrl = "http://localhost:3004";
const profileServerUrl = "http://localhost:3002";
const paymentServerUrl = "http://localhost:3005";
const chatServerUrl = "http://localhost:3006";


const proxyOptions = {
    changeOrigin:true,
    logger:console,
}

app.use("/api/user",createProxyMiddleware({
    target:userServerUrl,
    pathRewrite:(path,req)=>path.replace("/","api/user/"),
    ...proxyOptions,
}));


app.use("/api/notifications",createProxyMiddleware({
    target:notificationServerUrl ,
    pathRewrite: (path,req)=>path.replace("/","/api/notifications"),
    ...proxyOptions,
}));
app.use("/api/jobs",createProxyMiddleware({
    target:jobServerUrl,
    pathRewrite:(path,req)=>path.replace("/","/api/jobs"),
    ...proxyOptions,
}));
app.use("/api/profile",createProxyMiddleware({
    target:profileServerUrl,
    pathRewrite:(path,req)=>path.replace("/","/api/profile"),
    ...proxyOptions,
}));
app.use("/api/payment",createProxyMiddleware({
    target:paymentServerUrl,
    pathRewrite:(path,req)=>path.replace("/","/api/payment"),
    ...proxyOptions,
}));
app.use("/api/chats",createProxyMiddleware({
    target:chatServerUrl,
    pathRewrite:(path,req)=>path.replace("/","/api/chats"),
    ...proxyOptions,
}));




const PORT=process.env.PORT | 8080;
app.listen(PORT,()=>{
    console.log(`Gateway running at ${PORT}`);
    
})


