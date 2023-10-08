export const schema = {
    "models": {
        "OfferLater": {
            "name": "OfferLater",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "OfferLaterNo": {
                    "name": "OfferLaterNo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Designation": {
                    "name": "Designation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Salary": {
                    "name": "Salary",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "perTaskorHour": {
                    "name": "perTaskorHour",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "AdditionalConditions": {
                    "name": "AdditionalConditions",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "isSended": {
                    "name": "isSended",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "OfferLaters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "6ef5ed87ed8573693a373fc233667436"
};