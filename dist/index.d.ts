import VuexORMGraphQLPlugin from "./plugin";
import DefaultAdapter from "./adapters/builtin/default-adapter";
import Adapter, { ConnectionMode, ArgumentMode } from "./adapters/adapter";
import Model from "./orm/model";
import QueryBuilder from "./graphql/query-builder";
export default VuexORMGraphQLPlugin;
export { setupTestUtils, mock, clearORMStore, Mock, MockOptions, ReturnValue } from "./test-utils";
export { DefaultAdapter, Adapter, ConnectionMode, ArgumentMode, Model, QueryBuilder };
