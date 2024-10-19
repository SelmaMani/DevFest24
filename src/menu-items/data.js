// assets
import { IconTypography, IconPalette, IconReportMoney, IconHomeStats, IconTrendingUp, IconChartHistogram, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconChartHistogram,
    IconReportMoney,
    IconHomeStats
};


const data = {
    id: 'data',
    title: 'Data',
    type: 'group',
    children: [
        {
            id: 'data-tables',
            title: 'Data Tables',
            type: 'collapse',
            icon: icons.IconReportMoney,
            children: [
                {
                    id: 'sales-data',
                    title: 'Sales',
                    type: 'item',
                    url: '/data/sales-data',

                },
                {
                    id: 'budget-data',
                    title: 'Budget',
                    type: 'item',
                    url: '/data/budget-data',
                },
                {
                    id: 'investment-data',
                    title: 'Investment',
                    type: 'item',
                    url: '/data/investment-data',
                },
                {
                    id: 'expenses-data',
                    title: 'Expenses',
                    type: 'item',
                    url: '/data/expenses-data',
                }
            ]
        },
    ]
};

export default data;
