/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ─── FRONT-END GUIDE ───────────────────────────────────────────────────────
  // For franchisees + BMUs who need to understand the customer-facing product
  frontendSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'frontend/overview',
        'frontend/design-system',
      ],
    },
    {
      type: 'category',
      label: 'Customer Experience',
      collapsed: false,
      items: [
        'frontend/customer-journey',
        'frontend/order-channels',
      ],
    },
    {
      type: 'category',
      label: 'Market Configurations',
      collapsed: false,
      items: [
        'frontend/market-configurations',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'frontend/features/index',
        'frontend/features/kfc-deeplink-universal-link',
        'frontend/features/branch-deeplink',
        'frontend/features/martech',
        'frontend/features/social-sign-in',
        {
          type: 'category',
          label: 'Menu Item Reservation',
          link: { type: 'doc', id: 'frontend/features/menu-item-reservation' },
          collapsed: false,
          items: [
            'frontend/features/menu-item-reservation-japan-christmas',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contentful',
      collapsed: false,
      items: [
        'frontend/contentful/index',
        'frontend/contentful/guide-homepage',
        'frontend/contentful/guide-category',
        'frontend/contentful/guide-product',
        'frontend/contentful/guide-bundles-deals',
        'frontend/contentful/guide-promo',
        'frontend/contentful/guide-cross-sell',
        'frontend/contentful/guide-footer',
        'frontend/contentful/guide-seo',
        'frontend/contentful/guide-translations',
      ],
    },
  ],

  // ─── ADMIN PORTAL GUIDE ────────────────────────────────────────────────────
  // For franchisees + regional office — how to operate Yum Commerce Admin
  adminSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Admin Portal Guide',
          link: { type: 'doc', id: 'admin-portal-guide/index' },
          items: [
            {
              type: 'category',
              label: 'Stores',
              link: { type: 'doc', id: 'admin-portal-guide/stores/index' },
              items: [
                {
                  type: 'category',
                  label: 'Publish History',
                  items: [
                    'admin-portal-guide/stores/1-view-a-stores-publish-history-copy-menu-publish-job-id',
                  ],
                },
                {
                  type: 'category',
                  label: 'Stores',
                  items: [
                    'admin-portal-guide/stores/1-create-a-store',
                    'admin-portal-guide/stores/2-edit-store-details',
                    'admin-portal-guide/stores/3-view-a-stores-menu',
                    'admin-portal-guide/stores/8-add-metafields-to-a-menu',
                    'admin-portal-guide/stores/5-publish-a-menu',
                    'admin-portal-guide/stores/14-item-snooze',
                    'admin-portal-guide/stores/15-view-taxes',
                    'admin-portal-guide/stores/16-pos',
                    'admin-portal-guide/stores/17-view-promotions',
                    'admin-portal-guide/stores/18-viewunassign-a-stores-store-groups',
                    'admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off',
                    'admin-portal-guide/stores/2b-appear-in-search-result-turn-on-or-off',
                    'admin-portal-guide/stores/4-assign-new-menu',
                    'admin-portal-guide/stores/5-edit-patch-list',
                    'admin-portal-guide/stores/6-publish-menu',
                    'admin-portal-guide/stores/7-transfer-patch-list',
                    'admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off',
                  ],
                },
                {
                  type: 'category',
                  label: 'Beneficaries',
                  items: [
                    'admin-portal-guide/stores/1-create-a-beneficiary',
                    'admin-portal-guide/stores/2-editdelete-a-beneficiary',
                    'admin-portal-guide/stores/13-view-a-stores-beneficiaries',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Menus',
              link: { type: 'doc', id: 'admin-portal-guide/menus/index' },
              items: [
                {
                  type: 'category',
                  label: 'Named Prices',
                  items: [
                    'admin-portal-guide/menus/1-create-a-named-price',
                    'admin-portal-guide/menus/2-edit-named-price',
                    'admin-portal-guide/menus/3-delete-named-price',
                  ],
                },
                {
                  type: 'category',
                  label: 'Categories',
                  items: [
                    'admin-portal-guide/menus/1-create-a-category',
                    'admin-portal-guide/menus/2-edit-a-category',
                    'admin-portal-guide/menus/3-copy-a-category',
                    'admin-portal-guide/menus/4-add-metafields-to-a-category',
                    'admin-portal-guide/menus/5-delete-a-category',
                  ],
                },
                {
                  type: 'category',
                  label: 'Patches',
                  items: [
                    'admin-portal-guide/menus/1-create-a-patch',
                    'admin-portal-guide/menus/2-assign-a-patch-add-to-patch-list',
                    'admin-portal-guide/menus/4-edit-a-patch',
                    'admin-portal-guide/menus/5-copy-a-patch',
                    'admin-portal-guide/menus/6-delete-a-patch',
                    'admin-portal-guide/menus/3-assign-a-patch-replace-existing-list',
                  ],
                },
                {
                  type: 'category',
                  label: 'Menus',
                  items: [
                    'admin-portal-guide/menus/5-publish-a-menu',
                    'admin-portal-guide/menus/1-create-a-menu',
                    'admin-portal-guide/menus/2-edit-a-menu',
                    'admin-portal-guide/menus/3-copy-a-menu',
                    'admin-portal-guide/menus/4-assign-a-menu',
                    'admin-portal-guide/menus/6-delete-a-menu',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Products',
              link: { type: 'doc', id: 'admin-portal-guide/products/index' },
              items: [
                {
                  type: 'category',
                  label: 'Products',
                  items: [
                    'admin-portal-guide/products/2-edit-a-product',
                    'admin-portal-guide/products/3-copy-a-product',
                    'admin-portal-guide/products/4-add-metafields-to-a-product',
                    'admin-portal-guide/products/5-add-an-image-to-a-product',
                    'admin-portal-guide/products/6-delete-a-product',
                    'admin-portal-guide/products/1-create-a-product',
                  ],
                },
                {
                  type: 'category',
                  label: 'Options',
                  items: [
                    'admin-portal-guide/products/1-create-an-option',
                    'admin-portal-guide/products/2-edit-an-option',
                    'admin-portal-guide/products/3-copy-an-option',
                    'admin-portal-guide/products/4-delete-an-option',
                  ],
                },
                {
                  type: 'category',
                  label: 'Option Value',
                  items: [
                    'admin-portal-guide/products/1-create-an-option-value',
                    'admin-portal-guide/products/2-edit-an-option-value',
                    'admin-portal-guide/products/4-add-metafields-to-an-option-value',
                    'admin-portal-guide/products/3-copy-an-option-value',
                    'admin-portal-guide/products/5-delete-an-option-value',
                  ],
                },
                {
                  type: 'category',
                  label: 'Slots',
                  items: [
                    'admin-portal-guide/products/1-create-a-slot',
                    'admin-portal-guide/products/2-edit-a-slot',
                    'admin-portal-guide/products/3-copy-a-slot',
                    'admin-portal-guide/products/4-add-metafields-to-a-slot',
                    'admin-portal-guide/products/5-delete-a-slot',
                  ],
                },
                {
                  type: 'category',
                  label: 'Modifier',
                  items: [
                    'admin-portal-guide/products/1-create-a-modifier',
                    'admin-portal-guide/products/2-edit-a-modifier',
                    'admin-portal-guide/products/3-copy-a-modifier',
                    'admin-portal-guide/products/5-edit-item-availability',
                    'admin-portal-guide/products/6-delete-a-modifier',
                    'admin-portal-guide/products/4-add-metafields-to-a-modifier',
                  ],
                },
                {
                  type: 'category',
                  label: 'Weights',
                  items: [
                    'admin-portal-guide/products/1-create-a-weight',
                    'admin-portal-guide/products/2-edit-a-weight',
                    'admin-portal-guide/products/3-copy-a-weight',
                    'admin-portal-guide/products/5-delete-a-weight',
                    'admin-portal-guide/products/4-add-metafields-to-a-weight',
                  ],
                },
                {
                  type: 'category',
                  label: 'Variants',
                  items: [
                    'admin-portal-guide/products/1-edit-a-variant',
                    'admin-portal-guide/products/2-add-metafields-to-a-variant',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Promotions',
              link: { type: 'doc', id: 'admin-portal-guide/promotions/index' },
              items: [
                {
                  type: 'category',
                  label: 'Promotions',
                  items: [
                    'admin-portal-guide/promotions/1-create-a-promotion',
                    'admin-portal-guide/promotions/4-edit-a-promotion',
                    'admin-portal-guide/promotions/5-copy-promotion-id',
                    'admin-portal-guide/promotions/6-copy-promotion',
                    'admin-portal-guide/promotions/7-add-metadata-to-promotion',
                    'admin-portal-guide/promotions/8-archive-a-promotion',
                    'admin-portal-guide/promotions/2-assign-promotions-to-store-groups',
                    'admin-portal-guide/promotions/3-find-serialized-code',
                    'admin-portal-guide/promotions/9-create-serialized-code',
                  ],
                },
                {
                  type: 'category',
                  label: 'Store Groups',
                  items: [
                    'admin-portal-guide/promotions/1-create-a-store-group',
                    'admin-portal-guide/promotions/2-edit-a-store-group',
                    'admin-portal-guide/promotions/3-view-promotions-for-a-store-group',
                    'admin-portal-guide/promotions/4-import-promotions-for-a-store-group',
                    'admin-portal-guide/promotions/5-delete-a-store-group',
                  ],
                },
                {
                  type: 'category',
                  label: 'Advanced Promotions Search',
                  items: [
                    'admin-portal-guide/promotions/1-advanced-promotions-search',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Store Groups',
              link: { type: 'doc', id: 'admin-portal-guide/store-groups/index' },
              items: [
                'admin-portal-guide/store-groups/1-create-a-store-group',
                'admin-portal-guide/store-groups/2-assign-promotions',
                'admin-portal-guide/store-groups/4-edit-a-store-group',
                'admin-portal-guide/store-groups/3-view-stores-in-a-store-group',
                'admin-portal-guide/store-groups/11-import-promotions-for-a-store-group',
                'admin-portal-guide/store-groups/6-delete-a-store-group',
                'admin-portal-guide/store-groups/5-copy-a-store-group',
                {
                  type: 'category',
                  label: 'Store Groups - Taxes',
                  items: [
                    'admin-portal-guide/store-groups/7-create-tax-rules',
                    'admin-portal-guide/store-groups/8-create-tax-rule-group',
                  ],
                },
                {
                  type: 'category',
                  label: 'Store Groups - Promotions',
                  items: [
                    'admin-portal-guide/store-groups/9-edit-promotions',
                    'admin-portal-guide/store-groups/10-unassign-promotions-from-store-group',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'In-Store Devices',
              link: { type: 'doc', id: 'admin-portal-guide/in-store-devices/index' },
              items: [
                'admin-portal-guide/in-store-devices/1-generate-one-time-password',
                'admin-portal-guide/in-store-devices/2-view-in-store-device-details',
                'admin-portal-guide/in-store-devices/3-deactivate-in-store',
              ],
            },
            {
              type: 'category',
              label: 'Bundles',
              link: { type: 'doc', id: 'admin-portal-guide/bundles/index' },
              items: [
                {
                  type: 'category',
                  label: 'Bundles',
                  items: [
                    'admin-portal-guide/bundles/1-create-a-bundle',
                    'admin-portal-guide/bundles/2-edit-a-bundle',
                    'admin-portal-guide/bundles/3-copy-a-bundle',
                    'admin-portal-guide/bundles/4-add-metafields-to-a-bundle',
                    'admin-portal-guide/bundles/5-add-an-image-to-a-bundle',
                    'admin-portal-guide/bundles/6-delete-a-bundle',
                  ],
                },
                {
                  type: 'category',
                  label: 'Choices',
                  items: [
                    'admin-portal-guide/bundles/1-create-a-choice',
                    'admin-portal-guide/bundles/2-edit-a-choice',
                    'admin-portal-guide/bundles/3-copy-a-choice',
                    'admin-portal-guide/bundles/4-delete-a-choice',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Agents',
              link: { type: 'doc', id: 'admin-portal-guide/agents/index' },
              items: [
                'admin-portal-guide/agents/1-create-an-agent',
                'admin-portal-guide/agents/2-edit-an-agent',
              ],
            },
            {
              type: 'category',
              label: 'Customer Support',
              link: { type: 'doc', id: 'admin-portal-guide/customer-support/index' },
              items: [
                {
                  type: 'category',
                  label: 'Orders',
                  items: [
                    'admin-portal-guide/customer-support/1-order-search',
                  ],
                },
                {
                  type: 'category',
                  label: 'Customers',
                  items: [
                    'admin-portal-guide/customer-support/1-customer-search',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  // ─── PLAYBOOKS ─────────────────────────────────────────────────────────────
  // Step-by-step operational guides
  playbooksSidebar: [
    {
      type: 'category',
      label: 'Onboarding',
      collapsed: false,
      items: ['playbooks/onboarding'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: false,
      items: ['playbooks/troubleshooting'],
    },
    {
      type: 'category',
      label: 'Platform Runbook',
      collapsed: false,
      items: ['playbooks/runbook'],
    },
  ],

};

module.exports = sidebars;