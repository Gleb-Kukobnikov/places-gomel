import React from 'react';

interface ParameterProps {
    title: string;
    value?: string;
    link?: boolean;
}

const noDataEmoji = <span className="no_data_emoji">&#129335;</span>;

export const Parameter: React.FC<ParameterProps> = ({ title, value, link= false }) => {
    const linkWrapper = link ? (<a href={value} className="link">{value}</a>) : value;

    return (
        <div className="parameter">
            <div className="parameter_title">{title}</div>
            <div className="parameter_value">{!!value ? linkWrapper : noDataEmoji}</div>
        </div>
    );
};
