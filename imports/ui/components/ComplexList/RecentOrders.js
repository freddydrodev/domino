import React, { Component } from 'react'

import { paddingRect as padding } from '../../utils/'
import Item from './ComplexListItem'
import Boxer from '../Boxer/Boxer'
import moment from 'moment'

const { Box } = Boxer

export default class RecentOrders extends Component {
    state = {
        recentOrders: [
            {
                id: 'abcdiuoe',
                time: moment().format('ddd Do MMMM YYYY'),
                imgSrc:
                    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                customer: 'Diomande Dro Freddy Junior',
                phone: '+22541203577',
                location: 'Accra, Odokor Glory Land',
                gender: 'Male',
                delivery: false,
                delayed: false,
                total: 100000,
                nbrOfArticle: 12,
                madeBy: 'Ange Kare Dor'
            },
            {
                id: 'abcdidfuoe',
                time: moment().format('ddd Do MMMM YYYY'),
                imgSrc:
                    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                customer: 'Diomande Dro Freddy Junior',
                phone: '+22541203577',
                location: 'Accra, Odokor Glory Land',
                gender: 'Male',
                delivery: false,
                delayed: false,
                total: 100000,
                nbrOfArticle: 12,
                madeBy: 'Ange Kare Dor'
            },
            {
                id: 'abdfuoe',
                time: moment().format('ddd Do MMMM YYYY'),
                imgSrc:
                    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                customer: 'Diomande Dro Freddy Junior',
                phone: '+22541203577',
                location: 'Accra, Odokor Glory Land',
                gender: 'Male',
                delivery: false,
                delayed: false,
                total: 100000,
                nbrOfArticle: 12,
                madeBy: 'Ange Kare Dor'
            },
            {
                id: 'abd89oe',
                time: moment().format('ddd Do MMMM YYYY'),
                imgSrc:
                    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                customer: 'Diomande Dro Freddy Junior',
                phone: '+22541203577',
                location: 'Accra, Odokor Glory Land',
                gender: 'Male',
                delivery: false,
                delayed: false,
                total: 100000,
                nbrOfArticle: 12,
                madeBy: 'Ange Kare Dor'
            },
            {
                id: 'asgjytgeb',
                time: moment().format('ddd Do MMMM YYYY'),
                imgSrc:
                    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                customer: 'Andreas Chimene Cettie Gisele',
                phone: '+22503941078',
                location: 'Cocody St Jean',
                gender: 'Female',
                delivery: true,
                delayed: true,
                total: 50000,
                nbrOfArticle: 30,
                madeBy: 'Ange Kare Dor'
            }
        ]
    }

    render() {
        const className = `complex-list`
        const list = (
            <div className={className}>
                {this.state.recentOrders.map(data => {
                    const header = '#' + data.id
                    const img = data.imgSrc ? data.imgSrc : null
                    const description = (
                        <>
                            {data.phone} {data.location} {data.gender}
                        </>
                    )
                    const options = (
                        <>
                            Delivery: {data.delivery.toString()}, Delayed:{' '}
                            {data.delayed.toString()}, Total:{' '}
                            {data.total.toString()}
                        </>
                    )

                    const attached = data.madeBy ? data.madeBy : null

                    return (
                        <Item
                            key={data.id}
                            header={header}
                            subHeader={data.time}
                            img={data.imgSrc}
                            title={data.customer}
                            description={description}
                            options={options}
                            attached={attached}
                        />
                    )
                })}
            </div>
        )
        return (
            <Box
                padding={padding}
                content={list}
                heading="Recent Orders"
                subHeading="list of the 10 recent ordersmade on the selected shop"
            />
        )
    }
}
