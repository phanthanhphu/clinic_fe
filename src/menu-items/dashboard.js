import { Home3, Building, Profile2User } from 'iconsax-reactjs';

const icons = {
  navigation: Home3,
  departments: Building,
  users: Profile2User
};

const menuStyles = {
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#333',
    borderRadius: '8px',
    margin: '4px 8px',
    transition: 'background-color 0.2s, color 0.2s',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#1976d2'
    }
  },
  icon: {
    marginRight: '12px',
    fontSize: '24px',
    color: '#666',
    transition: 'color 0.2s'
  },
  iconActive: {
    color: '#1976d2'
  },
  groupTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#1976d2',
    padding: '16px 8px 8px',
    textTransform: 'uppercase'
  }
};

const getDashboardMenu = () => {
  return {
    id: 'group-dashboard',
    title: 'Portal Management',
    icon: icons.navigation,
    type: 'group',
    children: [
      {
        id: 'departments',
        title: 'Departments',
        type: 'item',
        url: '/department-management',
        icon: icons.departments,
        breadcrumbs: false
      },
      {
        id: 'users',
        title: 'Users',
        type: 'item',
        url: '/user-management',
        icon: icons.users,
        breadcrumbs: false
      }
    ]
  };
};

const dashboard = getDashboardMenu();

export default dashboard;
export { getDashboardMenu, menuStyles };
