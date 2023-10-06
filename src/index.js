import { handleCommand } from "./command";
import { initEnv } from "./env";
import { responseToAssistant, errorToString } from "./util";

export default {
    async fetch(request, env) {
        console.log(`Recieved request on Counter`)
        initEnv(env)
        try {
            const body = await request.json();
            const command = body.message.text;
            console.log(`Command: ${command}`)
            const reply = await handleCommand(command)
            return responseToAssistant(reply);
        } catch (e) {
            console.error(e);
            return responseToAssistant(errorToString(e));
        }
    },
};

