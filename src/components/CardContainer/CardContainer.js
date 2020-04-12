import React from 'react'
import Card from '../Card/Card';
import apiList from '../../consts/apiUrls'


export default function CardContainer() {
    console.log(apiList);
    return (
    <div className="card-container">
        <Card country={apiList.TR_API.country} short={apiList.TR_API.short} api={apiList.TR_API.api} />
        <Card country={apiList.UK_API.country} short={apiList.UK_API.short} api={apiList.UK_API.api} />
        <Card country={apiList.BE_API.country} short={apiList.BE_API.short} api={apiList.BE_API.api} />
        <Card country={apiList.IT_API.country} short={apiList.IT_API.short} api={apiList.IT_API.api} />
        <Card country={apiList.GE_API.country} short={apiList.GE_API.short} api={apiList.GE_API.api} />
        <Card country={apiList.SP_API.country} short={apiList.SP_API.short} api={apiList.SP_API.api} />
    </div>
    );
}
