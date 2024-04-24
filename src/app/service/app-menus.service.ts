import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class AppMenuService {
	getAppMenus() {
		return [{
			'title': 'Dashboard',
			'url': '/dashboard',
			'icon': 'assets/images/dashboard.svg'
			
		},
		{
			'title': 'Calls',
			'url': '/calls',
			'icon': 'assets/images/phone.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/calls',
				'title': 'Calls Management',
				}, {
				'url': '/login',
				'title': 'login'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'title': 'Challan',
			'url': '/menu',
			'icon': 'assets/images/challan.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/customer',
				'title': 'Create Challan',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'title': 'Inventory',
			'url': '/menu',
			'icon': 'assets/images/inventory.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/inventory',
				'title': 'Inventory Management',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'title': 'Report',
			'url': '/menu',
			'icon': 'assets/images/reports.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/reports',
				'title': 'Current Inventory',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'title': 'Sales',
			'url': '/menu',
			'icon': 'assets/images/sales.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/sales',
				'title': 'Sales Order',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'title': 'Quick links',
			'url': '/quick-links',
			'icon': 'assets/images/quick-links.svg',
		},];

		// {
		// 	'icon': 'fa fa-align-left',
		// 	'title': 'Calls',
		// 	'url': '/calls',
		// 	'img': 'assets/images/phone.svg',
		// 	'caret': 'true',
		// 	'submenu': [{
		// 		'url': '/menu/1',
		// 		'title': 'Menu 1.1',
		// 		'caret': 'true',
		// 		'submenu': [{
		// 			'url': '/menu/1/1',
		// 			'title': 'Menu 2.1',
		// 			'caret': 'true',
		// 			'submenu': [{
		// 				'url': '/menu/1/1/1',
		// 				'title': 'Menu 3.1',
		// 			}, {
		// 				'url': '/menu/1/1/2',
		// 				'title': 'Menu 3.2'
		// 			}]
		// 		}, {
		// 			'url': '/menu/1/2',
		// 			'title': 'Menu 2.2'
		// 		}, {
		// 			'url': '/menu/1/3',
		// 			'title': 'Menu 2.3'
		// 		}]
		// 	}, {
		// 		'url': '/menu/2',
		// 		'title': 'Menu 1.2'
		// 	}, {
		// 		'url': '/menu/3',
		// 		'title': 'Menu 1.3'
		// 	}]
		// },
	}
}