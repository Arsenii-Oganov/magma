/**
 * @generated
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 **/

 /**
 * @flow
 * @relayHash 0da7f49810ab4d170edfb7ec67a3e569
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CheckListItemType = "enum" | "simple" | "string" | "%future added value";
export type PropertyKind = "bool" | "date" | "email" | "enum" | "equipment" | "float" | "gps_location" | "int" | "location" | "range" | "string" | "%future added value";
export type AddWorkOrderCard__workOrderTypeQueryVariables = {|
  workOrderTypeId: string
|};
export type AddWorkOrderCard__workOrderTypeQueryResponse = {|
  +workOrderType: ?{|
    +id: string,
    +name: string,
    +description: ?string,
    +propertyTypes: $ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +type: PropertyKind,
      +index: ?number,
      +stringValue: ?string,
      +intValue: ?number,
      +booleanValue: ?boolean,
      +floatValue: ?number,
      +latitudeValue: ?number,
      +longitudeValue: ?number,
      +rangeFromValue: ?number,
      +rangeToValue: ?number,
      +isEditable: ?boolean,
      +isInstanceProperty: ?boolean,
    |}>,
    +checkListDefinitions: $ReadOnlyArray<?{|
      +id: string,
      +title: string,
      +type: CheckListItemType,
      +index: ?number,
      +helpText: ?string,
      +enumValues: ?string,
    |}>,
  |}
|};
export type AddWorkOrderCard__workOrderTypeQuery = {|
  variables: AddWorkOrderCard__workOrderTypeQueryVariables,
  response: AddWorkOrderCard__workOrderTypeQueryResponse,
|};
*/


/*
query AddWorkOrderCard__workOrderTypeQuery(
  $workOrderTypeId: ID!
) {
  workOrderType(id: $workOrderTypeId) {
    id
    name
    description
    propertyTypes {
      id
      name
      type
      index
      stringValue
      intValue
      booleanValue
      floatValue
      latitudeValue
      longitudeValue
      rangeFromValue
      rangeToValue
      isEditable
      isInstanceProperty
    }
    checkListDefinitions {
      id
      title
      type
      index
      helpText
      enumValues
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "workOrderTypeId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "index",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "workOrderType",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "workOrderTypeId"
      }
    ],
    "concreteType": "WorkOrderType",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "propertyTypes",
        "storageKey": null,
        "args": null,
        "concreteType": "PropertyType",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "stringValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "intValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "booleanValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "floatValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "latitudeValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "longitudeValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rangeFromValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rangeToValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isEditable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isInstanceProperty",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "checkListDefinitions",
        "storageKey": null,
        "args": null,
        "concreteType": "CheckListItemDefinition",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "helpText",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "enumValues",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddWorkOrderCard__workOrderTypeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddWorkOrderCard__workOrderTypeQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AddWorkOrderCard__workOrderTypeQuery",
    "id": null,
    "text": "query AddWorkOrderCard__workOrderTypeQuery(\n  $workOrderTypeId: ID!\n) {\n  workOrderType(id: $workOrderTypeId) {\n    id\n    name\n    description\n    propertyTypes {\n      id\n      name\n      type\n      index\n      stringValue\n      intValue\n      booleanValue\n      floatValue\n      latitudeValue\n      longitudeValue\n      rangeFromValue\n      rangeToValue\n      isEditable\n      isInstanceProperty\n    }\n    checkListDefinitions {\n      id\n      title\n      type\n      index\n      helpText\n      enumValues\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '044e32342062080ad81bb49989f4cc14';
module.exports = node;
