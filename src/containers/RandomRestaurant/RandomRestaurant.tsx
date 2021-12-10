// LIBRARIES
import React, {useCallback, useState} from 'react';
// RESTAURANTS RAW DATA
import {restaurants} from '../../restaurants';
// STYLES
import './styles.css';
import {Parameter, PhoneNumber} from "../../components";

interface Restaurant {
    name: string;
    num_reviews: string;
    location_string: string;
    ranking: string;
    rating: string;
    price_level: string;
    price?: string | undefined;
    phone?: string;
    website?: string;
    email?: string;
    address_obj?: {
        street1?: string;
    };
    cuisine?: { name: string; }[];
}

const FOOD_EMOJI_START_CODE = 129360;

export const RandomRestaurant: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const getRandomRestaurant = useCallback((): Restaurant => {
        const randomNumber: number = Math.floor(Math.random() * 50);

        return restaurants[randomNumber];
    }, []);

    const handleClick = React.useCallback(() => {
        setLoading(true);

        setRestaurant(getRandomRestaurant());

        setTimeout(() => setLoading(false), 700);
    }, [getRandomRestaurant]);

    const [restaurant, setRestaurant] = useState<Restaurant>(getRandomRestaurant());

    if (loading) return (
        <div className="loader">
            <span>
                {String.fromCodePoint(FOOD_EMOJI_START_CODE + Math.floor(Math.random() * 27))}
            </span>
        </div>
    );

    return (
        <div className="restaurant_wrapper">
            <div className="name">
                <h2>{restaurant.name}</h2>
            </div>

            <div className="price_level">
                {restaurant.price_level}
            </div>

            <div className="parameter">
                <div className="parameter_value">{restaurant.ranking}</div>
            </div>

            <PhoneNumber phone={restaurant.phone} />

            <div className="wrapper">
                <div className="rating">
                    <Parameter title="Отзывы" value={restaurant.num_reviews} />
                    <Parameter title="Рейтинг" value={restaurant.rating} />
                    <Parameter title="Цены" value={restaurant.price} />
                </div>

                <div className="contacts">
                    <Parameter title="Адрес" value={restaurant.address_obj?.street1} />
                    <Parameter title="Сайт" value={restaurant.website} link />
                    <Parameter title="Почта" value={restaurant.email}/>
                </div>
            </div>

            <div className="choose_btn_wrapper">
                <button className="choose_btn" onClick={handleClick}>Хочу ещё</button>
            </div>
        </div>
    );
};
