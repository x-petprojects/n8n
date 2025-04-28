import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class YandexApi implements ICredentialType {
    name = 'yandexApi';

    displayName = 'Yandex API';

    documentationUrl = 'https://yandex.com/dev/id/doc/dg/oauth/';

    genericAuth = true;

    properties: INodeProperties[] = [
        {
            displayName: 'Grant Type',
            name: 'grantType',
            type: 'options',
            options: [
                {
                    name: 'Authorization Code',
                    value: 'authorizationCode',
                },
                {
                    name: 'Client Credentials',
                    value: 'clientCredentials',
                },
            ],
            default: 'authorizationCode',
        },
        {
            displayName: 'Authorization URL',
            name: 'authUrl',
            type: 'string',
            displayOptions: {
                show: {
                    grantType: ['authorizationCode'],
                },
            },
            default: 'https://oauth.yandex.com/authorize',
            required: true,
        },
        {
            displayName: 'Access Token URL',
            name: 'accessTokenUrl',
            type: 'string',
            default: 'https://oauth.yandex.com/token',
            required: true,
        },
        {
            displayName: 'Client ID',
            name: 'clientId',
            type: 'string',
            default: '',
            required: true,
        },
        {
            displayName: 'Client Secret',
            name: 'clientSecret',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
        },
        {
            displayName: 'Scope',
            name: 'scope',
            type: 'string',
            default: '',
            description:
                'Comma-separated list of permissions requested by the application. For example: "login:email".',
        },
        {
            displayName: 'Auth URI Query Parameters',
            name: 'authQueryParameters',
            type: 'string',
            displayOptions: {
                show: {
                    grantType: ['authorizationCode'],
                },
            },
            default: '',
            description:
                'Additional query parameters for the authorization URL, if required.',
            placeholder: 'force_confirm=yes',
        },
        {
            displayName: 'Authentication',
            name: 'authentication',
            type: 'options',
            options: [
                {
                    name: 'Body',
                    value: 'body',
                    description: 'Send credentials in the request body',
                },
                {
                    name: 'Header',
                    value: 'header',
                    description: 'Send credentials as Basic Auth header',
                },
            ],
            default: 'body',
        },
        {
            displayName: 'Ignore SSL Issues (Insecure)',
            name: 'ignoreSSLIssues',
            type: 'boolean',
            default: false,
            doNotInherit: true,
        },
    ];
}
