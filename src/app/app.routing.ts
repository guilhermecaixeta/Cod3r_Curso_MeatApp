import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Route } from "@angular/router";
import { ReviewComponent } from './restaurant-detail/review/review.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderComponent } from './order/order.component';

export const ROUTES: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderComponent },
    {
        path: 'restaurant', children: [
            { path: '', component: RestaurantComponent },
            {
                path: ':id', component: RestaurantDetailComponent, children: [
                    { path: '', redirectTo: 'menu', pathMatch: 'full' },
                    {
                        path: 'menu', component: MenuComponent, children: [
                            { path: 'shopping-cart', component: RestaurantComponent }
                        ]
                    },
                    { path: 'reviews', component: ReviewComponent }
                ]
            },

        ]
    },
];