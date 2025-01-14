import VuexORMGraphQL from "./vuex-orm-graphql";
import { PluginComponents, Plugin } from "@vuex-orm/core/dist/src/plugins/use";
import { Options } from "./support/interfaces";
/**
 * Plugin class. This just provides a static install method for Vuex-ORM and stores the instance of the model
 * within this.instance.
 */
export default class VuexORMGraphQLPlugin implements Plugin {
    /**
     * Contains the instance of VuexORMGraphQL
     */
    static instance: VuexORMGraphQL;
    /**
     * This is called, when VuexORM.install(VuexOrmGraphQL, options) is called.
     *
     * @param {PluginComponents} components The Vuex-ORM Components collection
     * @param {Options} options The options passed to VuexORM.install
     * @returns {VuexORMGraphQL}
     */
    static install(components: PluginComponents, options: Options): VuexORMGraphQL;
}
