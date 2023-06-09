import React, { useEffect, useState } from 'react';
import SpinnerLoader from '../Shared/SpinnerLoader/SpinnerLoader';
import ChefCard from '../Home/ChefCard/ChefCard';
import { Container, Row } from 'react-bootstrap';
import ChefDetailsHeader from '../Home/ChefDetailsHeader/ChefDetailsHeader';
import './ChefDetails.css'

/*===============================
            Chef Section
 ================================= */

const ChefDetails = () => {
    const [loading, setLoading] = useState(true);
    const [chefDetails, setChefDetails] = useState([])

    useEffect(() => {
        const loadData = async () => {
            const loadedData = await fetch('https://chef-recipe-hunter-server-asg-10.vercel.app/home')
            const data = await loadedData.json()
            // console.log(data);
            setChefDetails(data);
            setLoading(false)
        }
        loadData()
    }, [])
    if (loading) {
        return <SpinnerLoader></SpinnerLoader>
    }
    return (
        <div className='my-3 py-3 my-lg-5 py-lg-5'>
            <ChefDetailsHeader></ChefDetailsHeader>
            <Container >
                <Row className='mx-auto gy-5 justify-content-between'>
                    {
                        chefDetails.map(details => <ChefCard
                            key={details._id}
                            details={details}
                        ></ChefCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetails;