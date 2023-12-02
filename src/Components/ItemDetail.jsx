import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center, Img } from '@chakra-ui/react';
import ItemCount from './ItemCount';

export const ItemDetail = ({ p }) => {

                return (
                    <div key={p.id}>
                        <Center p='1rem'>

                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{p.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{p.description}</Text>
                                    <br />
                                    <Text>{p.price}</Text>
                                    <br />
                                    <Text>{p.stock}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
    )
}