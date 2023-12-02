import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ name, description, id, category, price }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                    <Text>{category}</Text>
                    <Text>{price}</Text>
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

export default Item
