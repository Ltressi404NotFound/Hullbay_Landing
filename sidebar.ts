import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'INTRODUCTION',
            collapsed: false, // Garder ouvert par défaut pour l'accueil
            items: ['introduction/why-hullbay'],
        },
        {
            type: 'category',
            label: 'GETTING STARTED',
            items: [
                'getting-started/requirements',
                'getting-started/quick-install',
                'getting-started/local-development',
                'getting-started/first-project',
            ],
        },
        {
            type: 'category',
            label: 'CORE CONCEPTS',
            items: [
                'core-concepts/projects-nodes-edges',
                {
                    type: 'category',
                    label: 'Node Types',
                    items: [
                        'core-concepts/node-types/container',
                        'core-concepts/node-types/network',
                        'core-concepts/node-types/volume',
                        'core-concepts/node-types/gateway',
                    ],
                },
                'core-concepts/connection-rules',
                'core-concepts/docker-labels',
                'core-concepts/reconciliation',
                'core-concepts/auto-scaling',
            ],
        },
        {
            type: 'category',
            label: 'GUIDES',
            items: [
                'guides/deploy-project',
                'guides/expose-with-gateway',
                'guides/manage-secrets',
                'guides/manage-registries',
                'guides/add-server',
                'guides/delegate-access',
                'guides/enable-mfa',
                'guides/rebuild-from-docker',
                'guides/prune-orphans',
                'guides/troubleshooting',
            ],
        },
        {
            type: 'category',
            label: 'SECURITY',
            items: [
                'security/overview',
                'security/rbac',
                'security/secrets-encryption',
                'security/docker-socket-proxy',
                'security/responsible-disclosure',
            ],
        },
        {
            type: 'category',
            label: 'API REFERENCE',
            items: [
                'api/overview',
                'api/authentication',
                'api/projects',
                'api/nodes-edges',
                'api/reconciler',
                'api/servers',
                'api/registry',
                'api/secrets',
                'api/observability',
                'api/audit-log',
                'api/websocket-events',
            ],
        },
        {
            type: 'category',
            label: 'ARCHITECTURE INTERNE (Dev)',
            items: [
                'internal/architecture',
                'internal/canvas-internals',
                'internal/design-system',
                'internal/real-time-state',
            ],
        },
        {
            type: 'category',
            label: 'CONTRIBUTING',
            items: [
                'contributing/setup',
                'contributing/project-structure',
                'contributing/coding-conventions',
                'contributing/adding-node-type',
                'contributing/testing',
                'contributing/pull-requests',
            ],
        },
        {
            type: 'category',
            label: 'ARCHITECTURE DECISIONS (ADR)',
            items: [
                'adrs/adr-001-swarm-vs-kubernetes',
                'adrs/adr-002-docker-labels-as-truth',
                'adrs/adr-003-docker-socket-proxy',
                'adrs/adr-004-dnsrr-vs-vip',
                'adrs/adr-005-postgres-as-cache',
            ],
        },
        'changelog',
        {
            type: 'category',
            label: 'FAQ',
            items: [
                'faq/general-questions',
                'faq/installation-and-setup',
                'faq/troubleshooting-errors',
                'faq/security-and-compliance',
            ],
        },
    ],
};

export default sidebars;