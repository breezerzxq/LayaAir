import { Resource } from "../../resource/Resource"

/**
 * ...
 * @author ...
 */
export class BaseShader extends Resource {
    /**等于bindShader或者null */
    static activeShader: BaseShader|null;
    /**当前绑定的shader */
    static bindShader: BaseShader;

    constructor() {
        super();


    }

}


