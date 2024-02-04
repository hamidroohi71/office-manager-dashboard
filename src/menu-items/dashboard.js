// assets
import {
  IconDashboard,
  IconCalendarEvent,
  IconBrandProducthunt,
  IconCash,
  IconAxe,
  IconBadgeAd,
  IconUsers,
  IconChess,
  IconApps,
  IconChecklist
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconCalendarEvent,
  IconBrandProducthunt,
  IconCash,
  IconAxe,
  IconBadgeAd,
  IconUsers,
  IconChess,
  IconApps,
  IconChecklist
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'products',
      title: 'Products',
      type: 'item',
      url: '/dashboard/products',
      icon: icons.IconBrandProducthunt,
      breadcrumbs: false
    },
    {
      id: 'projects',
      title: 'Projects',
      type: 'item',
      url: '/dashboard/projects',
      icon: icons.IconApps,
      breadcrumbs: false
    },
    {
      id: 'technical',
      title: 'Technical',
      type: 'item',
      url: '/dashboard/technical',
      icon: icons.IconAxe,
      breadcrumbs: false
    },
    {
      id: 'financial',
      title: 'Financial',
      type: 'item',
      url: '/dashboard/financial',
      icon: icons.IconCash,
      breadcrumbs: false
    },
    {
      id: 'marketing',
      title: 'Marketing',
      type: 'item',
      url: '/dashboard/marketing',
      icon: icons.IconBadgeAd,
      breadcrumbs: false
    },
    {
      id: 'hr',
      title: 'HR',
      type: 'item',
      url: '/dashboard/hr',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'tasks',
      title: 'Tasks',
      type: 'item',
      url: '/dashboard/tasks',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: 'events',
      title: 'Events',
      type: 'item',
      url: '/dashboard/events',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: 'strategy',
      title: 'Strategy',
      type: 'item',
      url: '/dashboard/strategy',
      icon: icons.IconChess,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
