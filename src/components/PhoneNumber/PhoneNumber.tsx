import React from 'react';

interface PhoneNumberProps {
    phone?: string;
}

export const PhoneNumber: React.FC<PhoneNumberProps> = ({ phone }) => {
    if (!phone) return (
        <>
            <div>Телефона нет</div>
            <div className="no_data_emoji">&#128542;</div>
        </>
    );

    return (
        <div>
            &#128222;
            <a className="link" href={`tel:${phone}`}>{phone}</a>
        </div>
    );
};
