import colors from "colors"
import server from "./server";

const port : string = process.env.PORT || "4000";
server.listen(port, ()=>{
    console.log(colors.blue.bold(`Ejecutandose en el puerto: ${port}`));
})