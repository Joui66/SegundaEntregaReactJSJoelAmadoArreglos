import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Img } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import brand from "../img/BatmanAño1.webp";


export const Item = ({ name, description, id, price, stock}) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>
                    <img src={brand} alt=""  width='60px' height='60px'/>
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button>
                        <Link to={`/item/${id}`}>
                            Detalles
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>

    )
}

