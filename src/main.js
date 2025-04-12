import plugin from "../plugin.json";
import styles from "./styles/style.scss";


class CodeNoKami {
    async init() {
        // plugin initialization
    }

    async destroy() {
        // plugin clean up
    }
}

if (window.acode) {
    const acodePlugin = new CodeNoKami();
    acode.setPluginInit(
        plugin.id,
        async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            acodePlugin.baseUrl = baseUrl;
            await acodePlugin.init($page, cacheFile, cacheFileUrl);
        }
    );
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}
